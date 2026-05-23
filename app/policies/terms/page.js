export default function RefundPolicyPage() {
  return (
    <main>
      <section
        id="refund"
        className="bg-[#f8fafc] py-20 px-6 lg:px-8 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
              Return & <span className="text-[#d4af37]">Refund Policy</span>
            </h2>

            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Please review our refund policy before making any booking or payment.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                1. Booking Cancellation
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Cancellations must be requested within the allowed time frame before check-in.
                Late cancellations may not be eligible for a refund.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                2. Refund Eligibility
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Refunds are only applicable for eligible bookings as per hotel policy.
                Some discounted or promotional bookings may be non-refundable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                3. Processing Time
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Approved refunds are processed within 5–10 business days depending on your payment method or bank.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                4. No-Show Policy
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                If a guest does not show up on the booking date, no refund will be issued.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                5. Changes to Booking
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Modifications to booking dates or room type depend on availability and may include additional charges.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                6. Refund Method
              </h3>
              <p className="text-gray-600 leading-7 text-sm md:text-base">
                Refunds will be issued using the original payment method only.
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