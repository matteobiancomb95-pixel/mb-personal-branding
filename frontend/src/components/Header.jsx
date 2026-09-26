import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { SECTIONS, equivalentPath, homePath, sectionPath } from "../routes";

const HOME_PATHS = ["/", "/it", "/en"];

export const Header = ({ t, locale }) => {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const location = useLocation();
  const menuButtonRef = useRef(null);

  const isHome = HOME_PATHS.includes(location.pathname);
  const showCta = !isHome || pastHero;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      setPastHero(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mb-theme", next ? "dark" : "light");
  };

  const links = Object.keys(SECTIONS).map((key) => ({
    key,
    label: t.nav[key],
    to: sectionPath(key, locale),
  }));

  const linkClass = (to) =>
    `link-sweep text-sm font-semibold transition-colors duration-200 hover:text-ink ${
      location.pathname === to ? "text-brand" : "text-mut"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled ? "header-scrolled border-line shadow-soft" : "border-transparent"
      }`}
      data-testid="site-header"
    >
      <a href="#main" className="skip-link" data-testid="skip-to-content-link">
        {t.nav.skip}
      </a>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link
          to={homePath(locale)}
          className="flex items-center gap-3"
          data-testid="nav-logo-link"
          aria-label="Matteo Bianco"
        >
          <Logo size={38} testId="header-logo" />
          <span className="font-display text-lg font-bold tracking-tight text-ink">Matteo Bianco</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary" data-testid="desktop-nav">
          {links.map((l) => (
            <Link key={l.key} to={l.to} className={linkClass(l.to)} data-testid={`nav-link-${l.key}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to={sectionPath("contact", locale)}
            data-testid="header-cta"
            className={`btn mr-1 hidden h-10 items-center gap-2 rounded-xl bg-brand px-4 font-display text-[13px] font-bold text-onbrand hover:bg-brand-hover lg:inline-flex ${
              showCta ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!showCta}
            tabIndex={showCta ? 0 : -1}
          >
            {t.nav.cta}
            <ArrowRight size={14} className="btn-arrow" />
          </Link>
          <div
            className="flex items-center rounded-[10px] border border-line p-1 text-xs font-bold"
            data-testid="lang-switcher"
            role="group"
            aria-label="Language"
          >
            <Link
              to={equivalentPath(location.pathname, "it")}
              data-testid="lang-switch-it"
              aria-current={locale === "it" ? "true" : undefined}
              className={`rounded-md px-3 py-1.5 transition-colors duration-200 ${
                locale === "it" ? "bg-brand text-onbrand" : "text-mut hover:text-ink"
              }`}
            >
              IT
            </Link>
            <Link
              to={equivalentPath(location.pathname, "en")}
              data-testid="lang-switch-en"
              aria-current={locale === "en" ? "true" : undefined}
              className={`rounded-md px-3 py-1.5 transition-colors duration-200 ${
                locale === "en" ? "bg-brand text-onbrand" : "text-mut hover:text-ink"
              }`}
            >
              EN
            </Link>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            data-testid="theme-toggle-button"
            aria-label={dark ? t.nav.themeToLight : t.nav.themeToDark}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line text-mut transition-colors duration-200 hover:border-linestrong hover:text-ink"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-button"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 top-[72px] z-40 lg:hidden"
              style={{ background: "rgba(16, 35, 40, 0.35)" }}
              onClick={() => setOpen(false)}
              data-testid="mobile-menu-backdrop"
            />
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full z-50 border-b border-line bg-surface shadow-lift lg:hidden"
              aria-label="Mobile"
              data-testid="mobile-menu"
            >
              <div className="wrap flex flex-col py-3">
                {links.map((l) => (
                  <Link
                    key={l.key}
                    to={l.to}
                    className={`flex min-h-[48px] items-center border-b border-line font-display text-lg font-semibold last:border-0 ${
                      location.pathname === l.to ? "text-brand" : "text-ink"
                    }`}
                    data-testid={`mobile-nav-link-${l.key}`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to={sectionPath("contact", locale)}
                  data-testid="mobile-header-cta"
                  className="btn mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 font-display text-sm font-bold text-onbrand hover:bg-brand-hover"
                >
                  {t.nav.cta}
                  <ArrowRight size={15} className="btn-arrow" />
                </Link>
                <div className="py-3" />
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
