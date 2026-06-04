/**
 * Boncore Origin — Landing Page
 *
 * StoryBrand framework flow:
 *   Hero (The Hook)  →  Problem (The Villain)  →  Guide (The Introduction)
 *   →  Products (The Plan & Tool)  →  Transformation (The Happy Ending)
 */

import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  {
    label: "The Guided Journal — Vol. 1",
    name: "Origins",
    tagline: "Your practice, documented. Your progress, witnessed.",
    description:
      "A 12-week guided program built around daily movement sequences and mindfulness prompts. Track your form, record your feelings, and watch your best self emerge — one page at a time.",
    features: [
      "12-week structured program",
      "Daily movement + mindfulness prompts",
      "Form & sensation tracking pages",
      "Premium linen-feel cover",
    ],
    price: "$34.99",
    badge: "Bestseller",
    imagePlaceholder:
      "Photo: The Boncore Origin journal open to a spread — a movement diagram on the left, handwritten reflections on the right. Soft golden-hour light, linen surface.",
  },
  {
    label: "The Guided Journal — Vol. 2",
    name: "Elevate",
    tagline: "You built the foundation. Now build the life.",
    description:
      "For those who've completed Origins. Deeper sequences, more nuanced reflection prompts, and advanced form tracking for the woman ready to take her practice further.",
    features: [
      "Advanced 12-week program",
      "Deeper reflection prompts",
      "Progressive form tracking",
      "Milestone celebration pages",
    ],
    price: "$34.99",
    badge: null,
    imagePlaceholder:
      "Photo: Vol. 2 journal resting on a wooden floor beside a rolled yoga mat — muted, earthy tones, natural morning light.",
  },
  {
    label: "The Starter Kit",
    name: "Core + Calm Bundle",
    tagline: "Everything to begin, in one beautiful package.",
    description:
      "Origins journal paired with a set of premium resistance loops — the perfect entry point to a home Pilates practice. Curated, elegant, and ready for Day One.",
    features: [
      "Origins Journal (Vol. 1)",
      "3-piece resistance loop set",
      "Bonus quick-start guide",
      "Gift-ready packaging",
    ],
    price: "$54.99",
    badge: "Best Value",
    imagePlaceholder:
      "Photo: Flatlay bundle — journal, resistance loops, and quick-start guide arranged on linen cloth with natural foliage accents.",
  },
];

const testimonials = [
  {
    quote:
      "I've tried four different Pilates apps. None of them made me feel like I was actually learning. This journal changed that. I finally feel connected to my practice.",
    name: "Sarah M.",
    location: "Austin, TX",
    detail: "Week 10 · Origins",
    avatar:
      "Avatar: Black woman in her mid-30s, warm smile, natural home background",
  },
  {
    quote:
      "The prompts in this journal are everything. After every session, I actually want to sit down and write. It's become the highlight of my mornings.",
    name: "Priya K.",
    location: "New York, NY",
    detail: "Week 6 · Origins",
    avatar:
      "Avatar: South Asian woman, late 20s, relaxed expression, journal in hand",
  },
  {
    quote:
      "I was intimidated to start Pilates at my age and size. This journal makes me feel seen, guided, and capable. I'm on week 8 and I'm honestly hooked.",
    name: "Daniela R.",
    location: "Los Angeles, CA",
    detail: "Week 8 · Origins",
    avatar:
      "Avatar: Latina woman in her early 40s, natural sunlight, radiant and smiling",
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand/30 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand wordmark */}
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight text-earth"
        >
          Boncore Origin
        </a>

        {/* Desktop anchor links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#guide"
            className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth"
          >
            Our Story
          </a>
          <a
            href="#products"
            className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth"
          >
            Products
          </a>
          <a
            href="#transformation"
            className="font-sans text-sm font-medium text-bark/80 transition-colors hover:text-earth"
          >
            Community
          </a>
        </nav>

        {/* Primary nav CTA */}
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

// ─── Hero — The Hook ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-36">
      {/* Decorative soft-light blobs — purely visual */}
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

          {/* ── Copy ── */}
          <div className="flex flex-col gap-7">
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-terracotta">
              Guided Pilates · Mindful Journaling
            </p>

            <h1 className="font-serif text-5xl font-medium leading-[1.1] text-earth md:text-6xl lg:text-[4.25rem]">
              You don&apos;t need to know where to start.{" "}
              <em className="italic text-terracotta">
                You just need an Origin.
              </em>
            </h1>

            <p className="max-w-md font-sans text-base leading-relaxed text-bark/80 md:text-lg">
              You&apos;ve been drawn to the Pilates lifestyle — the calm, the
              strength, the ritual. Boncore Origin hands you the map. Your mat,
              your journal, your pace.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-earth px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
              >
                Get the Guided Journal
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

            {/* Social proof bar */}
            <div className="flex items-center gap-6 border-t border-sand/50 pt-6">
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">2k+</p>
                <p className="font-sans text-xs text-stone">Journals Sold</p>
              </div>
              <div className="h-8 w-px bg-sand" />
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">4.9 ★</p>
                <p className="font-sans text-xs text-stone">Amazon Rating</p>
              </div>
              <div className="h-8 w-px bg-sand" />
              <div>
                <p className="font-serif text-2xl font-semibold text-earth">12 wks</p>
                <p className="font-sans text-xs text-stone">Guided Program</p>
              </div>
            </div>
          </div>

          {/* ── Hero image placeholder ── */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/pilates_ring_frontpage.png"
                alt="Woman performing a Pilates ring exercise, seated on a chair"
                fill
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Floating testimonial snippet */}
            <div className="absolute -bottom-5 -left-5 max-w-[155px] rounded-2xl bg-warm-white p-4 shadow-xl">
              <div className="mb-1.5 flex gap-0.5">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-[10px] text-terracotta">
                    {s}
                  </span>
                ))}
              </div>
              <p className="font-sans text-[11px] leading-snug text-bark">
                &ldquo;My mornings finally feel intentional.&rdquo;
              </p>
              <p className="mt-1 font-sans text-[10px] text-stone">— Priya K.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Problem — The Villain ────────────────────────────────────────────────────

function Problem() {
  const painPoints = [
    {
      number: "01",
      heading: "The Studio Wall",
      body: "$40–$60 a class adds up fast. Studio Pilates was never meant to be a privilege — yet here we are, priced out of the calm we deserve.",
    },
    {
      number: "02",
      heading: "The App Trap",
      body: "Fitness apps give you timers, not wisdom. You're left counting seconds on a screen rather than building body awareness and real intuition.",
    },
    {
      number: "03",
      heading: "The Blank Page",
      body: "You want to track progress, reflect on your practice, and feel the ritual of growth — but there's no guide, no structure, no starting line.",
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
            Starting Pilates feels harder than it should.
          </h2>
          <div className="flex items-center">
            <p className="font-sans text-base leading-relaxed text-bark/80 md:text-lg">
              You feel the pull toward a Pilates lifestyle — the peace, the
              posture, the ritual. But somewhere between the studio price tag
              and the cold fitness app, the path gets lost.{" "}
              <strong className="font-semibold text-bark">
                You&apos;re not the problem. You just haven&apos;t found the right
                guide yet.
              </strong>
            </p>
          </div>
        </div>

        {/* Pain point cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="rounded-2xl bg-cream p-8 transition-shadow hover:shadow-md"
            >
              <p className="mb-6 font-serif text-5xl font-light text-sand">
                {point.number}
              </p>
              <h3 className="mb-3 font-serif text-xl font-medium text-earth">
                {point.heading}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-bark/80">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Guide — The Introduction ─────────────────────────────────────────────────

function Guide() {
  const features = [
    "Expert-designed sequences for every level — zero jargon required",
    "Daily mindfulness prompts woven into every movement",
    "Form & feeling tracking pages that make progress visible",
    "A community of women rewriting what 'fitness' means to them",
  ];

  return (
    <section id="guide" className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        <p className="mb-16 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
          The Guide
        </p>

        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Image placeholder (reversed column on desktop) */}
          <div className="relative order-last md:order-first">
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-linen">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sand/50">
                  <div className="h-10 w-10 rounded-full bg-sage/30" />
                </div>
                <p className="max-w-[180px] font-sans text-[0.65rem] leading-relaxed text-stone/80">
                  [Photo: Close-up of hands opening the Boncore Origin journal —
                  soft linen cover, warm light, a pen resting on the open page]
                </p>
              </div>
            </div>

            {/* Floating brand statement card */}
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
              Boncore Origin was built by a woman who felt exactly where you are
              now. We believe Pilates is for everyone — not just those who can
              afford a studio or decode complex terminology.
            </p>
            <p className="font-sans text-base leading-relaxed text-bark/80">
              So we built the thing that was missing: a brand that meets you on
              the mat and follows you to the journal — two tools, one seamless,
              mindful practice.
            </p>

            <ul className="flex flex-col gap-4">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20 font-sans text-xs text-sage">
                    ✓
                  </span>
                  <p className="font-sans text-sm leading-relaxed text-bark">
                    {feat}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#products"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-earth px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
            >
              Explore the Journal
              <span aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Products — The Plan & Tool ───────────────────────────────────────────────

function Products() {
  const flagship = products[0];
  const secondary = products.slice(1);

  return (
    <section id="products" className="bg-parchment py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
            The Tool
          </p>
          <h2 className="font-serif text-4xl font-medium text-earth md:text-5xl">
            Your Practice, Beautifully Guided.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base leading-relaxed text-bark/80">
            Every Boncore Origin product is designed to bridge the gap between
            digital movement and physical mindfulness — from the mat to the page.
          </p>
        </div>

        {/* ── Featured flagship product ── */}
        <div className="mb-8 overflow-hidden rounded-3xl bg-cream shadow-sm">
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative min-h-[320px] bg-linen md:min-h-[500px]">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
                <span className="mb-1 rounded-full bg-terracotta/10 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-terracotta">
                  {flagship.badge}
                </span>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sand/40">
                  <div className="h-10 w-10 rounded-full bg-bark/20" />
                </div>
                <p className="max-w-[210px] font-sans text-[0.65rem] leading-relaxed text-stone/80">
                  {flagship.imagePlaceholder}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
              <div>
                <p className="mb-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone">
                  {flagship.label}
                </p>
                <h3 className="font-serif text-3xl font-medium text-earth md:text-4xl">
                  {flagship.name}
                </h3>
                <p className="mt-1 font-serif text-base italic text-bark/70">
                  {flagship.tagline}
                </p>
              </div>

              <p className="font-sans text-sm leading-relaxed text-bark/80">
                {flagship.description}
              </p>

              <ul className="grid grid-cols-2 gap-2">
                {flagship.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 font-sans text-xs text-bark/80">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 border-t border-sand/50 pt-5">
                <p className="font-serif text-3xl font-medium text-earth">
                  {flagship.price}
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Buy Origins Journal on Amazon"
                  className="flex-1 rounded-full bg-terracotta py-4 text-center font-sans text-sm font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-bark hover:shadow-lg"
                >
                  Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Secondary products grid ── */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((product) => (
            <div
              key={product.name}
              className="overflow-hidden rounded-3xl bg-cream shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="relative aspect-video bg-linen">
                <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                  {product.badge && (
                    <span className="rounded-full bg-sage/15 px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-sage">
                      {product.badge}
                    </span>
                  )}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand/40">
                    <div className="h-7 w-7 rounded-full bg-bark/20" />
                  </div>
                  <p className="max-w-[190px] font-sans text-[0.65rem] leading-relaxed text-stone/80">
                    {product.imagePlaceholder}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-4 p-8">
                <div>
                  <p className="mb-0.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone">
                    {product.label}
                  </p>
                  <h3 className="font-serif text-2xl font-medium text-earth">
                    {product.name}
                  </h3>
                  <p className="font-serif text-sm italic text-bark/60">
                    {product.tagline}
                  </p>
                </div>

                <p className="font-sans text-sm leading-relaxed text-bark/80">
                  {product.description}
                </p>

                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 font-sans text-xs text-bark/70">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-sand" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-sand/50 pt-4">
                  <p className="font-serif text-2xl font-medium text-earth">
                    {product.price}
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${product.name} on Amazon`}
                    className="rounded-full border border-earth/50 px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest text-earth transition-all duration-300 hover:bg-earth hover:text-cream"
                  >
                    View on Amazon →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Transformation — The Happy Ending ───────────────────────────────────────

function Transformation() {
  return (
    <section id="transformation" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-4 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone">
            The Transformation
          </p>
          <h2 className="font-serif text-4xl font-medium text-earth md:text-5xl">
            Your next chapter begins here.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-bark/80">
            Real women. Real homes. Real progress. See what happens when the
            right guide finds you.
          </p>
        </div>

        {/* Central brand quote */}
        <div className="mb-16 text-center">
          <p className="font-serif text-2xl font-medium italic leading-snug text-earth md:text-3xl">
            &ldquo;Welcome to the Origin of your best self.&rdquo;
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-terracotta" />
        </div>

        {/* Testimonial grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl bg-linen p-8 transition-shadow hover:shadow-md"
            >
              {/* Star rating */}
              <div className="flex gap-1">
                {["★", "★", "★", "★", "★"].map((s, i) => (
                  <span key={i} className="text-sm text-terracotta">
                    {s}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base italic leading-relaxed text-earth">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 border-t border-sand/50 pt-4">
                {/* Avatar placeholder */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sand/60"
                  title={t.avatar}
                >
                  <div className="h-5 w-5 rounded-full bg-stone/30" />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-earth">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-stone">
                    {t.location} · {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
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
    "Origins Journal — Vol. 1",
    "Elevate Journal — Vol. 2",
    "Core + Calm Bundle",
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

          {/* Brand column */}
          <div className="md:col-span-2">
            <p className="mb-3 font-serif text-2xl font-semibold text-cream">
              Boncore Origin
            </p>
            <p className="mb-7 max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              The only brand that guides your movement on the mat and your
              mindfulness in the journal. Welcome to the Origin of your best
              self.
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

          {/* Shop links */}
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
              Shop
            </p>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/40">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
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
