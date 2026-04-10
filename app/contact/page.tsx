import PageWrapper from "@/components/layout/PageWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/contact/ContactForm";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { FAQS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/swrlfactory" },
  { label: "TikTok", href: "https://tiktok.com/@swrlfactory" },
  { label: "Facebook", href: "https://facebook.com/swrlfactory" },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* ── 1. Hero ── */}
      <section className="pt-32 pb-8 bg-swrl-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-swrl-black leading-tight mb-6">
              Get in{" "}
              <span className="text-swrl-pink">Touch</span>
            </h1>
            <p className="font-body text-swrl-black/60 text-lg max-w-xl mx-auto">
              Whether you have a question, want to book catering, or just want to say hello — we&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. Form + Info ── */}
      <section className="py-16 bg-swrl-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Form */}
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                <h2 className="font-display text-2xl text-swrl-black mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right: Info */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                {/* Visit Us */}
                <div>
                  <h3 className="font-display text-xl text-swrl-black mb-3">
                    Visit Us
                  </h3>
                  <p className="font-body text-swrl-black/60">
                    1234 Trade Street<br />
                    Charlotte, NC 28202
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-display text-xl text-swrl-black mb-3">
                    Contact
                  </h3>
                  <p className="font-body text-swrl-black/60">
                    (704) 555-SWRL
                  </p>
                  <p className="font-body text-swrl-black/60">
                    hello@swrlfactory.com
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-display text-xl text-swrl-black mb-3">
                    Hours
                  </h3>
                  <p className="font-body text-swrl-black/60">
                    Monday – Saturday: 7AM – 9PM<br />
                    Sunday: 8AM – 6PM
                  </p>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="font-display text-xl text-swrl-black mb-3">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-swrl-pink/10 text-swrl-pink font-body font-semibold text-sm rounded-full px-4 py-2 hover:bg-swrl-pink hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Directions CTA */}
                <div>
                  <Button
                    href="https://maps.google.com/?q=1234+Trade+Street+Charlotte+NC+28202"
                    variant="outline"
                    size="md"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 3. FAQ ── */}
      <section className="py-24 bg-swrl-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-swrl-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-swrl-black/60 text-lg">
              Can&apos;t find what you&apos;re looking for? Reach out directly.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion items={FAQS} />
          </ScrollReveal>
        </div>
      </section>
    </PageWrapper>
  );
}
