import { useRef, useState } from "react";
import { Check, ExternalLink, Info, Play, Sparkles } from "lucide-react";
import { NASCITARA_FLOW_IMG, NASCITARA_REEL, NASCITARA_URL } from "../i18n/copy";
import { Reveal } from "../components/Reveal";

export const NasciTara = ({ t }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const startVideo = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  return (
    <section id="nascitara" className="bg-bg" data-testid="nascitara-section">
      <div className="wrap py-24 lg:py-36">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
          <div className="grid grid-cols-1 items-center gap-8 border-b border-line bg-alt p-8 lg:grid-cols-12 lg:p-12">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow text-coral" data-testid="nascitara-eyebrow">
                {t.nascitara.eyebrow}
              </p>
              <h2 className="display-2 mt-3 max-w-2xl font-bold text-ink" data-testid="nascitara-title">
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
                  <Check size={18} className="text-brand" aria-hidden="true" />
                  {t.nascitara.todayTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {t.nascitara.today.map((item) => (
                    <li key={item} className="flex gap-3 text-mut">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="p-8 lg:p-12">
              <div data-testid="nascitara-future">
                <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
                  <Sparkles size={18} className="text-coral" aria-hidden="true" />
                  {t.nascitara.futureTitle}
                </h3>
                <ul className="mt-6 space-y-4">
                  {t.nascitara.future.map((item) => (
                    <li key={item} className="flex gap-3 text-mut">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-coral" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-line p-8 lg:p-12" data-testid="nascitara-video-block">
            <Reveal>
              <p className="eyebrow text-mut">{t.nascitara.videoLabel}</p>
              <p className="mt-2 max-w-prose text-sm text-mut">{t.nascitara.videoCaption}</p>
              <div className="relative mx-auto mt-6 max-w-3xl overflow-hidden rounded-2xl border border-line shadow-soft" style={{ backgroundColor: "#10232C" }}>
                <video
                  ref={videoRef}
                  src={NASCITARA_REEL}
                  poster="/assets/nascitara-reel-poster.jpg"
                  controls={playing}
                  playsInline
                  preload="none"
                  className="max-h-[70vh] w-full object-contain"
                  data-testid="nascitara-video"
                />
                {!playing && (
                  <button
                    type="button"
                    onClick={startVideo}
                    aria-label={t.nascitara.videoPlay}
                    data-testid="nascitara-video-play"
                    className="absolute inset-0 flex items-center justify-center transition-colors duration-200 hover:bg-black/10"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lift transition-transform duration-200 hover:scale-105">
                      <Play size={22} className="ml-0.5 text-coral" fill="currentColor" aria-hidden="true" />
                    </span>
                  </button>
                )}
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
              className="btn inline-flex h-12 shrink-0 items-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand hover:bg-brand-hover"
            >
              {t.nascitara.cta}
              <ExternalLink size={15} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
