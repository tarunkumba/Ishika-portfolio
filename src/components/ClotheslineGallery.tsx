"use client";

import { useState, type CSSProperties } from "react";
import "./ClotheslineGallery.css";

const photos = [
  {
    id: "sticky-notes",
    src: "/assets/img/clothesline/sticky-notes.jpg",
    alt: "Wall covered in colorful sticky notes",
    label: "Research wall",
    style: { left: "4%", top: "18%", rotate: "11deg" },
  },
  {
    id: "grass",
    src: "/assets/img/clothesline/grass-portrait.jpg",
    alt: "Portrait in the grass",
    label: "Field notes",
    style: { left: "22%", top: "34%", rotate: "-7deg" },
  },
  {
    id: "studio",
    src: "/assets/img/clothesline/studio.jpg",
    alt: "Studio workspace",
    label: "Studio",
    style: { left: "41%", top: "46%", rotate: "2deg" },
  },
  {
    id: "red-blue",
    src: "/assets/img/clothesline/red-blue.jpg",
    alt: "Graphic color study",
    label: "Clothesline Gallery",
    style: { left: "60%", top: "32%", rotate: "9deg" },
  },
  {
    id: "flowers",
    src: "/assets/img/clothesline/flowers.jpg",
    alt: "Flowers against a bright window",
    label: "Still life",
    style: { left: "78%", top: "12%", rotate: "-12deg" },
  },
] as const;

function BinderClip() {
  return (
    <svg
      className="clothesline__clip"
      viewBox="0 0 36 44"
      aria-hidden="true"
    >
      <rect
        x="8"
        y="10"
        width="20"
        height="26"
        rx="2.5"
        fill="#c4a574"
        stroke="#8a7349"
        strokeWidth="1"
      />
      <rect
        x="10.5"
        y="12.5"
        width="15"
        height="8"
        rx="1.5"
        fill="#d8be8f"
      />
      <path
        d="M11 14.5 C11 7 25 7 25 14.5"
        fill="none"
        stroke="#b08d55"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12.5 36.5 V40.5 M23.5 36.5 V40.5"
        stroke="#8a7349"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClotheslineGallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      className="clothesline"
      id="work"
      aria-labelledby="clothesline-copy"
    >
      <p className="clothesline__copy" id="clothesline-copy">
        …it&apos;s a messy prototype nobody&apos;s seen yet. This back-and-forth
        between imagining and building is where the real work happens — and
        it&apos;s what keeps things interesting.
      </p>

      <div className="clothesline__stage">
        <svg
          className="clothesline__wire"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 20 48 C 240 48, 360 168, 600 178 C 840 188, 960 72, 1180 40"
            fill="none"
            stroke="rgba(232,232,232,0.88)"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
        </svg>

        <ul className="clothesline__photos">
          {photos.map((photo) => (
            <li
              key={photo.id}
              className={`clothesline__item${active === photo.id ? " is-active" : ""}`}
              style={
                {
                  "--item-left": photo.style.left,
                  "--item-top": photo.style.top,
                  "--item-rotate": photo.style.rotate,
                } as CSSProperties
              }
              onMouseEnter={() => setActive(photo.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(photo.id)}
              onBlur={() => setActive(null)}
            >
              <button
                type="button"
                className="clothesline__frame"
                aria-label={photo.label}
              >
                <BinderClip />
                <span className="clothesline__polaroid">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </span>
                <span
                  className="clothesline__tip"
                  aria-hidden={active !== photo.id}
                >
                  {photo.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
