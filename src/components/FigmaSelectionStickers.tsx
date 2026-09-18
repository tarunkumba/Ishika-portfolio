"use client";

import { InteractiveFrame } from "./InteractiveFrame";
import "./FigmaSelectionStickers.css";

const stickers = [
  {
    id: "figma",
    src: "/assets/img/figma-selection/figma.svg",
    label: "Figma logo frame",
    width: 48,
    height: 72,
    minWidth: 36,
    minHeight: 48,
  },
  {
    id: "arrow",
    src: "/assets/img/figma-selection/arrow.svg",
    label: "Arrow sticker frame",
    width: 86,
    height: 44,
    minWidth: 56,
    minHeight: 28,
  },
] as const;

/** Figma-style selected stickers — drag + resize like design frames */
export function FigmaSelectionStickers() {
  return (
    <div className="figma-stickers">
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          className={`figma-stickers__slot figma-stickers__slot--${sticker.id}`}
        >
          <InteractiveFrame
            variant="sticker"
            className={`figma-stickers__frame figma-stickers__frame--${sticker.id}`}
            aria-label={sticker.label}
            minWidth={sticker.minWidth}
            minHeight={sticker.minHeight}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`figma-stickers__art figma-stickers__art--${sticker.id}`}
              src={sticker.src}
              alt=""
              width={sticker.width}
              height={sticker.height}
              draggable={false}
            />
          </InteractiveFrame>
        </div>
      ))}
    </div>
  );
}
