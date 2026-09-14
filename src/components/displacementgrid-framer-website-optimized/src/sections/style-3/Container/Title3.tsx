import React, { Suspense } from "react";

/** Generated from the Framer section "Container (Title3)".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
import { copy } from "./copy";

export default function Title3() {
  return (
    <div className="ssr-variant hidden-102thxs hidden-1u2e8sn">
      <div className="framer-2mbem" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
        <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--framer-font-size": "60px", "--framer-font-weight": "300", "--framer-letter-spacing": "-0.04em", "--framer-text-alignment": "center", "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
          {copy.displacementGrid}
        </p>
      </div>
    </div>
  );
}
