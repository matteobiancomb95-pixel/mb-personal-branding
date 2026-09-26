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

export const SectionHead = ({ eyebrow, title, id }) => (
  <Reveal>
    <p className="eyebrow text-brand" data-testid={`${id}-eyebrow`}>
      {eyebrow}
    </p>
    <h2 className="display-2 mt-3 max-w-2xl font-bold text-ink" data-testid={`${id}-title`}>
      {title}
    </h2>
  </Reveal>
);
