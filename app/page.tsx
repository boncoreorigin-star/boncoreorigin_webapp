/**
 * Boncore Origin — Brand Landing Page
 * Structure: Header → Hero → Guided Difference → The Kit → The Journal →
 *            Lifestyle → Instagram → Email Capture → FAQ → Banner → Footer
 *
 * No selling happens here — every buy button links out to Amazon (see lib/site.ts).
 */

import Image from "next/image";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import EmailSignup from "./_components/EmailSignup";
import {
  INSTAGRAM_URL,
  JOURNAL_PRICE,
  JOURNAL_URL,
  KIT_PRICE,
  KIT_URL,
} from "@/lib/site";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
  "The only kit with a physical Guided Pilates Journal — 152 pages",
  "Pro-grade 14\" ring with fiberglass core & laser-engraved non-slip pads",
  "20cm anti-burst matte ball for studio-level sculpting at home",
  "3 premium fabric resistance bands — won't roll, won't pinch",
  "Dual-sided core sliders for low-impact full-body stability work",
  "Full-color 13-page Exercise Booklet — for beginners to enthusiasts",
  "Earthy Beige, Light Brown & Cocoa palette — designed for your home",
];

const kitContents = [
  {
    name: "Pilates Ring",
    src: "/images/tile-pilates-ring.png",
    alt: "Boncore Origin 14-inch Pilates ring with non-slip pads",
    line: "14-inch ring, studio resistance for arms, thighs and core.",
  },
  {
    name: "Mini Ball",
    src: "/images/tile-mini-ball.png",
    alt: "Boncore Origin matte anti-burst Pilates mini ball",
    line: "Matte anti-burst ball with a dual-valve anti-leak plug.",
  },
  {
    name: "Fabric Bands",
    src: "/images/tile-fabric-bands.jpg",
    alt: "Set of three Boncore Origin fabric resistance bands",
    line: "Three fabric resistance bands that won't roll or pinch.",
  },
  {
    name: "Latex Bands",
    src: "/images/tile-latex-bands.png",
    alt: "Set of three Boncore Origin latex resistance bands",
    line: "Three latex bands for light, progressive resistance.",
  },
  {
    name: "Core Sliders",
    src: "/images/tile-core-sliders.png",
    alt: "Pair of dual-sided Boncore Origin core sliders",
    line: "Dual-sided sliders for low-impact, full-body stability work.",
  },
  {
    name: "Exercise Book",
    src: "/images/tile-exercise-book.jpg",
    alt: "Boncore Origin 13-page Pilates exercise booklet",
    line: "13-page booklet, 45 guided exercises with a follow-along challenge.",
  },
  {
    name: "Guided Journal",
    src: "/images/tile-guided-journal.jpg",
    alt: "Boncore Origin Guided Pilates Journal with black leather cover",
    line: "The only kit with a physical Guided Pilates Journal.",
  },
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
    body: "Unlike cold, screen-based apps, our A5 Guided Pilates Journal is a living document of your form, your feelings, and your progress. 152 pages. Entirely yours.",
  },
];

const faqs = [
  {
    q: "Where do I buy?",
    a: "Boncore Origin products are sold exclusively on Amazon — every Buy button on this site takes you to the product's Amazon page.",
  },
  {
    q: "Who handles shipping and returns?",
    a: "Amazon does. Orders are fulfilled by Amazon with Amazon's shipping and free-returns policies.",
  },
  {
    q: "What's the difference between the Kit and the Journal?",
    a: "The Journal is included in the Kit. It's also sold on its own if you already have equipment.",
  },
];

const goldButton =
  "inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-center font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 ease-in-out hover:bg-bark hover:-translate-y-0.5 hover:shadow-xl hover:shadow-charcoal/20";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-14 md:px-12 md:py-24">

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-terracotta">
            Premium Pilates Essentials Kit
          </p>

          <h1 className="mb-6 max-w-xl font-serif text-5xl font-medium leading-[1.1] text-charcoal md:text-6xl">
            The Start of Your Good Core Journey.
          </h1>

          <p className="mb-10 max-w-md font-sans text-base leading-relaxed text-charcoal/60 md:text-lg">
            A luxurious, guided Pilates experience from the comfort of your home. Movement and mindfulness, together.
          </p>

          <a href={KIT_URL} {...external} className={goldButton}>
            Buy the Kit on Amazon — {KIT_PRICE}
          </a>
          <p className="mt-3 font-sans text-[0.65rem] text-charcoal/40">
            Fulfilled by Amazon · Free returns
          </p>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone">
          <Image
            src="/images/hero-kit.jpg"
            alt="Boncore Origin Premium Pilates Essentials Kit — Pilates ring, mini ball, resistance bands, core sliders, exercise book and Guided Pilates Journal"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>

      </div>
    </section>
  );
}

// ─── 2. Value Props ───────────────────────────────────────────────────────────

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

// ─── 3. The Kit ───────────────────────────────────────────────────────────────

function TheKit() {
  return (
    <section id="kit" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="overflow-hidden rounded-3xl bg-stone">
          <div className="grid md:grid-cols-2">

            {/* Product image */}
            <div className="relative min-h-[400px] md:min-h-[620px]">
              <Image
                src="/full_kit_photo.jpg"
                alt="All seven pieces of the Boncore Origin Premium Pilates Essentials Kit laid out together"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
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

              <ul className="flex flex-col gap-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sage">
                      <IconCheck />
                    </span>
                    <p className="font-sans text-xs leading-relaxed text-charcoal/65">{b}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <a href={KIT_URL} {...external} className={goldButton}>
                  Buy on Amazon — {KIT_PRICE}
                </a>
                <p className="text-center font-sans text-[0.6rem] text-charcoal/35">
                  Fulfilled by Amazon · Free returns
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contents grid */}
        <div className="mt-20">
          <h3 className="mb-10 text-center font-serif text-3xl font-medium text-charcoal md:text-4xl">
            What&rsquo;s in the Kit
          </h3>
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-6">
            {kitContents.map((item) => (
              <li key={item.name} className="flex flex-col overflow-hidden rounded-3xl bg-stone">
                <div className="relative aspect-square w-full bg-linen">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <p className="font-serif text-lg font-medium text-charcoal">{item.name}</p>
                  <p className="font-sans text-xs leading-relaxed text-charcoal/60">{item.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

// ─── 4. The Journal ───────────────────────────────────────────────────────────

function TheJournal() {
  return (
    <section id="journal" className="scroll-mt-20 bg-stone py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-12">

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-linen">
          <Image
            src="/images/journal-open-2000.png"
            alt="Boncore Origin Guided Pilates Journal lying open, showing the daily workout and wellness tracking pages"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h2 className="font-serif text-4xl font-medium leading-tight text-charcoal md:text-5xl">
            The Guided Pilates Journal
          </h2>
          <p className="max-w-md font-sans text-base leading-relaxed text-charcoal/60">
            A 152-page daily workout and wellness tracker in a black PU leather A5 cover. Plan the session, track the work, reflect on the progress — a living document of your practice.
          </p>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href={JOURNAL_URL} {...external} className={goldButton}>
              Buy the Journal on Amazon — {JOURNAL_PRICE}
            </a>
            <p className="font-sans text-[0.65rem] text-charcoal/40">
              Included in the Kit — also available on its own.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── 5. Lifestyle ─────────────────────────────────────────────────────────────

function Lifestyle() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="mb-12 text-center font-serif text-3xl font-medium text-charcoal md:text-4xl">
          Movement and mindfulness, together.
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone">
            <Image
              src="/images/lifestyle-wall-hinge-3000.png"
              alt="Woman performing a Pilates wall hinge at home"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-stone">
            <Image
              src="/images/lifestyle-ring-crunch-3000.png"
              alt="Woman doing a core crunch with the Boncore Origin Pilates ring"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Instagram + Email ─────────────────────────────────────────────────────

function Community() {
  return (
    <section className="bg-stone py-20 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-16 px-6 md:px-12">
        <p className="text-center font-serif text-xl text-charcoal md:text-2xl">
          <a
            href={INSTAGRAM_URL}
            {...external}
            className="transition-colors duration-300 hover:text-gold"
          >
            Follow the journey — <span className="italic">@boncoreorigin</span>
          </a>
        </p>
        <EmailSignup />
      </div>
    </section>
  );
}

// ─── 7. FAQ ───────────────────────────────────────────────────────────────────

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <h2 className="mb-12 text-center font-serif text-4xl font-medium text-charcoal md:text-5xl">
          FAQ
        </h2>
        <div className="flex flex-col divide-y divide-linen border-y border-linen">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-lg font-medium text-charcoal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-xl text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 font-sans text-sm leading-relaxed text-charcoal/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. Brand Banner ──────────────────────────────────────────────────────────

function BrandBanner() {
  return (
    <div className="relative aspect-[5/1] w-full bg-stone">
      <Image
        src="/images/brand-banner-3000x600.png"
        alt="Boncore Origin brand banner"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <TheKit />
        <TheJournal />
        <Lifestyle />
        <Community />
        <Faq />
        <BrandBanner />
      </main>
      <Footer />
    </>
  );
}
