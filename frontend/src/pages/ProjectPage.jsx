import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { copy, logoSrc } from "../i18n/copy";
import { projectPath, sectionPath } from "../routes";
import { applySeo } from "../lib/seo";
import { useLenis } from "../hooks/useLenis";
import { Header } from "../components/Header";
import { Footer } from "../sections/Footer";
import { Reveal } from "../components/Reveal";

const BarsChart = ({ title, bars, values, endLabel }) => {
  const scale = 120 / values[1];
  const h1 = Math.round(values[0] * scale);
  const h2 = Math.round(values[1] * scale);
  return (
    <div data-testid="chart-bars">
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-mut">{title}</p>
      <svg viewBox="0 0 320 190" className="mt-4 w-full" role="img" aria-label={title}>
        <line x1="24" y1="150" x2="296" y2="150" stroke="var(--line-strong)" strokeWidth="1" />
        <rect x="70" y={150 - h1} width="64" height={h1} rx="6" fill="var(--sage)" />
        <rect x="186" y={150 - h2} width="64" height={h2} rx="6" fill="var(--brand)" />
        <text x="102" y={150 - h1 - 8} textAnchor="middle" fill="var(--mut)" fontSize="13" fontWeight="600">{values[0]}</text>
        <text x="218" y={150 - h2 - 8} textAnchor="middle" fill="var(--brand)" fontSize="13" fontWeight="700">{`${values[1]} (${endLabel})`}</text>
        <text x="102" y="170" textAnchor="middle" fill="var(--mut)" fontSize="12" fontWeight="600">{bars[0]}</text>
        <text x="218" y="170" textAnchor="middle" fill="var(--mut)" fontSize="12" fontWeight="600">{bars[1]}</text>
      </svg>
    </div>
  );
};

const StepFlow = ({ steps }) => (
  <div data-testid="chart-steps">
    <ol className="flex flex-wrap items-center gap-y-4">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-display text-[13px] font-bold ${
              i === steps.length - 1 ? "border-brand bg-brand text-onbrand" : "border-line-strong text-mut"
            }`}
          >
            {i + 1}
          </span>
          <span className="ml-2.5 text-sm font-semibold text-ink">{step}</span>
          {i < steps.length - 1 && <span className="mx-4 hidden h-px w-8 bg-line-strong sm:block" aria-hidden="true" />}
          {i < steps.length - 1 && <span className="mx-3 sm:hidden" aria-hidden="true">→</span>}
        </li>
      ))}
    </ol>
  </div>
);

const JourneyFlow = ({ stages }) => (
  <div data-testid="chart-journey">
    <ol className="space-y-0">
      {stages.map((stage, i) => (
        <li key={stage} className="flex flex-col">
          <div className="flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rotate-45"
              style={{ background: i === 1 ? "var(--brand)" : "var(--sage)" }}
              aria-hidden="true"
            />
            <span className={`text-sm font-semibold ${i === 1 ? "text-brand" : "text-ink"}`}>{stage}</span>
          </div>
          {i < stages.length - 1 && (
            <MoveRight size={16} className="my-1.5 ml-[1px] -rotate-90 text-mut" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  </div>
);

export default function ProjectPage({ locale, project }) {
  const t = copy[locale];
  const p = t.projectPages[project];

  useLenis([locale, project]);

  useEffect(() => {
    window.scrollTo(0, 0);
    applySeo(locale, { title: p.seoTitle, description: p.seoDesc, ogLocale: t.seo.ogLocale });
  }, [locale, project, p, t]);

  return (
    <div className="min-h-screen bg-bg text-ink" data-testid={`project-${project}-${locale}`}>
      <Header t={t} locale={locale} />
      <main id="main">
        <div className="wrap pt-10">
          <Link
            to={sectionPath("work", locale)}
            data-testid="project-back"
            className="link-sweep inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-mut transition-colors duration-200 hover:text-brand"
          >
            <ArrowLeft size={15} />
            {t.projectPages.backToProjects}
          </Link>
        </div>

        <div className="wrap grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <p className="eyebrow text-brand" data-testid="project-category">
                  {p.category}
                </p>
                {p.status && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-alt px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-mut" data-testid="project-status">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    {p.status}
                  </span>
                )}
              </div>
              <h1 className="display-2 mt-4 font-extrabold text-ink" data-testid="project-title">
                {p.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2">
                  <span className="flex h-9 items-center rounded-lg bg-white px-2.5">
                    <img src={logoSrc(p.logo)} alt={p.logoAlt} className="max-h-5 w-auto" loading="lazy" decoding="async" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{p.role}</span>
                </span>
                <span className="tnum text-[13px] font-bold uppercase tracking-[0.14em] text-mut">{p.period}</span>
              </div>
              <p className="mt-7 max-w-prose text-base leading-relaxed text-mut lg:text-lg" data-testid="project-intro">
                {p.intro}
              </p>

              <h2 className="mt-10 font-display text-xl font-bold text-ink">{p.activitiesTitle}</h2>
              <ul className="mt-5 space-y-3.5" data-testid="project-activities">
                {p.activities.map((a) => (
                  <li key={a} className="flex gap-3 text-mut">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <aside className="rounded-2xl border border-line bg-surface p-8 shadow-soft" data-testid="project-outcome">
                <h2 className="font-display text-lg font-bold text-ink">{p.outcomeTitle}</h2>

                {p.stats && (
                  <ul className="mt-5 space-y-4">
                    {p.stats.map((s) => (
                      <li key={s.value} className="flex items-baseline gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
                        <span className="tnum shrink-0 font-display text-2xl font-extrabold tracking-tight text-brand">
                          {s.value}
                        </span>
                        <span className="text-sm leading-snug text-mut">{s.label}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-7">
                  {p.chart === "bars" && <BarsChart title={p.chartTitle} bars={p.chartBars} values={p.chartValues} endLabel={p.chartEnd} />}
                  {p.chart === "steps" && <StepFlow steps={p.chartSteps} />}
                  {p.chart === "journey" && <JourneyFlow stages={p.chartStages} />}
                </div>

                <p className="mt-6 border-t border-line pt-4 text-[13px] leading-relaxed text-mut">{p.outcomeNote}</p>
              </aside>
            </Reveal>
          </div>
        </div>

        <div className="wrap pb-20 lg:pb-28">
          <Reveal>
            <Link
              to={sectionPath("contact", locale)}
              data-testid="project-cta"
              className="btn inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand shadow-soft hover:bg-brand-hover"
            >
              {t.projectPages.cta}
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer t={t} />
    </div>
  );
}
