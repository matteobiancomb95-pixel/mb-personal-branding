import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PortraitFrame } from "../components/Placeholders";

const EASE = [0.22, 1, 0.36, 1];

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Hero = ({ t }) => {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="top" className="relative overflow-hidden" data-testid="hero-section">
      <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_70%_20%,#000,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-10 px-5 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-brand"
            data-testid="hero-eyebrow"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1
            className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[4.25rem]"
            data-testid="hero-title"
          >
            {t.hero.titleLines.map((line, i) => (
              <span className="mask-line" key={i}>
                <motion.span
                  initial={reduce ? { opacity: 0 } : { y: "112%" }}
                  animate={reduce ? { opacity: 1 } : { y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.14, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75, ease: EASE }}
            className="mt-6 max-w-prose text-base text-mut lg:text-lg"
            data-testid="hero-body"
          >
            {t.hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
              data-testid="hero-cta-contact"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-brand px-7 py-3 font-display text-sm font-bold text-onbrand shadow-soft transition-colors duration-200 hover:bg-brand-hover"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#work");
              }}
              data-testid="hero-cta-work"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-linestrong px-7 py-3 font-display text-sm font-bold text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              {t.hero.ctaSecondary}
              <ArrowDown size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2"
            data-testid="hero-availability-badge"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
            </span>
            <span className="text-sm font-semibold text-mut">{t.hero.availability}</span>
          </motion.div>
        </div>

        <motion.div
          className="col-span-12 lg:col-span-5"
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ perspective: 900 }}
        >
          <motion.div style={reduce ? {} : { rotateX: rx, rotateY: ry }} className="will-change-transform">
            <PortraitFrame label={t.hero.portraitLabel} note={t.hero.portraitNote} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
