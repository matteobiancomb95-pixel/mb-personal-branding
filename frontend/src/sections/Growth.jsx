import { TrendingUp } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { SectionCta } from "../components/SectionCta";
import { projectPath, sectionPath } from "../routes";

export const Growth = ({ t, locale = "it", page = false }) => {
  const g = t.growth;
  const paragraphs = page ? g.page.paragraphs : g.paragraphs;
  const CardHeading = page ? "h2" : "h3";

  return (
    <section id="growth" className="bg-bg" data-testid="growth-section">
      <div className="wrap py-20 lg:py-28">
        <SectionHead
          eyebrow={page ? g.page.eyebrow : g.eyebrow}
          title={page ? g.page.title : g.title}
          intro={page ? g.page.intro : undefined}
          as={page ? "h1" : "h2"}
          id="growth"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-mut lg:text-lg" data-testid="growth-narrative">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-mut">{g.leversLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={g.leversLabel}>
                {g.levers.map((lever) => (
                  <li
                    key={lever}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-mut transition-colors duration-200 hover:border-sage hover:text-ink"
                  >
                    {lever}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="mt-10">
              <SectionCta
                to={page ? projectPath("despar", locale) : sectionPath("growth", locale)}
                testId="growth-cta"
              >
                {page ? g.page.cta : g.cta}
              </SectionCta>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <aside className="card-lift rounded-2xl border border-line bg-surface p-8 shadow-soft" data-testid="growth-example-card">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  <TrendingUp size={15} />
                  {g.exampleLabel}
                </p>
                <CardHeading className="mt-4 font-display text-xl font-bold tracking-tight text-ink">{g.exampleTitle}</CardHeading>
                <p className="mt-2 text-sm text-mut">{g.exampleIntro}</p>
                <ul className="mt-6 space-y-4">
                  {g.exampleMetrics.map((m, i) => (
                    <li
                      key={m.value}
                      className="flex items-baseline gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                      data-testid={`growth-metric-${i}`}
                    >
                      <span className="shrink-0 font-display text-2xl font-extrabold tracking-tight text-brand">{m.value}</span>
                      <span className="text-sm leading-snug text-mut">{m.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 text-[13px] leading-relaxed text-mut">{g.exampleNote}</p>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
