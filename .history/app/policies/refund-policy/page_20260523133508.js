export default function TermsConditionsPage() {
  return (
    <main>
      <section
        id="terms"
        className="bg-white py-20 px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Terms & <span className="text-[#d4af37]">Conditions</span>
            </h2>

            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                1. Acceptance of Terms
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                By accessing and using our website, you agree to comply with and be bound by these Terms & Conditions.
                If you do not agree, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                2. Booking & Reservations
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                All bookings are subject to availability. We reserve the right to accept or reject any booking request.
                Confirmation will be provided via email or contact details provided by the user.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                3. Payment Policy
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Full or partial payment may be required at the time of booking.
                Prices are subject to change without prior notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                4. Cancellation Policy
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Cancellations must be made within the allowed time frame to qualify for a refund.
                Late cancellations may incur charges or be non-refundable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                5. User Responsibilities
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Users must provide accurate information during booking.
                Any misuse of the website or fraudulent activity may result in account restriction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                6. Limitation of Liability
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                We are not responsible for delays, service interruptions, or issues caused by third-party providers.
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