import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Boncore Origin",
  description: "How Boncore Origin handles the information you share with us on boncore.co.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    heading: "What we collect",
    body: "This site collects only the email address you choose to submit through our signup form. We do not ask for any other personal information, and we do not sell products directly on this site — all purchases happen on Amazon and are governed by Amazon's own privacy policy.",
  },
  {
    heading: "How we use it",
    body: "We use your email address only to send you news about Boncore Origin products and routines. You can ask us to stop at any time.",
  },
  {
    heading: "Cookies",
    body: "We do not use cookies for tracking or advertising. Our hosting provider may keep standard, short-lived server logs needed to keep the site running securely.",
  },
  {
    heading: "Sharing",
    body: "We do not sell, rent, or trade your email address. We only share it with the service provider that delivers our emails, and only for that purpose.",
  },
  {
    heading: "Your choices",
    body: "You can ask us to access, correct, or delete the email address we hold for you at any time by contacting us.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-2xl px-6 md:px-12">
          <h1 className="mb-3 font-serif text-4xl font-medium text-charcoal md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-12 font-sans text-xs uppercase tracking-widest text-charcoal/40">
            Last updated October 2026
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-3 font-serif text-2xl font-medium text-charcoal">{s.heading}</h2>
                <p className="font-sans text-sm leading-relaxed text-charcoal/65">{s.body}</p>
              </section>
            ))}

            <section>
              <h2 className="mb-3 font-serif text-2xl font-medium text-charcoal">Contact</h2>
              <p className="font-sans text-sm leading-relaxed text-charcoal/65">
                Questions about this policy? Email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-charcoal underline underline-offset-4 hover:text-gold">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
