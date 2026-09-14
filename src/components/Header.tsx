"use client";

import { useCallback, useRef, useState, type MouseEvent } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  Home01Icon,
  Linkedin01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import "./Header.css";

export const copy = {
  home: "Home",
  work: "Work",
  linkedin: "LinkedIn",
  contactMe: "Contact me",
} as const;

const links = [
  {
    href: "#top",
    label: copy.home,
    external: false,
    icon: Home01Icon,
  },
  {
    href: "#work",
    label: copy.work,
    external: false,
    icon: Briefcase01Icon,
  },
  {
    href: "https://www.linkedin.com/",
    label: copy.linkedin,
    external: true,
    icon: Linkedin01Icon,
  },
  {
    href: "#contact",
    label: copy.contactMe,
    external: false,
    icon: Mail01Icon,
  },
] as const;

export function Header() {
  const pillRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<(typeof links)[number]["href"]>(
    links[0].href,
  );

  const onPillMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const pill = pillRef.current;
    if (!pill) return;
    const rect = pill.getBoundingClientRect();
    pill.style.setProperty("--x", `${event.clientX - rect.left}px`);
    pill.style.setProperty("--y", `${event.clientY - rect.top}px`);
    pill.style.setProperty("--opacity", "1");
  }, []);

  const onPillLeave = useCallback(() => {
    pillRef.current?.style.setProperty("--opacity", "0");
  }, []);

  return (
    <nav className="et-navbar" aria-label="Primary">
      <div
        ref={pillRef}
        className="et-navbar__pill"
        onMouseMove={onPillMove}
        onMouseLeave={onPillLeave}
      >
        <div className="et-navbar__neon" aria-hidden="true">
          <div className="neon-glow" />
        </div>

        {links.map((link) => {
          const isActive = !link.external && active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`et-navbar__link${isActive ? " is-active" : ""}`}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { onClick: () => setActive(link.href) })}
            >
              {isActive ? (
                <span className="et-navbar__link-bg" aria-hidden="true" />
              ) : null}
              <span className="et-navbar__link-icon" aria-hidden="true">
                <HugeiconsIcon
                  icon={link.icon}
                  size={15}
                  color="currentColor"
                  strokeWidth={1.8}
                />
              </span>
              <span className="et-navbar__link-text">{link.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
