import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { NASCITARA_DETAIL_IMG, NASCITARA_URL, logoSrc } from "../i18n/copy";
import { projectPath, sectionPath } from "../routes";
import { Reveal, SectionHead } from "../components/Reveal";
import { SectionCta } from "../components/SectionCta";

export const Work = ({ t, locale = "it", page = false }) => {
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
        <SectionHead
          eyebrow={t.work.eyebrow}
          title={page ? t.work.page.title : t.work.title}
          intro={page ? t.work.page.intro : undefined}
          as={page ? "h1" : "h2"}
          id="work"
        />
        {page && <p className="mt-4 max-w-prose text-sm text-mut">{t.work.page.note}</p>}

        <Reveal className="mt-12">
          <article
            className="card-lift group overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
            data-testid="work-featured-nascitara"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="inline-flex w-fit items-center rounded-md border border-coral px-3 py-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-coral">
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
                    className="btn inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand hover:bg-brand-hover"
                  >
                    {t.work.featured.ctaTry}
                    <ExternalLink size={15} className="btn-arrow" />
                  </a>
                  <a
                    href={sectionPath("nascitara", locale)}
                    onClick={goToNascitara}
                    data-testid="nascitara-case-link"
                    className="btn inline-flex h-12 items-center gap-2 rounded-xl border border-linestrong px-6 font-display text-sm font-bold text-ink hover:border-brand hover:bg-alt hover:text-brand"
                  >
                    {t.work.featured.ctaCase}
                    <ArrowUpRight size={15} className="btn-arrow" />
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

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.work.small.map((p, i) => (
            <Reveal key={p.key} delay={0.06 * (i + 1)} className="h-full">
              <Link
                to={projectPath(p.key, locale)}
                className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
                data-testid={`work-card-${p.key}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 items-center rounded-lg border border-line bg-white px-2.5">
                    <img src={logoSrc(p.logo)} alt={p.logoAlt} className="max-h-6 w-auto" loading="lazy" decoding="async" />
                  </span>
                  <span className="tnum text-[12px] font-bold uppercase tracking-[0.12em] text-mut">{p.period}</span>
                </div>
                {p.status && (
                  <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-md border border-line bg-alt px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-mut">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {p.status}
                  </span>
                )}
                <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-mut">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-mut">{p.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-brand">
                  {p.cta}
                  <ArrowRight size={14} className="transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {page && (
          <Reveal className="mt-12">
            <SectionCta to={sectionPath("contact", locale)} variant="primary" testId="work-page-cta">
              {t.work.page.cta}
            </SectionCta>
          </Reveal>
        )}
      </div>
    </section>
  );
};
