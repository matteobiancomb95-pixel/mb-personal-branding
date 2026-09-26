import { Database, Workflow, Rocket } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";

const icons = [Database, Workflow, Rocket];

export const Expertise = ({ t }) => (
  <section id="expertise" className="bg-bg" data-testid="expertise-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <SectionHead eyebrow={t.expertise.eyebrow} title={t.expertise.title} id="expertise" />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {t.expertise.cards.map((card, i) => {
          const Icon = icons[i];
          const wide = i === 2;
          return (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={wide ? "md:col-span-2" : ""}
            >
              <article
                className={`card-lift h-full rounded-2xl border border-line bg-surface p-8 shadow-soft lg:p-10 ${
                  wide ? "md:flex md:items-start md:gap-10" : ""
                }`}
                data-testid={`expertise-card-${i}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-alt text-brand">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div className={wide ? "" : "mt-6"}>
                  <h3 className={`font-display text-xl font-bold tracking-tight text-ink lg:text-2xl ${wide ? "mt-5 md:mt-0" : ""}`}>
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-mut">{card.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Platforms">
                    {card.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-alt px-3.5 py-1.5 text-xs font-semibold text-mut"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
