import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function DemoPage() {
  return (
    <>
    <Navbar />
    <main className="w-full bg-slate-50">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">

          <h1 className="text-4xl font-bold">
            See How Clinic Sathi Works
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Watch a simple walkthrough of how clinics manage patients, prescriptions, and billing in minutes.
          </p>

        </div>
      </section>

      {/* VIDEO / PREVIEW */}
      <section className="max-w-5xl mx-auto px-4 pb-20">

        <div className="bg-white border rounded-2xl shadow-md aspect-video flex items-center justify-center">

          <p className="text-gray-500">
            Demo Video / Dashboard Preview Here
          </p>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white border-t">

        <div className="max-w-7xl mx-auto px-4 space-y-14">

          <h2 className="text-center text-3xl font-bold">
            Simple 3-Step Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 border rounded-2xl p-6 space-y-3">
              <h3 className="font-semibold text-lg">1. Add Patient</h3>
              <p className="text-gray-600 text-sm">
                Quickly register patient details and medical history.
              </p>
            </div>

            <div className="bg-slate-50 border rounded-2xl p-6 space-y-3">
              <h3 className="font-semibold text-lg">2. Create Prescription</h3>
              <p className="text-gray-600 text-sm">
                Generate clean digital prescriptions in seconds.
              </p>
            </div>

            <div className="bg-slate-50 border rounded-2xl p-6 space-y-3">
              <h3 className="font-semibold text-lg">3. Manage Billing</h3>
              <p className="text-gray-600 text-sm">
                Track payments and generate invoices instantly.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Want a live demo for your clinic?
          </h2>

          <p className="text-gray-600">
            We’ll set up everything for you and show how it fits your workflow.
          </p>

          <div className="flex items-center justify-center gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Live Demo
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Start Free Trial
            </button>

          </div>

        </div>

      </section>

    </main>
    <Footer />
    </>
  )
}