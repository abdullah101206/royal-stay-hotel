"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Booking", href: "#booking" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const CrownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M2 19h20v2H2v-2zM2 7l5 5 5-7 5 7 5-5v10H2V7z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0f172a]/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.45)] border-b border-[#d4af37]/10"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Gold top-line accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-70" />

        <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[72px]">

          {/* ── BRAND ── */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-2.5 group select-none shrink-0"
            aria-label="Royal Stay – home"
          >
            <span className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
              <CrownIcon />
            </span>
            <span className="font-['Cormorant_Garamond',_Georgia,_serif] text-2xl font-semibold tracking-[0.08em] text-white leading-none">
              Royal<span className="text-[#d4af37]">Stay</span>
            </span>
          </a>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeLink === label;
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(label)}
                    className={[
                      "relative px-4 py-2 text-[13px] font-medium tracking-[0.12em] uppercase",
                      "transition-colors duration-300 group",
                      isActive ? "text-[#d4af37]" : "text-[#e5e7eb] hover:text-[#d4af37]",
                    ].join(" ")}
                  >
                    {label}
                    {/* Animated underline */}
                    <span
                      className={[
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-[#d4af37]",
                        "transition-all duration-300 ease-in-out",
                        isActive
                          ? "w-4/5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100",
                      ].join(" ")}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            {/* Book Now button (desktop) */}
            <a
              href="#booking"
              onClick={() => handleNavClick("Booking")}
              className={[
                "hidden lg:inline-flex items-center gap-2 px-6 py-2.5",
                "bg-[#d4af37] hover:bg-[#b8952e] text-[#0f172a]",
                "text-[12px] font-bold tracking-[0.18em] uppercase",
                "rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.25)]",
                "hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]",
                "hover:scale-105 active:scale-95",
                "transition-all duration-300 ease-in-out select-none",
              ].join(" ")}
            >
              Book Now
            </a>

            {/* Hamburger (mobile/tablet) */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={[
                "lg:hidden flex items-center justify-center w-10 h-10 rounded-sm",
                "text-[#e5e7eb] hover:text-[#d4af37] hover:bg-white/5",
                "transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]",
              ].join(" ")}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      <div
        onClick={() => setMenuOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER ── */}
      <aside
        className={[
          "fixed top-0 right-0 z-50 h-full w-[min(85vw,340px)]",
          "bg-[#0f172a] border-l border-[#d4af37]/15",
          "flex flex-col lg:hidden",
          "transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#d4af37]/15 shrink-0">
          <span className="flex items-center gap-2 text-[#d4af37]">
            <CrownIcon />
            <span className="font-['Cormorant_Garamond',_Georgia,_serif] text-xl font-semibold tracking-widest text-white">
              Royal<span className="text-[#d4af37]">Stay</span>
            </span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-[#e5e7eb] hover:text-[#d4af37] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = activeLink === label;
            return (
              <a
                key={label}
                href={href}
                onClick={() => handleNavClick(label)}
                style={{
                  transitionDelay: menuOpen ? `${i * 55}ms` : "0ms",
                  transform: menuOpen ? "translateX(0)" : "translateX(24px)",
                  opacity: menuOpen ? 1 : 0,
                }}
                className={[
                  "flex items-center justify-between px-4 py-3.5",
                  "text-[13px] font-medium tracking-[0.15em] uppercase",
                  "rounded-sm border-b border-[#d4af37]/8",
                  "transition-all duration-300",
                  isActive
                    ? "text-[#d4af37] bg-[#d4af37]/8"
                    : "text-[#e5e7eb] hover:text-[#d4af37] hover:bg-white/5",
                ].join(" ")}
              >
                {label}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pb-10 pt-4 shrink-0">
          <a
            href="#booking"
            onClick={() => handleNavClick("Booking")}
            className={[
              "flex items-center justify-center w-full py-3.5",
              "bg-[#d4af37] hover:bg-[#b8952e]",
              "text-[#0f172a] text-[12px] font-bold tracking-[0.2em] uppercase",
              "rounded-sm shadow-[0_4px_20px_rgba(212,175,55,0.3)]",
              "hover:shadow-[0_4px_28px_rgba(212,175,55,0.5)]",
              "transition-all duration-300 hover:scale-[1.02] active:scale-95",
            ].join(" ")}
          >
            Book Now
          </a>
          <p className="mt-5 text-center text-[11px] text-[#e5e7eb]/30 tracking-widest uppercase">
            Luxury Redefined
          </p>
        </div>
      </aside>

      {/*
       * ── GOOGLE FONT IMPORT ──
       * In a real Next.js project, add this to app/layout.jsx:
       *
       *   import { Cormorant_Garamond } from "next/font/google";
       *   const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","600","700"] });
       *
       * For the preview, we load it via a <style> tag:
       */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');
      `}</style>
    </>
  );
}