import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function ContactPage() {
  return (
    <>
    <Navbar />
    <main className="w-full bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-4 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">

          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about Clinic Sathi? We’re here to help you set up your clinic system easily.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white border rounded-2xl p-8 shadow-sm space-y-6">

            <h2 className="text-xl font-semibold">
              Send us a message
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Clinic Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>

            </div>

          </div>

          {/* INFO */}
          <div className="space-y-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@clinicsathi.com</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+977-98XXXXXXXX</p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Response Time</h3>
              <p className="text-gray-600">Within 24 hours</p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 space-y-2">
              <h3 className="font-semibold text-blue-700">
                Need quick setup?
              </h3>
              <p className="text-gray-600 text-sm">
                Book a free demo and we’ll set up your clinic system for you.
              </p>

              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Book Demo
              </button>
            </div>

          </div>

        </div>

      </div>

    </main>
    <Footer />
    </>
  )
}