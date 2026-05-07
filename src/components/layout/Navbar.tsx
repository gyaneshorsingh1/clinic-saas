"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-slate-50 py-4">

      <div className="max-w-7xl mx-auto px-4">

        <section className="h-16 flex items-center justify-between bg-white rounded-xl px-6 shadow-sm">

          {/* LOGO */}
          <div className="text-xl font-bold">
            Clinic Sathi
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Features</li>
              <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
              <li className="hover:text-blue-600 cursor-pointer">Demo</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

        </section>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-sm px-6 py-4 space-y-4">

            <div className="flex flex-col gap-4 text-gray-700 font-medium">
              <span className="cursor-pointer hover:text-blue-600">Features</span>
              <span className="cursor-pointer hover:text-blue-600">Pricing</span>
              <span className="cursor-pointer hover:text-blue-600">Demo</span>
              <span className="cursor-pointer hover:text-blue-600">Contact</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>

          </div>
        )}

      </div>

    </header>
  )
}