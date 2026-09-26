import { Reveal } from "../components/Reveal";

export const Impact = ({ t }) => (
  <section id="impact" className="border-b border-line bg-surface" data-testid="impact-section">
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-20">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand" data-testid="impact-eyebrow">
          {t.impact.eyebrow}
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl" data-testid="impact-title">
          {t.impact.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {t.impact.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} className="bg-surface">
            <div className="flex h-full flex-col p-7" data-testid={`impact-item-${i}`}>
              <span className="font-display text-5xl font-extrabold tracking-tight text-brand">{item.value}</span>
              <span className="mt-3 font-display text-base font-semibold leading-snug text-ink">{item.label}</span>
              <span className="mt-auto pt-5 text-sm leading-snug text-mut">{item.context}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
