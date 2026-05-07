export default function Hero() {
  return (
    <section className="w-full bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Simple Clinic Management Software for Nepal
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Manage patients, prescriptions, billing, and reports in one easy platform.
            Built for small clinics, HA doctors, and local health centers.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex items-center gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Book Demo
            </button>

          </div>

          {/* SMALL TRUST LINE */}
          <p className="text-sm text-gray-500">
            No setup required • Works on mobile & laptop • Easy to use
          </p>

        </div>

        {/* RIGHT CONTENT (DASHBOARD MOCKUP) */}
        <div className="relative">

          <div className="bg-white border rounded-2xl shadow-md p-6">

            <div className="space-y-4">

              <div className="h-4 w-40 bg-slate-200 rounded"></div>

              <div className="grid grid-cols-3 gap-4">

                <div className="h-20 bg-slate-100 rounded-lg"></div>
                <div className="h-20 bg-slate-100 rounded-lg"></div>
                <div className="h-20 bg-slate-100 rounded-lg"></div>

              </div>

              <div className="h-40 bg-slate-100 rounded-lg"></div>

              <div className="h-10 w-full bg-slate-200 rounded"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}