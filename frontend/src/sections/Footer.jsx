import { ArrowUp } from "lucide-react";
import { Logo } from "../components/Logo";

export const Footer = ({ t }) => (
  <footer className="border-t border-line bg-surface" data-testid="site-footer">
    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-12 sm:flex-row sm:items-center lg:px-10">
      <div className="flex items-center gap-3">
        <Logo size={36} testId="footer-logo" />
        <div>
          <p className="font-display text-base font-bold text-ink">Matteo Bianco</p>
          <p className="text-sm text-mut">{t.footer.tagline}</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-sm text-mut">{t.footer.rights}</p>
        <button
          type="button"
          data-testid="back-to-top-button"
          aria-label={t.footer.backToTop}
          onClick={() => {
            if (window.__lenis) window.__lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-mut transition-colors duration-200 hover:border-brand hover:text-brand"
        >
          <ArrowUp size={17} />
        </button>
      </div>
    </div>
  </footer>
);
