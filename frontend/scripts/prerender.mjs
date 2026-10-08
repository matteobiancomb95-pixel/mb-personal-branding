// Post-build step: writes one static HTML file per route (correct lang, title,
// description, canonical, hreflang, Open Graph, localized JSON-LD and a
// <noscript> fallback) plus sitemap.xml, so crawlers and link previews get
// the right metadata without running JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PAGES, SITE_URL, pageHead } from "../src/lib/seoData.js";
import { SECTIONS, PROJECTS, homePath, projectPath, sectionPath } from "../src/routes.js";
import { copy } from "../src/i18n/copy.js";

const buildDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../build");
const templatePath = path.join(buildDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const STRIP = [
  /<title>[\s\S]*?<\/title>/g,
  /<meta name="description"[^>]*>/g,
  /<meta property="og:[^"]*"[^>]*>/g,
  /<meta name="twitter:[^"]*"[^>]*>/g,
  /<link rel="canonical"[^>]*>/g,
  /<link rel="alternate"[^>]*>/g,
  /<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,
];

const headTags = (head) =>
  [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}"/>`,
    `<link rel="canonical" href="${esc(head.canonical)}"/>`,
    ...head.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`),
    `<meta property="og:type" content="${head.ogType}"/>`,
    `<meta property="og:site_name" content="Matteo Bianco"/>`,
    `<meta property="og:url" content="${esc(head.canonical)}"/>`,
    `<meta property="og:title" content="${esc(head.title)}"/>`,
    `<meta property="og:description" content="${esc(head.description)}"/>`,
    `<meta property="og:locale" content="${head.ogLocale}"/>`,
    `<meta property="og:locale:alternate" content="${head.ogLocaleAlternate}"/>`,
    `<meta property="og:image" content="${esc(head.ogImage)}"/>`,
    `<meta property="og:image:width" content="1200"/>`,
    `<meta property="og:image:height" content="630"/>`,
    `<meta property="og:image:alt" content="${esc(head.ogImageAlt)}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${esc(head.title)}"/>`,
    `<meta name="twitter:description" content="${esc(head.description)}"/>`,
    `<meta name="twitter:image" content="${esc(head.ogImage)}"/>`,
    `<script type="application/ld+json" id="structured-data">${JSON.stringify(head.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ].join("");

const navLinks = (locale) => {
  const t = copy[locale];
  const links = [
    { href: homePath(locale), label: t.nav.home },
    ...Object.keys(SECTIONS).map((key) => ({ href: sectionPath(key, locale), label: t.nav[key] })),
    ...Object.keys(PROJECTS).map((key) => ({ href: projectPath(key, locale), label: t.projectPages[key].title })),
  ];
  return links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join("");
};

const noscript = (head) =>
  `<noscript><header><p>Matteo Bianco — CRM &amp; Tech Project Manager, AI &amp; Automation Builder</p></header>` +
  `<main><h1>${esc(head.h1)}</h1><p>${esc(head.description)}</p>` +
  `<p>Email: <a href="mailto:matteobianco.mb95@gmail.com">matteobianco.mb95@gmail.com</a></p></main>` +
  `<nav><ul>${navLinks(head.lang)}</ul></nav></noscript>`;

const render = (head) => {
  let html = template;
  for (const re of STRIP) html = html.replace(re, "");
  html = html.replace(/<html[^>]*>/, `<html lang="${head.lang}">`);
  html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1${headTags(head)}`);
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscript(head));
  return html;
};

const outFile = (routePath) =>
  routePath === "/" ? templatePath : path.join(buildDir, ...routePath.split("/").filter(Boolean), "index.html");

const write = (routePath, html) => {
  const file = outFile(routePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};

for (const page of PAGES) {
  const head = pageHead(page);
  if (!head.title || !head.description || !head.h1) throw new Error(`Missing SEO data for ${page.path}`);
  write(page.path, render(head));
}
// /it is an alias of the Italian home page: same content, canonical points to /.
write("/it", render(pageHead({ type: "home", locale: "it" })));

const lastmod = new Date().toISOString().slice(0, 10);
const urls = PAGES.filter((p) => p.locale === "it").map((p) => {
  const head = pageHead(p);
  const alternates = head.alternates
    .map((a) => `<xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}"/>`)
    .join("");
  const en = head.alternates.find((a) => a.hreflang === "en").href;
  return [head.canonical, en].map((loc) => `<url><loc>${esc(loc)}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`).join("\n");
});
fs.writeFileSync(
  path.join(buildDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
);

console.log(`Prerendered ${PAGES.length + 1} routes and sitemap.xml for ${SITE_URL}`);
