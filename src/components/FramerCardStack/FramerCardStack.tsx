"use client";

import "./FramerCardStack.css";

/**
 * Framer article card stack (https://bisque-potential-446779.framer.app/).
 * Embedded via iframe so the published code-component / 3D carousel hydrates
 * correctly without fighting the portfolio React tree.
 */
export function FramerCardStack() {
  return (
    <section className="framer-card-stack" aria-label="Featured writing">
      <iframe
        className="framer-card-stack__frame"
        src="https://bisque-potential-446779.framer.app/"
        title="Featured writing"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
