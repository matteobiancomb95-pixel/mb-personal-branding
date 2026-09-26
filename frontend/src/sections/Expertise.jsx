import { Database, Rocket, Workflow } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";

const icons = [Database, Workflow, Rocket];

export const Expertise = ({ t }) => {
  const [lead, ...support] = t.expertise.cards;
  const LeadIcon = icons[0];

  return (
    <section id="expertise" className="bg-bg" data-testid="expertise-section">
      <div className="wrap py-20 lg:py-28">
        <SectionHead eyebrow={t.expertise.eyebrow} title={t.expertise.title} id="expertise" />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article
              className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-soft lg:p-12"
              data-testid="expertise-card-0"
            >
              <LeadIcon size={22} strokeWidth={1.75} className="text-brand" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink lg:text-[1.75rem]">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-prose text-mut lg:text-lg">{lead.desc}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-8" aria-label="Platforms">
                {lead.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-line bg-alt px-3 py-1.5 text-[13px] font-semibold text-mut"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <div className="flex flex-col gap-5 lg:col-span-5">
            {support.map((card, i) => {
              const Icon = icons[i + 1];
              return (
                <Reveal key={card.title} delay={0.08 * (i + 1)} className="flex-1">
                  <article
                    className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-8"
                    data-testid={`expertise-card-${i + 1}`}
                  >
                    <Icon size={20} strokeWidth={1.75} className="text-brand" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink">{card.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-mut">{card.desc}</p>
                    <p className="mt-auto pt-5 text-[13px] font-semibold text-mut">
                      {card.tags.join(" · ")}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
