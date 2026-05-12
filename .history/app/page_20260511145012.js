import Navbar from "./Components/Navbar";

export default function Home() {
  return (
   <>
<Navbar/>
  <section id="about" className="bg-[#f8fafc] py-20 px-6 md:px-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            About <span className="text-[#d4af37]">Royal Stay</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Royal Stay Hotel, where luxury meets comfort. 
            We provide world-class hospitality with modern rooms, premium services,
            and unforgettable experiences for our guests.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Luxury & Comfortable Rooms</li>
            <li>✔ 24/7 Customer Service</li>
            <li>✔ Free High-Speed WiFi</li>
            <li>✔ Best Price Guarantee</li>
          </ul>

          {/* Stats */}
          <div className="flex gap-8 mt-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a]">500+</h3>
              <p className="text-sm text-gray-500">Happy Guests</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a]">50+</h3>
              <p className="text-sm text-gray-500">Luxury Rooms</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a]">10+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="/about-hotel.jpg"
            alt="Hotel"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />

          {/* Decorative gold border effect */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#d4af37] rounded-2xl -z-10"></div>
        </div>

      </div>
    </section>
    </>
  );
}
