import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "./Logo";

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -84 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = ({ t, locale }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("mb-theme", next ? "dark" : "light");
  };

  const links = [
    { hash: "#expertise", label: t.nav.expertise },
    { hash: "#work", label: t.nav.work },
    { hash: "#nascitara", label: t.nav.nascitara },
    { hash: "#career", label: t.nav.career },
    { hash: "#about", label: t.nav.about },
    { hash: "#contact", label: t.nav.contact },
  ];

  const anchor = (hash) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(hash);
  };

  return (
    <header
      className={`header-bg sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled ? "border-line shadow-soft" : "border-transparent"
      }`}
      data-testid="site-header"
    >
      <a href="#main" className="skip-link" data-testid="skip-to-content-link">
        {t.nav.skip}
      </a>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link
          to={locale === "en" ? "/en" : "/"}
          className="flex items-center gap-3"
          data-testid="nav-logo-link"
          aria-label="Matteo Bianco"
        >
          <Logo size={38} testId="header-logo" />
          <span className="font-display text-lg font-bold tracking-tight text-ink">Matteo Bianco</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary" data-testid="desktop-nav">
          {links.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              onClick={anchor(l.hash)}
              className="link-sweep text-sm font-semibold text-mut transition-colors duration-200 hover:text-ink"
              data-testid={`nav-link-${l.hash.slice(1)}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex items-center rounded-full border border-line p-1 text-xs font-bold"
            data-testid="lang-switcher"
            role="group"
            aria-label="Language"
          >
            <Link
              to="/"
              data-testid="lang-switch-it"
              className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
                locale === "it" ? "bg-brand text-onbrand" : "text-mut hover:text-ink"
              }`}
            >
              IT
            </Link>
            <Link
              to="/en"
              data-testid="lang-switch-en"
              className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mut transition-colors duration-200 hover:border-linestrong hover:text-ink"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-button"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
            aria-label="Mobile"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.hash}
                  href={l.hash}
                  onClick={anchor(l.hash)}
                  className="border-b border-line py-4 font-display text-lg font-semibold text-ink last:border-0"
                  data-testid={`mobile-nav-link-${l.hash.slice(1)}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
