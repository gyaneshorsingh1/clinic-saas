import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function FeaturesPage() {
  return (
    <>
    <Navbar />
    
    <main className="w-full bg-slate-50">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">

          <h1 className="text-4xl font-bold">
            Powerful Features for Modern Clinics
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything your clinic needs to manage patients, billing, prescriptions, and daily operations efficiently.
          </p>

        </div>
      </section>

      {/* FEATURE DETAIL SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 space-y-20 pb-20">

        {/* PATIENT MANAGEMENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Patient Management</h2>
            <p className="text-gray-600">
              Store complete patient history including visits, prescriptions, and medical records in one place.
            </p>
          </div>

          <div className="bg-white border rounded-2xl h-64 shadow-sm"></div>

        </div>

        {/* PRESCRIPTION SYSTEM */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="bg-white border rounded-2xl h-64 shadow-sm order-2 md:order-1"></div>

          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-bold">Digital Prescriptions</h2>
            <p className="text-gray-600">
              Create clean, printable prescriptions in seconds with standardized formatting.
            </p>
          </div>

        </div>

        {/* BILLING */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Billing & Payments</h2>
            <p className="text-gray-600">
              Track payments, generate invoices, and manage clinic income easily.
            </p>
          </div>

          <div className="bg-white border rounded-2xl h-64 shadow-sm"></div>

        </div>

        {/* REPORTS */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="bg-white border rounded-2xl h-64 shadow-sm order-2 md:order-1"></div>

          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-bold">Reports & Analytics</h2>
            <p className="text-gray-600">
              View daily patient count, revenue, and clinic performance insights.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Ready to upgrade your clinic?
          </h2>

          <p className="text-gray-600">
            Start using Clinic Sathi today and simplify your daily operations.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>

        </div>
      </section>

    </main>
    <Footer />
    </>
  )
}