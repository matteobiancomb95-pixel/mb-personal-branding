import { useEffect } from "react";
import { copy } from "../i18n/copy";
import { applySeo } from "../lib/seo";
import { useLenis } from "../hooks/useLenis";
import { Header } from "../components/Header";
import { Marquee } from "../components/Marquee";
import { Hero } from "../sections/Hero";
import { Impact } from "../sections/Impact";
import { Expertise } from "../sections/Expertise";
import { Work } from "../sections/Work";
import { NasciTara } from "../sections/NasciTara";
import { Career } from "../sections/Career";
import { Principles } from "../sections/Principles";
import { About } from "../sections/About";
import { Growth } from "../sections/Growth";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home({ locale }) {
  const t = copy[locale];

  useLenis([locale]);

  useEffect(() => {
    applySeo(locale, t.seo);
  }, [locale, t]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`home-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <Hero t={t} />
        <Marquee items={t.marquee} />
        <Impact t={t} />
        <Expertise t={t} />
        <Work t={t} locale={locale} />
        <NasciTara t={t} />
        <Career t={t} />
        <Principles t={t} />
        <About t={t} />
        <Growth t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
