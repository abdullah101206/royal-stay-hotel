import Navbar from "./Components/Navbar";

export default function Home() {
  return (
   <>
<Navbar/>
"use client";

import { useEffect, useRef, useState } from "react";

// ── Animated counter hook ──────────────────────────────────────────────────
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Intersection observer hook ─────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Icons ──────────────────────────────────────────────────────────────────
const icons = {
  rooms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  service: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
    </svg>
  ),
  price: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  quote: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 opacity-20">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  ),
};

const FEATURES = [
  { icon: "rooms",   label: "Luxury Suites",          desc: "Handcrafted interiors with premium finishes" },
  { icon: "service", label: "24 / 7 Concierge",       desc: "Round-the-clock personal assistance" },
  { icon: "wifi",    label: "Complimentary Wi-Fi",     desc: "High-speed connectivity throughout the estate" },
  { icon: "price",   label: "Best Rate Promise",       desc: "Guaranteed lowest rates, always" },
];

const STATS = [
  { value: 500, suffix: "+", label: "Happy Guests" },
  { value: 50,  suffix: "+", label: "Luxury Rooms" },
  { value: 10,  suffix: "+", label: "Years of Excellence" },
  { value: 98,  suffix: "%", label: "Satisfaction Rate" },
];

// ── Stat Card ──────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, animate }) {
  const count = useCounter(value, 1800, animate);
  return (
    <div className="text-center group">
      <p className="font-['Cormorant_Garamond',Georgia,serif] text-4xl font-semibold text-[#0f172a] leading-none">
        {count}
        <span className="text-[#d4af37]">{suffix}</span>
      </p>
      <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-[#6b7280] font-medium">{label}</p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function AboutSection() {
  const [sectionRef, inView] = useInView(0.15);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#f8fafc] overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative corner ornament */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full
          bg-[#d4af37]/5 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full
          bg-[#0f172a]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        {/* ── Section Header ── */}
        <div
          className={[
            "text-center mb-16 lg:mb-20 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#d4af37] font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0f172a] leading-[1.1] mb-5">
            About <span className="italic text-[#d4af37]">Royal Stay</span>
          </h2>
          {/* Gold accent line */}
          <div className="flex items-center justify-center gap-3">
            <span className="block h-px w-12 bg-[#d4af37]/40" />
            <span className="block w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="block h-px w-12 bg-[#d4af37]/40" />
          </div>
        </div>

        {/* ── Main Grid: Image + Content ── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20 lg:mb-28">

          {/* Image column */}
          <div
            className={[
              "relative transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
            ].join(" ")}
          >
            {/* Offset gold border frame */}
            <div
              aria-hidden="true"
              className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-[#d4af37]/30 rounded-2xl pointer-events-none z-0"
            />

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.18)] aspect-[4/3]">
              {/* Unsplash luxury hotel lobby */}
              <img
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop"
                alt="Royal Stay luxury hotel room with plush furnishings and golden lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle dark vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute z-20 -bottom-5 -right-3 sm:right-6 bg-[#0f172a] rounded-xl px-5 py-4 shadow-xl">
              <p className="font-['Cormorant_Garamond',Georgia,serif] text-3xl font-semibold text-white leading-none">
                10<span className="text-[#d4af37]">+</span>
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#e5e7eb]/60 mt-1">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content column */}
          <div
            className={[
              "transition-all duration-700 delay-300",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            ].join(" ")}
          >
            {/* Quote mark */}
            <div className="text-[#d4af37] mb-2">{icons.quote}</div>

            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl sm:text-3xl font-semibold text-[#0f172a] leading-[1.3] mb-5">
              Where every detail tells a story of refined comfort
            </h3>

            <p className="text-[#4b5563] leading-relaxed mb-5 text-[15px]">
              Nestled in the heart of the city, Royal Stay has been welcoming discerning
              guests since 2014. Born from a vision to blend timeless elegance with
              contemporary luxury, every corner of our estate is a testament to
              thoughtful craftsmanship and warm hospitality.
            </p>

            <p className="text-[#6b7280] leading-relaxed text-[14px] mb-8">
              From our signature suites dressed in hand-selected fabrics to our award-
              winning dining experience, we curate every moment so that your stay
              transcends the ordinary. At Royal Stay, luxury isn't just an amenity —
              it's a philosophy.
            </p>

            {/* Feature list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map(({ icon, label, desc }, i) => (
                <li
                  key={label}
                  style={{ transitionDelay: inView ? `${350 + i * 80}ms` : "0ms" }}
                  className={[
                    "flex items-start gap-3 p-4 rounded-xl",
                    "bg-white border border-[#e5e7eb]",
                    "hover:border-[#d4af37]/50 hover:shadow-md",
                    "transition-all duration-300",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  ].join(" ")}
                >
                  <span className="mt-0.5 shrink-0 text-[#d4af37]">{icons[icon]}</span>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1f2937] tracking-wide">{label}</p>
                    <p className="text-[12px] text-[#9ca3af] mt-0.5 leading-snug">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <div className="mt-8 flex items-center gap-6">
              <a
                href="#booking"
                className={[
                  "inline-flex items-center gap-2 px-7 py-3",
                  "bg-[#0f172a] text-white",
                  "text-[11px] font-bold tracking-[0.18em] uppercase",
                  "rounded-sm hover:bg-[#1e3a5f]",
                  "shadow-lg hover:shadow-xl",
                  "transition-all duration-300 hover:scale-[1.03]",
                ].join(" ")}
              >
                Book Your Stay
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#rooms"
                className="text-[12px] font-semibold text-[#d4af37] tracking-widest uppercase hover:underline underline-offset-4 transition-all"
              >
                Explore Rooms →
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div
          className={[
            "relative rounded-2xl overflow-hidden transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          {/* Dark navy bg with subtle gold texture */}
          <div className="absolute inset-0 bg-[#0f172a]" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_60%)]"
          />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {STATS.map(({ value, suffix, label }, i) => (
              <div
                key={label}
                className="px-8 py-10 hover:bg-white/5 transition-colors duration-300 first:rounded-tl-2xl last:lg:rounded-tr-2xl"
              >
                <StatCard value={value} suffix={suffix} label={label} animate={inView} />
              </div>
            ))}
          </div>

          {/* Bottom gold line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
        </div>

      </div>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
      `}</style>
    </section>
  );
}
    </>
  );
}
