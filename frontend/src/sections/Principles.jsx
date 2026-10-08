import { Reveal, SectionHead } from "../components/Reveal";

export const Principles = ({ t }) => (
  <section id="principles" className="bg-bg" data-testid="principles-section">
    <div className="wrap py-16 lg:py-24">
      <SectionHead eyebrow={t.principles.eyebrow} title={t.principles.title} id="principles" />
      <ol className="mt-10">
        {t.principles.items.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06}>
            <li
              className="group grid grid-cols-12 items-baseline gap-4 border-t border-line py-7 transition-colors duration-200 hover:bg-surface lg:py-9"
              data-testid={`principle-${p.n}`}
            >
              <span className="col-span-2 font-display text-sm font-bold tracking-widest text-mut sm:col-span-1">{p.n}</span>
              <h3 className="col-span-10 font-display text-xl font-bold tracking-tight text-ink transition-transform duration-200 group-hover:translate-x-2 sm:col-span-11 lg:text-3xl">
                {p.title}
              </h3>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="border-t border-line" />
    </div>
  </section>
);
