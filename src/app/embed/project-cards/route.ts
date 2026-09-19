const FRAMER_ORIGIN = "https://bisque-potential-446779.framer.app";
const FRAMER_SHARED_LIB =
  "https://framerusercontent.com/sites/1Ns4AjdEjFZyQYEy1ehx4i/shared-lib.BijRyJ7H.mjs";

const IMPORT_MAP = `
<script type="importmap">
{
  "imports": {
    "${FRAMER_SHARED_LIB}": "/embed/framer-shared-lib"
  }
}
</script>
`;

const CARD_PATCH = `
<style id="ishika-project-card-patch">
  html, body, #main {
    background: #ffffff !important;
  }

  /* Shorter stack viewport — was max-height: 600px */
  div[style*="max-height:600px"] {
    max-height: 440px !important;
  }

  /* Outer pad — room for card shadow + dots, white so no grey band */
  div[style*="padding:40px 40px 60px"] {
    padding: 24px 40px 48px !important;
    background: #ffffff !important;
  }

  /* Code-component root often uses #F5F5F5 */
  div[style*="background-color:rgb(245, 245, 245)"],
  div[style*="background-color:#F5F5F5"],
  div[style*="background-color: #F5F5F5"],
  div[style*="background:#F5F5F5"],
  div[style*="background: #F5F5F5"] {
    background: #ffffff !important;
    background-color: #ffffff !important;
  }

  /* Right column: stop space-between stretch across full card height */
  div[style*="flex-direction:column"][style*="justify-content:space-between"][style*="gap:16px"],
  div[style*="flex-direction:column"][style*="justify-content:space-between"][style*="gap:12px"] {
    justify-content: flex-start !important;
  }

  /* Intentional gap before category + CTA row */
  div[style*="flex-direction:column"][style*="gap:16px"] > div:last-child {
    margin-top: 2.25rem !important;
  }

  div[style*="flex-direction:column"][style*="gap:12px"] > div:last-child {
    margin-top: 1.5rem !important;
  }
</style>
<script id="ishika-project-card-wheel-patch">
(function () {
  if (window.__ishikaCardWheelPatched) return;
  window.__ishikaCardWheelPatched = true;

  function forceWhiteBg() {
    document.documentElement.style.background = "#ffffff";
    if (document.body) document.body.style.background = "#ffffff";
    var main = document.getElementById("main");
    if (main) main.style.background = "#ffffff";
    document.querySelectorAll("[style]").forEach(function (el) {
      var s = el.getAttribute("style") || "";
      if (
        /background(-color)?:\\s*(#F5F5F5|#f5f5f5|rgb\\(245,\\s*245,\\s*245\\))/i.test(s)
      ) {
        el.style.setProperty("background", "#ffffff", "important");
        el.style.setProperty("background-color", "#ffffff", "important");
      }
    });
  }

  function onWheel(e) {
    if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    try {
      window.parent.scrollBy({ top: e.deltaY, left: 0, behavior: "auto" });
    } catch (_) {}
  }

  document.addEventListener("wheel", onWheel, { capture: true, passive: false });
  forceWhiteBg();
  window.addEventListener("load", forceWhiteBg);
  setTimeout(forceWhiteBg, 400);
  setTimeout(forceWhiteBg, 1200);
})();
</script>
`;

export async function GET() {
  const upstream = await fetch(`${FRAMER_ORIGIN}/`, {
    headers: { Accept: "text/html" },
    cache: "no-store",
  });

  if (!upstream.ok) {
    return new Response("Failed to load project cards", { status: 502 });
  }

  let html = await upstream.text();

  if (!/<base\s/i.test(html)) {
    html = html.replace(
      /<head([^>]*)>/i,
      `<head$1><base href="${FRAMER_ORIGIN}/">`,
    );
  }

  // Remap Framer shared-lib to our circular-stack patch (must precede module scripts).
  if (!html.includes('type="importmap"')) {
    html = html.replace(/<head([^>]*)>/i, `<head$1>${IMPORT_MAP}`);
  }

  // Preload our patched module instead of the stock shared-lib.
  html = html.replace(
    `href="${FRAMER_SHARED_LIB}"`,
    'href="/embed/framer-shared-lib"',
  );
  if (html.includes("</body>")) {
    html = html.replace("</body>", `${CARD_PATCH}</body>`);
  } else {
    html += CARD_PATCH;
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
