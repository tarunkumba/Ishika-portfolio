"use client";

import { useLayoutEffect, useRef, useState } from "react";
import "./FramerCardStack.css";

/** Same-origin proxy of the Framer card stack (patches height + wheel). */
const EMBED_SRC = "/embed/project-cards?v=5";

const CANVAS_W = 1200;
/** Target card width in px — lower scale = smaller on screen */
const CARD_W = 920;
const IFRAME_H = 800;
const SLICE_TOP = 56;
const SLICE_HEIGHT = 560;
const MAX_SCALE = 0.92;

/** Project cards carousel (Framer embed, height + wheel patched). */
export function FramerCardStack() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, offsetX: 0, width: 0 });

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (width < 1) return;
      const scale = Math.min(MAX_SCALE, width / CARD_W);
      const visibleUnscaled = width / scale;
      const offsetX = Math.max(0, (CANVAS_W - visibleUnscaled) / 2);
      setLayout({ scale, offsetX, width });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scale, offsetX, width } = layout;

  return (
    <div className="framer-card-stack">
      <div
        ref={viewportRef}
        className="framer-card-stack__viewport"
        style={{ height: SLICE_HEIGHT * scale }}
      >
        <div
          className="framer-card-stack__window"
          style={{
            width: width || "100%",
            height: SLICE_HEIGHT * scale,
          }}
        >
          <iframe
            className="framer-card-stack__frame"
            src={EMBED_SRC}
            title="Project cards carousel"
            width={CANVAS_W}
            height={IFRAME_H}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              transform: `scale(${scale})`,
              marginTop: -SLICE_TOP,
              marginLeft: -offsetX,
            }}
          />
        </div>
      </div>
    </div>
  );
}
