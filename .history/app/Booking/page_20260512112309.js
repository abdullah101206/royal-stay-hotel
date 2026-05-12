"use client";

import { useState } from "react";

export default function BookingSection() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="bg-[#f8fafc] py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Luxury Reservation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-5">
            Book Your <span className="text-[#d4af37]">Stay</span>
          </h2>

          <p className="text-[#6b7280] text-lg max-w-2xl mx-auto">
            Reserve your luxury room in just a few steps and enjoy world-class hospitality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* FORM */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">

            <form onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-6">

                <Input label="Full Name" type="text" placeholder="Enter your full name" />
                <Input label="Email Address" type="email" placeholder="Enter your email" />
                <Input label="Phone Number" type="tel" placeholder="+92 300 1234567" />
                <Input label="Number of Guests" type="number" placeholder="2 Guests" />
                <Input label="Check-in Date" type="date" />
                <Input label="Check-out Date" type="date" />

                {/* Room Type */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#1f2937] mb-2">
                    Room Type
                  </label>

                  <select className="cursor-pointer w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 bg-white">
                    <option>Select Room Type</option>
                    <option>Deluxe Room</option>
                    <option>Luxury Suite</option>
                    <option>Presidential Suite</option>
                    <option>Family Room</option>
                  </select>

                  <p className="text-sm text-[#6b7280] mt-2">
                    Choose the perfect room for your stay.
                  </p>
                </div>

              </div>

              {/* Success Message */}
              {success && (
                <div className="mt-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-xl">
                  Booking submitted successfully!
                </div>
              )}

              {/* Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="cursor-pointer bg-[#d4af37] text-[#0f172a] px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-[#c59b24] hover:scale-105 transition-all"
                >
                  Confirm Booking
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-fit">

            <h3 className="text-3xl font-bold text-[#0f172a] mb-6">
              Why Book With Us?
            </h3>

            <div className="space-y-5">

              <Feature title="Best Price Guarantee" desc="Get luxury rooms at best price." />
              <Feature title="Free Cancellation" desc="Flexible booking options." />
              <Feature title="24/7 Support" desc="We are always here to help." />
              <Feature title="Instant Confirmation" desc="Fast booking confirmation." />

            </div>

            <div className="mt-8 bg-[#0f172a] rounded-2xl p-6 text-white">
              <p className="text-[#d4af37] text-sm uppercase mb-2">
                Trusted Luxury
              </p>
              <h4 className="text-2xl font-bold mb-2">10000+ Happy Guests</h4>
              <p className="text-gray-300 text-sm">
                Trusted worldwide for luxury experience.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#1f2937] mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#e5e7eb] rounded-xl px-4 py-3 outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
      />
    </div>
  );
}

/* FEATURE COMPONENT */
function Feature({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] font-bold">
        ✓
      </div>

      <div>
        <h4 className="font-semibold text-[#1f2937]">{title}</h4>
        <p className="text-sm text-[#6b7280] mt-1">{desc}</p>
      </div>
    </div>
  );
}