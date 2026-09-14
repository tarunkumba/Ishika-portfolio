import React, { Suspense } from "react";

/** Generated from the Framer section "Navbar".
 *  Renders to the same DOM as the original — the Suspense boundaries here are
 *  Framer's hydration markers, so removing them would break its runtime.
 *  Everything else is ordinary JSX: edit it like any other component. */
/** The repeated copy in this section: every visible string, and every link.
 *
 *  Framer inlines one subtree per breakpoint — desktop, tablet, phone — so
 *  each of these appears once per breakpoint in the markup. Edit it here and
 *  all of them change. */
export const copy = {
  features: "Features",
  howItWorks: "How it works",
  tariffs: "Tariffs",
  testimonials: "Testimonials",
  faq: "FAQ",
  logIn: "Log in",
  getStarted: "Get started",
} as const;

export default function Navbar() {
  return (
    <nav className="framer-O1BuW framer-4t3d5c framer-v-4t3d5c" data-framer-name="Navbar" style={{ backgroundColor: "rgba(255, 255, 255, 0)", width: "100%", borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}>
      <div className="framer-1x342bf" data-framer-name="Container" style={{ borderBottomLeftRadius: "16px", borderBottomRightRadius: "16px", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}>
        <Suspense fallback={null}>
          <a className="framer-r5gm8 framer-114gwzg" data-framer-name="Logo" href="./">
            <div className="framer-tyzl9e">
              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                <img width="381" height="41" src="/assets/img/e9a3e3f5c476cb16.svg" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "contain" }} loading="eager" />
              </div>
            </div>
          </a>
        </Suspense>
        <div className="framer-onj1zz" data-border="true" data-framer-name="Nav links" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0.08)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backdropFilter: "blur(40px)", backgroundColor: "rgba(255, 255, 255, 0.08)", WebkitBackdropFilter: "blur(40px)", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", opacity: "1", transform: "translate(-50%, -50%)" }}>
          <div className="framer-46v20m-container">
            <Suspense fallback={null}>
              <style dangerouslySetInnerHTML={{ __html: "\n                .neon-glow {\n                    position: relative;\n                    width: 100%;\n                    height: 100%;\n                    border-radius: 12px;\n                    pointer-events: none;\n                    --opacity: 0;\n                }\n\n                .neon-glow::before {\n                    content: &quot;&quot;;\n                    position: absolute;\n                    inset: 0;\n                    padding: 1px;\n                    border-radius: inherit;\n\n                    background: radial-gradient(\n                        90px 90px at var(--x) var(--y),\n                        #D5FF99,\n                        transparent 60%\n                    );\n\n                    opacity: var(--opacity);\n                    transition: opacity 0.25s ease;\n\n                    -webkit-mask:\n                        linear-gradient(#000 0 0) content-box,\n                        linear-gradient(#000 0 0);\n                    -webkit-mask-composite: xor;\n                            mask-composite: exclude;\n                }\n            " }} />
              <div className="neon-glow" />
            </Suspense>
          </div>
          <div className="framer-ubv8m7" data-framer-name="Bg" style={{ background: "linear-gradient(179deg, rgb(224, 255, 181) -86%, rgb(149, 250, 95) 192%)", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
          <div className="framer-hg5od9-container" data-framer-appear-id="hg5od9" style={{ opacity: "1", transform: "none" }}>
            <Suspense fallback={null}>
              <a className="framer-irRxp framer-j2gty2 framer-v-7gkbel framer-1x4bgdz" data-framer-name="Active/On" data-highlight="true" tabIndex={0} style={{ borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                <div className="framer-1vyf9mo" data-framer-name="Bg" style={{ backgroundColor: "rgb(15, 15, 15)", opacity: "0" }} />
                <div className="framer-1q78jhr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(8, 8, 8)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                  <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-line-height": "110%", "--framer-text-color": "var(--extracted-r6o4lv, rgb(8, 8, 8))" }}>
                    {copy.features}
                  </p>
                </div>
              </a>
            </Suspense>
          </div>
          <Suspense fallback={null}>
            <div className="framer-9k8e3n-container" data-framer-appear-id="9k8e3n" style={{ opacity: "1", transform: "none" }}>
              <Suspense fallback={null}>
                <a className="framer-irRxp framer-j2gty2 framer-v-j2gty2 framer-1x4bgdz" data-framer-name="Active/Off" data-highlight="true" href="./" tabIndex={0} style={{ borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                  <div className="framer-1vyf9mo" data-framer-name="Bg" style={{ backgroundColor: "rgb(15, 15, 15)", opacity: "0" }} />
                  <div className="framer-1q78jhr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-line-height": "110%", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255)))" }}>
                      {copy.howItWorks}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
          <Suspense fallback={null}>
            <div className="framer-93cnrs-container" data-framer-appear-id="93cnrs" style={{ opacity: "1", transform: "none" }}>
              <Suspense fallback={null}>
                <a className="framer-irRxp framer-j2gty2 framer-v-j2gty2 framer-1x4bgdz" data-framer-name="Active/Off" data-highlight="true" href="./" tabIndex={0} style={{ borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                  <div className="framer-1vyf9mo" data-framer-name="Bg" style={{ backgroundColor: "rgb(15, 15, 15)", opacity: "0" }} />
                  <div className="framer-1q78jhr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-line-height": "110%", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255)))" }}>
                      {copy.tariffs}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
          <Suspense fallback={null}>
            <div className="framer-vjg1kr-container" data-framer-appear-id="vjg1kr" style={{ opacity: "1", transform: "none" }}>
              <Suspense fallback={null}>
                <a className="framer-irRxp framer-j2gty2 framer-v-j2gty2 framer-1x4bgdz" data-framer-name="Active/Off" data-highlight="true" href="./" tabIndex={0} style={{ borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                  <div className="framer-1vyf9mo" data-framer-name="Bg" style={{ backgroundColor: "rgb(15, 15, 15)", opacity: "0" }} />
                  <div className="framer-1q78jhr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-line-height": "110%", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255)))" }}>
                      {copy.testimonials}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
          <Suspense fallback={null}>
            <div className="framer-micwwv-container" data-framer-appear-id="micwwv" style={{ opacity: "1", transform: "none" }}>
              <Suspense fallback={null}>
                <a className="framer-irRxp framer-j2gty2 framer-v-j2gty2 framer-1x4bgdz" data-framer-name="Active/Off" data-highlight="true" href="./" tabIndex={0} style={{ borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                  <div className="framer-1vyf9mo" data-framer-name="Bg" style={{ backgroundColor: "rgb(15, 15, 15)", opacity: "0" }} />
                  <div className="framer-1q78jhr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-line-height": "110%", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-41000120-2736-46f5-80a6-99d91ac2af1f, rgb(255, 255, 255)))" }}>
                      {copy.faq}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
        </div>
        <div className="framer-fxyk6l" data-framer-name="Nav buttons container">
          <Suspense fallback={null}>
            <div className="framer-1qr7lkq-container">
              <Suspense fallback={null}>
                <a className="framer-IdSKk framer-137n93h framer-v-137n93h framer-bshcom" data-border="true" data-framer-name="Simple" data-highlight="true" href="./" tabIndex={0} style={{ "--border-bottom-width": "0.5px", "--border-color": "rgba(255, 255, 255, 0.12)", "--border-left-width": "0.5px", "--border-right-width": "0.5px", "--border-style": "solid", "--border-top-width": "0.5px", backdropFilter: "blur(5px)", backgroundColor: "rgba(255, 255, 255, 0.03)", WebkitBackdropFilter: "blur(5px)", height: "100%", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", boxShadow: "none" }}>
                  <div className="framer-w5hw1x" data-framer-name="Explore platform" data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-paragraph-spacing": "0px", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }}>
                      {copy.logIn}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
          <Suspense fallback={null}>
            <div className="framer-1ph66s4-container">
              <Suspense fallback={null}>
                <a className="framer-IdSKk framer-137n93h framer-v-1sva9xi framer-bshcom" data-border="true" data-framer-name="Colorful" data-highlight="true" href="./" tabIndex={0} style={{ "--border-bottom-width": "0.5px", "--border-color": "rgb(213, 255, 153)", "--border-left-width": "0.5px", "--border-right-width": "0.5px", "--border-style": "solid", "--border-top-width": "0.5px", backdropFilter: "blur(5px)", backgroundColor: "rgba(255, 255, 255, 0.03)", WebkitBackdropFilter: "blur(5px)", height: "100%", borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)" }}>
                  <div className="framer-w5hw1x" data-framer-name="Explore platform" data-framer-component-type="RichTextContainer" style={{ justifyContent: "center", "--extracted-r6o4lv": "rgb(213, 255, 153)", "--framer-paragraph-spacing": "0px", transform: "none" }}>
                    <p className="framer-text" style={{ "--font-selector": "RlM7U3dpdHplci1tZWRpdW0=", "--framer-font-family": "\"Switzer\", \"Switzer Placeholder\", sans-serif", "--framer-font-weight": "500", "--framer-text-color": "var(--extracted-r6o4lv, rgb(213, 255, 153))" }}>
                      {copy.getStarted}
                    </p>
                  </div>
                </a>
              </Suspense>
            </div>
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
