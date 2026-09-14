"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { InteractiveFrame } from "./InteractiveFrame";
import "./NudgeHero.css";

function CursorMark({
  fill,
  className,
  style,
}: {
  fill: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 28 26"
      width={28}
      height={26}
      aria-hidden="true"
    >
      <path
        d="M 0 0 L 12 26 L 14 13 L 28 9.5 Z"
        fill={fill}
        stroke="#111212"
        strokeWidth="2"
      />
    </svg>
  );
}

type NudgeChipProps = {
  className: string;
  label: string;
  cursor: ReactNode;
  repel?: boolean;
};

function NudgeChip({ className, label, cursor, repel = false }: NudgeChipProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const raf = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!repel) return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const threshold = 220;
    const strength = 42;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - event.clientX;
      const dy = cy - event.clientY;
      const dist = Math.hypot(dx, dy);

      if (dist < threshold && dist > 0.001) {
        const force = ((threshold - dist) / threshold) * strength;
        target.current = {
          x: (dx / dist) * force,
          y: (dy / dist) * force,
        };
      } else {
        target.current = { x: 0, y: 0 };
      }
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) / 10;
      current.current.y += (target.current.y - current.current.y) / 10;
      el.style.setProperty("--repel-x", `${current.current.x.toFixed(2)}px`);
      el.style.setProperty("--repel-y", `${current.current.y.toFixed(2)}px`);
      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.cancelAnimationFrame(raf.current);
      el.style.removeProperty("--repel-x");
      el.style.removeProperty("--repel-y");
    };
  }, [repel]);

  return (
    <span ref={ref} className={`nudge-hero__chip ${className}`} aria-hidden="true">
      {cursor}
      <span className="nudge-hero__chip-label">{label}</span>
    </span>
  );
}

export function NudgeHero() {
  return (
    <div className="nudge-hero">
      <div className="nudge-hero__content">
        <div className="nudge-hero__identity">
          <div className="nudge-hero__eyebrow-wrap">
            <p className="nudge-hero__eyebrow">my name is</p>
            <span className="nudge-hero__eyebrow-rule" aria-hidden="true" />
          </div>

          <div className="nudge-hero__name-wrap">
            <InteractiveFrame
              surfaceClassName="nudge-hero__name-box"
              aria-label="Ishika name frame"
            >
              <h1 className="nudge-hero__name" id="intro-heading">
                Ishika
              </h1>
            </InteractiveFrame>

            <span className="nudge-hero__tag nudge-hero__tag--current">
              Currently at{" "}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="nudge-hero__tag-hownow"
                src="https://cdn.prod.website-files.com/646bb0b0d48c3722bf621e02/64818a0a5e3f2aa7627d64fb_Mask%20group.webp"
                alt="HowNow"
                width={1009}
                height={251}
              />
            </span>
          </div>

          <p className="nudge-hero__available">
            <span className="nudge-hero__dot" aria-hidden="true" />
            Curious about what’s next
          </p>
        </div>

        <div className="nudge-hero__lower">
          <p className="nudge-hero__lede">
            I build{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="nudge-hero__inline"
              src="/assets/img/nudge/5d8fa1f66a1e6dd3.webp"
              alt=""
              width={48}
              height={48}
            />{" "}
            digital products with care,{" "}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="nudge-hero__inline nudge-hero__inline--spin"
              src="/assets/img/nudge/04905598dd8a5130.svg"
              alt=""
              width={40}
              height={40}
            />{" "}
            clarity, and craft.
          </p>

          <div className="nudge-hero__actions">
            <NudgeChip
              className="nudge-hero__chip--role"
              label="Product designer"
              repel
              cursor={
                <CursorMark
                  className="nudge-hero__chip-cursor nudge-hero__chip-cursor--role"
                  fill="#ecb22e"
                />
              }
            />

            <NudgeChip
              className="nudge-hero__chip--place"
              label="Mumbai"
              repel
              cursor={
                <CursorMark
                  className="nudge-hero__chip-cursor nudge-hero__chip-cursor--place"
                  fill="#e01e5a"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
