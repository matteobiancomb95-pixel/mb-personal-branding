import { Reveal, SectionHead } from "../components/Reveal";

export const Method = ({ t }) => (
  <section id="method" className="border-y border-line bg-surface" data-testid="method-section">
    <div className="wrap py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead eyebrow={t.method.eyebrow} title={t.method.title} id="method" />
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-prose leading-relaxed text-mut lg:text-lg">{t.method.body}</p>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="lg:col-span-7">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2" data-testid="method-steps">
            {t.method.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-4 rounded-xl border border-line bg-alt px-5 py-4">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${
                    i === t.method.steps.length - 1 ? "bg-brand text-onbrand" : "border-2 border-linestrong text-mut"
                  }`}
                >
                  {i + 1}
                </span>
                <span className="font-display text-[15px] font-semibold leading-snug text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </div>
  </section>
);
