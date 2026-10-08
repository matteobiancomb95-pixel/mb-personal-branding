// Per-route SEO data, shared by the app (runtime <head> updates) and by
// scripts/prerender.mjs (static HTML per route + sitemap.xml at build time).
// Keep imports relative with explicit extensions so Node can load this file.
import { EMAIL, LINKEDIN_URL, PORTRAIT_URL, copy } from "../i18n/copy.js";
import { PROJECTS, SECTIONS, homePath, projectPath, sectionPath } from "../routes.js";

export const SITE_URL = "https://www.mb-personal-branding.it";
export const OG_IMAGE_PATH = "/assets/og-image.png";
export const LOCALES = ["it", "en"];

export const PROJECT_NAMES = {
  coccolebimbi: "CoccoleBimbi",
  despar: "Despar Centro Sud",
  spoki: "Spoki",
  roche: "Roche",
};

const absUrl = (path) => `${SITE_URL}${path}`;

export const pagePath = ({ type, key }, locale) => {
  if (type === "home") return homePath(locale);
  if (type === "section") return sectionPath(key, locale);
  return projectPath(key, locale);
};

// Every canonical, indexable route of the site, in both languages.
export const PAGES = LOCALES.flatMap((locale) => [
  { type: "home", locale },
  ...Object.keys(SECTIONS).map((key) => ({ type: "section", key, locale })),
  ...Object.keys(PROJECTS).map((key) => ({ type: "project", key, locale })),
]).map((page) => ({ ...page, path: pagePath(page, page.locale) }));

const person = (locale) => ({
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Matteo Bianco",
  jobTitle: "CRM & Tech Project Manager, AI & Automation Builder",
  description: copy[locale].seo.personDescription,
  url: absUrl(homePath(locale)),
  image: absUrl(PORTRAIT_URL),
  email: `mailto:${EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Bari", addressCountry: "IT" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Politecnico di Bari" },
    { "@type": "CollegeOrUniversity", name: "Vilnius Gediminas Technical University" },
  ],
  knowsLanguage: ["it", "en"],
  knowsAbout: [
    "CRM",
    "Marketing Automation",
    "Technology Project Management",
    "Systems Integration",
    "Customer Lifecycle Management",
    "WhatsApp Business API",
    "Salesforce",
    "Microsoft Dynamics 365",
    "AI-assisted product development",
  ],
  sameAs: [LINKEDIN_URL],
});

const website = (locale) => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: absUrl("/"),
  name: "Matteo Bianco",
  inLanguage: locale,
  publisher: { "@id": `${SITE_URL}/#person` },
});

const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absUrl(item.path),
  })),
});

// Visible breadcrumb trail for a page (also used for BreadcrumbList).
export const breadcrumbTrail = (page, locale) => {
  const t = copy[locale];
  const home = { name: t.nav.home, path: homePath(locale) };
  if (page.type === "home") return [home];
  if (page.type === "section") return [home, { name: t.nav[page.key], path: sectionPath(page.key, locale) }];
  return [
    home,
    { name: t.nav.work, path: sectionPath("work", locale) },
    { name: PROJECT_NAMES[page.key], path: projectPath(page.key, locale) },
  ];
};

export const pageHead = (page) => {
  const { type, key, locale } = page;
  const t = copy[locale];
  const other = locale === "it" ? "en" : "it";

  let title;
  let description;
  let h1;
  if (type === "home") {
    title = t.seo.title;
    description = t.seo.description;
    h1 = t.hero.titleLines.join(" ");
  } else if (type === "section") {
    title = t.pageSeo[key].title;
    description = t.pageSeo[key].description;
    h1 = t[key].page?.title ?? t[key].title;
  } else {
    title = t.projectPages[key].seoTitle;
    description = t.projectPages[key].seoDesc;
    h1 = t.projectPages[key].title;
  }

  const path = pagePath(page, locale);
  const url = absUrl(path);
  const pageNode = {
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  let graph;
  if (type === "home") {
    graph = [website(locale), person(locale), { "@type": "ProfilePage", ...pageNode, mainEntity: { "@id": `${SITE_URL}/#person` } }];
  } else if (type === "project") {
    graph = [
      person(locale),
      { "@type": "WebPage", ...pageNode, breadcrumb: breadcrumb(breadcrumbTrail(page, locale)) },
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        name: h1,
        headline: h1,
        description,
        inLanguage: locale,
        url,
        author: { "@id": `${SITE_URL}/#person` },
        about: PROJECT_NAMES[key],
      },
    ];
  } else {
    const type = key === "about" ? "ProfilePage" : "WebPage";
    graph = [
      person(locale),
      {
        "@type": type,
        ...pageNode,
        breadcrumb: breadcrumb(breadcrumbTrail(page, locale)),
        ...(key === "about" ? { mainEntity: { "@id": `${SITE_URL}/#person` } } : {}),
      },
    ];
  }

  return {
    lang: locale,
    path,
    title,
    description,
    h1,
    canonical: url,
    alternates: [
      { hreflang: locale, href: url },
      { hreflang: other, href: absUrl(pagePath(page, other)) },
      { hreflang: "x-default", href: absUrl(pagePath(page, "it")) },
    ].sort((a, b) => a.hreflang.localeCompare(b.hreflang)),
    ogType: type === "project" ? "article" : type === "home" ? "profile" : "website",
    ogLocale: t.seo.ogLocale,
    ogLocaleAlternate: copy[other].seo.ogLocale,
    ogImage: absUrl(OG_IMAGE_PATH),
    ogImageAlt: "Matteo Bianco, CRM & Tech Project Manager, AI & Automation Builder",
    jsonLd: { "@context": "https://schema.org", "@graph": graph },
  };
};
