"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Briefcase01Icon,
  GameController02Icon,
  Home01Icon,
  Mail01Icon,
  IdCardIcon,
} from "@hugeicons/core-free-icons";
import "./Header.css";

export const copy = {
  home: "Home",
  work: "Work",
  about: "About",
  playground: "Playground",
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
    href: "/about",
    label: copy.about,
    external: false,
    icon: IdCardIcon,
  },
  {
    href: "/playground",
    label: copy.playground,
    external: false,
    icon: GameController02Icon,
  },
  {
    href: "#contact",
    label: copy.contactMe,
    external: false,
    icon: Mail01Icon,
  },
] as const;

export function Header() {
  const pathname = usePathname();
  const pillRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<(typeof links)[number]["href"]>(
    pathname === "/playground"
      ? "/playground"
      : pathname === "/about"
        ? "/about"
        : "#top",
  );

  useEffect(() => {
    setActive(
      pathname === "/playground"
        ? "/playground"
        : pathname === "/about"
          ? "/about"
          : "#top",
    );
  }, [pathname]);

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
          const href =
            link.href === "#top" && pathname !== "/"
              ? "/"
              : link.href.startsWith("#") && pathname !== "/"
                ? `/${link.href}`
                : link.href;

          return (
            <a
              key={link.href}
              href={href}
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
