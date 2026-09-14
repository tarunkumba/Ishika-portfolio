"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  File01Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import "./Footer.css";

const EMAIL = "hello@ishika.design";
const LINKEDIN = "https://www.linkedin.com/";
const CV = "#cv";

function Eye() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let alive = true;
    const onMove = (event: MouseEvent) => {
      const el = trackRef.current;
      if (!alive || !el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.min(10, Math.hypot(dx, dy));
      const angle = Math.atan2(dy, dx);
      setOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      alive = false;
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="site-footer__eye">
      <div className="site-footer__socket" />
      <div className="site-footer__track">
        <div
          ref={trackRef}
          className="site-footer__follow"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <div className="site-footer__iris">
            <span className="site-footer__glint" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Eyes() {
  return (
    <div className="site-footer__eyes" aria-hidden="true">
      <div className="site-footer__eyes-pair">
        <Eye />
        <Eye />
      </div>
    </div>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__cap" aria-hidden="true" />

      <div className="site-footer__inner">
        <Eyes />

        <div className="site-footer__row">
          <p className="site-footer__connect">
            Let&apos;s connect.
            <br />
            I&apos;m always down for a chat.
          </p>

          <div className="site-footer__actions">
            <button
              type="button"
              className="site-footer__btn"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : `Copy ${EMAIL}`}
              title={copied ? "Copied!" : EMAIL}
            >
              <HugeiconsIcon
                icon={Mail01Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.8}
              />
            </button>
            <a
              className="site-footer__btn"
              href={CV}
              aria-label="View CV"
            >
              <HugeiconsIcon
                icon={File01Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.8}
              />
            </a>
            <a
              className="site-footer__btn"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <HugeiconsIcon
                icon={Linkedin01Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="site-footer__name"
          onClick={copyEmail}
          aria-label={`Copy ${EMAIL}`}
        >
          Ishika Dixit
        </button>

        <div className="site-footer__meta">
          <p>© 2026 Ishika Dixit</p>
          <p>Built with love</p>
        </div>
      </div>
    </footer>
  );
}
