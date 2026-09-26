import { useEffect } from "react";
import Lenis from "lenis";
import { copy } from "../i18n/copy";
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
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

const setMeta = (name, content, attr = "name") => {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export default function Home({ locale }) {
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.seo.title;
    setMeta("description", t.seo.description);
    setMeta("og:title", t.seo.title, "property");
    setMeta("og:description", t.seo.description, "property");
    setMeta("og:locale", t.seo.ogLocale, "property");
    setMeta("twitter:title", t.seo.title);
    setMeta("twitter:description", t.seo.description);
  }, [locale, t]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, [locale]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`home-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <Hero t={t} />
        <Marquee items={t.marquee} />
        <Impact t={t} />
        <Expertise t={t} />
        <Work t={t} />
        <NasciTara t={t} />
        <Career t={t} />
        <Principles t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
