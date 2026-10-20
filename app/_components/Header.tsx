import Image from "next/image";
import Link from "next/link";
import { KIT_URL } from "@/lib/site";

const navLinks = [
  { label: "The Kit", href: "/#kit" },
  { label: "The Journal", href: "/#journal" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-linen bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:grid md:grid-cols-3 md:px-12">

        {/* The logo PNG has wide transparent padding; this frame crops to the wordmark so it renders 40px (mobile) / 48px (desktop) tall. */}
        <Link href="/" className="relative block aspect-[1655/420] h-10 shrink-0 overflow-hidden md:h-12">
          <Image
            src="/images/logo-black-transparent.png"
            alt="Boncore Origin logo"
            width={5100}
            height={3300}
            sizes="240px"
            className="absolute max-w-none"
            style={{ width: "120.85%", height: "308.1%", left: "-11.78%", top: "-105.95%" }}
            priority
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/60 transition-all duration-300 ease-in-out hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a
            href={KIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-charcoal px-5 py-2.5 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-earth"
          >
            Buy on Amazon
          </a>
        </div>

      </div>
    </header>
  );
}
