import React, { Suspense } from "react";
import Layout from "@/src/Layout";
import Container from "@/src/sections/style-3/Container";

/** The "/style-3" page, composed from its Framer sections.
 *
 *  Rendered to static HTML by scripts/prerender.mts at build time — never
 *  shipped as a page.tsx, which would duplicate every byte of this markup into
 *  the RSC flight payload on top of the HTML itself. */
export default function Style3Page() {
  return (
    <body>
      <Layout>
      {"\n\t\n\t"}
      <span data-fnj-slot={"0"} />
      {"\n    \n    "}
      <span data-fnj-slot={"1"} />
      {"\n\t\n\t"}
      <div id="main" data-framer-hydrate-v2={"{\"routeId\":\"shVKvZuZ0\",\"localeId\":\"default\",\"breakpoints\":[{\"hash\":\"1u2e8sn\",\"mediaQuery\":\"(min-width: 1920px)\"},{\"hash\":\"18ihcye\",\"mediaQuery\":\"(min-width: 810px) and (max-width: 1919.98px)\"},{\"hash\":\"102thxs\",\"mediaQuery\":\"(max-width: 809.98px)\"}]}"} data-framer-ssr-released-at="2026-05-12T14:28:04.547Z" data-framer-page-optimized-at="2026-05-14T22:32:05.262Z" data-framer-generated-page="">
        <Suspense fallback={null}>
          <style data-framer-html-style="" dangerouslySetInnerHTML={{ __html: "html body { background: rgb(10, 10, 10); }" }} />
          <div data-framer-root="" className="framer-g9lOB framer-1u2e8sn" style={{ minHeight: "100vh", width: "auto" }}>
            <Container />
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
      <div id="svg-templates" style={{ position: "absolute", overflow: "hidden", bottom: "0", left: "0", width: "0", height: "0", zIndex: "0", contain: "strict" }} aria-hidden="true">
        {"\n"}
      </div>
      {"\n\t"}
      <span data-fnj-slot={"14"} />
      {"\n    \n    "}
      <span data-fnj-slot={"15"} />
      {"\n\n\n"}
      </Layout>
    </body>
  );
}
