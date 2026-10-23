// Builds the static site into /public. No dependencies: `node build/build.mjs`.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pages } from "./pages.mjs";
import { page, pageHero, btn, site } from "./layout.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

function write(rel, html) {
  const file = join(root, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

for (const p of pages) {
  write(p.path === "/" ? "index.html" : join(p.path, "index.html"), page(p));
}

write("404.html", page({
  path: "/404.html",
  title: "Page not found",
  description: "This page could not be found.",
  body: pageHero({ eyebrow: "404", title: "Page not found", lead: "The page you were looking for has moved or no longer exists.", image: "gsd", buttons: btn("Back to home", "/", { variant: "primary" }) + btn("Contact us", "/contact/") }),
}));

const urls = pages.map((p) => `  <url><loc>${site.url}${p.path}</loc></url>`).join("\n");
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages + 404 into public/`);
