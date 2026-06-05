/**
 * Boncore Origin — Landing Page
 * StoryBrand: Customer = Hero, Struggle with starting Pilates = Villain,
 * Boncore Origin = Guide, Premium Pilates Essentials Kit = Tool
 */

import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const kitHighlights = [
  {
    number: "01",
    title: "The Only Kit With a Guided Pilates Journal",
    body: "While others offer digital apps, we provide a tactile A5 premium PU leather journal. Document your movements, track your mindfulness, and watch your Origin Story unfold across 76 custom-designed pages.",
  },
  {
    number: "02",
    title: "Pro-Grade Ring & Matte Ball",
    body: "Our 14\" ring is built with a high-tension fiberglass core and laser-engraved pads for a non-slip grip. Paired with a 20cm anti-burst matte ball for studio-level precision — at home.",
  },
  {
    number: "03",
    title: "Earthy, Minimalist Aesthetic",
    body: "Ditch the neon plastics. Our Beige, Light Brown, and Cocoa palette is designed to blend into your home sanctuary as beautifully as it performs.",
  },
  {
    number: "04",
    title: "Total Body Toning Trio",
    body: "Dual-sided core sliders, 3 premium fabric resistance bands (Light, Medium, Heavy) that won't roll or pinch, and 3 professional-grade latex stretch bands for deep flexibility.",
  },
  {
    number: "05",
    title: "Expert Guidance Included",
    body: "Every kit includes a full-color, 13-page Exercise Booklet on premium glossy paper — a clear roadmap for beginners and enthusiasts alike to move with confidence and intent.",
  },
];

const kitContents = [
  { qty: "1×", name: "Pro Pilates Ring", detail: "14\" Fiberglass & EVA · Beige", image: "/ring.png" },
  { qty: "1×", name: "Matte Pilates Ball", detail: "20cm Anti-Burst · Beige + Hand Pump", image: "/MiniBallpic.png" },
  { qty: "1×", name: "Guided Pilates Journal", detail: "A5 PU Leather · 100gsm · 76 Custom Pages", image: "/journal.png" },
  { qty: "2×", name: "Core Sliders", detail: "Dual-Sided · Beige / Black", image: "/sliders.png" },
  { qty: "3×", name: "Fabric Resistance Bands", detail: "Light · Medium · Heavy", image: "/LoopBand.png" },
  { qty: "3×", name: "Yoga Stretch Bands", detail: "Beige · Professional Grade", image: null },
  { qty: "1×", name: "Exercise Booklet", detail: "13-Page · Full-Color Glossy", image: null },
];

const testimonials = [
  {
    quote:
      "The journal alone is worth the price. I've never tracked my Pilates like this before. After six weeks I can already see the difference in my form and my mindset.",
    name: "Sarah M.",
    location: "Austin, TX",
    detail: "Verified Amazon Purchase",
    avatar: "Avatar: Black woman in her mid-30s, warm smile, natural home background",
  },
  {
    quote:
      "The ring and ball quality blew me away. And the aesthetic? My living room has never looked better. It feels like a luxury brand without the luxury price tag.",
    name: "Priya K.",
    location: "New York, NY",
    detail: "Verified Amazon Purchase",
    avatar: "Avatar: South Asian woman, late 20s, relaxed expression, kit around her",
  },
  {
    quote:
      "I was a total beginner. The exercise booklet gave me a starting point, and the journal kept me accountable. Eight weeks later I'm obsessed — and my core has never been stronger.",
    name: "Daniela R.",
    location: "Los Angeles, CA",
    detail: "Verified Amazon Purchase",
    avatar: "Avatar: Latina woman in her early 40s, natural sunlight, radiant smile",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/30 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#">
          <Image
            src="/logo.png"
            alt="Boncore Origin"
            width={320}
            height={80}
            className="h-20 w-auto"
            priority
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#guide" className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth">
            Our Story
          </a>
          <a href="#products" className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth">
            Products
          </a>
          <a href="#transformation" className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth">
            Community
          </a>
        </nav>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-terracotta px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-bark"
        >
          Shop on Amazon
        </a>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-linen opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[500px] w-[500px] rounded-full bg-sand/20"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Copy */}
          <div className="flex flex-col gap-7">
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Premium Pilates Essentials Kit · 7 Items
            </p>

            <h1 className="font-serif text-5xl font-medium leading-[1.1] text-earth md:text-6xl lg:text-[4.25rem]">
              You don&apos;t need to know where to start.{" "}
              <em className="italic text-terracotta">You just need an Origin.</em>
            </h1>

            <p className="max-w-md font-sans text-base leading-relaxed text-bark/80 md:text-lg">
              <em>Bon</em> means Good in French. At Boncore Origin, we believe your
              fitness journey deserves a beautiful beginning — one complete kit that
              elevates your home and your core.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-earth px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
              >
                Explore the Kit
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-earth/40 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-earth hover:text-cream"
              >
                Shop on Amazon
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 border-t border-sand/50 pt-6">
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">7</p>
                <p className="font-sans text-xs text-stone">Items Included</p>
              </div>
              <div className="h-8 w-px bg-sand" />
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">4.9 ★</p>
                <p className="font-sans text-xs text-stone">Amazon Rating</p>
              </div>
              <div className="h-8 w-px bg-sand" />
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">Studio</p>
                <p className="font-sans text-xs text-stone">Grade Quality</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/pilates_ring_frontpage.png"
                alt="Woman performing a Pilates ring exercise, seated on a chair"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Floating review snippet */}
            <div className="absolute -bottom-5 -left-5 max-w-[155px] rounded-2xl bg-warm-white p-4 shadow-xl">
              <div className="mb-1.5 flex gap-0.5">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-[10px] text-terracotta">{s}</span>
                ))}
              </div>
              <p className="font-sans text-[11px] leading-snug text-bark">
                &ldquo;The journal alone is worth it.&rdquo;
              </p>
              <p className="mt-1 font-sans text-[10px] text-stone">— Priya K.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────

function Problem() {
  const painPoints = [
    {
      number: "01",
      heading: "The Studio Wall",
      body: "$40–$60 a class adds up fast. Studio Pilates was never meant to be a privilege — yet here we are, priced out of the calm and strength we deserve.",
    },
    {
      number: "02",
      heading: "The App Trap",
      body: "Fitness apps hand you a screen and a timer. No tactile connection, no mindfulness tracking, no paper record of who you were and who you're becoming.",
    },
    {
      number: "03",
      heading: "The Equipment Problem",
      body: "Cheap, mismatched gear that rolls, pinches, and clashes with your home. You deserve equipment that performs as beautifully as it looks.",
    },
  ];

  return (
    <section id="problem" className="bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
          The Struggle
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <h2 className="font-serif text-4xl font-medium leading-tight text-earth md:text-5xl">
            Starting Pilates at home feels harder than it should.
          </h2>
          <div className="flex items-center">
            <p className="font-sans text-base leading-relaxed text-bark/80 md:text-lg">
              You feel the pull toward the Pilates lifestyle — the calm, the posture,
              the ritual. But between studio prices, cold apps, and cheap gear, the path
              gets noisy.{" "}
              <strong className="font-semibold text-bark">
                You&apos;re not the problem. You just haven&apos;t had the right kit yet.
              </strong>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="rounded-2xl bg-cream p-8 transition-shadow hover:shadow-md"
            >
              <p className="mb-6 font-serif text-5xl font-light text-sand">{point.number}</p>
              <h3 className="mb-3 font-serif text-xl font-medium text-earth">{point.heading}</h3>
              <p className="font-sans text-sm leading-relaxed text-bark/80">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guide ────────────────────────────────────────────────────────────────────

function Guide() {
  const features = [
    "The only home kit with a physical Guided Pilates Journal — 76 custom pages",
    "Pro-grade ring, ball, sliders, and bands in one cohesive, beautiful kit",
    "An earthy minimalist palette (Beige, Light Brown, Cocoa) designed for your home",
    "A 13-page Exercise Booklet so you always know exactly what to do next",
    "Bon means Good in French — this is the beginning of your Good Core story",
  ];

  return (
    <section id="guide" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="mb-16 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
          The Guide
        </p>

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Image placeholder */}
          <div className="relative order-last md:order-first">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-linen">
              <Image
                src="/full_kit_photo.jpg"
                alt="The full Boncore Origin Premium Pilates Essentials Kit arranged neatly — Journal upright in the center, surrounded by the ring, ball, bands, and sliders"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -right-4 -top-8 hidden w-56 rounded-2xl bg-linen p-5 shadow-lg md:block">
              <p className="font-serif text-sm italic leading-snug text-bark">
                &ldquo;The only brand that guides your movement on the mat and your
                mindfulness in the journal.&rdquo;
              </p>
              <div className="mt-3 h-px w-8 bg-terracotta" />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            <h2 className="font-serif text-4xl font-medium leading-tight text-earth md:text-5xl">
              Meet your partner on the mat.
            </h2>
            <p className="font-sans text-base leading-relaxed text-bark/80 md:text-lg">
              Boncore Origin was built for the modern woman who values mindfulness as much
              as movement. We didn&apos;t just bundle equipment — we built an experience
              that begins the moment you open the box.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark/80">
              Every piece in the kit is chosen to work together: the Journal anchors your
              practice, the equipment elevates it, and the booklet guides you from Day One.
            </p>

            <ul className="flex flex-col gap-4">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20 font-sans text-xs text-sage">
                    ✓
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-bark">{feat}</p>
                </li>
              ))}
            </ul>

            <a
              href="#products"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-earth px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
            >
              See What&apos;s Inside
              <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Products ─────────────────────────────────────────────────────────────────

function Products() {
  return (
    <section id="products" className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
            The Kit
          </p>
          <h2 className="font-serif text-4xl font-medium text-earth md:text-5xl">
            Premium Pilates Essentials Kit
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-serif text-lg italic text-bark/70">
            &ldquo;The only kit with a Guided Pilates Journal.&rdquo;
          </p>
        </div>

        {/* Main product showcase */}
        <div className="mb-10 overflow-hidden rounded-3xl bg-cream shadow-sm">
          <div className="grid md:grid-cols-2">

            {/* Image placeholder */}
            <div className="relative min-h-[360px] bg-linen md:min-h-[560px]">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                <span className="mb-2 rounded-full bg-terracotta/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-terracotta">
                  Everything You Need
                </span>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sand/40">
                  <div className="h-10 w-10 rounded-full bg-bark/20" />
                </div>
                <p className="max-w-[210px] font-sans text-[0.65rem] leading-relaxed text-stone/80">
                  [Photo: Kit flatlay — Journal standing upright in center, surrounded by
                  ring, matte ball, sliders, resistance bands, stretch bands, and booklet.
                  Warm golden-hour light on linen surface.]
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
              <div>
                <p className="mb-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  Boncore Origin
                </p>
                <h3 className="font-serif text-3xl font-medium leading-tight text-earth md:text-4xl">
                  Premium Pilates<br />Essentials Kit
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-bark/70">
                  <em>Bon</em> means Good in French. Your Good Core journey starts here.
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-bark/80">
                At Boncore Origin, we believe your fitness journey deserves a beautiful
                beginning. By blending high-end design with mindful guidance, we&apos;ve
                created a kit that doesn&apos;t just sit in your living room — it elevates it.
              </p>

              {/* 5 highlights */}
              <ul className="flex flex-col gap-4">
                {kitHighlights.map((h) => (
                  <li key={h.number} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta/15 font-sans text-[10px] font-semibold text-terracotta">
                      {h.number}
                    </span>
                    <div>
                      <p className="font-sans text-xs font-semibold text-earth">{h.title}</p>
                      <p className="mt-0.5 font-sans text-xs leading-relaxed text-bark/70">
                        {h.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buy the Boncore Origin Premium Pilates Essentials Kit on Amazon"
                className="mt-2 rounded-full bg-terracotta py-4 text-center font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
              >
                Buy Now on Amazon
              </a>
            </div>

          </div>
        </div>

        {/* What's in the Box */}
        <div className="rounded-3xl bg-cream p-8 md:p-12">
          <h3 className="mb-2 text-center font-serif text-2xl font-medium text-earth">
            What&apos;s in the Box
          </h3>
          <p className="mb-10 text-center font-sans text-sm text-stone">
            7 items. Everything you need. Nothing you don&apos;t.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {kitContents.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 rounded-2xl bg-linen p-4 text-center transition-shadow hover:shadow-md"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-sand/30">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-1"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-bark/20" />
                    </div>
                  )}
                </div>
                <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-widest text-terracotta">
                  {item.qty}
                </p>
                <p className="font-sans text-xs font-semibold leading-tight text-earth">
                  {item.name}
                </p>
                <p className="font-sans text-[0.6rem] leading-relaxed text-stone">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-earth/40 px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-earth hover:text-cream"
            >
              View Full Kit on Amazon →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Transformation ───────────────────────────────────────────────────────────

function Transformation() {
  return (
    <section id="transformation" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="mb-12 text-center">
          <p className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
            The Transformation
          </p>
          <h2 className="font-serif text-4xl font-medium text-earth md:text-5xl">
            Your next chapter begins here.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-bark/80">
            Real women. Real homes. Real progress. See what happens when the right kit finds you.
          </p>
        </div>

        <div className="mb-16 text-center">
          <p className="font-serif text-2xl font-medium italic leading-snug text-earth md:text-3xl">
            &ldquo;Welcome to the Origin of your best self.&rdquo;
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-terracotta" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl bg-linen p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex gap-1">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-sm text-terracotta">{s}</span>
                ))}
              </div>
              <blockquote className="font-serif text-base italic leading-relaxed text-earth">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-sand/50 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sand/60"
                  title={t.avatar}
                >
                  <div className="h-5 w-5 rounded-full bg-stone/30" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-earth">{t.name}</p>
                  <p className="font-sans text-xs text-stone">
                    {t.location} · {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 font-sans text-base text-bark/70">
            Ready to start your own story?
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
          >
            Get Your Pilates Kit On Amazon
            <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const shopLinks = [
    "Premium Pilates Essentials Kit",
    "Guided Pilates Journal",
    "Gift Cards",
  ];

  const companyLinks = [
    "Our Story",
    "Community",
    "Blog",
    "Sustainability",
    "Contact",
  ];

  return (
    <footer className="bg-earth text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">

          <div className="md:col-span-2">
            <p className="mb-3 font-serif text-2xl font-semibold text-cream">
              Boncore Origin
            </p>
            <p className="mb-7 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              <em>Bon</em> means Good in French. The only brand that guides your movement
              on the mat and your mindfulness in the journal. Welcome to the Origin of
              your best self.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-cream transition-colors hover:bg-bark"
            >
              Shop on Amazon →
            </a>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
              Shop
            </p>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-cream/70 transition-colors hover:text-cream">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-cream/70 transition-colors hover:text-cream">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="font-sans text-xs text-cream/40">
            © 2026 Boncore Origin. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-xs text-cream/40 transition-colors hover:text-cream/70"
              >
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
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Guide />
        <Products />
        <Transformation />
      </main>
      <Footer />
    </>
  );
}
