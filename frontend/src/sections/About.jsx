import { Reveal, SectionHead } from "../components/Reveal";
import { SectionCta } from "../components/SectionCta";
import { sectionPath } from "../routes";

export const About = ({ t, locale = "it", page = false }) => {
  const a = t.about;
  const paragraphs = page ? a.page.paragraphs : a.paragraphs;
  const StackHeading = page ? "h2" : "h3";

  return (
    <section id="about" className="bg-alt" data-testid="about-section">
      <div className="wrap py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead
              eyebrow={a.eyebrow}
              title={page ? a.page.title : a.title}
              intro={page ? a.page.intro : undefined}
              as={page ? "h1" : "h2"}
              id="about"
            />
            <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-mut lg:text-lg" data-testid="about-bio">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            {page && (
              <p className="mt-8 text-sm font-semibold text-ink" data-testid="about-credibility">
                {a.page.credibility}
              </p>
            )}
            <div className="mt-10">
              <SectionCta to={sectionPath(page ? "work" : "about", locale)} testId="about-cta">
                {page ? a.page.cta : a.cta}
              </SectionCta>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <aside className="rounded-2xl border border-line bg-surface p-8 shadow-soft" data-testid="about-stack">
                <StackHeading className="font-display text-lg font-bold text-ink">{a.stackTitle}</StackHeading>
                <div className="mt-6 space-y-5">
                  {a.stackGroups.map((group) => (
                    <div key={group.label} data-testid={`stack-group-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-mut">{group.label}</p>
                      <ul className="mt-2.5 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-lg border border-line bg-alt px-2.5 py-1 text-[13px] font-semibold text-mut transition-colors duration-200 hover:border-sage hover:text-ink"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
