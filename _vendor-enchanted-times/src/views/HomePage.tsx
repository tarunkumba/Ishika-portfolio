import React, { Suspense } from "react";
import Layout from "@/src/Layout";
import Navbar from "@/src/sections/home/Navbar";

/** The repeated copy in this section: every visible string, and every link.
 *
 *  Framer inlines one subtree per breakpoint — desktop, tablet, phone — so
 *  each of these appears once per breakpoint in the markup. Edit it here and
 *  all of them change. */
export const copy = {
  linkHttpsBuyPolar: "https://buy.polar.sh/polar_cl_LGT5ONCWzkhDQs6HHOMxfQaAWhExlrrL4m0W04RKmi8",
  buyNavbar: "Buy Navbar",
  buyFrom5: "Buy From $5",
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
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"augiA20Il\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"72rtr7\"}]}"} data-framer-ssr-released-at="2026-06-23T11:22:54.744Z" data-framer-page-optimized-at="2026-06-26T09:22:37.090Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: rgb(255, 255, 255); }" }} />
          <div data-framer-root="" className="framer-LZjWB framer-72rtr7" style={{ minHeight: "100vh", width: "auto" }}>
            <div className="framer-1mh05ke-container">
              <Navbar />
            </div>
            <div className="framer-xu92a6-container">
              <Suspense fallback={null}>
                <div style={{ borderRadius: "0px", overflow: "hidden", position: "relative", height: "100%", width: "100%" }}>
                  <canvas style={{ height: "100%", width: "100%" }} />
                </div>
              </Suspense>
            </div>
            <div className="framer-1m6k957-container">
              <Suspense fallback={null}>
                <Suspense fallback={null}>
                  <a className="framer-PwfwC framer-1j0zyzk framer-v-1j0zyzk framer-1ds85gs" data-framer-appear-id="1j0zyzk" data-framer-name="Desktop" data-highlight="true" href={copy.linkHttpsBuyPolar} target="_blank" rel="noopener" style={{ backgroundColor: "rgb(48, 48, 48)", width: "100%", willChange: "transform", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", opacity: "0.001", transform: "translateY(20px) scale(0)" }}>
                    <div className="framer-1aob5wd" style={{ borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px", borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}>
                      <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                        <img width="1200" height="630" sizes="calc(137px - 16px)" srcSet="/assets/img/b868f12fd002f205.webp 512w, /assets/img/174a6576ad13a546.webp 1024w, /assets/img/35201bb0c2b55439.webp 1200w" src="/assets/img/35201bb0c2b55439.webp" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="eager" fetchPriority="high" />
                      </div>
                    </div>
                    <div className="framer-xhzj72">
                      <div className="framer-1paqj8d" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p dir="auto" className="framer-text" style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }}>
                          {copy.buyNavbar}
                        </p>
                      </div>
                      <div className="framer-1ykfl56" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(145, 255, 0)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                        <p dir="auto" className="framer-text" style={{ "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, rgb(145, 255, 0))" }}>
                          {copy.buyFrom5}
                        </p>
                      </div>
                      <div className="framer-ugjjri" data-framer-name="Logo Framer">
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width="46" height="46" src="/assets/img/1c66bb77c047d406.svg" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                        </div>
                      </div>
                      <div className="framer-1tiyo3s" data-framer-name="Logo Folga" style={{ transform: "translateY(-50%)" }}>
                        <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width="117" height="117" src="/assets/img/4790ad76aa9abb59.svg" alt="" style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Suspense>
              </Suspense>
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
