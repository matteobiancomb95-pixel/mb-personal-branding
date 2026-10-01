import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { CV_PDF_URL, PORTRAIT_URL } from "../i18n/copy";

const EASE = [0.16, 1, 0.3, 1];

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = ({ t }) => {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="grain relative overflow-hidden" data-testid="hero-section">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_70%_20%,#000,transparent)]" />
      <div className="wrap relative grid grid-cols-12 items-start gap-y-10 pb-24 pt-16 lg:gap-10 lg:pb-32 lg:pt-24">
        <div className="col-span-12 min-w-0 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            className="eyebrow text-brand"
            data-testid="hero-eyebrow"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="display-1 mt-6 font-extrabold text-ink" data-testid="hero-title">
            {t.hero.titleLines.map((line, i) => (
              <span className="mask-line" key={i}>
                <motion.span
                  className={i === t.hero.titleLines.length - 1 ? "text-brand" : undefined}
                  initial={reduce ? { opacity: 0 } : { y: "112%" }}
                  animate={reduce ? { opacity: 1 } : { y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
            className="mt-6 max-w-prose text-base text-mut lg:text-lg"
            data-testid="hero-body"
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
              data-testid="hero-cta-contact"
              className="btn inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand shadow-soft hover:bg-brand-hover"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="btn-arrow" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#work");
              }}
              data-testid="hero-cta-work"
              className="btn inline-flex h-12 items-center gap-2 rounded-xl border border-linestrong px-6 font-display text-sm font-bold text-ink hover:border-brand hover:bg-alt hover:text-brand"
            >
              {t.hero.ctaSecondary}
              <ArrowDown size={16} className="btn-arrow" />
            </a>
            <a
              href={CV_PDF_URL}
              download="Matteo_Bianco_CV.pdf"
              data-testid="hero-cv-download"
              className="link-sweep inline-flex min-h-[44px] items-center gap-2 px-1 text-sm font-semibold text-mut transition-colors duration-200 hover:text-brand"
            >
              <Download size={15} />
              {t.hero.cvLabel}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="col-span-12 min-w-0 flex justify-start lg:col-span-5 lg:justify-end"
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[340px]" data-testid="portrait-composition">
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border"
              style={{ borderColor: "color-mix(in srgb, var(--sage) 55%, transparent)" }}
            />
            <figure className="relative rounded-2xl border border-line bg-surface p-4 shadow-soft">
              <img
                src={PORTRAIT_URL}
                alt={t.hero.portraitAlt}
                data-testid="portrait-image"
                width="800"
                height="800"
                className="aspect-square w-full rounded-xl border border-line object-cover"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
              <figcaption className="flex items-baseline justify-between gap-3 px-1 pb-1 pt-4">
                <span className="font-display text-sm font-bold text-ink">{t.hero.portraitRole}</span>
                <span className="text-[13px] font-semibold text-mut">{t.hero.portraitPlace}</span>
              </figcaption>
            </figure>
            <div
              className="absolute -bottom-5 -left-4 inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 shadow-soft sm:-left-8"
              data-testid="hero-availability-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              <span className="text-[13px] font-semibold text-mut">{t.hero.availability}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
