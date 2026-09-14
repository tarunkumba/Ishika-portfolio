"use client";

import { useEffect, useRef } from "react";
import "./DisplacementGrid.css";

type Props = {
  className?: string;
  spacing?: number;
  radius?: number;
  strength?: number;
  /** Stroke width for grid lines */
  lineWidth?: number;
  /** @deprecated use lineWidth — kept for call-site compatibility */
  dotSize?: number;
  background?: string;
  /** Grid line color */
  lineColor?: string;
  /** @deprecated use lineColor — kept for call-site compatibility */
  dotColor?: string;
};

/**
 * Displacement grid mesh — same spring / cursor repulsion as before,
 * rendered as a connected line grid instead of dots.
 */
export function DisplacementGrid({
  className = "",
  spacing = 28,
  radius = 160,
  strength = 48,
  lineWidth,
  dotSize = 0.7,
  background = "#ffffff",
  lineColor,
  dotColor = "rgba(28, 24, 20, 0.065)",
}: Props) {
  const strokeWidth = lineWidth ?? Math.max(0.45, dotSize * 0.55);
  const strokeColor = lineColor ?? dotColor;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let cols = 0;
    let rows = 0;
    // restX, restY, x, y, vx, vy — 6 floats per point
    let points: Float32Array | null = null;
    let reduced = false;
    let start = performance.now();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const syncReduced = () => {
      reduced = prefersReduced.matches;
    };
    syncReduced();
    prefersReduced.addEventListener("change", syncReduced);

    const rebuild = () => {
      cols = Math.ceil(width / spacing) + 3;
      rows = Math.ceil(height / spacing) + 3;
      points = new Float32Array(cols * rows * 6);
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const i = (y * cols + x) * 6;
          const rx = offsetX + x * spacing;
          const ry = offsetY + y * spacing;
          points[i] = rx;
          points[i + 1] = ry;
          points[i + 2] = rx;
          points[i + 3] = ry;
          points[i + 4] = 0;
          points[i + 5] = 0;
        }
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rebuild();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < -40 || y < -40 || x > rect.width + 40 || y > rect.height + 40) {
        mouse.tx = -9999;
        mouse.ty = -9999;
        return;
      }
      mouse.tx = x;
      mouse.ty = y;
    };

    const onPointerLeave = () => {
      mouse.tx = -9999;
      mouse.ty = -9999;
    };

    const pointAt = (x: number, y: number) => {
      const i = (y * cols + x) * 6;
      return { x: points![i + 2], y: points![i + 3] };
    };

    const draw = (now: number) => {
      if (!points) {
        raf = window.requestAnimationFrame(draw);
        return;
      }

      const t = (now - start) / 1000;
      mouse.x += (mouse.tx - mouse.x) * (reduced ? 1 : 0.18);
      mouse.y += (mouse.ty - mouse.y) * (reduced ? 1 : 0.18);

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      const spring = reduced ? 1 : 0.12;
      const damp = reduced ? 0 : 0.78;
      const hasMouse = mouse.x > -500;

      // Physics pass
      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const i = (y * cols + x) * 6;
          const restX = points[i];
          const restY = points[i + 1];
          let px = points[i + 2];
          let py = points[i + 3];
          let vx = points[i + 4];
          let vy = points[i + 5];

          let targetX = restX;
          let targetY = restY;

          if (!reduced) {
            targetX += Math.sin(t * 0.7 + restY * 0.02) * 1.2;
            targetY += Math.cos(t * 0.55 + restX * 0.018) * 1.2;
          }

          if (hasMouse) {
            const dx = restX - mouse.x;
            const dy = restY - mouse.y;
            const dist = Math.hypot(dx, dy) || 0.0001;
            if (dist < radius) {
              const force = (1 - dist / radius) ** 2;
              const push = force * strength;
              targetX += (dx / dist) * push;
              targetY += (dy / dist) * push;
            }
          }

          const ax = (targetX - px) * spring;
          const ay = (targetY - py) * spring;
          vx = (vx + ax) * damp;
          vy = (vy + ay) * damp;
          px += vx;
          py += vy;

          points[i + 2] = px;
          points[i + 3] = py;
          points[i + 4] = vx;
          points[i + 5] = vy;
        }
      }

      // Draw connected grid lines
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = strokeColor;

      // Horizontal edges
      for (let y = 0; y < rows; y += 1) {
        ctx.beginPath();
        for (let x = 0; x < cols; x += 1) {
          const p = pointAt(x, y);
          if (x === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Vertical edges
      for (let x = 0; x < cols; x += 1) {
        ctx.beginPath();
        for (let y = 0; y < rows; y += 1) {
          const p = pointAt(x, y);
          if (y === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      raf = window.requestAnimationFrame(draw);
    };

    resize();
    raf = window.requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      prefersReduced.removeEventListener("change", syncReduced);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        onPointerLeave,
      );
      window.removeEventListener("resize", resize);
    };
  }, [background, radius, spacing, strength, strokeColor, strokeWidth]);

  return (
    <div
      ref={wrapRef}
      className={`displacement-grid ${className}`.trim()}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
