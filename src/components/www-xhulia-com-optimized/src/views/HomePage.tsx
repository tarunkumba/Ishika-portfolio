import React, { Suspense } from "react";
import Variant1 from "@/src/sections/home/Variant1";
import Menu from "@/src/sections/home/Menu";
import HomeSection from "@/src/sections/home/HomeSection";
import ProjectCards from "@/src/sections/home/ProjectCards";
import Variant12 from "@/src/sections/home/Variant12";
import Variant2 from "@/src/sections/home/Variant2";

/** The "/" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function HomePage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"augiA20Il\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"72rtr7\",\"mediaQuery\":\"(min-width: 1440px)\"},{\"hash\":\"1a52fzq\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1439.98px)\"},{\"hash\":\"1espahi\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"1y3fk8m\",\"mediaQuery\":\"(min-width: 1200px)\"},{\"hash\":\"1gpkdml\",\"mediaQuery\":\"(max-width: 809.98px)\"},{\"hash\":\"63lzhi\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1199.98px)\"}]}"} data-framer-ssr-released-at="2026-07-10T11:33:00.876Z" data-framer-page-optimized-at="2026-07-13T09:11:09.102Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: ":root body { background: var(--token-44bb1f51-00a4-432e-ae8f-cf0c755101c9, rgb(250, 250, 250)); }" }} />
          <div className="framer-8E29t framer-1y3fk8m" data-layout-template="true" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="framer-ne4khq-container">
              <Suspense fallback={null}>
                <div style={{ position: "fixed", zIndex: "9999", pointerEvents: "none", left: "0", right: "0", height: "3px", top: "0" }}>
                  <div style={{ height: "100%", width: "100%", background: "var(--token-6debc98f-327e-43f2-97b8-691c325cbe03, rgb(253, 207, 0))", transformOrigin: "0% 50%", willChange: "transform", transform: "scaleX(0)" }} />
                </div>
              </Suspense>
            </div>
            <div className="framer-1is1oov-container">
              <div className="ssr-variant hidden-1gpkdml">
                <Variant1 />
              </div>
              <div className="ssr-variant hidden-1y3fk8m hidden-63lzhi">
                <div className="framer-2t2MP framer-u4a13h framer-v-gaff4n" data-framer-name="Mobile" style={{ height: "100%", width: "100%", willChange: "transform", opacity: "1", transform: "none" }}>
                  <div className="framer-yswcbq">
                    <Suspense fallback={null}>
                      <a className="framer-226yfs framer-12z8t6b" data-border="true" data-framer-name="Menu" href="./" data-framer-page-link-current="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(212, 212, 216, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backdropFilter: "blur(20px)", backgroundColor: "rgba(244, 244, 245, 0.5)", WebkitBackdropFilter: "blur(20px)", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px", borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}>
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
            <div data-framer-root="" className="framer-o5ToE framer-OFUjM framer-4qxWU framer-PNkr2 framer-zPfOU framer-MWUEy framer-tH6Oh framer-72rtr7" style={{ minHeight: "100vh", width: "auto", display: "contents" }}>
              <HomeSection />
              <ProjectCards />
            </div>
            <div id="overlay" />
            <div className="framer-11iroru" />
            <div className="ssr-variant hidden-1gpkdml">
              <div className="framer-17909ip-container">
                <Variant12 />
              </div>
            </div>
            <div className="ssr-variant hidden-1y3fk8m hidden-63lzhi">
              <div className="framer-17909ip-container">
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
      <span data-fnj-slot={"21"} />
      <span data-fnj-slot={"22"} />
      <span data-fnj-slot={"23"} />
      <span data-fnj-slot={"24"} />
      <span data-fnj-slot={"25"} />
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
        <svg id="2903821725" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 12 L 6 6 L 0 0" fill="transparent" height="12px" id="sVN6YVZ9m" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 6)" width="6px" />
        </svg>
        {"\n"}
        <svg id="3416321359" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 6 0 C 9.314 0 12 2.686 12 6 L 12 13 L 8 13 L 8 6 C 8 4.895 7.105 4 6 4 C 4.895 4 4 4.895 4 6 L 4 13 L 0 13 L 0 6 C 0 2.686 2.686 0 6 0 Z" fill="transparent" height="13px" id="b4daiqhLm" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(10 8)" width="12px" />
          <path d="M 0 12 L 0 0 L 4 0 L 4 12 Z" fill="transparent" height="12px" id="pjuCqz3_Y" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 9)" width="4px" />
          <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="HFWFXDJPf" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="4px" />
        </svg>
        {"\n"}
        <svg id="664597326" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="gKwR79TbM" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px" />
          <path d="M 8 2 C 8 2 6.5 0 4 0 C 1.5 0 0 2 0 2" fill="transparent" height="2px" id="aTaMGYV99" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 14)" width="8px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="PwlyMBHHg" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 9)" width="1px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="aXew5T5HG" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 9)" width="1px" />
        </svg>
        {"\n"}
        <svg id="995786832" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 9.4 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 18 C 0 19.105 0.895 20 2 20 L 14 20 C 15.105 20 16 19.105 16 18 L 16 10.6" fill="transparent" height="20px" id="m3DXicfeU" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4 2)" width="16px" />
          <path d="M 0 0 L 4 0" fill="transparent" height="1px" id="H4UdYP_zn" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 6)" width="4px" />
          <path d="M 0 0 L 4 0" fill="transparent" height="1px" id="mD2ikfeNH" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 10)" width="4px" />
          <path d="M 0 0 L 4 0" fill="transparent" height="1px" id="USmCJmHLO" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 14)" width="4px" />
          <path d="M 0 0 L 4 0" fill="transparent" height="1px" id="fJOiITEs5" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 18)" width="4px" />
          <path d="M 9.377 3.618 C 10.207 2.789 10.207 1.444 9.377 0.614 C 8.547 -0.215 7.203 -0.215 6.373 0.614 L 1.363 5.626 C 1.125 5.864 0.951 6.158 0.857 6.48 L 0.02 9.35 C -0.031 9.526 0.017 9.715 0.146 9.844 C 0.276 9.973 0.465 10.022 0.64 9.97 L 3.51 9.133 C 3.833 9.039 4.126 8.865 4.364 8.627 Z" fill="transparent" height="9.990480232707279px" id="yBRs89PNv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12.001 2.008)" width="9.999161081728069px" />
        </svg>
        {"\n"}
        <svg id="3008297960" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 9.019 0.816 C 9.108 0.343 9.521 0 10.002 0 C 10.484 0 10.897 0.343 10.985 0.816 L 12.036 6.374 C 12.189 7.183 12.822 7.816 13.63 7.968 L 19.188 9.019 C 19.662 9.108 20.005 9.521 20.005 10.002 C 20.005 10.484 19.662 10.897 19.188 10.985 L 13.63 12.036 C 12.822 12.189 12.189 12.822 12.036 13.63 L 10.985 19.188 C 10.897 19.662 10.484 20.005 10.002 20.005 C 9.521 20.005 9.108 19.662 9.019 19.188 L 7.968 13.63 C 7.816 12.822 7.183 12.189 6.374 12.036 L 0.816 10.985 C 0.343 10.897 0 10.484 0 10.002 C 0 9.521 0.343 9.108 0.816 9.019 L 6.374 7.968 C 7.183 7.816 7.816 7.183 7.968 6.374 Z" fill="transparent" height="20.004788889056996px" id="r3ITwxBG7" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.998 1.998)" width="20.004788889056993px" />
          <path d="M 0 0 L 0 4" fill="transparent" height="4px" id="npiFUOZYL" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(20 2)" width="1px" />
          <path d="M 4 0 L 0 0" fill="transparent" height="1px" id="KnnF_NlKv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(18 4)" width="4px" />
          <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" height="4px" id="aBzgyASOc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 18)" width="4px" />
        </svg>
        {"\n"}
        <svg id="1796417267" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 2 0 C 0.895 0 0 0.895 0 2 L 0 8 C 0 9.105 0.895 10 2 10 C 2.552 10 3 10.448 3 11 L 3 12 C 3 13.105 2.105 14 1 14 C 0.448 14 0 14.448 0 15 L 0 17 C 0 17.552 0.448 18 1 18 C 4.314 18 7 15.314 7 12 L 7 2 C 7 0.895 6.105 0 5 0 Z" fill="transparent" height="18px" id="ppHADDL0V" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(14 3)" width="7px" />
          <path d="M 2 0 C 0.895 0 0 0.895 0 2 L 0 8 C 0 9.105 0.895 10 2 10 C 2.552 10 3 10.448 3 11 L 3 12 C 3 13.105 2.105 14 1 14 C 0.448 14 0 14.448 0 15 L 0 17 C 0 17.552 0.448 18 1 18 C 4.314 18 7 15.314 7 12 L 7 2 C 7 0.895 6.105 0 5 0 Z" fill="transparent" height="18px" id="lvm1ZOUw6" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 3)" width="7px" />
        </svg>
        {"\n"}
        <svg id="1397124899" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 C 1.184 -0.002 2.258 0.693 2.742 1.773 C 3.226 2.854 3.029 4.118 2.24 5" fill="transparent" height="5.000002596555943px" id="et05jKind" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(13 16)" width="3.003988215807034px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="BM6kLigm2" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(18 12)" width="1px" />
          <path d="M 12 17.98 L 4 17.98 C 1.791 17.98 0 16.189 0 13.98 C 0 10.114 3.134 6.98 7 6.98 L 7.2 6.98 L 3.6 3.38 C 2.827 2.607 2.827 1.353 3.6 0.58 C 4.373 -0.193 5.627 -0.193 6.4 0.58 L 9.8 3.98 L 10 3.98 C 13.3 3.98 16 6.68 16 9.98 L 16 10.98 C 16 12.084 15.105 12.98 14 12.98 L 13 12.98 C 11.343 12.98 10 14.323 10 15.98" fill="transparent" height="17.979898987322333px" id="WfdbItzdA" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(6 3.02)" width="16px" />
          <path d="M 4 6.54 L 4 2 C 4 0.895 3.105 0 2 0 C 0.895 0 0 0.895 0 2 L 0 5" fill="transparent" height="6.539999999999999px" id="cKAH0w5sM" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(16 2)" width="4px" />
          <path d="M 5.612 1.525 C 4.83 0.14 3.102 -0.394 1.675 0.309 C 0.248 1.012 -0.382 2.706 0.238 4.171 C 0.859 5.636 2.515 6.361 4.012 5.825" fill="transparent" height="6.001156839343558px" id="w9Z81L3zy" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 10.999)" width="5.6124975513389534px" />
        </svg>
        {"\n"}
        <svg id="2385824368" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 0 8" fill="transparent" height="8px" id="PyQsRlSi2" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 13)" width="1px" />
          <path d="M 0 0 L 0 3" fill="transparent" height="3px" id="uwXEmcy8g" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 3)" width="1px" />
          <path d="M 1 0 C 0.448 0 0 0.448 0 1 L 0 6 C 0 6.552 0.448 7 1 7 L 14 7 C 14.412 7 14.815 6.873 15.152 6.635 L 18.576 4.318 C 18.842 4.131 19 3.826 19 3.5 C 19 3.175 18.842 2.87 18.576 2.683 L 15.152 0.365 C 14.815 0.127 14.412 0 14 0 Z" fill="transparent" height="7px" id="hmkOiDIPF" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 6)" width="19.000071401995005px" />
        </svg>
        {"\n"}
        <svg id="1419506013" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 1.861 6.615 C 1.564 5.279 1.972 3.884 2.94 2.917 C 3.909 1.95 5.305 1.546 6.641 1.845 C 7.376 0.696 8.646 0 10.011 0 C 11.375 0 12.646 0.696 13.381 1.845 C 14.719 1.544 16.117 1.95 17.087 2.919 C 18.056 3.889 18.462 5.287 18.161 6.625 C 19.311 7.36 20.006 8.631 20.006 9.995 C 20.006 11.36 19.311 12.63 18.161 13.365 C 18.46 14.701 18.056 16.097 17.089 17.066 C 16.122 18.035 14.727 18.442 13.391 18.145 C 12.657 19.299 11.384 19.998 10.016 19.998 C 8.648 19.998 7.375 19.299 6.641 18.145 C 5.305 18.445 3.909 18.04 2.94 17.073 C 1.972 16.107 1.564 14.711 1.861 13.375 C 0.702 12.642 0 11.366 0 9.995 C 0 8.624 0.702 7.348 1.861 6.615 Z" fill="transparent" height="19.998269123192628px" id="Xbx8EM0Zp" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.989 2.005)" width="20.00614941146023px" />
          <path d="M 0 2.005 C 0.485 0.625 1.895 -0.204 3.337 0.043 C 4.779 0.291 5.832 1.542 5.83 3.005 C 5.83 5.005 2.83 6.005 2.83 6.005" fill="transparent" height="6.004752142276818px" id="wgHknTS6J" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9.09 6.995)" width="5.830003375977274px" />
          <path d="M 0 0 L 0.01 0" fill="transparent" height="1px" id="N0_1XQLWA" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 17)" width="1px" />
        </svg>
        {"\n"}
        <svg id="623441291" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 4 0 L 4 6 L 0 8" fill="transparent" height="8px" id="MHl94xE6u" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 6)" width="4px" />
          <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" height="20px" id="pDGzbNJKB" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="20px" />
        </svg>
        {"\n"}
        <svg id="2621908354" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 6 L 6 6 L 6 0" fill="transparent" height="6px" id="MSKNJIIsj" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(16 11)" width="6px" />
          <path d="M 20 10 L 11.5 1.5 L 6.5 6.5 L 0 0" fill="transparent" height="10px" id="qnWzQb1cv" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 7)" width="20px" />
        </svg>
        {"\n"}
        <svg id="79158532" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 5.516 C 0 3.238 1.404 1.196 3.532 0.381 C 5.659 -0.435 8.068 0.146 9.591 1.84 C 9.697 1.954 9.845 2.018 10 2.018 C 10.155 2.018 10.303 1.954 10.409 1.84 C 11.927 0.135 14.343 -0.453 16.475 0.364 C 18.607 1.181 20.011 3.233 20 5.516 C 20 7.806 18.5 9.516 17 11.016 L 11.508 16.329 C 11.131 16.762 10.586 17.012 10.012 17.016 C 9.438 17.02 8.89 16.776 8.508 16.348 L 3 11.016 C 1.5 9.516 0 7.816 0 5.516" fill="transparent" height="17.016074446131555px" id="BmMuopOcR" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 3.984)" width="20.00006277311737px" />
        </svg>
        {"\n"}
        <svg id="1345693024" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 0 14" fill="transparent" height="14px" id="HYq22p1Es" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 5)" width="1px" />
          <path d="M 14 0 L 7 7 L 0 0" fill="transparent" height="7px" id="Q_xjWCAtV" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 12)" width="14px" />
        </svg>
        {"\n"}
        <svg id="884851057" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 C 3.964 -0.001 7.555 2.34 9.153 5.968 C 10.751 9.596 10.056 13.825 7.38 16.75" fill="transparent" height="16.75000016724502px" id="amheqqsnq" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 2)" width="10.002023448756116px" />
          <path d="M 0 0 L 0 6 L 4 8" fill="transparent" height="8px" id="QmGujlnTx" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 6)" width="4px" />
          <path d="M 0.5 0 C 0.181 0.969 0.013 1.98 0 3" fill="transparent" height="3px" id="Y6G69eNbx" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 8.875)" width="1px" />
          <path d="M 0 0 C 0.562 1.292 1.39 2.45 2.43 3.4" fill="transparent" height="3.3999999999999986px" id="XWiYSrJ5V" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.83 16)" width="2.4299999999999997px" />
          <path d="M 0 0.857 C 0.279 0.553 0.577 0.267 0.891 0" fill="transparent" height="1px" id="LOgRbYhoN" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(4.636 4.378)" width="1px" />
          <path d="M 0 0.38 C 2.494 1.268 5.238 1.132 7.631 0" fill="transparent" height="1px" id="ZNEZNunWe" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8.644 21.04)" width="7.6309999999999985px" />
        </svg>
        {"\n"}
        <svg id="2793158146" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 11 2.006 L 9.704 0.71 C 9.253 0.256 8.64 0 8 0 C 7.36 0 6.747 0.256 6.296 0.71 L 0 7.006" fill="transparent" height="7.005915978420008px" id="fzP0fdMSY" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(11 8.994)" width="11px" />
          <path d="M 2 0 C 0.895 0 0 0.895 0 2 L 0 12 C 0 13.105 0.895 14 2 14 L 12 14 C 13.105 14 14 13.105 14 12" fill="transparent" height="14px" id="T7_OMBOly" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 8)" width="14px" />
          <path d="M 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1m973uw, rgb(0,0,0))" height="2px" id="PzwS6zteo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 6)" width="2px" />
          <path d="M 2 14 C 0.895 14 0 13.105 0 12 L 0 2 C 0 0.895 0.895 0 2 0 L 12 0 C 13.105 0 14 0.895 14 2 L 14 12 C 14 13.105 13.105 14 12 14 Z" fill="transparent" height="14px" id="hL347lWxD" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 2)" width="14px" />
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"26"} />
      {"\n    \n    "}
      <span data-fnj-slot={"27"} />
      {"\n\n\n"}
    </body>
  );
}
