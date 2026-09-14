import React, { Suspense } from "react";

/** Generated from the Framer section "Container".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
import Title from "./Title";
import Title2 from "./Title2";
import Title3 from "./Title3";
import Default from "./Default";
import Default2 from "./Default2";
import Selected from "./Selected";
import Selected2 from "./Selected2";
import Default3 from "./Default3";
import Default4 from "./Default4";
import { copy } from "./copy";

export default function Container() {
  return (
    <div className="framer-r8ye6s" data-framer-name="Container">
      <div className="framer-2yrl1u" data-framer-name="Hero">
        <div className="framer-khxqql" data-framer-name="Title">
          <Title />
          <Title2 />
          <Title3 />
          <div className="framer-3x13hz hidden-vzk4jb hidden-n19bdk" data-framer-name="Mobile disclaimer" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
            <p dir="auto" style={{ "--font-selector": "SW50ZXItTGlnaHQ=", "--framer-font-size": "14px", "--framer-font-weight": "300", "--framer-letter-spacing": "-0.01em", "--framer-text-alignment": "center", "--framer-text-color": "rgb(27, 31, 33)" }} className="framer-text">
              {copy.thisBackgroundEffectWon}
            </p>
          </div>
        </div>
        <div className="framer-mhrd2k" data-border="true" data-framer-name="tabs">
          <Suspense fallback={null}>
            <Default />
            <Default2 />
          </Suspense>
          <Suspense fallback={null}>
            <Selected />
            <Selected2 />
          </Suspense>
          <Suspense fallback={null}>
            <Default3 />
            <Default4 />
          </Suspense>
        </div>
      </div>
      <div className="framer-1fedo92-container">
        <Suspense fallback={null}>
          <div style={{ height: "100%", width: "100%", position: "relative", overflow: "hidden", background: "rgb(235, 221, 202)" }}>
            <canvas style={{ position: "absolute", inset: "0", display: "block", width: "100%", height: "100%", cursor: "none", touchAction: "none" }} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
