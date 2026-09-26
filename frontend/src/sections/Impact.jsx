import { Reveal } from "../components/Reveal";

export const Impact = ({ t }) => (
  <section id="impact" className="border-y border-line bg-surface" data-testid="impact-section">
    <div className="wrap py-14 lg:py-16">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-3">
          <p className="eyebrow text-brand" data-testid="impact-eyebrow">
            {t.impact.eyebrow}
          </p>
          <h2 className="font-display text-xl font-bold tracking-tight text-ink lg:text-2xl" data-testid="impact-title">
            {t.impact.title}
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0" data-testid="impact-grid">
          {t.impact.items.map((item, i) => (
            <div
              key={i}
              className={`border-t border-line pt-5 lg:px-8 lg:pt-6 ${i === 0 ? "lg:pl-0" : ""} ${
                i === t.impact.items.length - 1 ? "lg:pr-0" : ""
              }`}
              data-testid={`impact-item-${i}`}
            >
              <span className="tnum font-display text-4xl font-extrabold tracking-tight text-brand lg:text-[2.75rem]">
                {item.value}
              </span>
              <p className="mt-2.5 font-display text-[15px] font-semibold leading-snug text-ink">{item.label}</p>
              <p className="mt-1.5 text-[13px] leading-snug text-mut">{item.context}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
