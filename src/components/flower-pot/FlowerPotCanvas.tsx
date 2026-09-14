"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const MODEL_URL = "/assets/models/hanging-flower-pot.glb";

/** World-space height of the hanging plant (chain tip → vines). */
const PLANT_HEIGHT = 1.64;

const PALETTE = [
  "#5c5854", // chain — darker so the cable reads clearly
  "#c46b45",
  "#5c4030",
  "#3f8f4a",
  "#f2a0c0",
  "#f5d76e",
  "#e86b9a",
  "#f7e08a",
  "#ff8fb8",
  "#ffe08a",
];

type Props = {
  active: boolean;
  reducedMotion: boolean;
};

function colorize(root: THREE.Object3D) {
  let i = 0;
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh || !mesh.material) return;
    mesh.frustumCulled = false;

    const source = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const next = source.map((m) => {
      const mat = (m as THREE.MeshStandardMaterial).clone();
      const hex = PALETTE[i % PALETTE.length];
      const isChain = (m.name || "").toLowerCase().includes("chain") || i === 0;
      i += 1;
      mat.color = new THREE.Color(hex);
      mat.roughness = isChain ? 0.32 : 0.58;
      mat.metalness = isChain ? 0.75 : 0.06;
      mat.emissive = new THREE.Color(hex).multiplyScalar(isChain ? 0.02 : 0.05);
      mat.needsUpdate = true;
      return mat;
    });
    mesh.material = Array.isArray(mesh.material) ? next : next[0];
  });
}

/** Keeps chain tip flush with the top of the canvas; full cable stays in view. */
function HangCamera() {
  const { camera, size } = useThree();

  useLayoutEffect(() => {
    if (!(camera instanceof THREE.OrthographicCamera)) return;
    // Tip at y=0 must sit on the top edge — only pad below the plant
    const padBottom = 0.05;
    const viewH = PLANT_HEIGHT + padBottom;
    camera.zoom = size.height / viewH;
    const cy = -viewH / 2; // top of frustum = 0 = chain tip
    camera.position.set(0.4, cy, 10);
    camera.near = 0.1;
    camera.far = 40;
    camera.lookAt(0.02, cy, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.height, size.width]);

  return null;
}

function PotModel({
  playing,
  reducedMotion,
}: {
  playing: boolean;
  reducedMotion: boolean;
}) {
  const pivot = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  const prepared = useMemo(() => {
    const next = scene.clone(true);
    colorize(next);
    const box = new THREE.Box3().setFromObject(next);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    // Chain tip sits at local y = 0; plant hangs downward
    next.position.set(-center.x, -box.max.y, -center.z);
    return { object: next, height: Math.max(size.y, 0.01) };
  }, [scene]);

  const scale = PLANT_HEIGHT / prepared.height;

  useFrame((state) => {
    if (!pivot.current) return;
    // Soft pendulum from the suspension point (tip stays put)
    if (reducedMotion || !playing) {
      pivot.current.rotation.set(0.03, 0.12, 0.015);
      return;
    }
    const t = state.clock.elapsedTime;
    pivot.current.rotation.z = Math.sin(t * 0.65) * 0.055;
    pivot.current.rotation.x = 0.03 + Math.sin(t * 0.4) * 0.02;
    pivot.current.rotation.y = 0.12 + Math.sin(t * 0.22) * 0.03;
  });

  return (
    <group ref={pivot} position={[0, 0, 0]} scale={scale}>
      <primitive object={prepared.object} />
    </group>
  );
}

export function FlowerPotCanvas({ active, reducedMotion }: Props) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      orthographic
      camera={{ position: [0.42, -1, 10], zoom: 120, near: 0.1, far: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
      frameloop={active ? "always" : "never"}
      style={{ background: "transparent", pointerEvents: "none" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      <HangCamera />
      <ambientLight intensity={1.05} />
      <directionalLight intensity={1.65} position={[2, 3, 5]} />
      <directionalLight intensity={0.5} position={[-2, 1, 2]} color="#ffd2a8" />
      <hemisphereLight intensity={0.45} color="#ffffff" groundColor="#cfc7bc" />
      <PotModel
        playing={active && !reducedMotion}
        reducedMotion={reducedMotion}
      />
    </Canvas>
  );
}

useGLTF.preload(MODEL_URL);
