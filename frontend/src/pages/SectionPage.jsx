import { useEffect } from "react";
import { copy } from "../i18n/copy";
import { applyPageSeo } from "../lib/seo";
import { breadcrumbTrail } from "../lib/seoData";
import { useLenis } from "../hooks/useLenis";
import { Header } from "../components/Header";
import { Breadcrumb } from "../components/Breadcrumb";
import { Footer } from "../sections/Footer";
import { Expertise } from "../sections/Expertise";
import { Method } from "../sections/Method";
import { Work } from "../sections/Work";
import { NasciTara } from "../sections/NasciTara";
import { Career } from "../sections/Career";
import { About } from "../sections/About";
import { Growth } from "../sections/Growth";
import { Contact } from "../sections/Contact";

const SECTION_COMPONENTS = {
  expertise: Expertise,
  work: Work,
  nascitara: NasciTara,
  career: Career,
  about: About,
  growth: Growth,
  contact: Contact,
};

export default function SectionPage({ locale, section }) {
  const t = copy[locale];
  const Section = SECTION_COMPONENTS[section];
  const page = { type: "section", key: section, locale };

  useLenis([locale, section]);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyPageSeo({ type: "section", key: section, locale });
  }, [locale, section]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`page-${section}-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <Breadcrumb items={breadcrumbTrail(page, locale)} label={t.nav.breadcrumb} />
        <Section t={t} locale={locale} page />
        {section === "expertise" && <Method t={t} />}
      </main>
      <Footer t={t} />
    </div>
  );
}
