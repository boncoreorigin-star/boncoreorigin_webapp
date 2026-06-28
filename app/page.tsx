/**
 * Boncore Origin — Redesigned Landing Page
 * Structure: Announcement Bar → Nav → Hero → Value Props →
 *            Product Showcase → Social Proof → Footer
 */

import Image from "next/image";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconAccount() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
  "The only kit with a physical Guided Pilates Journal — 76 custom pages",
  "Pro-grade 14\" ring with fiberglass core & laser-engraved non-slip pads",
  "20cm anti-burst matte ball for studio-level sculpting at home",
  "3 premium fabric resistance bands — won't roll, won't pinch",
  "Dual-sided core sliders for low-impact full-body stability work",
  "Full-color 13-page Exercise Booklet — for beginners to enthusiasts",
  "Earthy Beige, Light Brown & Cocoa palette — designed for your home",
];

const colorOptions = [
  { name: "Sand",  bg: "bg-[#D4C9B8]", selected: true  },
  { name: "Clay",  bg: "bg-[#C4835A]", selected: false },
  { name: "Sage",  bg: "bg-[#7A9B77]", selected: false },
];

const values = [
  {
    icon: "◆",
    title: "Luxury for All",
    body: "High-end aesthetics at an accessible price. Studio-grade equipment in a sophisticated Beige, Light Brown, and Cocoa palette — designed to elevate your home, not clash with it.",
  },
  {
    icon: "◎",
    title: "Mindful Accessibility",
    body: "We simplify complex studio movements into guided, progressive sequences. Our 13-page Exercise Booklet gives beginners and enthusiasts alike a clear, confident roadmap.",
  },
  {
    icon: "◻",
    title: "Tactile Tracking",
    body: "Unlike cold, screen-based apps, our A5 Guided Pilates Journal is a living document of your form, your feelings, and your progress. 76 custom pages. Entirely yours.",
  },
];

const testimonials = [
  {
    quote: "I finally feel like I have a mentor, not just a workout timer. The journal changed everything — I can actually see my progress unfolding, page by page.",
    name: "Sarah M.",
    location: "Austin, TX",
    avatar: "Black woman, mid-30s, warm natural home background",
  },
  {
    quote: "The ring and ball quality is incredible. And the aesthetic? My living room has never looked better. Luxury without the luxury price tag.",
    name: "Priya K.",
    location: "New York, NY",
    avatar: "South Asian woman, late 20s, relaxed expression with kit",
  },
  {
    quote: "I was intimidated to start Pilates at my age. This kit makes me feel seen, guided, and capable. The exercise booklet was exactly what I needed on Day One.",
    name: "Daniela R.",
    location: "Los Angeles, CA",
    avatar: "Latina woman, early 40s, natural sunlight, radiant smile",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "Pinterest",
    path: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  },
  {
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

// ─── 1. Announcement Bar ──────────────────────────────────────────────────────

function AnnouncementBar() {
  return (
    <div className="bg-charcoal py-2.5 text-center font-sans text-[0.65rem] font-medium uppercase tracking-widest text-cream/80">
      Welcome to the Origin of your best self.{" "}
      <span className="text-terracotta">Free mindful shipping</span> on your first order.
    </div>
  );
}

// ─── 2. Navigation ────────────────────────────────────────────────────────────

function Nav() {
  const navLinks = ["Shop", "Our Origin", "The Journal", "Community"];

  return (
    <header className="sticky top-0 z-50 border-b border-linen bg-cream/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-3 md:px-12">

        {/* Left: Logo */}
        <div>
          <a href="#">
            <Image
              src="/logo.png"
              alt="Boncore Origin"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-sans text-[0.65rem] font-medium uppercase tracking-widest text-charcoal/60 transition-all duration-300 ease-in-out hover:text-charcoal"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center justify-end gap-5 text-charcoal/60">
          <a
            href="#"
            aria-label="My Account"
            className="transition-all duration-300 ease-in-out hover:text-charcoal"
          >
            <IconAccount />
          </a>
          <a
            href="#"
            aria-label="Shopping Cart"
            className="transition-all duration-300 ease-in-out hover:text-charcoal"
          >
            <IconCart />
          </a>
        </div>

      </div>
    </header>
  );
}

// ─── 3. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative h-screen w-full">

      {/* Full-screen background image */}
      <Image
        src="/model_with_pilatesring_in_studio.png"
        alt="Boncore Origin — The Start of Your Good Core Journey"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/45 to-charcoal/65" />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream/75">
          Premium Pilates Essentials Kit
        </p>

        <h1 className="mb-6 max-w-3xl font-serif text-5xl font-medium leading-[1.1] text-cream md:text-6xl lg:text-7xl">
          The Start of Your Good Core Journey.
        </h1>

        <p className="mb-10 max-w-md font-sans text-base leading-relaxed text-cream/70 md:text-lg">
          A luxurious, guided Pilates experience from the comfort of your home. Movement and mindfulness, together.
        </p>

        <a
          href="#products"
          className="rounded-full bg-cream px-10 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-charcoal transition-all duration-300 ease-in-out hover:bg-terracotta hover:text-cream hover:-translate-y-0.5 hover:shadow-2xl"
        >
          Begin Your Journey
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <p className="font-sans text-[0.55rem] uppercase tracking-widest text-cream/40">Scroll</p>
        <div className="h-10 w-px bg-cream/25" />
      </div>

    </section>
  );
}

// ─── 4. Value Props ───────────────────────────────────────────────────────────

function ValueProps() {
  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="mb-16 text-center">
          <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
            The Guided Difference
          </p>
          <h2 className="mx-auto max-w-2xl font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
            The Only Brand That Guides Your Movement{" "}
            <em className="italic">and</em> Your Mindfulness.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-charcoal/55">
            While others keep you locked in a screen-based loop, we give you something real — a tactile, living practice that evolves with you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl bg-cream p-10 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-linen text-xl text-charcoal/30">
                {v.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-charcoal">
                {v.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-charcoal/60">
                {v.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── 5. Product Showcase ──────────────────────────────────────────────────────

function ProductShowcase() {
  return (
    <section id="products" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="overflow-hidden rounded-3xl bg-stone">
          <div className="grid md:grid-cols-2">

            {/* Product image */}
            <div className="relative min-h-[400px] md:min-h-[620px]">
              <Image
                src="/journalwithtea.png"
                alt="Boncore Origin Premium Pilates Essentials Kit — Journal and lifestyle"
                fill
                className="object-cover object-center"
              />
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-charcoal/85 px-4 py-2 font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-cream backdrop-blur-sm">
                  7 Items Included
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-7 bg-cream p-10 md:p-14">
              <div>
                <p className="mb-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
                  Boncore Origin
                </p>
                <h2 className="font-serif text-3xl font-medium leading-tight text-charcoal md:text-4xl">
                  Premium Pilates<br />Essentials Kit
                </h2>
                <p className="mt-2 font-serif text-sm italic text-charcoal/45">
                  The only kit with a Guided Pilates Journal.
                </p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-base text-terracotta">★</span>
                  ))}
                </div>
                <p className="font-sans text-xs text-charcoal/45">4.9 · Verified Amazon Reviews</p>
              </div>

              {/* Benefits */}
              <ul className="flex flex-col gap-2.5">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                      <IconCheck />
                    </span>
                    <p className="font-sans text-xs leading-relaxed text-charcoal/65">{b}</p>
                  </li>
                ))}
              </ul>

              {/* Color selector */}
              <div>
                <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-charcoal/45">
                  Colour: <span className="text-charcoal">Sand</span>
                </p>
                <div className="flex gap-3">
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      title={c.name}
                      aria-label={`Select colour ${c.name}`}
                      className={`h-8 w-8 rounded-full ${c.bg} transition-all duration-300 ease-in-out ${
                        c.selected
                          ? "scale-110 ring-2 ring-charcoal ring-offset-2"
                          : "hover:scale-105 hover:ring-2 hover:ring-charcoal/30 hover:ring-offset-1"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-charcoal py-4 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-earth hover:-translate-y-0.5 hover:shadow-xl hover:shadow-charcoal/20"
                >
                  Add to Cart — Amazon
                </a>
                <p className="text-center font-sans text-[0.6rem] text-charcoal/35">
                  Ships from Amazon · Free returns · Secure checkout
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── 6. Social Proof ──────────────────────────────────────────────────────────

function SocialProof() {
  return (
    <section id="community" className="bg-stone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="mb-16 text-center">
          <p className="mb-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
            The Community
          </p>
          <h2 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">
            Real Women. Real Homes. Real Progress.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-charcoal/55">
            See what happens when the right guide finds you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-3xl bg-cream p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/8"
            >
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="text-sm text-terracotta">★</span>
                ))}
              </div>
              <blockquote className="font-serif text-base italic leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-linen pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linen"
                  title={t.avatar}
                >
                  <div className="h-5 w-5 rounded-full bg-sand/60" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-charcoal">{t.name}</p>
                  <p className="font-sans text-xs text-charcoal/40">
                    {t.location} · Verified Purchase
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-earth hover:-translate-y-0.5 hover:shadow-xl hover:shadow-charcoal/20"
          >
            Get Your Pilates Kit On Amazon
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// ─── 7. Footer ────────────────────────────────────────────────────────────────

function Footer() {
  const shopLinks   = ["Premium Pilates Kit", "Guided Pilates Journal", "Gift Cards", "Bundles"];
  const companyLinks = ["Our Origin", "The Journal", "Community", "Sustainability", "Contact"];

  return (
    <footer className="bg-charcoal text-cream">

      {/* Newsletter bar */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div className="shrink-0">
              <h3 className="font-serif text-2xl font-medium text-cream">
                Join the Core Community.
              </h3>
              <p className="mt-1.5 font-sans text-sm text-cream/45">
                Mindful movement tips, new arrivals, and origin stories. No noise.
              </p>
            </div>
            <form action="#" className="flex w-full max-w-sm gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 py-3 font-sans text-sm text-cream placeholder-cream/30 outline-none transition-all duration-300 focus:border-cream/40 focus:bg-cream/15"
              />
              <button
                type="submit"
                className="rounded-full bg-terracotta px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-bark"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Boncore Origin"
              width={140}
              height={35}
              className="mb-5 h-9 w-auto brightness-0 invert"
            />
            <p className="mb-7 max-w-xs font-sans text-sm leading-relaxed text-cream/45">
              <em>Bon</em> means Good in French. The only brand that guides your movement on the mat and your mindfulness in the journal. Welcome to the Origin of your best self.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/40 transition-all duration-300 ease-in-out hover:border-cream/35 hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/30">
              Shop
            </p>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-cream/55 transition-colors duration-300 hover:text-cream">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/30">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-cream/55 transition-colors duration-300 hover:text-cream">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream/30">
            © 2026 Boncore Origin. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((link) => (
              <a key={link} href="#" className="font-sans text-xs text-cream/30 transition-colors duration-300 hover:text-cream/60">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <ProductShowcase />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
