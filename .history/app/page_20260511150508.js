"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown, Menu, X } from "lucide-react";

export default function Page() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/" },
    { name: "Booking", href: "/" },
    { name: "About", href: "/" },
    { name: "FAQ", href: "/" },
    { name: "Contact", href: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    "Luxury & Comfortable Rooms",
    "24/7 Customer Service",
    "Free High-Speed WiFi",
    "Best Price Guarantee",
    "Premium Hospitality Experience",
    "World-Class Hotel Facilities",
  ];

  const stats = [
    { number: "500+", label: "Happy Guests" },
    { number: "50+", label: "Luxury Rooms" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] overflow-hidden">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30">
                <Crown className="w-5 h-5 text-[#d4af37]" />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">
                  Royal Stay
                </h1>

                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
                  Luxury Hotel
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-200 hover:text-[#d4af37] transition-all duration-300 group"
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-[#d4af37] text-[#0f172a] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-white"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] bg-[#0f172a] transition-all duration-300 ${mobileMenu
          ? "opacity-100 visible"
          : "opacity-0 invisible"
          }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-white/10">

          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-[#d4af37]" />

            <h1 className="text-2xl font-bold text-white">
              Royal Stay
            </h1>
          </div>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-white"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenu(false)}
              className="text-3xl font-semibold text-gray-200 hover:text-[#d4af37] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}

          <button className="mt-6 bg-[#d4af37] text-[#0f172a] px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-[#c59b24] hover:scale-105 transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>

      <section className="relative flex items-center justify-center min-h-screen px-6">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl text-center">
          <p className="text-[#d4af37] uppercase tracking-[0.4em] text-sm mb-4">
            Luxury Hotel Experience
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Discover The Perfect
            <span className="block text-[#d4af37]">
              Luxury Stay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            Experience premium comfort, elegant rooms, and unforgettable
            hospitality at Royal Stay Hotel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

            <button className="bg-[#d4af37] text-[#0f172a] px-8 py-4 rounded-full font-semibold shadow-2xl hover:bg-[#c59b24] hover:scale-105 transition-all duration-300">
              Book Your Room
            </button>

            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
              Explore Rooms
            </button>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="bg-[#f8fafc] py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              {/* Section Tag */}
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Luxury Hospitality
              </p>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
                About{" "}
                <span className="text-[#d4af37]">
                  Royal Stay
                </span>
              </h2>

              {/* Description */}
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                We provide world-class hospitality with luxury rooms,
                exceptional service, and unforgettable guest experiences.
                At Royal Stay, every detail is carefully designed to offer
                comfort, elegance, and premium relaxation for travelers from
                around the world.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"
                  >
                    {/* Icon */}
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 group-hover:bg-[#d4af37] transition-all duration-300">
                      <span className="text-[#d4af37] group-hover:text-white text-sm font-bold">
                        ✓
                      </span>
                    </div>

                    {/* Text */}
                    <p className="text-[#1f2937] font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <h3 className="text-3xl font-bold text-[#d4af37] mb-2">
                      {stat.number}
                    </h3>

                    <p className="text-[#6b7280] text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">

              {/* Gold Decoration */}
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#d4af37]/30 rounded-2xl"></div>

              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Hotel"
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50">
                <p className="text-[#d4af37] font-bold text-lg">
                  5-Star Luxury
                </p>

                <p className="text-[#1f2937] text-sm">
                  Trusted by travelers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>



  );
}