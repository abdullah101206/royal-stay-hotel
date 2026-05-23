export default function PrivacyPolicyPage() {
    return (
        <main>
            <section
                id="privacy"
                className="bg-[#f8fafc] py-20 px-6 lg:px-8 scroll-mt-24"
            >
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
                            Privacy <span className="text-[#d4af37]">Policy</span>
                        </h2>

                        <p className="text-gray-600 mt-3 text-sm md:text-base">
                            Your trust is important to us. This policy explains how we handle your data.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10 space-y-8">

                        <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                1. Information We Collect
                            </h3>
                            <p className="text-gray-600 leading-7 text-sm md:text-base">
                                We may collect basic information such as your name, email address,
                                phone number, and booking details when you use our website or services.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                2. How We Use Your Information
                            </h3>
                            <p className="text-gray-600 leading-7 text-sm md:text-base">
                                Your information is used to process bookings, improve customer service,
                                and provide a personalized travel experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                3. Data Protection
                            </h3>
                            <p className="text-gray-600 leading-7 text-sm md:text-base">
                                We use secure systems and industry-standard practices to protect your
                                personal data from unauthorized access or misuse.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                4. Third-Party Sharing
                            </h3>
                            <p className="text-gray-600 leading-7 text-sm md:text-base">
                                We do not sell or rent your personal data. Information may only be
                                shared with trusted service providers for booking purposes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                5. Your Consent
                            </h3>
                            <p className="text-gray-600 leading-7 text-sm md:text-base">
                                By using our website, you agree to the terms of this Privacy Policy.
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