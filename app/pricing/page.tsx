export default function PricingPage() {
  return (
    <main className="w-full bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-4 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">

          <h1 className="text-4xl font-bold">
            Pricing Plans
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your clinic. Upgrade anytime as you grow.
          </p>

        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* BASIC */}
          <div className="bg-white border rounded-2xl p-8 space-y-6 shadow-sm">
            <h2 className="text-lg font-semibold">Basic</h2>
            <p className="text-gray-500 text-sm">For small clinics</p>

            <div className="text-4xl font-bold">NPR 499<span className="text-base font-normal text-gray-500">/mo</span></div>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Patient Records</li>
              <li>✔ Billing</li>
              <li>✔ Prescriptions</li>
            </ul>

            <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
              Get Started
            </button>
          </div>

          {/* STANDARD */}
          <div className="bg-blue-50 border-2 border-blue-600 rounded-2xl p-8 space-y-6 shadow-md scale-105">
            <h2 className="text-lg font-semibold">Standard</h2>
            <p className="text-gray-500 text-sm">Most popular</p>

            <div className="text-4xl font-bold">NPR 999<span className="text-base font-normal text-gray-500">/mo</span></div>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Everything in Basic</li>
              <li>✔ Reports</li>
              <li>✔ Staff Management</li>
            </ul>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Start Free Trial
            </button>
          </div>

          {/* PREMIUM */}
          <div className="bg-white border rounded-2xl p-8 space-y-6 shadow-sm">
            <h2 className="text-lg font-semibold">Premium</h2>
            <p className="text-gray-500 text-sm">For large clinics</p>

            <div className="text-4xl font-bold">NPR 1999<span className="text-base font-normal text-gray-500">/mo</span></div>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Everything in Standard</li>
              <li>✔ Multi-branch</li>
              <li>✔ Priority Support</li>
            </ul>

            <button className="w-full border py-2 rounded-lg hover:bg-gray-100">
              Contact Sales
            </button>
          </div>

        </div>

      </div>

    </main>
  )
}