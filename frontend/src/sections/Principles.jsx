import { Reveal, SectionHead } from "../components/Reveal";

export const Principles = ({ t }) => (
  <section id="principles" className="bg-bg" data-testid="principles-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <SectionHead eyebrow={t.principles.eyebrow} title={t.principles.title} id="principles" />
      <div className="mt-10">
        {t.principles.items.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <div
              className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-8 transition-colors duration-200 last:border-b hover:bg-surface lg:py-10"
              data-testid={`principle-${p.n}`}
            >
              <span className="col-span-2 font-display text-sm font-bold tracking-widest text-mut sm:col-span-1">
                {p.n}
              </span>
              <h3 className="col-span-10 font-display text-2xl font-bold tracking-tight text-ink transition-transform duration-200 group-hover:translate-x-2 sm:col-span-5 lg:text-3xl">
                {p.title}
              </h3>
              <p className="col-span-10 col-start-3 max-w-prose text-mut sm:col-span-5 sm:col-start-7">
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
