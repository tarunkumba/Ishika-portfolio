"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import gsap from "gsap";
import "./PlaygroundCanvas.css";

type NotePosition = "top" | "right" | "bottom" | "left";

type PlaygroundItem = {
  id: string;
  image: string;
  size: number;
  noteText: string;
  notePosition: NotePosition;
  noteBg: string;
  noteColor: string;
  gap: number;
  fontSize: number;
  x: number;
  y: number;
  rotation: number;
  noteOffset: number;
};

const RAW_ITEMS = [
  {
    image: "/assets/img/playground/9034d11b63cd2af8.webp",
    size: 300,
    noteText: "nothing big, still feels nice",
    notePosition: "top" as const,
    noteBg: "#f5dda1",
    noteColor: "#111212",
    gap: -30,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/5980c56c8374aeb5.webp",
    size: 250,
    noteText: "Brain’s messy, but it’s okay",
    notePosition: "bottom" as const,
    noteBg: "#a4e5f8",
    noteColor: "#111212",
    gap: -20,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/fe10d615007d0594.webp",
    size: 150,
    noteText: "Good weather",
    notePosition: "right" as const,
    noteBg: "#a1dfc5",
    noteColor: "#000000",
    gap: -20,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/8f7036013b824802.webp",
    size: 200,
    noteText: "Random shot",
    notePosition: "left" as const,
    noteBg: "#fabed1",
    noteColor: "#111212",
    gap: -50,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/f585d81b1e9c01d8.webp",
    size: 250,
    noteText: "Tiny moments",
    notePosition: "top" as const,
    noteBg: "#f5dda1",
    noteColor: "#111212",
    gap: -20,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/e60d1ad393b6febd.webp",
    size: 400,
    noteText: "Not sure what I’m doing",
    notePosition: "top" as const,
    noteBg: "#a4e5f8",
    noteColor: "#111212",
    gap: -20,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/b462976cbd8472ab.webp",
    size: 200,
    noteText: "bus bus bus",
    notePosition: "left" as const,
    noteBg: "#fabed1",
    noteColor: "#111212",
    gap: -30,
    fontSize: 32,
  },
  {
    image: "/assets/img/playground/bcceb23a31e19f30.webp",
    size: 300,
    noteText: "flower!",
    notePosition: "right" as const,
    noteBg: "#a1dfc5",
    noteColor: "#111212",
    gap: -20,
    fontSize: 32,
  },
] as const;

function layoutItems(): PlaygroundItem[] {
  const cell = Math.max(...RAW_ITEMS.map((item) => item.size)) + 80;
  const cols = Math.ceil(Math.sqrt(RAW_ITEMS.length));
  const rows = Math.ceil(RAW_ITEMS.length / cols);

  return RAW_ITEMS.map((item, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = (col - (cols - 1) / 2) * cell;
    const y = (row - (rows - 1) / 2) * cell;
    const jitter = cell * 0.38;

    return {
      ...item,
      id: `item-${index}`,
      x: x + gsap.utils.random(-jitter, jitter),
      y: y + gsap.utils.random(-jitter, jitter),
      rotation: gsap.utils.random(-8, 8),
      noteOffset: gsap.utils.random(-(item.size ?? 200) * 0.3, (item.size ?? 200) * 0.3),
    };
  });
}

function noteStyle(item: PlaygroundItem): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    padding: "8px 12px",
    background: item.noteBg,
    color: item.noteColor,
    fontSize: item.fontSize,
    fontFamily: "var(--font-playground-hand), cursive",
    whiteSpace: "nowrap",
    pointerEvents: "none",
  };

  const gap = item.gap;

  switch (item.notePosition) {
    case "top":
      return {
        ...base,
        bottom: `calc(100% + ${gap}px)`,
        left: "50%",
        transform: `translate(calc(-50% + ${item.noteOffset}px), 0)`,
      };
    case "bottom":
      return {
        ...base,
        top: `calc(100% + ${gap}px)`,
        left: "50%",
        transform: `translate(calc(-50% + ${item.noteOffset}px), 0)`,
      };
    case "left":
      return {
        ...base,
        right: `calc(100% + ${gap}px)`,
        top: "50%",
        transform: `translate(0, calc(-50% + ${item.noteOffset}px))`,
      };
    case "right":
      return {
        ...base,
        left: `calc(100% + ${gap}px)`,
        top: "50%",
        transform: `translate(0, calc(-50% + ${item.noteOffset}px))`,
      };
  }
}

type DragState = {
  local: { current: { x: number; y: number } };
  lastPos: { x: number; y: number };
  velocity: { x: number; y: number };
};

function PlaygroundCard({
  item,
  canvasDragging,
  activeImageDrag,
}: {
  item: PlaygroundItem;
  canvasDragging: React.MutableRefObject<boolean>;
  activeImageDrag: React.MutableRefObject<DragState | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: item.x, y: item.y });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, {
      x: pos.current.x,
      y: pos.current.y,
      rotation: item.rotation,
    });
  }, [item.rotation]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tick = () => {
      gsap.set(el, { x: pos.current.x, y: pos.current.y });
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (canvasDragging.current) return;
    event.stopPropagation();

    const el = ref.current;
    if (!el) return;

    const velocity = { x: 0, y: 0 };

    activeImageDrag.current = {
      local: pos,
      lastPos: { x: event.clientX, y: event.clientY },
      velocity,
    };

    gsap.killTweensOf(pos.current);
    gsap.killTweensOf(el);
    gsap.to(el, { scale: 1.1, duration: 0.2, ease: "power2.out" });
    el.style.cursor = "grabbing";
    el.style.zIndex = "100";

    const onUp = () => {
      if (activeImageDrag.current?.local !== pos) return;
      activeImageDrag.current = null;
      window.removeEventListener("pointerup", onUp);

      gsap.to(pos.current, {
        x: pos.current.x + velocity.x * 6,
        y: pos.current.y + velocity.y * 6,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(el, { scale: 1, duration: 0.25, ease: "power2.out" });
      el.style.cursor = "grab";
      el.style.zIndex = "";
    };

    window.addEventListener("pointerup", onUp);
  };

  return (
    <div
      ref={ref}
      data-image="true"
      className="playground-canvas__card"
      onPointerDown={onPointerDown}
      onPointerEnter={() => {
        if (canvasDragging.current || activeImageDrag.current) return;
        const el = ref.current;
        if (!el) return;
        gsap.to(el, { scale: 1.1, duration: 0.2, ease: "power2.out" });
      }}
      onPointerLeave={() => {
        if (activeImageDrag.current?.local === pos) return;
        const el = ref.current;
        if (!el) return;
        gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.out" });
      }}
      style={{ width: item.size, height: item.size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt="" draggable={false} />
      <div style={noteStyle(item)}>{item.noteText}</div>
    </div>
  );
}

export function PlaygroundCanvas() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const pan = useRef({ x: 0, y: 0 });
  const scale = useRef(1);
  const panning = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const pinchStart = useRef<number | null>(null);
  const activeImageDrag = useRef<DragState | null>(null);
  const [items, setItems] = useState<PlaygroundItem[]>([]);

  useEffect(() => {
    setItems(layoutItems());
  }, []);

  const zoomAt = useCallback((nextScale: number, originX: number, originY: number) => {
    const world = worldRef.current;
    if (!world) return;
    const clamped = Math.min(1, Math.max(0.5, nextScale));
    const ratio = clamped / scale.current;
    pan.current.x = originX + (pan.current.x - originX) * ratio;
    pan.current.y = originY + (pan.current.y - originY) * ratio;
    scale.current = clamped;
    gsap.to(world, {
      x: pan.current.x,
      y: pan.current.y,
      scale: scale.current,
      duration: 0.25,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const world = worldRef.current;
    const viewport = viewportRef.current;
    if (!world || !viewport) return;

    const onPointerDown = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest("[data-image]")) return;
      panning.current = true;
      lastPointer.current = { x: event.clientX, y: event.clientY };
      viewport.style.cursor = "grabbing";
      gsap.killTweensOf(world);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (panning.current) {
        const dx = (event.clientX - lastPointer.current.x) / scale.current;
        const dy = (event.clientY - lastPointer.current.y) / scale.current;
        lastPointer.current = { x: event.clientX, y: event.clientY };
        pan.current.x += dx * scale.current;
        pan.current.y += dy * scale.current;
        gsap.set(world, { x: pan.current.x, y: pan.current.y });
        return;
      }

      if (activeImageDrag.current) {
        const { local, lastPos, velocity } = activeImageDrag.current;
        const dx = (event.clientX - lastPos.x) / scale.current;
        const dy = (event.clientY - lastPos.y) / scale.current;
        velocity.x = dx;
        velocity.y = dy;
        lastPos.x = event.clientX;
        lastPos.y = event.clientY;
        local.current.x += dx;
        local.current.y += dy;
      }
    };

    const onPointerUp = () => {
      if (!panning.current) return;
      panning.current = false;
      viewport.style.cursor = "grab";
      gsap.to(world, {
        x: pan.current.x,
        y: pan.current.y,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = viewport.getBoundingClientRect();
      zoomAt(
        scale.current + (event.deltaY > 0 ? -0.05 : 0.05),
        event.clientX - rect.left - rect.width / 2,
        event.clientY - rect.top - rect.height / 2,
      );
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 2) return;
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      pinchStart.current = Math.sqrt(dx * dx + dy * dy);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 2 || pinchStart.current === null) return;
      event.preventDefault();
      const dx = event.touches[0].clientX - event.touches[1].clientX;
      const dy = event.touches[0].clientY - event.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const rect = viewport.getBoundingClientRect();
      const midX = (event.touches[0].clientX + event.touches[1].clientX) / 2;
      const midY = (event.touches[0].clientY + event.touches[1].clientY) / 2;
      zoomAt(
        scale.current * (dist / pinchStart.current),
        midX - rect.left - rect.width / 2,
        midY - rect.top - rect.height / 2,
      );
      pinchStart.current = dist;
    };

    const onTouchEnd = () => {
      pinchStart.current = null;
    };

    viewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("touchstart", onTouchStart, { passive: true });
    viewport.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [zoomAt]);

  return (
    <div className="playground-canvas" ref={viewportRef}>
      <div className="playground-canvas__grid" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="playground-paper-grid"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="100"
                x2="100"
                y2="100"
                stroke="#e2e2e2"
                strokeWidth="1"
              />
              <line
                x1="100"
                y1="0"
                x2="100"
                y2="100"
                stroke="#e2e2e2"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#playground-paper-grid)" />
        </svg>
      </div>

      <div className="playground-canvas__world" ref={worldRef}>
        {items.map((item) => (
          <PlaygroundCard
            key={item.id}
            item={item}
            canvasDragging={panning}
            activeImageDrag={activeImageDrag}
          />
        ))}
      </div>
    </div>
  );
}
