import { useRef, useState } from "react";
import { ExternalLink, Info, Play } from "lucide-react";
import { NASCITARA_FLOW_IMG, NASCITARA_REEL, NASCITARA_URL } from "../i18n/copy";
import { sectionPath } from "../routes";
import { Reveal } from "../components/Reveal";
import { SectionCta } from "../components/SectionCta";

export const NasciTara = ({ t, locale = "it", page = false }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const n = t.nascitara;
  const Title = page ? "h1" : "h2";
  const Sub = page ? "h2" : "h3";

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
                {n.eyebrow}
              </p>
              <Title
                className={`mt-3 max-w-2xl font-bold text-ink ${page ? "display-h1" : "display-2"}`}
                data-testid="nascitara-title"
              >
                {n.title}
              </Title>
              <p className="mt-4 max-w-prose text-mut lg:text-lg">{n.intro}</p>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-5">
              <img
                src={NASCITARA_FLOW_IMG}
                alt={n.collageAlt}
                data-testid="nascitara-flow-image"
                width="1175"
                height="1568"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-2xl border border-line object-cover object-top shadow-soft"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" data-testid="nascitara-blocks">
            {n.blocks.map((b, i) => (
              <Reveal
                key={b.title}
                delay={0.06 * i}
                className={`border-line p-8 lg:p-10 ${i < n.blocks.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
              >
                <Sub className="font-display text-lg font-bold text-ink">{b.title}</Sub>
                <p className="mt-3 text-[15px] leading-relaxed text-mut">{b.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="border-t border-line p-8 lg:p-12" data-testid="nascitara-process">
            <Reveal>
              <Sub className="font-display text-lg font-bold text-ink">{n.processTitle}</Sub>
              <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {n.process.map((step, i) => (
                  <li key={step} className="flex items-center gap-3.5 rounded-xl border border-line bg-alt px-4 py-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-coral font-display text-[12px] font-bold text-coral">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-ink">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 max-w-prose text-sm text-mut">{n.credibility}</p>
            </Reveal>
          </div>

          <div className="border-t border-line p-8 lg:p-12" data-testid="nascitara-video-block">
            <Reveal>
              <p className="eyebrow text-mut">{n.videoLabel}</p>
              <p className="mt-2 max-w-prose text-sm text-mut">{n.videoCaption}</p>
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
                    aria-label={n.videoPlay}
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

          <div className="flex flex-col items-start justify-between gap-6 border-t border-line p-8 lg:flex-row lg:items-center lg:p-12">
            <Reveal className="flex max-w-2xl items-start gap-3">
              <Info size={18} className="mt-0.5 shrink-0 text-coral" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-mut" data-testid="nascitara-disclaimer">
                {n.disclaimer}
              </p>
            </Reveal>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={NASCITARA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nascitara-vision-cta"
                className="btn inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand hover:bg-brand-hover"
              >
                {n.cta}
                <ExternalLink size={15} className="btn-arrow" />
              </a>
              {page && (
                <SectionCta to={sectionPath("contact", locale)} testId="nascitara-contact-cta">
                  {n.ctaSecondary}
                </SectionCta>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
