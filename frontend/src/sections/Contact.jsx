import { Download, Linkedin, Mail } from "lucide-react";
import { CV_PDF_URL, EMAIL, LINKEDIN_URL } from "../i18n/copy";
import { Reveal } from "../components/Reveal";
import { Logo } from "../components/Logo";

export const Contact = ({ t }) => (
  <section id="contact" className="bg-bg" data-testid="contact-section">
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
      <Reveal>
        <div
          className="bg-blueprint relative overflow-hidden rounded-3xl p-10 text-center shadow-lift lg:p-20"
          style={{ backgroundColor: "#173137" }}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 opacity-20">
            <Logo size={220} testId="contact-watermark-logo" />
          </div>
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage" data-testid="contact-eyebrow">
              {t.contact.eyebrow}
            </p>
            <h2
              className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl"
              style={{ color: "#F4F2EC" }}
              data-testid="contact-title"
            >
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-prose text-base lg:text-lg" style={{ color: "#B9CAC8" }}>
              {t.contact.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                data-testid="contact-email-button"
                className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full px-7 py-3 font-display text-sm font-bold transition-colors duration-200"
                style={{ backgroundColor: "#F7F5EF", color: "#173137" }}
              >
                <Mail size={16} />
                {t.contact.ctaEmail}
                <span className="hidden text-xs font-semibold opacity-60 sm:inline">{EMAIL}</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin-button"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border px-7 py-3 font-display text-sm font-bold transition-colors duration-200"
                style={{ borderColor: "rgba(244,242,236,0.35)", color: "#F4F2EC" }}
              >
                <Linkedin size={16} />
                {t.contact.ctaLinkedin}
              </a>
              <a
                href={CV_PDF_URL}
                download="Matteo_Bianco_CV.pdf"
                data-testid="contact-cv-button"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border px-7 py-3 font-display text-sm font-bold transition-colors duration-200"
                style={{ borderColor: "rgba(244,242,236,0.35)", color: "#F4F2EC" }}
              >
                <Download size={16} />
                {t.contact.ctaCv}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
