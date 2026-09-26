export const setMeta = (name, content, attr = "name") => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const applySeo = (locale, seo) => {
  document.documentElement.lang = locale;
  document.title = seo.title;
  setMeta("description", seo.description);
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:locale", seo.ogLocale, "property");
  setMeta("twitter:title", seo.title);
  setMeta("twitter:description", seo.description);
};
