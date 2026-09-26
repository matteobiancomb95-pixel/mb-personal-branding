import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { copy } from "../i18n/copy";
import { homePath } from "../routes";
import { applySeo } from "../lib/seo";
import { useLenis } from "../hooks/useLenis";
import { Header } from "../components/Header";
import { Footer } from "../sections/Footer";
import { Expertise } from "../sections/Expertise";
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

  useLenis([locale, section]);

  useEffect(() => {
    window.scrollTo(0, 0);
    applySeo(locale, { ...t.pageSeo[section], ogLocale: t.seo.ogLocale });
  }, [locale, section, t]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`page-${section}-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-10">
          <Link
            to={homePath(locale)}
            data-testid="page-back-home"
            className="link-sweep inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-mut transition-colors duration-200 hover:text-brand"
          >
            <ArrowLeft size={15} />
            Home
          </Link>
        </div>
        <Section t={t} locale={locale} />
      </main>
      <Footer t={t} />
    </div>
  );
}
