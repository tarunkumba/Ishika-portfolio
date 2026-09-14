"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import "./HangingFlowerPot.css";

const FlowerPotCanvas = dynamic(
  () => import("./flower-pot/FlowerPotCanvas").then((m) => m.FlowerPotCanvas),
  { ssr: false, loading: () => null },
);

export function HangingFlowerPot() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current?.closest("section.intro") ?? rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0, rootMargin: "20% 0px" },
    );
    io.observe(el);
    setActive(true);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="hanging-flower-pot"
      aria-hidden="true"
    >
      <FlowerPotCanvas active={active} reducedMotion={reducedMotion} />
    </div>
  );
}
