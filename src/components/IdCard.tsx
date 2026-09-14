"use client";

import { useCallback, useId, useState } from "react";
import "./IdCard.css";

const EMAIL = "hello@ishika.design";

export function IdCard() {
  const uid = useId().replace(/:/g, "");
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div className="id-card" aria-label="Ishika Dixit ID card">
      <div className="id-card__lanyard" aria-hidden="true">
        <span className="id-card__lanyard-texture" />
        <span className="id-card__lanyard-text">ISHIKA × HOWNOW</span>
      </div>

      <div className="id-card__clip" aria-hidden="true">
        <svg viewBox="0 0 80 90" fill="none">
          <defs>
            <linearGradient id={`${uid}-chrome-3d`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="12%" stopColor="#d8d8d8" />
              <stop offset="42%" stopColor="#606060" />
              <stop offset="55%" stopColor="#f5f5f5" />
              <stop offset="85%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#484848" />
            </linearGradient>
            <linearGradient id={`${uid}-chrome-metal`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#c5c5c5" />
              <stop offset="50%" stopColor="#555555" />
              <stop offset="72%" stopColor="#eaeaea" />
              <stop offset="100%" stopColor="#383838" />
            </linearGradient>
            <linearGradient id={`${uid}-chrome-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#888888" />
              <stop offset="50%" stopColor="#383838" />
              <stop offset="100%" stopColor="#181818" />
            </linearGradient>
          </defs>
          <path
            d="M 12 10 C 12 5, 68 5, 68 10 L 65 18 C 65 21, 15 21, 15 18 Z"
            fill={`url(#${uid}-chrome-metal)`}
          />
          <rect x="18" y="10" width="44" height="5" rx="2" fill="#0d0d0d" opacity="0.65" />
          <rect
            x="34"
            y="18"
            width="12"
            height="14"
            rx="2"
            fill={`url(#${uid}-chrome-metal)`}
          />
          <ellipse cx="40" cy="32" rx="10" ry="3" fill={`url(#${uid}-chrome-metal)`} />
          <line
            x1="40"
            y1="32"
            x2="49"
            y2="58"
            stroke={`url(#${uid}-chrome-dark)`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 40 32 C 27 32, 25 43, 25 56 C 25 68, 32 70, 40 70"
            stroke={`url(#${uid}-chrome-3d)`}
            strokeWidth="6.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="40" cy="25" r="2.5" fill={`url(#${uid}-chrome-dark)`} />
        </svg>
      </div>

      <div className="id-card__body">
        <div className="id-card__bg" aria-hidden="true" />

        <span className="id-card__hole" aria-hidden="true" />

        <div className="id-card__header">
          <span>DESIGNER PASS</span>
          <span>ID CARD</span>
        </div>

        <div className="id-card__main">
          <p className="id-card__name">Ishika Dixit</p>
          <div className="id-card__divider" />
          <p className="id-card__role">Product Designer</p>
        </div>

        <div className="id-card__meta">
          <div>
            <span className="id-card__meta-label">Location</span>
            <span className="id-card__meta-value">Mumbai</span>
          </div>
          <div>
            <span className="id-card__meta-label">Team</span>
            <span className="id-card__meta-value">HowNow</span>
          </div>
        </div>

        <button
          type="button"
          className="id-card__email"
          onClick={copyEmail}
          aria-label={copied ? "Email copied" : `Copy ${EMAIL}`}
        >
          <span className="id-card__meta-label">Email</span>
          <span className="id-card__email-row">
            <span>{copied ? "Copied!" : EMAIL}</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </span>
        </button>

        <div className="id-card__footer">
          <span className="id-card__footer-mark" aria-hidden="true">
            ID
          </span>
          <div>
            <span className="id-card__brand">Ishika</span>
            <span className="id-card__brand-sub">HowNow</span>
          </div>
        </div>
      </div>
    </div>
  );
}
