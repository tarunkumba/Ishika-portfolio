import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pageFor, renderPage } from "../../src/render";
import View from "../../src/views/Style2Page";

export const dynamic = "force-static";

export async function GET() {
  // In development, render the component on every request so that editing a
  // section and refreshing shows the change — without this the page served is
  // whatever the prerender step captured when `npm run dev` started, and
  // edits appear to do nothing. Production serves the prerendered bytes.
  const html =
    process.env.NODE_ENV === "development"
      ? await renderPage(pageFor("style-2.html"), View)
      : readFileSync(join(process.cwd(), ".rendered", "style-2.html"), "utf8");
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
