import React, { Suspense } from "react";

/** Generated from the Framer section "Container (Title)".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
import { copy } from "./copy";

export default function Title() {
  return (
    <div className="ssr-variant hidden-n19bdk hidden-165yzti">
      <div className="framer-1eimq3m" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
        <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--framer-font-size": "73px", "--framer-font-weight": "300", "--framer-letter-spacing": "-0.04em", "--framer-text-alignment": "center", "--framer-text-color": "rgb(9, 31, 51)" }} className="framer-text">
          {copy.displacementGrid}
        </p>
      </div>
    </div>
  );
}
