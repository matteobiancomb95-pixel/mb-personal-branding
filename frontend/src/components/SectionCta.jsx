import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const styles = {
  primary: "bg-brand text-onbrand shadow-soft hover:bg-brand-hover",
  secondary: "border border-linestrong text-ink hover:border-brand hover:bg-alt hover:text-brand",
};

export const SectionCta = ({ to, href, children, variant = "secondary", className = "", testId }) => {
  const cls = `btn inline-flex h-12 items-center gap-2 rounded-xl px-6 font-display text-sm font-bold ${styles[variant]} ${className}`;
  const content = (
    <>
      {children}
      <ArrowRight size={16} className="btn-arrow" />
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} data-testid={testId}>
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={cls} data-testid={testId}>
      {content}
    </Link>
  );
};
