import { BadgeCheck, GraduationCap } from "lucide-react";
import { logoSrc } from "../i18n/copy";
import { Reveal, SectionHead } from "../components/Reveal";

const LOGOS = [
  { key: "coccolebimbi", name: "CoccoleBimbi" },
  { key: "despar", name: "Despar Centro Sud" },
  { key: "spoki", name: "Spoki" },
  { key: "roche", name: "Roche" },
  { key: "deloitte", name: "Deloitte" },
  { key: "lipari", name: "Lipari Consulting" },
];

export const Career = ({ t }) => (
  <section id="career" className="bg-surface" data-testid="career-section">
    <div className="wrap py-20 lg:py-28">
      <SectionHead eyebrow={t.career.eyebrow} title={t.career.title} id="career" />

      <Reveal className="mt-8">
        <div data-testid="career-logos">
          <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-mut">{t.career.logosLabel}</p>
          <ul className="mt-4 flex flex-wrap items-center gap-3">
            {LOGOS.map((logo) => (
              <li
                key={logo.key}
                className="flex h-14 items-center rounded-xl border border-line bg-white px-4 opacity-80 grayscale-[40%] transition-all duration-200 hover:opacity-100 hover:grayscale-0"
                data-testid={`career-logo-${logo.key}`}
              >
                <img
                  src={logoSrc(logo.key)}
                  alt={logo.name}
                  className="max-h-7 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <ol className="border-t border-line" data-testid="career-timeline">
          {t.career.items.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-1 gap-1.5 border-b border-line py-6 lg:grid-cols-[170px_minmax(0,5fr)_minmax(0,6fr)] lg:items-baseline lg:gap-10 lg:py-7"
              data-testid={`career-item-${i}`}
            >
              <div className="flex items-center gap-2.5">
                {i === 0 && <span className="h-2 w-2 shrink-0 rounded-full bg-sage" aria-hidden="true" />}
                <span className="tnum text-[13px] font-bold uppercase tracking-[0.14em] text-brand" data-testid={`career-period-${i}`}>
                  {item.period}
                </span>
                {i === 0 && (
                  <span className="rounded-md border border-line bg-alt px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-mut">
                    {t.career.currentLabel}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-[17px] font-bold leading-snug text-ink">{item.org}</h3>
                <p className="text-sm font-semibold text-mut">
                  {item.role} · {item.place}
                </p>
              </div>
              <p className="max-w-prose text-sm leading-relaxed text-mut lg:text-[15px]">{item.note}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14" data-testid="education-box">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
            <GraduationCap size={20} className="text-brand" aria-hidden="true" />
            {t.career.educationTitle}
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.career.education.map((ed, i) => (
              <li key={i} className="rounded-xl border border-line bg-alt p-5">
                <p className="font-display text-[15px] font-bold text-ink">{ed.title}</p>
                <p className="mt-1 text-sm leading-snug text-mut">{ed.org}</p>
                <p className="tnum mt-2 text-[12px] font-semibold uppercase tracking-wider text-mut">{ed.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10" data-testid="certifications-box">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
            <BadgeCheck size={20} className="text-brand" aria-hidden="true" />
            {t.career.certTitle}
          </h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.career.certs.map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-2.5 rounded-xl border border-line bg-alt px-4 py-3 text-sm font-semibold leading-snug text-mut"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-sage" aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
