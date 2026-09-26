export const SECTIONS = {
  expertise: { it: "competenze", en: "expertise" },
  work: { it: "progetti", en: "projects" },
  nascitara: { it: "nascitara", en: "nascitara" },
  career: { it: "esperienza", en: "experience" },
  about: { it: "profilo", en: "about" },
  growth: { it: "growth", en: "growth" },
  contact: { it: "contatti", en: "contact" },
};

export const PROJECTS = {
  coccolebimbi: "coccolebimbi",
  despar: "despar-centro-sud",
  spoki: "spoki",
  roche: "roche",
};

export const sectionPath = (key, locale) => `/${locale}/${SECTIONS[key][locale]}`;

export const projectPath = (key, locale) => `${sectionPath("work", locale)}/${PROJECTS[key]}`;

export const homePath = (locale) => (locale === "en" ? "/en" : "/");

export const equivalentPath = (pathname, targetLocale) => {
  for (const key of Object.keys(PROJECTS)) {
    for (const loc of ["it", "en"]) {
      if (pathname === `/${loc}/${SECTIONS.work[loc]}/${PROJECTS[key]}`) {
        return `/${targetLocale}/${SECTIONS.work[targetLocale]}/${PROJECTS[key]}`;
      }
    }
  }
  for (const slugs of Object.values(SECTIONS)) {
    for (const loc of ["it", "en"]) {
      if (pathname === `/${loc}/${slugs[loc]}`) return `/${targetLocale}/${slugs[targetLocale]}`;
    }
  }
  return homePath(targetLocale);
};
