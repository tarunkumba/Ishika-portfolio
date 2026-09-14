import React, { Suspense } from "react";

/** Generated from the Framer section "Container (Title)".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
import { copy } from "./copy";

export default function Title() {
  return (
    <div className="ssr-variant hidden-1wxqhno hidden-dywa2a">
      <div className="framer-1c72in5" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
        <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--framer-font-size": "73px", "--framer-font-weight": "300", "--framer-letter-spacing": "-0.04em", "--framer-text-alignment": "center", "--framer-text-color": "rgb(255, 255, 255)" }} className="framer-text">
          {copy.displacementGrid}
        </p>
      </div>
    </div>
  );
}
