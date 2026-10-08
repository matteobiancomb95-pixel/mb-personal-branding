import { ArrowUpRight, FileText, Linkedin, Mail } from "lucide-react";
import { CV_PDF_URL, EMAIL, LINKEDIN_URL } from "../i18n/copy";
import { Reveal } from "../components/Reveal";
import { Logo } from "../components/Logo";

const INK = "#F4F2EC";
const MUTED = "#B9CAC8";
const outline = { borderColor: "rgba(244,242,236,0.35)", color: INK };

export const Contact = ({ t, page = false }) => {
  const c = t.contact;
  const Title = page ? "h1" : "h2";

  return (
    <section id="contact" className="bg-bg" data-testid="contact-section">
      <div className="wrap py-24 lg:py-36">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-3xl shadow-lift" style={{ backgroundColor: "#173137" }}>
            <div className="pointer-events-none absolute -right-14 -top-14 opacity-15" aria-hidden="true">
              <Logo size={200} testId="contact-watermark-logo" />
            </div>
            <div className="relative grid grid-cols-1 gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <p className="eyebrow" style={{ color: "#86BFA8" }} data-testid="contact-eyebrow">
                  {c.eyebrow}
                </p>
                <Title className="display-2 mt-4 max-w-xl font-extrabold" style={{ color: INK }} data-testid="contact-title">
                  {page ? c.page.title : c.title}
                </Title>
                {page ? (
                  <div className="mt-8 space-y-6" data-testid="contact-audiences">
                    {c.page.audiences.map((a) => (
                      <div key={a.title} className="border-l-2 pl-5" style={{ borderColor: "#86BFA8" }}>
                        <h2 className="font-display text-base font-bold" style={{ color: INK }}>
                          {a.title}
                        </h2>
                        <p className="mt-1.5 max-w-prose leading-relaxed" style={{ color: MUTED }}>
                          {a.body}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 max-w-prose text-base lg:text-lg" style={{ color: MUTED }}>
                    {c.body}
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center gap-4 lg:items-start">
                <a
                  href={`mailto:${EMAIL}`}
                  data-testid="contact-email-button"
                  className="btn inline-flex h-12 w-fit items-center gap-2.5 rounded-xl px-6 font-display text-sm font-bold"
                  style={{ backgroundColor: "#F7F5EF", color: "#173137" }}
                >
                  <Mail size={16} />
                  {page ? c.page.ctaEmail : c.ctaEmail}
                  <ArrowUpRight size={15} className="btn-arrow" />
                </a>
                <p className="text-sm" style={{ color: MUTED }}>
                  {c.directLabel}:{" "}
                  <a href={`mailto:${EMAIL}`} className="link-sweep font-semibold" style={{ color: INK }} data-testid="contact-direct-email">
                    {EMAIL}
                  </a>
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-linkedin-button"
                    className="btn inline-flex h-11 items-center gap-2.5 rounded-xl border px-5 font-display text-sm font-bold hover:bg-white/5"
                    style={outline}
                  >
                    <Linkedin size={15} />
                    {page ? c.page.ctaLinkedin : c.ctaLinkedin}
                  </a>
                  <a
                    href={CV_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-cv-button"
                    className="btn inline-flex h-11 items-center gap-2.5 rounded-xl border px-5 font-display text-sm font-bold hover:bg-white/5"
                    style={outline}
                  >
                    <FileText size={15} />
                    {c.ctaCv}
                  </a>
                </div>
                <p className="mt-2 text-[13px]" style={{ color: MUTED }} data-testid="contact-note">
                  {page ? c.page.note : c.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
