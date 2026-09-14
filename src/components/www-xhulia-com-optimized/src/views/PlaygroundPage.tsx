import React, { Suspense } from "react";
import InfiniteCanvas from "@/src/sections/playground/InfiniteCanvas";
import Variant1 from "@/src/sections/playground/Variant1";
import Menu from "@/src/sections/playground/Menu";

/** The "/playground" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function PlaygroundPage() {
  return (
    <body>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"TBI73Shuw\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"lowlsw\",\"mediaQuery\":\"(min-width: 1440px)\"},{\"hash\":\"euv2z5\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1439.98px)\"},{\"hash\":\"17zk4q0\",\"mediaQuery\":\"(max-width: 809.98px)\"}]}"} data-framer-ssr-released-at="2026-07-10T11:33:00.876Z" data-framer-page-optimized-at="2026-07-13T09:11:08.868Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: var(--token-44bb1f51-00a4-432e-ae8f-cf0c755101c9, rgb(250, 250, 250)); }" }} />
          <div data-framer-root="" className="framer-UBktm framer-QhsE0 framer-OFUjM framer-PNkr2 framer-lowlsw" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="framer-olprwl-container">
              <Suspense fallback={null}>
                <div style={{ width: "100%", height: "100%", pointerEvents: "none", opacity: "0.2", mixBlendMode: "normal", backgroundImage: "radial-gradient(\n            circle at center,\n            rgb(0, 0, 0) 13.44%,\n            transparent 13.94%\n        )", backgroundSize: "9.30232558139535px 9.30232558139535px", backgroundPosition: "0px 0px", backgroundRepeat: "repeat" }} />
              </Suspense>
            </div>
            <div className="framer-1jynzk7" data-framer-name="Desc" style={{ transform: "translate(-50%, -50%)" }}>
              <div className="framer-5klm1c">
                <svg className="framer-1vGUf framer-1x7d3re" role="presentation" viewBox="0 0 24 24">
                  <use href="#2793158146" />
                </svg>
                <div className="framer-cvmhtg" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <h2 className="framer-text framer-styles-preset-1qrtywy" data-styles-preset="IIkSEjkXr" dir="auto" style={{ "--framer-text-alignment": "center" }}>
                    {"Playground"}
                  </h2>
                </div>
                <div className="framer-1iux8c8" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p className="framer-text framer-styles-preset-qrli1b" data-styles-preset="UDO3Mrpe3" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-5979ac64-e8aa-4ccb-8919-2afa2f23116b, rgb(161, 161, 170))" }}>
                    {"Old work, side projects"}
                    <br className="framer-text" />
                    {"& random expolations"}
                  </p>
                </div>
              </div>
            </div>
            <InfiniteCanvas />
            <div className="framer-1xgvn7t-container">
              <div className="ssr-variant hidden-17zk4q0">
                <Variant1 />
              </div>
              <div className="ssr-variant hidden-lowlsw hidden-euv2z5">
                <div className="framer-2t2MP framer-u4a13h framer-v-gaff4n" data-framer-name="Mobile" style={{ height: "100%", width: "100%", willChange: "transform", opacity: "1", transform: "none" }}>
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
            <div className="ssr-variant hidden-17zk4q0">
              <div className="framer-1pt00u9" style={{ transform: "translateX(-50%)" }}>
                <div className="framer-41hxt5" data-border="true" data-framer-name="Menu">
                  <div className="framer-znt33l" data-framer-name="!! New header item">
                    <svg className="framer-gWDEt framer-1uffktx" role="presentation" viewBox="0 0 24 24">
                      <use href="#2074948550" />
                    </svg>
                    <div className="framer-nlq7yu" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1qw4r2o" data-styles-preset="eKXAy3RN6" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                        {"Drag to move around "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-lowlsw hidden-euv2z5">
              <div className="framer-1pt00u9">
                <div className="framer-41hxt5" data-border="true" data-framer-name="Menu">
                  <div className="framer-znt33l" data-framer-name="!! New header item">
                    <svg className="framer-gWDEt framer-1uffktx" role="presentation" viewBox="0 0 24 24">
                      <use href="#2074948550" />
                    </svg>
                    <div className="framer-nlq7yu" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1qw4r2o" data-styles-preset="eKXAy3RN6" dir="auto" style={{ "--framer-text-alignment": "center", "--framer-text-color": "var(--token-9172229a-7b1c-488a-a4a9-9856aa96da12, rgb(39, 39, 42))" }}>
                        {"Drag to move around "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" />
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
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
        <svg viewBox="0 0 358.5 253.077" overflow="visible" id="svg-1124610053_985">
          <g>
            <defs>
              <linearGradient id="svg-1124610053_985_idsjIu_1P6eL_1g1296653209" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
                <stop offset="0" stopColor="rgb(210, 237, 248)" stopOpacity="1" />
                <stop offset="1" stopColor="rgb(132, 217, 250)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M 102.782 0.007 C 107.992 -0.11 113.203 1.254 117.786 3.929 L 135.197 14.083 L 154.885 27.202 L 160.783 30.971 C 162.037 31.606 163.536 32.28 165.272 32.907 C 167.827 33.828 170.642 34.386 173.129 34.729 L 335.435 34.729 C 350.128 34.729 360.297 46.1 358.191 59.834 L 358.5 234.003 C 356.955 243.693 346.089 253.077 334.082 253.077 L 24.632 253.077 C 12.625 253.077 3.661 244.054 2.187 234.363 L 0.269 28.248 C -1.805 14 8.328 2.108 23.136 1.777 Z" fill="url(#svg-1124610053_985_idsjIu_1P6eL_1g1296653209)" stroke="rgba(0, 0, 0, 0.05)" strokeMiterlimit="10" />
          </g>
        </svg>
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
        <svg id="2793158146" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 11 2.006 L 9.704 0.71 C 9.253 0.256 8.64 0 8 0 C 7.36 0 6.747 0.256 6.296 0.71 L 0 7.006" fill="transparent" height="7.005915978420008px" id="fzP0fdMSY" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(11 8.994)" width="11px" />
          <path d="M 2 0 C 0.895 0 0 0.895 0 2 L 0 12 C 0 13.105 0.895 14 2 14 L 12 14 C 13.105 14 14 13.105 14 12" fill="transparent" height="14px" id="T7_OMBOly" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 8)" width="14px" />
          <path d="M 0 1 C 0 0.448 0.448 0 1 0 C 1.552 0 2 0.448 2 1 C 2 1.552 1.552 2 1 2 C 0.448 2 0 1.552 0 1 Z" fill="var(--1m973uw, rgb(0,0,0))" height="2px" id="PzwS6zteo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 6)" width="2px" />
          <path d="M 2 14 C 0.895 14 0 13.105 0 12 L 0 2 C 0 0.895 0.895 0 2 0 L 12 0 C 13.105 0 14 0.895 14 2 L 14 12 C 14 13.105 13.105 14 12 14 Z" fill="transparent" height="14px" id="hL347lWxD" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 2)" width="14px" />
        </svg>
        {"\n"}
        <svg id="3506390244" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 11.002 4.993 L 6.702 0.693 C 5.762 -0.243 4.242 -0.243 3.302 0.693 L 0.702 3.293 C -0.234 4.233 -0.234 5.753 0.702 6.693 L 5.002 10.993" fill="transparent" height="10.993091641334757px" id="xewOoIQvh" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(1.998 2.007)" width="11.001755286851441px" />
          <path d="M 0 2 L 2 0" fill="transparent" height="2px" id="yJuFZaVBZ" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 4)" width="2px" />
          <path d="M 0 2 L 2 0" fill="transparent" height="2px" id="V6C3sC9dB" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(18 14)" width="2px" />
          <path d="M 6 0 L 10.3 4.3 C 11.24 5.24 11.24 6.76 10.3 7.7 L 7.7 10.3 C 6.76 11.24 5.24 11.24 4.3 10.3 L 0 6" fill="transparent" height="11.005000000000003px" id="mfuv8TJME" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(11 11)" width="11.005000000000003px" />
          <path d="M 19.174 4.812 C 20.275 3.712 20.275 1.927 19.174 0.826 C 18.074 -0.275 16.289 -0.275 15.188 0.825 L 1.842 14.174 C 1.61 14.406 1.438 14.691 1.342 15.004 L 0.021 19.356 C -0.032 19.533 0.017 19.723 0.147 19.853 C 0.277 19.983 0.468 20.031 0.644 19.978 L 4.997 18.658 C 5.31 18.563 5.595 18.392 5.827 18.161 Z" fill="transparent" height="19.999558862194533px" id="CTtDfWE_m" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 2)" width="19.999828333907345px" />
          <path d="M 0 0 L 4 4" fill="transparent" height="4px" id="iB1tF6M4l" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(15 5)" width="4px" />
        </svg>
        {"\n"}
        <svg id="1952690436" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 0 3.811" fill="transparent" height="3.811px" id="V29rwTgbA" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 10.189)" width="1px" />
          <path d="M 0 0 L 0 3" fill="transparent" height="3px" id="tbF9mGEMn" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 2)" width="1px" />
          <path d="M 14 8 L 14 2 C 14 0.895 13.105 0 12 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 8" fill="transparent" height="8px" id="LWsTwqHEr" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(5 5)" width="14px" />
          <path d="M 16.382 9.811 C 17.457 7.996 18.017 5.921 18.002 3.811 L 9.814 0.172 C 9.297 -0.057 8.707 -0.057 8.19 0.172 L 0.002 3.811 C -0.045 6.655 0.955 9.417 2.812 11.571" fill="transparent" height="11.571253846947009px" id="TZmRy08i9" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2.998 10.189)" width="18.001862914164704px" />
          <path d="M 0 1 C 0.6 1.5 1.2 2 2.5 2 C 5 2 5 0 7.5 0 C 8.8 0 9.4 0.5 10 1 C 10.6 1.5 11.2 2 12.5 2 C 15 2 15 0 17.5 0 C 18.8 0 19.4 0.5 20 1" fill="transparent" height="2px" id="mVmGWodzk" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 20)" width="20px" />
        </svg>
        {"\n"}
        <svg id="148696143" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 1 0 L 1 4" fill="transparent" height="4px" id="M1YwaJWlN" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(11 14)" width="1px" />
          <path d="M 0 0 L 0 4" fill="transparent" height="4px" id="DbyS2hJ9Q" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(16 2)" width="1px" />
          <path d="M 0 0 L 18 0" fill="transparent" height="1px" id="ptZHIKGX7" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 10)" width="18px" />
          <path d="M 0 0 L 0 4" fill="transparent" height="4px" id="AwjGQxcDc" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(8 2)" width="1px" />
          <path d="M 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 16 C 18 17.105 17.105 18 16 18 Z" fill="transparent" height="18px" id="V7XsFdtTD" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(3 4)" width="18px" />
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
        <svg id="2074948550" display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 0 20" fill="transparent" height="20px" id="UN3wgfZrr" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(12 2)" width="1px" />
          <path d="M 6 0 L 3 3 L 0 0" fill="transparent" height="3px" id="cTKqN9lbq" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 19)" width="6px" />
          <path d="M 0 0 L 3 3 L 0 6" fill="transparent" height="6px" id="BSVRMVPdu" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(19 9)" width="3px" />
          <path d="M 0 0 L 20 0" fill="transparent" height="1px" id="HgjL6EXxr" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 12)" width="20px" />
          <path d="M 3 0 L 0 3 L 3 6" fill="transparent" height="6px" id="KGVTkIy05" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(2 9)" width="3px" />
          <path d="M 0 3 L 3 0 L 6 3" fill="transparent" height="3px" id="J72E_RhEo" strokeDasharray="" strokeLinecap="round" strokeLinejoin="round" strokeWidth="var(--js9iwy, 2)" stroke="var(--1m973uw, rgb(0,0,0))" transform="translate(9 2)" width="6px" />
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"22"} />
      {"\n    \n    "}
      <span data-fnj-slot={"23"} />
      {"\n\n\n"}
    </body>
  );
}
