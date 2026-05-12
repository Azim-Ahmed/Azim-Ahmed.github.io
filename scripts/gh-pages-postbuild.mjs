import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const clientDir = join(root, "dist", "client");
const indexHtml = join(clientDir, "index.html");

if (!existsSync(indexHtml)) {
  console.warn("[gh-pages-postbuild] dist/client/index.html not found; skip 404.html copy.");
  process.exit(0);
}
if (existsSync("public/sitemap.xml")) {
  copyFileSync("public/sitemap.xml", "dist/sitemap.xml");
}

if (existsSync("public/robots.txt")) {
  copyFileSync("public/robots.txt", "dist/robots.txt");
}
copyFileSync(indexHtml, join(clientDir, "404.html"));
console.log("[gh-pages-postbuild] wrote dist/client/404.html for GitHub Pages SPA fallback.");
console.log("✅ GitHub Pages postbuild completed");