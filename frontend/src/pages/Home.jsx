import { useEffect } from "react";
import { copy } from "../i18n/copy";
import { applyPageSeo } from "../lib/seo";
import { useLenis } from "../hooks/useLenis";
import { Header } from "../components/Header";
import { FlowLine } from "../components/FlowLine";
import { Hero } from "../sections/Hero";
import { Impact } from "../sections/Impact";
import { Expertise } from "../sections/Expertise";
import { Method } from "../sections/Method";
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
    applyPageSeo({ type: "home", locale });
  }, [locale]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`home-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <Hero t={t} />
        <FlowLine />
        <Impact t={t} />
        <Expertise t={t} locale={locale} />
        <Method t={t} />
        <Work t={t} locale={locale} />
        <FlowLine coral />
        <NasciTara t={t} locale={locale} />
        <Principles t={t} />
        <Career t={t} locale={locale} />
        <About t={t} locale={locale} />
        <Growth t={t} locale={locale} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
