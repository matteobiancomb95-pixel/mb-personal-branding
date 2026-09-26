import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const paths = [
  { d: "M14 44 V22 L23 33 L32 22 V44", color: "var(--brand)" },
  { d: "M38 22 V44 M38 22 h6.5 a5.5 5.5 0 0 1 0 11 H38 M38 33 h7.5 a5.5 5.5 0 0 1 0 11 H38", color: "var(--sage)" },
];

export const Logo = ({ size = 40, testId = "logo-monogram" }) => {
  const reduce = useReducedMotion();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!reduce && !sessionStorage.getItem("mb-logo-drawn")) {
      setAnimate(true);
      sessionStorage.setItem("mb-logo-drawn", "1");
    }
  }, [reduce]);

  return (
    <svg
      data-testid={testId}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="64" height="64" rx="14" style={{ fill: "#173137" }} />
      {paths.map((p, i) =>
        animate ? (
          <motion.path
            key={i}
            d={p.d}
            stroke={p.color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.55, delay: 0.1 + i * 0.22, ease: [0.16, 1, 0.3, 1] }}
          />
        ) : (
          <path
            key={i}
            d={p.d}
            stroke={p.color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        )
      )}
    </svg>
  );
};
