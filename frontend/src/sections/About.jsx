import { Reveal, SectionHead } from "../components/Reveal";

export const About = ({ t }) => (
  <section id="about" className="bg-alt" data-testid="about-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} id="about" />
          <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-mut lg:text-lg" data-testid="about-bio">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <aside className="rounded-2xl border border-line bg-surface p-8 shadow-soft" data-testid="about-stack">
              <h3 className="font-display text-lg font-bold text-ink">{t.about.stackTitle}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.about.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line bg-alt px-3.5 py-1.5 text-xs font-semibold text-mut transition-colors duration-200 hover:border-sage hover:text-ink"
                  >
                    {s}
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
