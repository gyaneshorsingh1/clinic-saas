"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-slate-50 py-4">

      <div className="max-w-7xl mx-auto px-4">

        <section className="h-16 flex items-center justify-between bg-white rounded-xl px-6 shadow-sm">

          {/* LOGO */}
          <Link href="/" className="text-xl font-bold">
            Clinic Sathi
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-700">

              <li>
                <Link href="/features" className="hover:text-blue-600">
                  Features
                </Link>
              </li>

              <li>
                <Link href="/pricing" className="hover:text-blue-600">
                  Pricing
                </Link>
              </li>

              <li>
                <Link href="/demo" className="hover:text-blue-600">
                  Demo
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>

            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/signup"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Free Trial
          </Link>

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

              <Link href="/features" className="hover:text-blue-600">
                Features
              </Link>

              <Link href="/pricing" className="hover:text-blue-600">
                Pricing
              </Link>

              <Link href="/demo" className="hover:text-blue-600">
                Demo
              </Link>

              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>

            </div>

            <Link
              href="/signup"
              className="w-full block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Start Free Trial
            </Link>

          </div>
        )}

      </div>

    </header>
  )
}