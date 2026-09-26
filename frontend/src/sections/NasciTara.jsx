import { Check, ExternalLink, Info, Sparkles } from "lucide-react";
import { NASCITARA_FLOW_IMG, NASCITARA_URL } from "../i18n/copy";
import { Reveal } from "../components/Reveal";

export const NasciTara = ({ t }) => (
  <section id="nascitara" className="bg-bg" data-testid="nascitara-section">
    <div className="wrap py-24 lg:py-36">
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
        <div className="grid grid-cols-1 items-center gap-8 border-b border-line bg-alt p-8 lg:grid-cols-12 lg:p-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coral" data-testid="nascitara-eyebrow">
              {t.nascitara.eyebrow}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink lg:text-4xl" data-testid="nascitara-title">
              {t.nascitara.title}
            </h2>
            <p className="mt-4 max-w-prose text-mut">{t.nascitara.intro}</p>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <img
              src={NASCITARA_FLOW_IMG}
              alt={t.nascitara.collageAlt}
              data-testid="nascitara-flow-image"
              width="1175"
              height="1568"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl border border-line object-cover object-top shadow-soft"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal className="border-b border-line p-8 md:border-b-0 md:border-r lg:p-12">
            <div data-testid="nascitara-today">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-alt text-brand">
                  <Check size={16} />
                </span>
                {t.nascitara.todayTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {t.nascitara.today.map((item, i) => (
                  <li key={i} className="flex gap-3 text-mut">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="p-8 lg:p-12">
            <div data-testid="nascitara-future">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-alt text-coral">
                  <Sparkles size={16} />
                </span>
                {t.nascitara.futureTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {t.nascitara.future.map((item, i) => (
                  <li key={i} className="flex gap-3 text-mut">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-line p-8 sm:flex-row sm:items-center lg:p-12">
          <Reveal className="flex max-w-2xl items-start gap-3">
            <Info size={18} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-mut" data-testid="nascitara-disclaimer">
              {t.nascitara.disclaimer}
            </p>
          </Reveal>
          <a
            href={NASCITARA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nascitara-vision-cta"
            className="group inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-2.5 font-display text-sm font-bold text-onbrand transition-colors duration-200 hover:bg-brand-hover"
          >
            {t.nascitara.cta}
            <ExternalLink size={15} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
