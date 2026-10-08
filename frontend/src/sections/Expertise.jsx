import { ClipboardCheck, Database, Sparkles, Workflow } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";
import { SectionCta } from "../components/SectionCta";
import { sectionPath } from "../routes";

const icons = [Database, ClipboardCheck, Workflow, Sparkles];

const Cards = ({ cards }) => {
  const [lead, ...support] = cards;
  const LeadIcon = icons[0];
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
      <Reveal className="lg:col-span-6">
        <article
          className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-8 shadow-soft lg:p-12"
          data-testid="expertise-card-0"
        >
          <LeadIcon size={22} strokeWidth={1.75} className="text-brand" aria-hidden="true" />
          <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink lg:text-[1.75rem]">{lead.title}</h3>
          <p className="mt-3 max-w-prose text-mut lg:text-lg">{lead.desc}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-8" aria-label="Platforms">
            {lead.tags.map((tag) => (
              <li key={tag} className="rounded-lg border border-line bg-alt px-3 py-1.5 text-[13px] font-semibold text-mut">
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
      <div className="flex flex-col gap-5 lg:col-span-6">
        {support.map((card, i) => {
          const Icon = icons[i + 1];
          return (
            <Reveal key={card.title} delay={0.08 * (i + 1)} className="flex-1">
              <article
                className="card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-7"
                data-testid={`expertise-card-${i + 1}`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} strokeWidth={1.75} className="shrink-0 text-brand" aria-hidden="true" />
                  <h3 className="font-display text-lg font-bold tracking-tight text-ink">{card.title}</h3>
                </div>
                <p className="mt-2.5 text-[15px] leading-relaxed text-mut">{card.desc}</p>
                <p className="mt-auto pt-4 text-[13px] font-semibold text-mut">{card.tags.join(" · ")}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

const PageSections = ({ page }) => (
  <ol className="mt-12 border-t border-line" data-testid="expertise-page-sections">
    {page.sections.map((s, i) => (
      <Reveal key={s.title} delay={0.04 * i}>
        <li className="grid grid-cols-1 gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
          <div className="flex items-baseline gap-4 lg:col-span-5">
            <span className="tnum font-display text-sm font-bold tracking-widest text-mut">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="font-display text-xl font-bold tracking-tight text-ink lg:text-2xl">{s.title}</h2>
          </div>
          <div className="max-w-prose lg:col-span-7">
            <p className="leading-relaxed text-mut lg:text-lg">{s.body}</p>
            {s.meta && <p className="mt-3 text-[13px] font-semibold text-mut">{s.meta}</p>}
          </div>
        </li>
      </Reveal>
    ))}
  </ol>
);

export const Expertise = ({ t, locale = "it", page = false }) => (
  <section id="expertise" className="bg-bg" data-testid="expertise-section">
    <div className="wrap py-20 lg:py-28">
      <SectionHead
        eyebrow={t.expertise.eyebrow}
        title={page ? t.expertise.page.title : t.expertise.title}
        intro={page ? t.expertise.page.intro : t.expertise.intro}
        as={page ? "h1" : "h2"}
        id="expertise"
      />
      {page ? <PageSections page={t.expertise.page} /> : <Cards cards={t.expertise.cards} />}
      <div className="mt-10 flex flex-col items-start gap-5">
        {page && <p className="max-w-prose text-sm text-mut">{t.expertise.page.note}</p>}
        <SectionCta to={sectionPath(page ? "work" : "expertise", locale)} testId="expertise-cta">
          {page ? t.expertise.page.cta : t.expertise.cta}
        </SectionCta>
      </div>
    </div>
  </section>
);
