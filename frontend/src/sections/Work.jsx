import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { NASCITARA_DETAIL_IMG, NASCITARA_URL } from "../i18n/copy";
import { sectionPath } from "../routes";
import { Reveal, SectionHead } from "../components/Reveal";

export const Work = ({ t, locale = "it" }) => {
  const navigate = useNavigate();

  const goToNascitara = (e) => {
    e.preventDefault();
    const el = document.querySelector("#nascitara");
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84 });
      else el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(sectionPath("nascitara", locale));
    }
  };

  return (
    <section id="work" className="bg-alt" data-testid="work-section">
      <div className="wrap py-20 lg:py-32">
        <SectionHead eyebrow={t.work.eyebrow} title={t.work.title} id="work" />

        <Reveal className="mt-12">
          <article
            className="card-lift group overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
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
                    href={sectionPath("nascitara", locale)}
                    onClick={goToNascitara}
                    data-testid="nascitara-case-link"
                    className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-linestrong px-6 py-2.5 font-display text-sm font-bold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    {t.work.featured.ctaCase}
                    <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
              <div
                className="flex items-center justify-center p-6 lg:p-10"
                style={{ backgroundColor: "color-mix(in srgb, var(--coral) 6%, var(--surface))" }}
              >
                <img
                  src={NASCITARA_DETAIL_IMG}
                  alt={t.work.featured.imageAlt}
                  data-testid="nascitara-screen-image"
                  width="1080"
                  height="960"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-lg rounded-2xl border border-line shadow-lift transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
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
};
