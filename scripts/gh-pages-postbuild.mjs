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

copyFileSync(indexHtml, join(clientDir, "404.html"));
console.log("[gh-pages-postbuild] wrote dist/client/404.html for GitHub Pages SPA fallback.");
