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

## Implemented (2026-09-26, iter 3)
- LinkedIn reale collegato: https://www.linkedin.com/in/matteo-bianco-4729b917a/ (pulsante contatti + JSON-LD sameAs + llms.txt).
- Mockup reali NasciTara integrati da ZIP utente: `nascitara-detail.png` nella card featured (pannello tinta corallo), `nascitara-flow.png` nella sezione visione. Rimosso Placeholders.jsx (non più usato).
- About: aggiunto paragrafo growth — esperto di business e revenue model, analisi dei processi e delle funzioni aziendali per far scalare il business (IT+EN).

## Pending / handoff
- Dominio di produzione: appena confermato aggiungere canonical, og:url, og:image (1200×630), hreflang reciproci, sitemap.xml (skill farm-seo-setup).
- Dopo il deploy: attivare il toggle "Enable Search Engine Crawling and Optimisation" e riverificare sul dominio live.

## Implemented (2026-09-26, iter 12)
- Fix build Vercel fallito (npm ERESOLVE): downgrade date-fns 4.1.0 → ^3.6.0 (peer di react-day-picker 8), poi rimosso react-day-picker + ui/calendar.jsx (inutilizzati, incompatibili con React 19 sotto npm). Verificato: npm install --dry-run OK, yarn build di produzione OK. Il repo GitHub va risincronizzato (package.json, yarn.lock, vercel.json, rimozione calendar.jsx) prima del Redeploy.

## Implemented (2026-09-26, iter 11)
- Aggiunto /vercel.json (schema Vercel Services): frontend CRA (root frontend/) + backend FastAPI (root backend/, entrypoint server:app), rewrite /api/* → backend, tutto il resto → frontend. Necessario perché Vercel blocca il Deploy dei monorepo multi-servizio senza vercel.json. Il file va committato nella root del repo GitHub (da qui non c'è remote configurato → push manuale o via UI GitHub), poi "Refresh" su Vercel.

## Implemented (2026-09-26, iter 10)
- Pagina Despar arricchita dal CV: partnership Just Eat end-to-end (negoziazione, integrazione tecnica, go-to-market, €10K co-marketing come quarta stat) e migrazione CRM verso SAP Emarsys (negoziazione → firma → avvio rollout). Bilingue.
- Sezione Esperienza: nuovo blocco "Certificazioni e formazione continua" con Ninja Academy 2025, DeepLearning.AI 2026 (LLM with JAX), COBIT5 Foundation 2022, Scrum Fundamentals 2021.

## Implemented (2026-09-26, iter 9)
- Sezione "Strumenti con cui lavoro" (Profilo) espansa con TUTTI i tool del CV, organizzati in 6 gruppi: CRM & CDP (Salesforce 3 cloud, Dynamics 365, Loyal Guru, ActiveCampaign, Connectif, SAP Emarsys), Automazione (Zapier, Make, n8n, Postman, API & Webhook, ServiceNow), Data & Analytics (SQL, Python, Tableau, Power BI, SAP BO, Excel, GA, Semrush, Gretl), Omnichannel (WhatsApp API, DEM, SMS, Push, Shopify, WordPress, Qualtrics), Project & Process (Agile/Scrum, UAT, ARIS, Notion, MS Project), AI (LLM & RAG, Custom AI Assistants, Agentic AI: Codex, Claude Code, Cursor). Bilingue.

## Implemented (2026-09-26, iter 8)
- Pagina dettaglio Spoki (/it/progetti/spoki · /en/projects/spoki): automazioni conversazionali WhatsApp Business API, racconto del round Series A da €5,5M e crescita ricavi 3x YoY — formulati come risultati aziendali con contributo nel team (mai come merito individuale). Grafico a barre generalizzato (chartValues/chartEnd nel copy). Card Spoki aggiunta in Selected Work (griglia a 4). Fix rendering etichetta SVG (template string singola).

## Implemented (2026-09-26, iter 7)
- Pagine dettaglio progetto: /it/progetti/{coccolebimbi,despar-centro-sud,roche} + /en/projects/... con SEO propria, logo azienda, ruolo, attività, blocco risultati e grafici SVG onesti (barre YoY quick commerce per Despar, stepper Analisi→Go-live per Roche, journey stages per CoccoleBimbi con badge "In corso"). Switcher lingua preserva la pagina progetto.
- Nuovo progetto CoccoleBimbi (strategia CRM, targeting, journey futuri genitori) in Selected Work come card cliccabile con badge "In corso".
- Video Reel UX nella sezione/pagina NasciTara: transcodificato H.264+AAC faststart (era in codec non supportato), poster estratto dal video, player con play overlay corallo e controlli nativi.
- Logo wall "Aziende con cui ho lavorato" nella sezione Esperienza (CoccoleBimbi, Despar, Spoki, Roche, Deloitte, Lipari — loghi autocroppati via PIL, chip bianchi, grayscale→colore on hover).

## Implemented (2026-09-26, iter 6 — design refinement pass)
- Design system: easing cubic-bezier(0.16,1,0.3,1) + token durate; tipografia fluida con clamp() (.display-1/.display-2, .eyebrow 13px); gutter condivisi (.wrap 20/32/48px); raggi normalizzati (bottoni 12px, controlli 10px, card 16px, panel 24px); grain 1.5% su hero e pannello contatti; selection teal trasparente.
- Hero: niente più tilt 3D né avatar circolare — ritratto editoriale con cornice offset salvia, caption ruolo/città e badge disponibilità in overlap; ultima riga H1 in teal; nuove CTA ("Parliamo del tuo progetto"/"Discuss your project", "Esplora i progetti"/"Explore selected work", CV terziario); nuovo body copy IT/EN.
- Marquee rimossa (vietata dal brief) → FlowLine: linea sottile con nodi e dot pulsante (teal→salvia dopo hero, teal→corallo prima di NasciTara, disattivata in reduced-motion).
- Impact: striscia editoriale con divisori tipografici, numeri tabular, niente card flottanti. Expertise: layout dominante 7col + 2 card impilate, icone lineari monocrome. Career: righe con colonna date stabile + chip "Attuale", formazione in 3 card. Contatti: pannello pine a due colonne, CTA "Raccontami cosa vuoi migliorare" + email diretta + LinkedIn/CV. Header: trasparente in cima, blur dopo scroll, CTA piena che appare oltre l'hero; menu mobile con Escape/backdrop/scroll-lock/focus restore. Niente form (scelta utente precedente confermata).
- Ritratto: angoli neri rimossi via PIL (compositing circolare su bianco) per il crop editoriale.
## Implemented (2026-09-26, iter 5)
- Ogni voce del menu ora apre una pagina dedicata oltre alla sezione in homepage: /it/competenze·/en/expertise, /it/progetti·/en/projects, /it|/en/nascitara, /it/esperienza·/en/experience, /it/profilo·/en/about, /it|/en/growth, /it/contatti·/en/contact.
- Routing centralizzato in src/routes.js (slug localizzati), pagine via src/pages/SectionPage.jsx con SEO per pagina (titolo/description), link "← Home", voce attiva evidenziata in nav; switcher IT|EN preserva la pagina equivalente (es. /it/progetti ⇄ /en/projects). Lenis estratto in hooks/useLenis.js, SEO in lib/seo.js. llms.txt aggiornato. Verificati click nav, switch lingua, pagine dirette e back-home.
## Implemented (2026-09-26, iter 4)
- Ritratto ridotto (max ~360px desktop) su richiesta utente.
- Nuova sezione editoriale "Growth & Business Model" (#growth, tra Profilo e Contatti, voce in nav): narrativa su startup/Business Model Canvas/growth strategy + card "Esempio concreto" Maiora/Despar con metriche reali (€2M, ~20x MROI, +100% YoY) e leve attivate. Bilingue IT/EN.

## Implemented (2026-09-26, iter 2)
- Ritratto professionale reale integrato nell'hero (cornice circolare con tilt 3D), file in `public/assets/portrait.jpg`.
- CV scaricabile: `public/assets/Matteo_Bianco_CV.pdf` + pulsanti "Scarica il CV"/"Download CV" in hero e contatti (entrambe le lingue).

## Backlog (prioritized)
- P0: nessun asset TODO rimasto (ritratto, mockup NasciTara, LinkedIn, CV tutti integrati).
- P1: dominio personale + canonical/hreflang/sitemap + og:image.
- P2: rotte dedicate per dettaglio progetti; analytics privacy-conscious (Plausible/GA4 disattivate finché non richieste).
