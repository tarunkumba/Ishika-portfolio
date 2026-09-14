import React, { Suspense } from "react";
import Layout from "@/src/Layout";
import Variant1 from "@/src/sections/home/Variant1";

/** The repeated copy in this section: every visible string, and every link.
 *
 *  Framer inlines one subtree per breakpoint — desktop, tablet, phone — so
 *  each of these appears once per breakpoint in the markup. Edit it here and
 *  all of them change. */
export const copy = {
  hoverComponents: "Hover components",
  byZakyyyDsgn: "by zakyyy.dsgn",
  linkSvg8564090621372A1056z: "#svg856409062_1372_a1056z",
  linkSvg11827337831372: "#svg-1182733783_1372_a1064z",
} as const;

/** The "/" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function HomePage() {
  return (
    <body>
      <Layout>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"augiA20Il\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"72rtr7\"}]}"} data-framer-ssr-released-at="2026-08-06T12:57:44.116Z" data-framer-page-optimized-at="2026-08-07T11:34:23.361Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: rgb(255, 255, 255); }" }} />
          <div data-framer-root="" className="framer-4ce3g framer-72rtr7" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="framer-s3bvii-container">
              <Variant1 />
            </div>
            <div className="framer-sq9s9q" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "55px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.02em", "--framer-text-alignment": "center" }} className="framer-text">
                <span data-text-fill="true" style={{ backgroundImage: "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(145, 145, 145) 100%)" }} className="framer-text">
                  {copy.hoverComponents}
                </span>
              </p>
            </div>
            <div className="framer-1tx0q0t" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p dir="auto" style={{ "--framer-font-size": "13px", "--framer-letter-spacing": "-0.01em", "--framer-text-alignment": "center", "--framer-text-color": "rgb(153, 153, 153)" }} className="framer-text">
                {copy.byZakyyyDsgn}
              </p>
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
      {"\n                "}
      <span data-fnj-slot={"5"} />
      {"\n                "}
      <span data-fnj-slot={"6"} />
      <span data-fnj-slot={"7"} />
      {"\n\t"}
      <span data-fnj-slot={"8"} />
      {"\n\t"}
      <span data-fnj-slot={"9"} />
      <span data-fnj-slot={"10"} />
      <span data-fnj-slot={"11"} />
      <span data-fnj-slot={"12"} />
      <span data-fnj-slot={"13"} />
      <span data-fnj-slot={"14"} />
      <span data-fnj-slot={"15"} />
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
        <svg viewBox="0 0 168 81" overflow="visible" id="svg-1123944538_366">
          <path d="M 0 0 L 0 67 C 0 74.732 6.268 81 14 81 L 154 81 C 161.732 81 168 74.732 168 67 L 168 0" fill="transparent" strokeWidth="0.7" stroke="rgb(20, 20, 20)" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3.2" />
        </svg>
        {"\n"}
        <svg viewBox="0 0 149 2.4" overflow="visible" id="svg856409062_1372">
          <g opacity="0.47">
            <defs>
              <path d="M 0 0 L 149 0 L 149 2.4 L 0 2.4 Z" id="svg856409062_1372_a1056z" />
              <filter id="svg856409062_1372_a1058z" filterUnits="objectBoundingBox" x="-4.9%" y="-262.5%" width="109.8%" height="625.0%">
                <feOffset dx="-1" dy="0" in="SourceAlpha" result="a1061z" />
                <feGaussianBlur stdDeviation="1.5" in="a1061z" result="a1062z" />
                <feFlood flood-color="rgba(0, 0, 0, 0.05)" result="a1063z" />
                <feComposite in="a1063z" in2="a1062z" operator="in" result="a1059z" />
              </filter>
              <linearGradient id="svg856409062_1372_idse38wGtTc3_1g54184478" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547">
                <stop offset="0" stopColor="rgb(127, 211, 250)" stopOpacity="1" />
                <stop offset="1" stopColor="rgb(120, 212, 255)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <mask id="svg856409062_1372_a1060z" x="-4.9%" y="-262.5%" width="109.8%" height="625.0%">
              <rect x="-4.9%" y="-262.5%" width="109.8%" height="625.0%" fill="white" />
              <use href={copy.linkSvg8564090621372A1056z} fill="black" />
            </mask>
            <g filter="url(#svg856409062_1372_a1058z)" mask="url(#svg856409062_1372_a1060z)">
              <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href={copy.linkSvg8564090621372A1056z} clipPath="url(#svg856409062_1372_a1057z)" />
            </g>
            <use href={copy.linkSvg8564090621372A1056z} fill="url(#svg856409062_1372_idse38wGtTc3_1g54184478)" clipPath="url(#svg856409062_1372_a1057z)" />
          </g>
        </svg>
        {"\n"}
        <svg viewBox="0 0 149 2.4" overflow="visible" id="svg-1182733783_1372">
          <g opacity="0.47">
            <defs>
              <path d="M 0 0 L 149 0 L 149 2.4 L 0 2.4 Z" id="svg-1182733783_1372_a1064z" />
              <filter id="svg-1182733783_1372_a1066z" filterUnits="objectBoundingBox" x="-4.9%" y="-262.5%" width="109.8%" height="625.0%">
                <feOffset dx="-1" dy="0" in="SourceAlpha" result="a1069z" />
                <feGaussianBlur stdDeviation="1.5" in="a1069z" result="a1070z" />
                <feFlood flood-color="rgba(0, 0, 0, 0.05)" result="a1071z" />
                <feComposite in="a1071z" in2="a1070z" operator="in" result="a1067z" />
              </filter>
              <linearGradient id="svg-1182733783_1372_idsdrQ3z8IHz_1g54184478" x1="0" x2="1" y1="0.4975124378109453" y2="0.5024875621890547">
                <stop offset="0" stopColor="rgb(127, 211, 250)" stopOpacity="1" />
                <stop offset="1" stopColor="rgb(120, 212, 255)" stopOpacity="1" />
              </linearGradient>
            </defs>
            <mask id="svg-1182733783_1372_a1068z" x="-4.9%" y="-262.5%" width="109.8%" height="625.0%">
              <rect x="-4.9%" y="-262.5%" width="109.8%" height="625.0%" fill="white" />
              <use href={copy.linkSvg11827337831372} fill="black" />
            </mask>
            <g filter="url(#svg-1182733783_1372_a1066z)" mask="url(#svg-1182733783_1372_a1068z)">
              <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" href={copy.linkSvg11827337831372} clipPath="url(#svg-1182733783_1372_a1065z)" />
            </g>
            <use href={copy.linkSvg11827337831372} fill="url(#svg-1182733783_1372_idsdrQ3z8IHz_1g54184478)" clipPath="url(#svg-1182733783_1372_a1065z)" />
          </g>
        </svg>
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"16"} />
      {"\n    \n    "}
      <span data-fnj-slot={"17"} />
      {"\n\n\n"}
      </Layout>
    </body>
  );
}
