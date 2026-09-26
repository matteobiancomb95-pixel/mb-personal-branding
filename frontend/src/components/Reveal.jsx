import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 14, className = "", ...rest }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const SectionHead = ({ eyebrow, title, id }) => (
  <Reveal>
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand" data-testid={`${id}-eyebrow`}>
      {eyebrow}
    </p>
    <h2
      className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight text-ink"
      data-testid={`${id}-title`}
    >
      {title}
    </h2>
  </Reveal>
);
