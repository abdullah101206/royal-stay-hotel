"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown, Menu, X } from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };
  const testimonials = [
    {
      name: "Ali Khan",
      location: "Pakistan",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Amazing hotel experience, very clean rooms and excellent service. The staff was professional and very welcoming.",
    },
    {
      name: "Sarah Ahmed",
      location: "Dubai",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Luxury stay at an affordable price. Beautiful rooms, peaceful environment, and quick booking process.",
    },
    {
      name: "John Smith",
      location: "United Kingdom",
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "One of the best hotel experiences I’ve ever had. Everything from hospitality to room quality was exceptional.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the check-in and check-out time?",
      answer:
        "Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in and late check-out may be available upon request.",
    },
    {
      question: "Do you offer free cancellation?",
      answer:
        "Yes, we offer free cancellation on selected room packages before the cancellation deadline.",
    },
    {
      question: "Is breakfast included in the room price?",
      answer:
        "Breakfast is included in most luxury room packages. Please check room details during booking.",
    },
    {
      question: "Do you provide airport pickup service?",
      answer:
        "Yes, airport pickup and drop-off services are available for guests at an additional charge.",
    },
    {
      question: "How can I modify or cancel my booking?",
      answer:
        "You can easily modify or cancel your reservation through your booking confirmation email or by contacting our support team.",
    },
    {
      question: "Is WiFi free in the hotel?",
      answer:
        "Yes, complimentary high-speed WiFi is available throughout the hotel for all guests.",
    },
    {
      question: "Do you allow early check-in or late check-out?",
      answer:
        "Yes, depending on room availability. Please contact our reception team in advance for arrangements.",
    },
    {
      question: "Are pets allowed in the hotel?",
      answer:
        "Selected rooms are pet-friendly. Please contact us before booking to confirm availability.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const [messageSent, setMessageSent] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury Room",
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
      title: "Hotel Lobby",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      title: "Swimming Pool",
    },
    {
      src: "https://images.unsplash.com/photo-1551887373-6f5d8b3b7b4e?q=80&w=1200&auto=format&fit=crop",
      title: "Restaurant",
    },
    {
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
      title: "Exterior View",
    },
    {
      src: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a4f?q=80&w=1200&auto=format&fit=crop",
      title: "Luxury Interior",
    },
  ];

  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setOpen(true);
    setEmail("");
  };

  const handleClose = () => {
    setOpen(false);
  };



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
            <div>
              <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Luxury Hospitality
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-6">
                About{" "}
                <span className="text-[#d4af37]">
                  Royal Stay
                </span>
              </h2>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                We provide world-class hospitality with luxury rooms,
                exceptional service, and unforgettable guest experiences.
                At Royal Stay, every detail is carefully designed to offer
                comfort, elegance, and premium relaxation for travelers from
                around the world.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group"               >
                    <div className="w-6 h-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 group-hover:bg-[#d4af37] transition-all duration-300">
                      <span className="text-[#d4af37] group-hover:text-white text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="text-[#1f2937] font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
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
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#d4af37]/30 rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Hotel"
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-[600px]"
              />
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
      {/* Booking Section */}
      <section className="bg-[#f8fafc] py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Luxury Reservation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
              Book Your{" "}
              <span className="text-[#d4af37]">
                Stay
              </span>
            </h2>

            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              Reserve your luxury room in just a few steps and enjoy
              world-class hospitality with premium comfort.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Booking Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">

              <form onSubmit={handleSubmit}>

                {/* Inputs Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Number of Guests
                    </label>

                    <input
                      type="number"
                      placeholder="2 Guests"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Check In */}
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Check-in Date
                    </label>

                    <input
                      type="date"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Check-out Date
                    </label>

                    <input
                      type="date"
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Room Type */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Room Type
                    </label>

                    <select
                      required
                      className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 bg-white"
                    >
                      <option value="">Select Room Type</option>
                      <option>Deluxe Room</option>
                      <option>Luxury Suite</option>
                      <option>Presidential Suite</option>
                      <option>Family Room</option>
                    </select>

                    <p className="text-sm text-[#6b7280] mt-2">
                      Choose the perfect room for your luxury stay.
                    </p>
                  </div>
                </div>

                {/* Success Message */}
                {success && (
                  <div className="mt-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                    Booking submitted successfully!
                  </div>
                )}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#d4af37] text-[#0f172a] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit">

              <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Why Choose Us
              </p>

              <h3 className="text-3xl font-bold text-[#0f172a] mb-6">
                Why Book With Us?
              </h3>

              <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1f2937]">
                      Best Price Guarantee
                    </h4>

                    <p className="text-sm text-[#6b7280] mt-1">
                      Get luxury rooms at the most competitive prices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1f2937]">
                      Free Cancellation
                    </h4>

                    <p className="text-sm text-[#6b7280] mt-1">
                      Flexible booking options with stress-free cancellation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1f2937]">
                      24/7 Customer Support
                    </h4>

                    <p className="text-sm text-[#6b7280] mt-1">
                      Our hospitality team is available anytime you need help.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#1f2937]">
                      Instant Confirmation
                    </h4>

                    <p className="text-sm text-[#6b7280] mt-1">
                      Confirm your reservation instantly with no delays.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-[#0f172a] rounded-2xl p-6 text-white">
                <p className="text-[#d4af37] text-sm uppercase tracking-[0.2em] mb-2">
                  Trusted Luxury
                </p>

                <h4 className="text-2xl font-bold mb-2">
                  500+ Happy Guests
                </h4>

                <p className="text-gray-300 text-sm">
                  Guests worldwide trust Royal Stay for premium comfort,
                  elegance, and unforgettable hospitality experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials  */}
      <section className="bg-[#ffffff] py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Guest Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
              What Our{" "}
              <span className="text-[#d4af37]">
                Guests Say
              </span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              Real experiences from our happy customers who enjoyed
              premium hospitality and unforgettable luxury stays.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#d4af37]/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#0f172a]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#6b7280]">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {"★★★★★".split("").map((star, i) => (
                    <span
                      key={i}
                      className="text-[#d4af37] text-lg"
                    >
                      {star}
                    </span>
                  ))}
                </div>
                <p className="text-[#6b7280] leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20 bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-[#e5e7eb]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h3 className="text-4xl font-bold text-[#d4af37] mb-2">
                  4.9★
                </h3>

                <p className="text-[#1f2937] font-medium">
                  Average Rating
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#d4af37] mb-2">
                  10000+
                </h3>

                <p className="text-[#1f2937] font-medium">
                  Happy Guests
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#d4af37] mb-2">
                  50+
                </h3>

                <p className="text-[#1f2937] font-medium">
                  Countries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's */}
      <section className="bg-[#f8fafc] py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">

            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Guest Support
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5 leading-tight">
              Frequently Asked{" "}
              <span className="text-[#d4af37]">
                Questions
              </span>
            </h2>

            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              Everything you need to know before booking your luxury
              stay at Royal Stay Hotel.
            </p>
          </div>
          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${openIndex === index
                  ? "border-[#d4af37]"
                  : "border-[#e5e7eb]"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <h3
                    className={`text-lg font-semibold transition-all duration-300 ${openIndex === index
                      ? "text-[#d4af37]"
                      : "text-[#0f172a]"
                      }`}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index
                      ? "bg-[#d4af37] text-white"
                      : "bg-[#f8fafc] text-[#0f172a]"
                      }`}
                  >
                    {openIndex === index ? "-" : "+"}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#6b7280] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-white border border-[#e5e7eb] rounded-3xl p-8 text-center shadow-sm">

            <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Need More Help?
            </p>

            <h3 className="text-3xl font-bold text-[#0f172a] mb-4">
              Our Support Team Is Available 24/7
            </h3>

            <p className="text-[#6b7280] max-w-2xl mx-auto mb-6">
              We are always here to answer your questions and help you
              book the perfect luxury stay experience.
            </p>

            <button className="bg-[#d4af37] text-[#0f172a] px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Hotel Support
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
              Contact{" "}
              <span className="text-[#d4af37]">
                Us
              </span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              We're here to help you anytime with bookings,
              questions, or luxury stay assistance.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-10 border border-[#e5e7eb] shadow-sm">

              <h3 className="text-3xl font-bold text-[#0f172a] mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleContactSubmit}>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full border border-[#e5e7eb] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full border border-[#e5e7eb] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full border border-[#e5e7eb] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Booking Inquiry"
                      required
                      className="w-full border border-[#e5e7eb] bg-white rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                      Message
                    </label>

                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                      required
                      className="w-full border border-[#e5e7eb] bg-white rounded-xl px-4 py-3 outline-none resize-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300"
                    ></textarea>
                  </div>
                </div>

                {messageSent && (
                  <div className="mt-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                    Message sent successfully!
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  className="mt-8 w-full md:w-auto bg-[#d4af37] text-[#0f172a] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">

              <div className="bg-[#f8fafc] rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

                <p className="text-[#d4af37] uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                  Contact Details
                </p>

                <h3 className="text-3xl font-bold text-[#0f172a] mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl">
                      📍
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937]">
                        Address
                      </h4>
                      <p className="text-[#6b7280] mt-1">
                        Royal Stay Hotel, Main Boulevard,
                        Dubai Marina, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl">
                      📞
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937]">
                        Phone Number
                      </h4>

                      <p className="text-[#6b7280] mt-1">
                        +971 123 456 789
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl">
                      📧
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937]">
                        Email Address
                      </h4>

                      <p className="text-[#6b7280] mt-1">
                        support@royalstay.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] text-xl">
                      🕒
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#1f2937]">
                        Working Hours
                      </h4>

                      <p className="text-[#6b7280] mt-1">
                        24/7 Customer Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="bg-[#f8fafc] py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Hotel Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
              Our{" "}
              <span className="text-[#d4af37]">
                Gallery
              </span>
            </h2>

            <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
              Take a visual journey through our luxury rooms, elegant
              interiors, and world-class hospitality experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {images.map((img, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-72 object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 rounded-xl flex items-end p-5">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                    {img.title}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#d4af37] transition duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white border border-[#e5e7eb] rounded-3xl p-10 shadow-sm">

            <h3 className="text-3xl font-bold text-[#0f172a] mb-4">
              Experience Luxury Like Never Before
            </h3>

            <p className="text-[#6b7280] mb-6">
              Discover comfort, elegance, and unforgettable hospitality
              at Royal Stay Hotel.
            </p>

            <button className="bg-[#d4af37] text-[#0f172a] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all duration-300">
              Book Your Stay
            </button>
          </div>
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full px-6">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </section>
      {/* Footer */}
      <footer className="bg-[#0f172a] text-[#e5e7eb] border-t border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-[#d4af37]">
                Royal Stay Hotel
              </h2>
              <p className="mt-3 text-sm text-[#9ca3af]">
                Luxury comfort, premium hospitality, unforgettable experience.
              </p>
              <div className="flex gap-4 mt-5 text-sm">
                <a className="hover:text-[#d4af37] transition">Facebook</a>
                <a className="hover:text-[#d4af37] transition">Instagram</a>
                <a className="hover:text-[#d4af37] transition">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-[#9ca3af]">
                {["Home", "Rooms", "Booking", "About", "FAQ", "Contact"].map(
                  (item, i) => (
                    <li key={i}>
                      <a className="hover:text-[#d4af37] transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-[#9ca3af]">
                <p>📍 Royal Avenue, Luxury City</p>
                <p>📞 +92 300 1234567</p>
                <p>📧 info@royalstayhotel.com</p>
                <p>🕒 24/7 Support</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Subscribe to Updates
              </h3>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-[#111827] border border-[#1f2937] text-white focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition"             >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#1f2937] my-10"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#9ca3af] gap-4">
            <p>© 2026 Royal Stay Hotel. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-[#d4af37] transition">Privacy Policy</a>
              <a className="hover:text-[#d4af37] transition">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}      >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}     >
            Successfully subscribed to Royal Stay updates!
          </Alert>
        </Snackbar>
      </footer>
    </main>
  );
}