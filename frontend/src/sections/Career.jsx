import { GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "../components/Reveal";

export const Career = ({ t }) => (
  <section id="career" className="bg-surface" data-testid="career-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <SectionHead eyebrow={t.career.eyebrow} title={t.career.title} id="career" />

      <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-12">
        <ol className="relative col-span-12 space-y-10 border-l border-line-strong pl-8 lg:col-span-7" data-testid="career-timeline">
          {t.career.items.map((item, i) => (
            <li key={i} className="relative">
              <Reveal>
                <span
                  className={`absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    i === 0 ? "border-brand bg-brand" : "border-line-strong bg-surface"
                  }`}
                  aria-hidden="true"
                >
                  {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-onbrand" />}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand" data-testid={`career-period-${i}`}>
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{item.org}</h3>
                <p className="font-display text-base font-semibold text-mut">
                  {item.role} · {item.place}
                </p>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-mut">{item.note}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.15}>
            <aside className="rounded-2xl border border-line bg-alt p-8" data-testid="education-box">
              <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                <GraduationCap size={20} className="text-brand" />
                {t.career.educationTitle}
              </h3>
              <ul className="mt-6 space-y-5">
                {t.career.education.map((ed, i) => (
                  <li key={i} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <p className="font-display font-bold text-ink">{ed.title}</p>
                    <p className="text-sm text-mut">{ed.org}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-mut">{ed.period}</p>
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
