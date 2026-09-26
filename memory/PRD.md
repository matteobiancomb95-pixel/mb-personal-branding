# PRD — Matteo Bianco · Personal Branding Website

## Problem statement (original)
"Devo realizzare il mio sito di personal branding. In allegato tutte le indicazioni." — Allegato: PDF con brand identity completa + prompt tecnico per Emergent (palette, tipografia, copy bilingue IT/EN, architettura, regole di contenuto).

## User personas
1. PMI italiane ed e-commerce che cercano CRM, marketing automation, customer journey.
2. Aziende e recruiter che cercano un CRM/MarTech/Tech Project Manager senior.
3. Partner di prodotto, early user e collaboratori interessati a NasciTara.

## Core requirements (static)
- Sito vetrina bilingue: rotte `/` (IT default, no redirect forzato), `/it`, `/en`; switcher IT|EN visibile.
- Brand: "Connected systems. Human outcomes." / "Sistemi connessi. Risultati umani."
- Palette: Deep Pine #173137, Systems Teal #0D5C63, Warm Ivory #F7F5EF, Mint Mist #E8F2EE, Growth Sage #86BFA8, Human Coral #BE4F39 (solo NasciTara), Slate Teal #5B6F70. Dark mode dedicata.
- Font: Manrope (display) + Source Sans 3 (body).
- Sezioni home: Hero asimmetrico → Impact strip (4 KPI) → Expertise (2+1) → Selected Work (NasciTara featured + 2 card) → NasciTara vision (oggi/domani + disclaimer medico obbligatorio) → Career timeline + formazione → Operating principles (lista tipografica) → About → Contact (NO form, solo email + LinkedIn) → Footer.
- Logo monogramma MB (SVG, anche favicon). Niente cervelli/circuiti/razzi/robot.
- SEO: title/description, OG/Twitter, JSON-LD Person, robots.txt, llms.txt, noscript fallback. Canonical/hreflang/sitemap SOLO dopo dominio di produzione confermato.
- Accessibilità: un H1, skip-link, focus visibile, prefers-reduced-motion, target ≥44px.
- Accuratezza contenuti: niente dati inventati; asset mancanti marcati TODO (ritratto, screenshot NasciTara, URL LinkedIn, CV).

## Architecture
- Frontend: React (CRA/craco) + Tailwind (token via CSS vars light/dark) + framer-motion (reveal, hero masked-line kinetic, tilt 3D ritratto) + lenis (smooth scroll) + react-router (`/`, `/it`, `/en`). Copy centralizzato in `src/i18n/copy.js`.
- Backend: FastAPI + MongoDB (template; nessuna API custom necessaria — niente form per scelta utente).
- SEO statico in `public/index.html` (+ theme init inline, favicon SVG inline).

## Implemented (2026-09-26)
- Homepage bilingue completa con tutte le 10 sezioni del brief, copy IT/EN fedele al PDF.
- Header sticky con blur, menu mobile animato, switcher IT|EN, toggle light/dark con persistenza.
- Hero cinetico: reveal masked line-by-line, badge disponibilità, placeholder ritratto PORTRAIT_TODO con tilt 3D al mouse.
- Marquee editoriale lenta; reveal on-scroll su tutte le sezioni; logo MB con animazione line-drawing al primo caricamento.
- NasciTara: featured card (accento corallo) + sezione visione oggi/domani + disclaimer medico in entrambe le lingue; link esterni a https://nascitara.vercel.app/.
- Timeline 6 ruoli + box formazione; principi operativi tipografici; about + stack; contact deep-pine con mailto e LinkedIn (placeholder).
- SEO: title/description per locale via JS, OG/Twitter/JSON-LD statici, robots.txt, llms.txt, favicon SVG.
- Verificato in preview: `/` e `/en` (title + html lang corretti), light/dark, 375/768/1366px, menu mobile, backend `/api/` OK, robots.txt servito come text/plain, nessun errore console bloccante.

## Pending / handoff
- PORTRAIT_TODO: foto professionale da fornire (sostituire `PortraitFrame` in `sections/Hero.jsx`).
- NASCITARA_SCREEN_TODO: screenshot reali dell'app (sostituire `ScreenFrame` in `components/Placeholders.jsx` / `sections/Work.jsx`).
- LINKEDIN_URL: placeholder in `src/i18n/copy.js` — sostituire con il profilo reale.
- Dominio di produzione: appena confermato aggiungere canonical, og:url, og:image (1200×630), hreflang reciproci, sitemap.xml (skill farm-seo-setup).
- Dopo il deploy: attivare il toggle "Enable Search Engine Crawling and Optimisation" e riverificare sul dominio live.

## Backlog (prioritized)
- P0: sostituzione asset TODO (ritratto, screenshot, LinkedIn) prima della pubblicazione.
- P1: dominio personale + canonical/hreflang/sitemap + og:image.
- P1: CV scaricabile (solo quando `CV_PDF_URL` disponibile).
- P2: rotte dedicate per dettaglio progetti; analytics privacy-conscious (Plausible/GA4 disattivate finché non richieste).
