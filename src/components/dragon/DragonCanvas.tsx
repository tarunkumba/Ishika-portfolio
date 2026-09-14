"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

const MODEL_URL = "/assets/models/dragon-evolved.glb";

const PLAYLIST = [
  "CharacterArmature|Fast_Flying",
  "CharacterArmature|Punch",
  "CharacterArmature|Flying_Idle",
  "CharacterArmature|Headbutt",
  "CharacterArmature|Yes",
  "CharacterArmature|Fast_Flying",
  "CharacterArmature|No",
  "CharacterArmature|HitReact",
  "CharacterArmature|Flying_Idle",
  "CharacterArmature|Death",
] as const;

const HOLD_SECONDS: Partial<Record<(typeof PLAYLIST)[number], number>> = {
  "CharacterArmature|Fast_Flying": 4.2,
  "CharacterArmature|Flying_Idle": 3.0,
};

type Props = {
  active: boolean;
  reducedMotion: boolean;
};

function boostMaterials(root: THREE.Object3D) {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    mesh.frustumCulled = false;

    const source = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const next = source.map((m) => {
      const mat = m.clone() as THREE.MeshStandardMaterial;
      if (mat.color) {
        mat.color.offsetHSL(0, 0.38, 0.18);
        mat.color.multiplyScalar(1.4);
      }
      if ("roughness" in mat) mat.roughness = 0.32;
      if ("metalness" in mat) mat.metalness = 0.05;
      if ("emissive" in mat && mat.color) {
        mat.emissive.set(mat.color).multiplyScalar(0.22);
      }
      mat.needsUpdate = true;
      return mat;
    });
    mesh.material = Array.isArray(mesh.material) ? next : next[0];
  });
}

function DragonModel({
  playing,
  reducedMotion,
}: {
  playing: boolean;
  reducedMotion: boolean;
}) {
  const outer = useRef<THREE.Group>(null);
  const animRoot = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const { scene, animations } = useGLTF(MODEL_URL);

  const cloned = useMemo(() => {
    const next = SkeletonUtils.clone(scene);
    boostMaterials(next);
    return next;
  }, [scene]);

  const { actions, mixer } = useAnimations(animations, animRoot);
  const indexRef = useRef(0);
  const holdUntilRef = useRef(0);
  const currentRef = useRef<string | null>(null);
  const actionsRef = useRef(actions);
  actionsRef.current = actions;

  const playClip = (name: string, fade = 0.22) => {
    const map = actionsRef.current;
    const next = map[name];
    if (!next) return;

    const prev = currentRef.current;
    if (prev && map[prev] && prev !== name) map[prev].fadeOut(fade);

    next.reset().setEffectiveWeight(1).fadeIn(fade).play();
    const hold = HOLD_SECONDS[name as (typeof PLAYLIST)[number]];
    if (hold != null) {
      next.setLoop(THREE.LoopRepeat, Infinity);
      holdUntilRef.current = performance.now() / 1000 + hold;
    } else {
      next.setLoop(THREE.LoopOnce, 1);
      next.clampWhenFinished = true;
      holdUntilRef.current = 0;
    }
    currentRef.current = name;
  };

  const advance = () => {
    indexRef.current = (indexRef.current + 1) % PLAYLIST.length;
    playClip(PLAYLIST[indexRef.current]);
  };

  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    Object.values(actions).forEach((a) => a?.stop());

    if (reducedMotion) {
      const idle = actions["CharacterArmature|Flying_Idle"];
      idle?.reset().play();
      if (idle) idle.paused = true;
      currentRef.current = "CharacterArmature|Flying_Idle";
      return;
    }

    indexRef.current = 0;
    playClip(PLAYLIST[0], 0.3);

    const onFinished = (e: { action: THREE.AnimationAction }) => {
      const finished = Object.entries(actionsRef.current).find(
        ([, a]) => a === e.action,
      )?.[0];
      if (!finished || finished !== currentRef.current) return;
      if (HOLD_SECONDS[finished as (typeof PLAYLIST)[number]] != null) return;
      advance();
    };

    mixer.addEventListener("finished", onFinished);
    return () => mixer.removeEventListener("finished", onFinished);
  }, [actions, mixer, reducedMotion]);

  useFrame((state) => {
    if (!outer.current) return;
    const t = state.clock.elapsedTime;

    if (reducedMotion) {
      outer.current.position.set(2.0, 0.35, 0.5);
    } else if (playing) {
      // Stay in-frame around the hero content
      outer.current.position.set(
        Math.sin(t * 0.32) * 3.4,
        -0.1 + Math.sin(t * 0.48) * 1.05,
        Math.cos(t * 0.32) * 0.9,
      );

      const name = currentRef.current;
      if (
        name &&
        HOLD_SECONDS[name as (typeof PLAYLIST)[number]] != null &&
        holdUntilRef.current > 0 &&
        performance.now() / 1000 >= holdUntilRef.current
      ) {
        holdUntilRef.current = 0;
        advance();
      }
    }

    // Keep the body facing the camera at all times (never show the back).
    // Camera sits on +Z; Quaternius mesh faces +Z at rest — yaw toward camera, no flip.
    const dx = camera.position.x - outer.current.position.x;
    const dz = camera.position.z - outer.current.position.z;
    outer.current.rotation.set(
      reducedMotion || !playing ? 0.08 : 0.08 + Math.sin(t * 1.2) * 0.04,
      Math.atan2(dx, dz),
      0,
    );
  });

  return (
    <group ref={outer} scale={0.2805} dispose={null}>
      <group ref={animRoot}>
        <primitive object={cloned} />
      </group>
    </group>
  );
}

export function DragonCanvas({ active, reducedMotion }: Props) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.4, 8.5], fov: 40, near: 0.1, far: 50 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.65,
      }}
      frameloop="always"
      style={{ background: "transparent", pointerEvents: "none" }}
      onCreated={({ gl, invalidate }) => {
        gl.setClearColor(0x000000, 0);
        gl.outputColorSpace = THREE.SRGBColorSpace;
        invalidate();
      }}
    >
      <ambientLight intensity={1.15} color="#fff8ef" />
      <directionalLight intensity={2.2} position={[2, 5, 10]} color="#ffffff" />
      <directionalLight intensity={1.1} position={[-4, 3, 5]} color="#ffb48a" />
      <pointLight intensity={1.5} position={[0, 1.2, 7]} color="#ffe6d2" distance={22} />
      <hemisphereLight intensity={0.7} color="#ffffff" groundColor="#d2cbbf" />
      <DragonModel
        playing={active && !reducedMotion}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
