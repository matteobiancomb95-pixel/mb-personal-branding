import { TrendingUp } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";

export const Growth = ({ t }) => (
  <section id="growth" className="bg-bg" data-testid="growth-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <SectionHead eyebrow={t.growth.eyebrow} title={t.growth.title} id="growth" />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="max-w-prose space-y-5 text-base leading-relaxed text-mut lg:text-lg" data-testid="growth-narrative">
            {t.growth.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={t.growth.tagsLabel}>
              {t.growth.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-mut transition-colors duration-200 hover:border-sage hover:text-ink"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <aside
              className="card-lift rounded-2xl border border-line bg-surface p-8 shadow-soft"
              data-testid="growth-example-card"
            >
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                <TrendingUp size={15} />
                {t.growth.exampleLabel}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">
                {t.growth.exampleTitle}
              </h3>
              <p className="mt-2 text-sm text-mut">{t.growth.exampleIntro}</p>

              <ul className="mt-6 space-y-4">
                {t.growth.exampleMetrics.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                    data-testid={`growth-metric-${i}`}
                  >
                    <span className="shrink-0 font-display text-2xl font-extrabold tracking-tight text-brand">
                      {m.value}
                    </span>
                    <span className="text-sm leading-snug text-mut">{m.label}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-mut">
                {t.growth.leversLabel}
              </p>
              <ul className="mt-3 space-y-2.5">
                {t.growth.levers.map((lever, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-ink">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-sage" />
                    {lever}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
