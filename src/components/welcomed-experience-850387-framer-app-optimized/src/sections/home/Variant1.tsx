import React, { Suspense } from "react";

/** Generated from the Framer section "Variant 1".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
export default function Variant1() {
  return (
    <div className="framer-GPK9l framer-jUpbu framer-1j9jlvy framer-v-1j9jlvy" data-framer-name="Variant 1" style={{ backgroundColor: "rgb(227, 227, 227)", height: "100%", width: "100%" }}>
      <div className="framer-1rn3b3j-container">
        <Suspense fallback={null}>
          <div style={{ width: "100%", height: "100%", minWidth: "100px", minHeight: "100px", position: "relative", cursor: "grab", background: "transparent" }} />
        </Suspense>
      </div>
      <div className="framer-ibi2nw" style={{ backgroundColor: "rgb(51, 51, 51)", borderBottomLeftRadius: "31px", borderBottomRightRadius: "31px", borderTopLeftRadius: "31px", borderTopRightRadius: "31px", transform: "translateX(-50%)" }}>
        <div className="framer-85pv92">
          <div className="framer-o8yuzo-container">
            <div className="framer-R6Cvs framer-xqczfw framer-v-xqczfw" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
              <div className="framer-1k1eq2f" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aXhGu1YO7-rSrHfoYcq)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aXhGu1YO7-rSrHfoYcq": "rgb(0, 0, 0)", transform: "none" }}>
                <p dir="auto" className="framer-text" style={{ "--framer-letter-spacing": "-0.02em", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aXhGu1YO7-rSrHfoYcq))" }}>
                  {"Videos"}
                </p>
              </div>
            </div>
          </div>
          <div className="framer-pkz3jb-container">
            <div className="framer-R6Cvs framer-xqczfw framer-v-xqczfw" data-framer-name="Variant 1" data-highlight="true" tabIndex={0} style={{ backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
              <div className="framer-1k1eq2f" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aXhGu1YO7-rSrHfoYcq)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aXhGu1YO7-rSrHfoYcq": "rgb(255, 255, 255)", transform: "none" }}>
                <p dir="auto" className="framer-text" style={{ "--framer-letter-spacing": "-0.02em", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aXhGu1YO7-rSrHfoYcq))" }}>
                  {"Images"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-1co51mn" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "rgb(184, 184, 184)", "--extracted-3sq8v0": "rgb(255, 255, 255)", "--extracted-c9yw3e": "rgb(184, 184, 184)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
          <p className="framer-text framer-styles-preset-1xflcen" data-styles-preset="yVHvvWyQQ" dir="auto">
            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, rgb(184, 184, 184))" }}>
              {"This component supports Images and Videos, and you can also add"}
            </span>
            {" "}
            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, rgb(255, 255, 255))" }}>
              {"Custom Links"}
            </span>
            {" "}
            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-c9yw3e, rgb(184, 184, 184))" }}>
              {"to individual content."}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
