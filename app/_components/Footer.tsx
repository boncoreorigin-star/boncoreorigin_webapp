import Image from "next/image";
import { CONTACT_EMAIL, INSTAGRAM_URL, STORE_URL } from "@/lib/site";

type FooterLink = { label: string; href: string; external?: boolean };

const links: FooterLink[] = [
  { label: "The Kit", href: "/#kit" },
  { label: "The Journal", href: "/#journal" },
  { label: "FAQ", href: "/#faq" },
  { label: "Instagram", href: INSTAGRAM_URL, external: true },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
  { label: "Privacy Policy", href: "/privacy" },
  ...(STORE_URL ? [{ label: "Visit our Amazon Store", href: STORE_URL, external: true }] : []),
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">

        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <Image
              src="/images/logo-gold-transparent.png"
              alt="Boncore Origin logo"
              width={140}
              height={35}
              className="mx-auto mb-5 h-9 w-auto md:mx-0"
            />
            <p className="max-w-xs font-sans text-sm leading-relaxed text-cream/45">
              Boncore Origin — the start of your good core journey.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:max-w-md md:justify-end">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-sans text-sm text-cream/55 transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center md:text-left">
          <p className="font-sans text-xs text-cream/30">
            © 2026 Boncore Origin. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
