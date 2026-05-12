import fs from "fs";
import path from "path";
import fg from "fast-glob";

const SITE_URL = "https://azim-ahmed.github.io";

const staticRoutes = [
  "/",
];

const routeFiles = await fg([
  "src/routes/**/*.{tsx,ts,jsx,js}",
  "!src/routes/__root.*",
]);

function routeFileToPath(file) {
  let route = file
    .replace(/^src\/routes/, "")
    .replace(/\.(tsx|ts|jsx|js)$/, "")
    .replace(/\/index$/, "")
    .replace(/\$/g, ":");

  if (route === "") route = "/";

  route = route
    .replace(/\/route$/, "")
    .replace(/\/page$/, "");

  return route.startsWith("/") ? route : `/${route}`;
}

const dynamicRoutes = routeFiles
  .map(routeFileToPath)
  .filter((route) => !route.includes(":"))
  .filter((route) => !route.includes("["))
  .filter(Boolean);

const allRoutes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]));

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const priority = route === "/" ? "1.0" : "0.8";
    const changefreq = route === "/" ? "weekly" : "monthly";

    return `  <url>
    <loc>${SITE_URL}${route === "/" ? "/" : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

fs.mkdirSync(path.resolve("public"), { recursive: true });
fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve("public/robots.txt"), robots);

console.log(`✅ Sitemap generated with ${allRoutes.length} routes`);