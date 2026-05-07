import { User, FileText, CreditCard, BarChart3, Users, Smartphone } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4 space-y-14">

        {/* HEADER */}
        <div className="text-center space-y-4">

          <h2 className="text-4xl font-bold tracking-tight">
            Built for Real Clinic Workflows
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to run a small clinic efficiently — from patient entry to billing and reports.
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition">
              <User className="text-blue-600" />
            </div>

            <h3 className="text-lg font-semibold">Patient Records</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Quickly add and retrieve patient history with fast search and organized records.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition">
              <FileText className="text-green-600" />
            </div>

            <h3 className="text-lg font-semibold">Digital Prescriptions</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Create clean, printable prescriptions in seconds with proper formatting.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition">
              <CreditCard className="text-purple-600" />
            </div>

            <h3 className="text-lg font-semibold">Billing System</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Manage consultation fees, payments, and generate simple invoices.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition">
              <BarChart3 className="text-orange-600" />
            </div>

            <h3 className="text-lg font-semibold">Daily Reports</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Get instant insights on patients, revenue, and clinic performance.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition">
              <Users className="text-pink-600" />
            </div>

            <h3 className="text-lg font-semibold">Staff Access</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Manage doctors, receptionists, and clinic staff with role-based access.
            </p>

          </div>

          {/* CARD */}
          <div className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition space-y-4">

            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition">
              <Smartphone className="text-indigo-600" />
            </div>

            <h3 className="text-lg font-semibold">Mobile Friendly</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Works smoothly on mobile, tablet, and low-end clinic computers.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}