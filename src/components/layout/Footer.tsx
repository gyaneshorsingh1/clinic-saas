export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold">
              Clinic Sathi
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simple clinic management software for Nepal.
              Built for HA doctors and local clinics.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Demo</li>
              <li>Updates</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              Start Managing Your Clinic
            </h3>
            <p className="text-sm text-gray-600">
              Try it free today. No setup required.
            </p>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Start Free Trial
            </button>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>© {new Date().getFullYear()} Clinic Sathi. All rights reserved.</p>

          <p>Built with ❤️ for Nepal healthcare</p>

        </div>

      </div>

    </footer>
  )
}