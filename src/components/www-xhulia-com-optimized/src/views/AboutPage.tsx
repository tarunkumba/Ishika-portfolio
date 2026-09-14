import React, { Suspense } from "react";
import Variant1 from "@/src/sections/about/Variant1";
import Menu from "@/src/sections/about/Menu";
import Variant12 from "@/src/sections/about/Variant12";
import Variant2 from "@/src/sections/about/Variant2";

/** The "/about" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function AboutPage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"fc4gVpU0q\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"jfpyt4\",\"mediaQuery\":\"(min-width: 1440px)\"},{\"hash\":\"1stzvg4\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1439.98px)\"},{\"hash\":\"1ficj8x\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"owcx1m\",\"mediaQuery\":\"(min-width: 1400px)\"},{\"hash\":\"gxtz4y\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"1f4frh7\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1399.98px)\"}]}"} data-framer-ssr-released-at="2026-07-10T11:33:00.876Z" data-framer-page-optimized-at="2026-07-13T09:11:08.830Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: ":root body { background: rgb(255, 255, 255); }" }} />
          <div className="framer-38cb5 framer-owcx1m" data-layout-template="true" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="framer-11l8tdg-container">
              <Suspense fallback={null}>
                <div style={{ position: "fixed", zIndex: "9999", pointerEvents: "none", left: "0", right: "0", height: "3px", top: "0" }}>
                  <div style={{ height: "100%", width: "100%", background: "var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11))", transformOrigin: "0% 50%", willChange: "transform", transform: "scaleX(0)" }} />
                </div>
              </Suspense>
            </div>
            <div className="framer-1qv85tp-container" data-framer-layout-hint-center-x="true">
              <div className="ssr-variant hidden-gxtz4y">
                <Variant1 />
              </div>
              <div className="ssr-variant hidden-owcx1m hidden-1f4frh7">
                <div className="framer-2t2MP framer-u4a13h framer-v-gaff4n" data-framer-name="Mobile" style={{ width: "100%", willChange: "transform", opacity: "1", transform: "none" }}>
                  <div className="framer-yswcbq">
                    <Suspense fallback={null}>
                      <a className="framer-226yfs framer-12z8t6b" data-border="true" data-framer-name="Menu" href="./" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(212, 212, 216, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backdropFilter: "blur(20px)", backgroundColor: "rgba(244, 244, 245, 0.5)", WebkitBackdropFilter: "blur(20px)", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px", borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}>
                        <div className="framer-zvejiy-container">
                          <div className="framer-sTnOD framer-1jmh3gi framer-v-1jmh3gi" data-framer-name="Variant 1">
                            <div data-framer-component-type="SVG" parentsize="0" _constraints="[object Object]" rotation="0" shadows="" className="framer-1brqayl" aria-hidden="true" style={{ imageRendering: "pixelated", flexShrink: "0" }}>
                              <div className="svgContainer" style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}>
                                <svg style={{ width: "100%", height: "100%", overflow: "visible" }}>
                                  <use href="#svg992834244_1328" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Suspense>
                    <Menu />
                    <div className="framer-cku985" data-border="true" data-framer-name="Menu" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(228, 228, 231, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-6debc98f-327e-43f2-97b8-691c325cbe03, rgb(253, 207, 0))", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px", borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}>
                      <div className="framer-t2fqrp-container">
                        <Suspense fallback={null}>
                          <div role="button" tabIndex={0} aria-label="Copy xhuliafrro@gmail.com" style={{ width: "100%", height: "100%", position: "relative", cursor: "pointer", display: "flex", alignItems: "stretch", justifyContent: "stretch", userSelect: "none", WebkitUserSelect: "none", overflow: "visible" }}>
                            <div style={{ width: "100%", height: "100%", flex: "1", display: "flex", alignItems: "stretch", justifyContent: "stretch" }}>
                              <div className="framer-1p3h8ch" data-framer-name="mail icon" style={{ width: "100%", height: "100%", minWidth: "100%", minHeight: "100%", flex: "1" }}>
                                <svg className="framer-bNwvq framer-1h902t6" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11))", "--js9iwy": "2" }}>
                                  <use href="#4162409723" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: var(--token-44bb1f51-00a4-432e-ae8f-cf0c755101c9, rgb(250, 250, 250)); }" }} />
            <div data-framer-root="" className="framer-wdg79 framer-QhsE0 framer-OFUjM framer-MWUEy framer-xXon7 framer-PNkr2 framer-jfpyt4" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
              <div className="framer-13lrnby">
                <div className="framer-1eta7yr">
                  <div className="framer-1u6ig7c">
                    <div className="ssr-variant hidden-1ficj8x">
                      <div className="framer-getg57" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                        <h2 className="framer-text framer-styles-preset-1qrtywy" data-styles-preset="IIkSEjkXr" dir="auto" style={{ "--framer-text-alignment": "center" }}>
                          {"It's Xhulia."}
                          <br className="framer-text" />
                          {" But you read it like "}
                          <em className="framer-text">
                            {"\"jool-yah\""}
                          </em>
                          {"."}
                        </h2>
                      </div>
                    </div>
                    <div className="ssr-variant hidden-jfpyt4 hidden-1stzvg4">
                      <div className="framer-getg57" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                        <h2 className="framer-text framer-styles-preset-1qrtywy" data-styles-preset="IIkSEjkXr" dir="auto" style={{ "--framer-text-alignment": "center" }}>
                          {"It's Xhulia,"}
                          <br className="framer-text" />
                          {"but you read it like"}
                          <br className="framer-text" />
                          <em className="framer-text">
                            {"\"jool-yah\""}
                          </em>
                          {"."}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-1ficj8x">
                    <div className="framer-ugs4ez" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-qrli1b" data-styles-preset="UDO3Mrpe3" dir="auto" style={{ "--framer-text-alignment": "center" }}>
                        {"Looks harder than it actually is, thank you mom and dad."}
                      </p>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-jfpyt4 hidden-1stzvg4">
                    <div className="framer-ugs4ez" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-qrli1b" data-styles-preset="UDO3Mrpe3" dir="auto" style={{ "--framer-text-alignment": "center" }}>
                        {"Looks harder than it actually is,"}
                        <br className="framer-text" />
                        {"thank you mom and dad."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="framer-loqlmq">
                  <div className="ssr-variant hidden-1ficj8x">
                    <div className="ssr-variant hidden-1stzvg4">
                      <div className="framer-poxmau-container">
                        <div className="framer-OSCtb framer-OFUjM framer-1dwksa5 framer-v-1dwksa5" data-framer-name="Out" data-highlight="true" style={{ width: "100%" }}>
                          <div className="framer-3vbf91" data-framer-name="Image Container" style={{ transform: "scale(1.2) rotate(-40deg)" }}>
                            <div className="framer-1by4ytt" data-framer-name="Image 7" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img loading="eager" width="591" height="758" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/fccb77cec12f2f03.webp 591w" src="/assets/img/fccb77cec12f2f03.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-jcb576" data-framer-name="Image 6" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img loading="eager" width="591" height="753" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/1617d421a6cd7fc1.webp 591w" src="/assets/img/1617d421a6cd7fc1.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                              <div className="framer-12b9kk3" data-framer-name="Pin 2" style={{ backgroundColor: "var(--token-a042497d-749d-4d03-8d3a-78930210d354, rgb(0, 128, 255))", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                                <div className="framer-wzc5gk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))" }}>
                                    {"@nandi"}
                                  </p>
                                </div>
                                <div className="framer-fmb7jf" data-framer-name="Rec" style={{ backgroundColor: "rgb(42, 98, 241)", transform: "rotate(-45deg)" }} />
                              </div>
                            </div>
                            <div className="framer-y5i529" data-framer-name="Image 5" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img loading="eager" width="960" height="1280" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/f46422e1b4778c3d.webp 768w, /assets/img/e062754894be0ad7.webp 960w" src="/assets/img/e062754894be0ad7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" fetchPriority="high" />
                              </div>
                            </div>
                            <div className="framer-cfyx4o" data-framer-name="Image 4" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img loading="eager" width="591" height="847" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/cef9d3d3629459e8.webp 591w" src="/assets/img/cef9d3d3629459e8.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-12fzkko" data-framer-name="Image 3" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="776" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/40ae0f7fe84590a7.webp 591w" src="/assets/img/40ae0f7fe84590a7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-9b2o8e" data-framer-name="Image 2" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="746" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/b18f8d78ae925e4b.webp 591w" src="/assets/img/b18f8d78ae925e4b.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-1htoakh" data-framer-name="Image 1" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="778" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/ac56236c511b0f52.webp 591w" src="/assets/img/ac56236c511b0f52.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                              <div className="framer-18ospbq" data-framer-name="Pin 1" draggable="false" style={{ backgroundColor: "rgb(212, 212, 212)", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                                <div className="framer-10cm9tq" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)))" }}>
                                    {"@prianca"}
                                  </p>
                                </div>
                                <div className="framer-bpucei" style={{ backgroundColor: "rgb(115, 177, 153)", transform: "rotate(-45deg)" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ssr-variant hidden-jfpyt4">
                      <div className="framer-poxmau-container" style={{ transform: "scale(0.8)" }}>
                        <div className="framer-OSCtb framer-OFUjM framer-1dwksa5 framer-v-1dwksa5" data-framer-name="Out" data-highlight="true" style={{ width: "100%" }}>
                          <div className="framer-3vbf91" data-framer-name="Image Container" style={{ transform: "scale(1.2) rotate(-40deg)" }}>
                            <div className="framer-1by4ytt" data-framer-name="Image 7" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="758" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/fccb77cec12f2f03.webp 591w" src="/assets/img/fccb77cec12f2f03.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-jcb576" data-framer-name="Image 6" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="753" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/1617d421a6cd7fc1.webp 591w" src="/assets/img/1617d421a6cd7fc1.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                              <div className="framer-12b9kk3" data-framer-name="Pin 2" style={{ backgroundColor: "var(--token-a042497d-749d-4d03-8d3a-78930210d354, rgb(0, 128, 255))", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                                <div className="framer-wzc5gk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))" }}>
                                    {"@nandi"}
                                  </p>
                                </div>
                                <div className="framer-fmb7jf" data-framer-name="Rec" style={{ backgroundColor: "rgb(42, 98, 241)", transform: "rotate(-45deg)" }} />
                              </div>
                            </div>
                            <div className="framer-y5i529" data-framer-name="Image 5" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="960" height="1280" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/f46422e1b4778c3d.webp 768w, /assets/img/e062754894be0ad7.webp 960w" src="/assets/img/e062754894be0ad7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-cfyx4o" data-framer-name="Image 4" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="847" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/cef9d3d3629459e8.webp 591w" src="/assets/img/cef9d3d3629459e8.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-12fzkko" data-framer-name="Image 3" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="776" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/40ae0f7fe84590a7.webp 591w" src="/assets/img/40ae0f7fe84590a7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-9b2o8e" data-framer-name="Image 2" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="746" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/b18f8d78ae925e4b.webp 591w" src="/assets/img/b18f8d78ae925e4b.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                            </div>
                            <div className="framer-1htoakh" data-framer-name="Image 1" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                              <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width="591" height="778" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/ac56236c511b0f52.webp 591w" src="/assets/img/ac56236c511b0f52.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                              </div>
                              <div className="framer-18ospbq" data-framer-name="Pin 1" draggable="false" style={{ backgroundColor: "rgb(212, 212, 212)", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                                <div className="framer-10cm9tq" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                  <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)))" }}>
                                    {"@prianca"}
                                  </p>
                                </div>
                                <div className="framer-bpucei" style={{ backgroundColor: "rgb(115, 177, 153)", transform: "rotate(-45deg)" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ssr-variant hidden-jfpyt4 hidden-1stzvg4">
                    <div className="framer-poxmau-container" style={{ transform: "scale(0.5)" }}>
                      <div className="framer-OSCtb framer-OFUjM framer-1dwksa5 framer-v-1dwksa5" data-framer-name="Out" data-highlight="true" style={{ width: "100%" }}>
                        <div className="framer-3vbf91" data-framer-name="Image Container" style={{ transform: "scale(1.2) rotate(-40deg)" }}>
                          <div className="framer-1by4ytt" data-framer-name="Image 7" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="758" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/fccb77cec12f2f03.webp 591w" src="/assets/img/fccb77cec12f2f03.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                          </div>
                          <div className="framer-jcb576" data-framer-name="Image 6" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="753" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/1617d421a6cd7fc1.webp 591w" src="/assets/img/1617d421a6cd7fc1.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                            <div className="framer-12b9kk3" data-framer-name="Pin 2" style={{ backgroundColor: "var(--token-a042497d-749d-4d03-8d3a-78930210d354, rgb(0, 128, 255))", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                              <div className="framer-wzc5gk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-20608b9f-0145-4a1e-b971-ee948ebbb015, rgb(255, 255, 255)))" }}>
                                  {"@nandi"}
                                </p>
                              </div>
                              <div className="framer-fmb7jf" data-framer-name="Rec" style={{ backgroundColor: "rgb(42, 98, 241)", transform: "rotate(-45deg)" }} />
                            </div>
                          </div>
                          <div className="framer-y5i529" data-framer-name="Image 5" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="960" height="1280" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/f46422e1b4778c3d.webp 768w, /assets/img/e062754894be0ad7.webp 960w" src="/assets/img/e062754894be0ad7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                          </div>
                          <div className="framer-cfyx4o" data-framer-name="Image 4" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="847" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/cef9d3d3629459e8.webp 591w" src="/assets/img/cef9d3d3629459e8.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                          </div>
                          <div className="framer-12fzkko" data-framer-name="Image 3" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="776" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/40ae0f7fe84590a7.webp 591w" src="/assets/img/40ae0f7fe84590a7.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                          </div>
                          <div className="framer-9b2o8e" data-framer-name="Image 2" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="746" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/b18f8d78ae925e4b.webp 591w" src="/assets/img/b18f8d78ae925e4b.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                          </div>
                          <div className="framer-1htoakh" data-framer-name="Image 1" draggable="false" style={{ borderBottomLeftRadius: "18px", borderBottomRightRadius: "18px", borderTopLeftRadius: "18px", borderTopRightRadius: "18px", transform: "none" }}>
                            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width="591" height="778" sizes="(min-width: 1440px) 184px, (min-width: 810px) and (max-width: 1439.98px) 184px, (max-width: 809.98px) 184px" srcSet="/assets/img/ac56236c511b0f52.webp 591w" src="/assets/img/ac56236c511b0f52.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} draggable="false" />
                            </div>
                            <div className="framer-18ospbq" data-framer-name="Pin 1" draggable="false" style={{ backgroundColor: "rgb(212, 212, 212)", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", transform: "scale(0)" }}>
                              <div className="framer-10cm9tq" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                                <p className="framer-text" style={{ "--framer-font-size": "18px", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)))" }}>
                                  {"@prianca"}
                                </p>
                              </div>
                              <div className="framer-bpucei" style={{ backgroundColor: "rgb(115, 177, 153)", transform: "rotate(-45deg)" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1duloy7">
                  <div className="framer-1sufzjo" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                      {"I’m an end-to-end "}
                      <strong className="framer-text">
                        {"Product Designer"}
                      </strong>
                      {" with 5 years of experience across agency, in-house, and occasional freelance work."}
                    </p>
                    <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                      {"I’ve worked on websites, SaaS platforms, mobile apps, dashboards, and design systems. I usually sit somewhere between "}
                      <strong className="framer-text">
                        {"UX logic and UI craft"}
                      </strong>
                      {": I like figuring out how things should work, what’s making them confusing, and how to turn that into something clear and usable."}
                    </p>
                  </div>
                  <div className="framer-12bcxt7">
                    <div className="framer-z75ig3" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1kw60ko" data-styles-preset="saboMK_4E" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                        {"In my current role"}
                      </p>
                    </div>
                    <div className="framer-nbgpov" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                        {"I work mostly on complex B2B tools, with dense workflows, edge cases, regulations and trade-offs. These products are often treated as “just functional”, but I think they deserve the same care, clarity, and visual polish as any consumer-facing product."}
                      </p>
                    </div>
                  </div>
                  <div className="framer-fh7g8d">
                    <div className="framer-u8b344" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1kw60ko" data-styles-preset="saboMK_4E" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                        {"My process"}
                      </p>
                    </div>
                    <div className="framer-1rtb56r" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                        {"usually starts with asking "}
                        <strong className="framer-text">
                          {"a lot of questions"}
                        </strong>
                        {" and trying to understand what’s actually causing the problem before jumping into screens."}
                        <br className="framer-text" />
                        {"I like mapping how things connect, finding where the flow breaks, and testing the weak spots before users hit them. Overthinking comes in handy here. Overthinking comes in handy here :)"}
                      </p>
                    </div>
                  </div>
                  <div className="framer-wsmsa7">
                    <div className="framer-xbv3vq" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1kw60ko" data-styles-preset="saboMK_4E" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                        {"When I'm not desiging"}
                      </p>
                    </div>
                    <div className="framer-1bom3om" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                        {"you’ll usually find me drawing, planning my next trip, keeping up with celebrity drama  (my guilty pleasure) or trying a new creative hobby, not always successfully."}
                      </p>
                    </div>
                  </div>
                  <div className="framer-gjeq9o" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                    <p className="framer-text framer-styles-preset-15jctzr" data-styles-preset="iQ8swztEk" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                      {"Let's chat?"}
                    </p>
                  </div>
                  <div className="framer-182wr95">
                    <div className="framer-17z01zx" data-framer-name="Menu">
                      <div className="framer-44633j-container">
                        <Suspense fallback={null}>
                          <div role="button" tabIndex={0} aria-label="Copy xhuliafrro@gmail.com" style={{ width: "100%", height: "100%", position: "relative", cursor: "pointer", display: "flex", alignItems: "stretch", justifyContent: "stretch", userSelect: "none", WebkitUserSelect: "none", overflow: "visible" }}>
                            <div style={{ width: "100%", height: "100%", flex: "1", display: "flex", alignItems: "stretch", justifyContent: "stretch" }}>
                              <div className="framer-xe3tts" data-framer-name="!! New header item" style={{ width: "100%", height: "100%", minWidth: "100%", minHeight: "100%", flex: "1" }}>
                                <div className="framer-1r77d7o" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                                  <p className="framer-text framer-styles-preset-1qw4r2o" data-styles-preset="eKXAy3RN6" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                                    {"Copy email"}
                                  </p>
                                </div>
                                <svg className="framer-EyjjJ framer-pc90w4" role="presentation" viewBox="0 0 24 24">
                                  <use href="#1319649412" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Suspense>
                      </div>
                    </div>
                    <Suspense fallback={null}>
                      <a className="framer-1f2k5kc framer-1wem2fv" data-framer-name="Menu" href="https://drive.google.com/file/d/1DUzWTJzb39kbwoLCNl1xBCNgISTfI4mY/view?usp=sharing" target="_blank" rel="noopener">
                        <div className="ssr-variant">
                          <div className="framer-1mapg9g-container">
                            <Suspense fallback={null}>
                              <span className="framer-80Wps framer-PNkr2 framer-1avqozq framer-v-1avqozq framer-1925a9f" data-framer-name="item def" href="https://www.google.com/" target="_blank" rel="noopener" data-nested-link="true" role="link" tabIndex={0} style={{ opacity: "1" }}>
                                <svg className="framer-yzRLj framer-j0yfkb" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))", "--js9iwy": "2" }}>
                                  <use href="#3971815880" />
                                </svg>
                              </span>
                            </Suspense>
                          </div>
                        </div>
                      </a>
                    </Suspense>
                    <div className="framer-4zf3vv" data-framer-name="Menu">
                      <div className="ssr-variant">
                        <div className="framer-1asa07g-container">
                          <Suspense fallback={null}>
                            <a className="framer-80Wps framer-PNkr2 framer-1avqozq framer-v-1avqozq framer-1925a9f" data-framer-name="item def" href="https://www.linkedin.com/in/xhulia-frroku/" target="_blank" rel="noopener" style={{ opacity: "1" }}>
                              <svg className="framer-wOUd9 framer-j0yfkb" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))", "--js9iwy": "2" }}>
                                <use href="#3416321359" />
                              </svg>
                            </a>
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="overlay" />
            <div className="framer-1aqrj7b" />
            <div className="ssr-variant hidden-gxtz4y">
              <div className="framer-bqutr3-container">
                <Variant12 />
              </div>
            </div>
            <div className="ssr-variant hidden-owcx1m hidden-1f4frh7">
              <div className="framer-bqutr3-container">
                <Variant2 />
              </div>
            </div>
          </div>
          <div id="template-overlay" />
        </Suspense>
      </div>
      <span data-fnj-slot={"2"} />
      {"\n\t"}
      <span data-fnj-slot={"3"} />
      {"\n\t\n\t\n\t"}
      <span data-fnj-slot={"4"} />
      {"\n\t"}
      <span data-fnj-slot={"5"} />
      {"\n\t"}
      <span data-fnj-slot={"6"} />
      <span data-fnj-slot={"7"} />
      <span data-fnj-slot={"8"} />
      <span data-fnj-slot={"9"} />
      <span data-fnj-slot={"10"} />
      <span data-fnj-slot={"11"} />
      <span data-fnj-slot={"12"} />
      <span data-fnj-slot={"13"} />
      <span data-fnj-slot={"14"} />
      <span data-fnj-slot={"15"} />
      <span data-fnj-slot={"16"} />
      <span data-fnj-slot={"17"} />
      <span data-fnj-slot={"18"} />
      <span data-fnj-slot={"19"} />
      <span data-fnj-slot={"20"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
        <svg viewBox="0 0 18 11" overflow="visible" id="svg992834244_1328">
          <g>
            <path d="M 0 2.5 L 9.5 10.5" fill="transparent" strokeWidth="1.8" stroke={"var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11)) /* {\"name\":\"zinc-950\"} */"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 8.5 0 L 3 11" fill="transparent" strokeWidth="1.8" stroke={"var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11)) /* {\"name\":\"zinc-950\"} */"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 12 0.5 L 12 8.5" fill="transparent" strokeWidth="1.8" stroke={"var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11)) /* {\"name\":\"zinc-950\"} */"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 18 0 L 18 10.5" fill="transparent" strokeWidth="1.8" stroke={"var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11)) /* {\"name\":\"zinc-950\"} */"} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 12 4 L 18 5" fill="transparent" strokeWidth="1.8" stroke={"var(--token-af1e8795-e3b1-4d9b-8a7c-2d10dfbaf274, rgb(9, 9, 11)) /* {\"name\":\"zinc-950\"} */"} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
        {"\n"}
        <svg id="1023608987" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 4 11 L 5.5 8.1 C 5.832 7.44 6.501 7.017 7.24 7 L 18 7 C 18.619 6.999 19.204 7.285 19.584 7.774 C 19.963 8.263 20.095 8.901 19.94 9.5 L 18.4 15.5 C 18.171 16.388 17.367 17.006 16.45 17 L 2 17 C 0.895 17 0 16.105 0 15 L 0 2 C 0 0.896 0.895 0 2 0 L 5.9 0 C 6.58 -0.007 7.216 0.332 7.59 0.9 L 8.4 2.1 C 8.77 2.662 9.397 3 10.07 3 L 16 3 C 17.105 3 18 3.896 18 5 L 18 7" fill="transparent" height="17.00014249410852px" id="D9r3jfCVK" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 3)" width="20.003527267005897px" />
        </svg>
        {"\n"}
        <svg id="1790160928" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 Z" fill="transparent" height="18px" id="loNKVA7DW" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="18px" />
          <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="xG6Y8jlz4" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(7 7)" width="4px" />
          <path d="M 15 3.672 L 11.914 0.586 C 11.133 -0.195 9.867 -0.195 9.086 0.586 L 0 9.672" fill="transparent" height="9.671572907499295px" id="O5nor_nIv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 11.328)" width="15px" />
        </svg>
        {"\n"}
        <svg id="4214649144" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="om7tLlYPw" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px" />
          <path d="M 0 0 C 0 0 1.5 2 4 2 C 6.5 2 8 0 8 0" fill="transparent" height="2px" id="SdUZkMphT" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 14)" width="8px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="LmORhbczo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="1px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="febHEEyVi" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 9)" width="1px" />
        </svg>
        {"\n"}
        <svg id="3971815880" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 11 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 18 C 0 19.105 0.895 20 2 20 L 14 20 C 15.105 20 16 19.105 16 18 L 16 5 Z" fill="transparent" height="20px" id="bqRx3ohLC" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 2)" width="16px" />
          <path d="M 0 0 L 0 4 C 0 5.105 0.895 6 2 6 L 6 6" fill="transparent" height="6px" id="deDsxSd5n" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14 2)" width="6px" />
          <path d="M 2 0 L 0 0" fill="transparent" height="1px" id="hnFYZQLSl" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 9)" width="2px" />
          <path d="M 8 0 L 0 0" fill="transparent" height="1px" id="Ij7gMaKHY" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 13)" width="8px" />
          <path d="M 8 0 L 0 0" fill="transparent" height="1px" id="ebzPbGZA_" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 17)" width="8px" />
        </svg>
        {"\n"}
        <svg id="4162409723" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 0 L 11.009 5.727 C 10.388 6.088 9.621 6.088 9 5.727 L 0 0" fill="transparent" height="5.997555074597631px" id="YxJGPvMN5" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 7)" width="20px" />
          <path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" fill="transparent" height="16px" id="LPBzBUi6X" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 4)" width="20px" />
        </svg>
        {"\n"}
        <svg id="1319649412" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 14 C 0.895 14 0 13.105 0 12 L 0 2 C 0 0.895 0.895 0 2 0 L 12 0 C 13.105 0 14 0.895 14 2 L 14 12 C 14 13.105 13.105 14 12 14 Z" fill="transparent" height="14px" id="qFn6OzzMj" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 8)" width="14px" />
          <path d="M 2 14 C 0.9 14 0 13.1 0 12 L 0 2 C 0 0.9 0.9 0 2 0 L 12 0 C 13.1 0 14 0.9 14 2" fill="transparent" height="14px" id="PTTC2Hjkk" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="14px" />
        </svg>
        {"\n"}
        <svg id="3416321359" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 6 0 C 9.314 0 12 2.686 12 6 L 12 13 L 8 13 L 8 6 C 8 4.895 7.105 4 6 4 C 4.895 4 4 4.895 4 6 L 4 13 L 0 13 L 0 6 C 0 2.686 2.686 0 6 0 Z" fill="transparent" height="13px" id="b4daiqhLm" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(10 8)" width="12px" />
          <path d="M 0 12 L 0 0 L 4 0 L 4 12 Z" fill="transparent" height="12px" id="pjuCqz3_Y" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 9)" width="4px" />
          <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="HFWFXDJPf" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="4px" />
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"21"} />
      {"\n    \n    "}
      <span data-fnj-slot={"22"} />
      {"\n\n\n"}
    </body>
  );
}
