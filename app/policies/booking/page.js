export default function BookingPolicyPage() {
  return (
    <main>
      <section
        id="booking"
        className="bg-[#f8fafc] py-20 px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Booking <span className="text-[#d4af37]">Policy</span>
            </h2>

            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Please read our booking terms before confirming your reservation.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                1. Booking Confirmation
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                All bookings are confirmed only after successful payment or approval.
                You will receive a confirmation email or SMS after booking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                2. Availability
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Room availability is subject to real-time updates. Booking is not guaranteed until confirmed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                3. Pricing Policy
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Prices may change without prior notice depending on season, demand, or promotions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                4. User Responsibility
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Users must provide correct personal and booking details. Incorrect information may lead to cancellation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                5. Special Requests
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Special requests (like room type, view, or amenities) are subject to availability and cannot be guaranteed.
              </p>
            </div>

          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Last updated: 2026 | Royal Stay Hotel
          </p>

        </div>
      </section>
    </main>
  );
}