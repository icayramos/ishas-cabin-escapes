import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Waves,
  Trees,
  Users,
  Car,
  Sparkles,
  Instagram,
  Facebook,
  Play,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import heroVideo from "@/assets/hero-video.asset.json";
import logoAsset from "@/assets/logo.asset.json";
import galExt1 from "@/assets/gallery-exterior-1.jpg";
import galExt2 from "@/assets/gallery-exterior-2.jpg";
import galPool1 from "@/assets/gallery-pool-1.jpg";
import galPool2 from "@/assets/gallery-pool-2.jpg";
import galInt1 from "@/assets/gallery-interior-1.jpg";
import galMoments1 from "@/assets/gallery-moments-1.jpg";

const HERO_SLIDES = [
  { src: galExt1, alt: "A-frame cabins at golden hour" },
  { src: galPool1, alt: "Private resort pool at dusk" },
  { src: galInt1, alt: "Cozy A-frame cabin interior" },
  { src: galExt2, alt: "A-frame roofline against a warm sky" },
  { src: galMoments1, alt: "Friends gathering at the cabin" },
];

const GALLERY_PHOTOS = [
  { src: galExt1, alt: "A-frame cabins at golden hour" },
  { src: galPool1, alt: "Private pool with warm evening light" },
  { src: galInt1, alt: "Cozy A-frame cabin interior" },
  { src: galPool2, alt: "Overhead view of the pool and cabins" },
  { src: galExt2, alt: "A-frame roofline against a warm sky" },
  { src: galMoments1, alt: "Friends gathering at the cabin" },
];

export const Route = createFileRoute("/")({
  component: Index,
});

const FB_URL = "https://facebook.com/ishascabin";
const IG_URL = "https://instagram.com/ishascabin";
const PHONE = "0962 702 7569";
const PHONE_TEL = "+639627027569";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=383G%2B74+San+Pablo+City+Laguna";
const MAPS_EMBED =
  "https://www.google.com/maps?q=383G%2B74+San+Pablo+City,+Laguna&output=embed";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#rates", label: "Rates" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Isha's Cabin logo"
      className={className}
      loading="eager"
    />
  );
}

function WaveDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <svg
        viewBox="0 0 1200 40"
        className="h-10 w-full text-primary/20"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 20 C 300 -5, 600 45, 900 20 S 1200 20, 1200 20"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M0 28 C 300 8, 600 48, 900 28 S 1200 28, 1200 28"
          stroke="currentColor"
          strokeOpacity="0.6"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark className="h-10 w-10 rounded-full object-cover" />
          <span
            className={`font-serif tracking-[0.2em] text-sm md:text-base ${
              scrolled ? "text-primary" : "text-cream drop-shadow"
            }`}
          >
            ISHA'S CABIN
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-cream/90 hover:text-cream"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={FB_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Message Us
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              scrolled
                ? "border-border text-primary"
                : "border-cream/40 text-cream"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-cream border-t border-border">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 border-b border-border/50 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Message Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster.url}
        preload="metadata"
      >
        <source src={heroVideo.url} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-28 pb-20 md:px-8">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Newly Opened · San Pablo, Laguna
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-cream text-balance md:text-7xl lg:text-8xl">
          Your relaxing escape<br />
          <span className="italic text-cream/90">in San Pablo, Laguna.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-cream/85 md:text-lg">
          Mini A-frame cabins, a private pool, and quality time with the people
          you love — starting at{" "}
          <span className="text-cream font-medium">₱2,500 for up to 8 pax</span>.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#rates"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-primary transition hover:bg-cream/90"
          >
            Check Rates <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={FB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-transparent px-6 py-3.5 text-sm font-medium text-cream backdrop-blur-sm transition hover:bg-cream/10"
          >
            <MessageCircle className="h-4 w-4" />
            Message Us on Facebook
          </a>
        </div>
        <div className="mt-10 flex items-center gap-3 text-cream/90">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current text-amber-300" />
            ))}
          </div>
          <span className="text-sm">
            <span className="font-medium text-cream">4.7 / 5</span> · 13 Google
            Reviews
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-cream/80 hover:text-cream"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function About() {
  const highlights = [
    { icon: Trees, label: "Peaceful & Clean" },
    { icon: Users, label: "Great for Groups up to 8" },
    { icon: Waves, label: "Private Pool Access" },
  ];
  return (
    <section id="about" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">
            — Welcome
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-primary md:text-5xl text-balance">
            A quiet cabin escape, made for the people who matter most.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            Isha's Cabin is a newly opened mini A-frame cabin resort tucked in{" "}
            <span className="text-foreground">
              Farconville Phase II, San Pablo City, Laguna
            </span>{" "}
            — built for intimate gatherings, birthdays, reunions, and quiet
            weekend escapes with the people who matter most.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-background/60 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20"><WaveDivider /></div>
    </section>
  );
}

function Amenities() {
  const items = [
    {
      icon: Waves,
      title: "Private Pool",
      desc: "Cool off in your own turquoise pool, surrounded by greenery.",
    },
    {
      icon: Trees,
      title: "A-Frame Cabins",
      desc: "Clean, comfortable interiors with warm natural wood.",
    },
    {
      icon: Users,
      title: "Function Space",
      desc: "Perfect for birthdays, reunions, and small celebrations.",
    },
    {
      icon: Car,
      title: "On-site Parking",
      desc: "Room to park easily right at the resort.",
    },
    {
      icon: Sparkles,
      title: "Friendly Staff",
      desc: "Accommodating hosts who help make your stay easy.",
    },
    {
      icon: MapPin,
      title: "Easy to Locate",
      desc: "Just minutes from San Pablo City proper.",
    },
  ];
  return (
    <section id="amenities" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">
            — Amenities
          </p>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl text-balance">
            Everything you need to slow down.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary transition group-hover:bg-sage group-hover:text-sage-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type GalleryItem = {
  src: string;
  cat: "Exterior" | "Pool" | "Interiors" | "Moments";
  aspect: string;
  alt: string;
};

const GALLERY: GalleryItem[] = [
  { src: galExt1, cat: "Exterior", aspect: "aspect-[4/5]", alt: "A-frame cabins at golden hour" },
  { src: galPool1, cat: "Pool", aspect: "aspect-[4/3]", alt: "Private resort pool at dusk" },
  { src: galInt1, cat: "Interiors", aspect: "aspect-[4/5]", alt: "Cozy A-frame cabin interior" },
  { src: galPool2, cat: "Pool", aspect: "aspect-[4/3]", alt: "Overhead view of pool and cabins" },
  { src: galExt2, cat: "Exterior", aspect: "aspect-[4/5]", alt: "A-frame roof against sunset" },
  { src: galMoments1, cat: "Moments", aspect: "aspect-[4/3]", alt: "Friends gathering at the cabin" },
];

const CATS = ["All", "Exterior", "Pool", "Interiors", "Moments"] as const;

function Gallery({ onOpenTour }: { onOpenTour: () => void }) {
  const [active, setActive] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sage">— Gallery</p>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl text-balance">
              A peek inside the cabin.
            </h2>
          </div>
          <button
            onClick={onOpenTour}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-5 py-3 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch the Tour
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/70 hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {items.map((g, i) => (
            <button
              key={i}
              onClick={() => setLightbox(g)}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${g.aspect}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest text-primary backdrop-blur-sm">
                {g.cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function Rates() {
  const includes = [
    "Access to private pool",
    "A-frame cabin stay",
    "Gathering / function space",
    "Parking on-site",
  ];
  return (
    <section id="rates" className="relative overflow-hidden bg-primary py-24 text-cream md:py-32">
      <div className="absolute inset-0 opacity-30">
        <img
          src={galPool2}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sage">— Rates</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-balance">
            Book your quality time — starting at just ₱2,500.
          </h2>
          <p className="mt-5 max-w-md text-cream/80">
            Rates may vary by season and date. Message us for the latest
            availability and full package details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-primary transition hover:bg-cream/90"
            >
              <MessageCircle className="h-4 w-4" /> Inquire for Full Rates
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-cream/20 bg-cream/5 p-8 backdrop-blur-sm md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/70">
            Day Tour / Overnight
          </p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-serif text-6xl md:text-7xl">₱2,500</span>
            <span className="pb-2 text-cream/70">starting</span>
          </div>
          <p className="mt-2 text-sm text-cream/70">Good for up to 8 pax</p>
          <div className="my-7 h-px w-full bg-cream/20" />
          <ul className="space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-cream/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage/30 text-sage">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    quote:
      "We had an amazing experience at this resort! The place is clean, peaceful, and well-maintained, making it perfect for relaxation.",
    author: "Ma. Andria Delos Santos",
  },
  {
    quote:
      "The place was clean, peaceful, and relaxing. The staff were friendly and accommodating. A nice place to unwind and spend quality time with family and friends.",
    author: "Clarissa Lagrazon",
  },
  {
    quote:
      "The cabins are clean and comfortable, and the private pool is amazing… an amazing and relaxing experience.",
    author: "Yela Dela Cruz",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sage">— Reviews</p>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl text-balance">
              Loved by guests, rated 4.7 ★.
            </h2>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-5 py-3 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            See all reviews on Google <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.author}
              className="flex flex-col rounded-2xl border border-border bg-background p-7"
            >
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-serif text-xl leading-relaxed text-foreground/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-sand/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sage">— Find Us</p>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl text-balance">
            Easy to find, just minutes from the city.
          </h2>
          <div className="mt-8 space-y-4 text-foreground/80">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage" />
              <p>
                Block 2, Lot 3, Bañagale Garcia Compound,<br />
                Farconville Phase 2, San Pablo City,<br />
                Laguna, 4000
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-xs font-medium text-sage">
                +
              </span>
              <p>
                Plus code: <span className="font-medium text-primary">383G+74</span> San Pablo City, Laguna
              </p>
            </div>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition hover:bg-primary/90"
          >
            Get Directions <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title="Isha's Cabin location map"
            src={MAPS_EMBED}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sage">— Contact</p>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl text-balance">
            Let's plan your escape.
          </h2>
          <p className="mt-5 max-w-md text-foreground/70">
            Send us a message and we'll get back to you with available dates and
            full rates. Or reach us directly on your favourite channel.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 transition hover:border-sage"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-sage">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Call</p>
                <p className="text-sm text-foreground">{PHONE}</p>
              </div>
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 transition hover:border-sage"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-sage">
                <Facebook className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Facebook</p>
                <p className="text-sm text-foreground">Isha's Cabin</p>
              </div>
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-4 transition hover:border-sage"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-sage">
                <Instagram className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</p>
                <p className="text-sm text-foreground">@ishascabin</p>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const msg = `Hi Isha's Cabin! I'm ${data.get("name")}, planning a stay on ${data.get("date")} for ${data.get("guests")} guest(s). ${data.get("message") ?? ""}`;
            window.open(
              `https://m.me/ishascabin?text=${encodeURIComponent(msg)}`,
              "_blank",
            );
            setSent(true);
          }}
          className="rounded-3xl border border-border bg-background p-7 md:p-9"
        >
          <div className="grid gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-sage"
                placeholder="Your name"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Date of stay</span>
                <input
                  required
                  name="date"
                  type="date"
                  className="mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-sage"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground"># of guests</span>
                <input
                  required
                  name="guests"
                  type="number"
                  min={1}
                  max={20}
                  defaultValue={6}
                  className="mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-sage"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-sage"
                placeholder="Tell us about your gathering…"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
            {sent && (
              <p className="text-center text-xs text-sage">
                Opening Messenger with your inquiry…
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LogoMark className="h-12 w-12 rounded-full bg-cream object-cover" />
            <span className="font-serif tracking-[0.2em] text-cream">
              ISHA'S CABIN
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A relaxing mini A-frame cabin resort in San Pablo, Laguna. Clean.
            Peaceful. Yours.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cream">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition hover:text-cream">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cream">Visit</p>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            Farconville Phase 2<br />
            San Pablo City, Laguna 4000<br />
            <a href={`tel:${PHONE_TEL}`} className="mt-2 inline-block hover:text-cream">
              {PHONE}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 md:flex-row md:px-8">
          <p>© 2026 Isha's Cabin. All rights reserved.</p>
          <p className="italic">Where every weekend feels like summer.</p>
        </div>
      </div>
    </footer>
  );
}

function TourModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 text-cream"
        onClick={onClose}
        aria-label="Close tour"
      >
        <X className="h-7 w-7" />
      </button>
      <video
        src={heroVideo.url}
        controls
        autoPlay
        playsInline
        className="max-h-[85vh] w-full max-w-3xl rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-border bg-cream/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary"
        aria-label="Call"
      >
        <Phone className="h-4 w-4" />
      </a>
      <a
        href={FB_URL}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
      >
        <MessageCircle className="h-4 w-4" /> Book Now
      </a>
    </div>
  );
}

function Index() {
  const [tourOpen, setTourOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery onOpenTour={() => setTourOpen(true)} />
        <Rates />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
      <TourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </div>
  );
}
