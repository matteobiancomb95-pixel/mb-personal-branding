import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, y = 12, className = "", ...rest }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const SectionHead = ({ eyebrow, title, intro, id, as: Heading = "h2" }) => (
  <Reveal>
    <p className="eyebrow text-brand" data-testid={`${id}-eyebrow`}>
      {eyebrow}
    </p>
    <Heading
      className={`mt-3 max-w-3xl font-bold text-ink ${Heading === "h1" ? "display-h1" : "display-2"}`}
      data-testid={`${id}-title`}
    >
      {title}
    </Heading>
    {intro && <p className="mt-5 max-w-prose text-base leading-relaxed text-mut lg:text-lg">{intro}</p>}
  </Reveal>
);
