import { ArrowUpRight, ExternalLink } from "lucide-react";
import { NASCITARA_URL } from "../i18n/copy";
import { Reveal, SectionHead } from "../components/Reveal";
import { ScreenFrame } from "../components/Placeholders";

export const Work = ({ t }) => (
  <section id="work" className="bg-alt" data-testid="work-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <SectionHead eyebrow={t.work.eyebrow} title={t.work.title} id="work" />

      <Reveal className="mt-12">
        <article
          className="card-lift overflow-hidden rounded-2xl border border-line border-l-4 border-l-coral bg-surface shadow-soft"
          data-testid="work-featured-nascitara"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-flex w-fit items-center rounded-full border border-coral px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral">
                {t.work.featured.category}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink lg:text-3xl">
                NasciTara
              </h3>
              <p className="mt-2 font-display text-lg font-semibold leading-snug text-ink">
                {t.work.featured.title}
              </p>
              <p className="mt-4 max-w-prose text-mut">{t.work.featured.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={NASCITARA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="nascitara-external-link"
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand px-6 py-2.5 font-display text-sm font-bold text-onbrand transition-colors duration-200 hover:bg-brand-hover"
                >
                  {t.work.featured.ctaTry}
                  <ExternalLink size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#nascitara"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector("#nascitara");
                    if (el) window.__lenis ? window.__lenis.scrollTo(el, { offset: -84 }) : el.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-testid="nascitara-case-link"
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-linestrong px-6 py-2.5 font-display text-sm font-bold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
                >
                  {t.work.featured.ctaCase}
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
            <div className="flex items-center p-6 lg:p-10">
              <ScreenFrame label={t.work.featured.screenLabel} note={t.work.featured.screenNote} />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        {t.work.small.map((p, i) => (
          <Reveal key={i} delay={0.08 + i * 0.08}>
            <article
              className="card-lift h-full rounded-2xl border border-line bg-surface p-8 shadow-soft"
              data-testid={`work-card-${i}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-mut">{p.role}</p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-3 text-mut">{p.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
