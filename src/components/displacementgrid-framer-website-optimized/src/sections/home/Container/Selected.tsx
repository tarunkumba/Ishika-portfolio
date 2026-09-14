import React, { Suspense } from "react";

/** Generated from the Framer section "Container (Selected)".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
import { copy } from "./copy";

export default function Selected() {
  return (
    <div className="ssr-variant hidden-1wxqhno">
      <div className="framer-108sb7w-container">
        <Suspense fallback={null}>
          <a className="framer-ryTVy framer-1vf0tn3 framer-v-giucs9 framer-qfn3yv" data-border="true" data-framer-name="selected" href="./" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255, 255, 255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "--corner-shape-fallback": "0.71", backdropFilter: "blur(42px)", background: "linear-gradient(180deg, rgba(237, 241, 245, 0.84) 0%, rgba(218, 221, 227, 0.94) 100%)", backgroundColor: "rgba(0, 0, 0, 0)", cornerShape: "superellipse(1.6)", WebkitBackdropFilter: "blur(42px)", borderBottomLeftRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderBottomRightRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopLeftRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", borderTopRightRadius: "calc(16px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", boxShadow: "inset 0px 0px 9px -3px rgba(255, 255, 255, 0), 0px 0.421531111242075px 0.37937800011786743px -1.5px rgba(0, 0, 0, 0), 0px 1.60197331227042px 1.4417759810433777px -3px rgba(0, 0, 0, 0), 0px 7px 6.299999999999999px -4.5px rgba(0, 0, 0, 0)" }}>
            <div className="framer-jqmtp2" data-framer-name="label">
              <div className="framer-1gf3yvf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(34, 35, 38)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                <p dir="auto" className="framer-text" style={{ "--font-selector": "SW50ZXItTWVkaXVt", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.4px", "--framer-line-height": "16px", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(34, 35, 38))" }}>
                  {copy.example1}
                </p>
              </div>
            </div>
          </a>
        </Suspense>
      </div>
    </div>
  );
}
