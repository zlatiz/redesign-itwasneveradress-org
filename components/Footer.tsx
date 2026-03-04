import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logins Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Logins</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  #ItWasNeverADress
                </Link>
              </li>
              <li>
                <Link href="/share-your-story" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.zazzle.com/store/_itwasneveradress/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link href="/free-stuff" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Free Stuff
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  #ItWasNeverADress
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © Itwasneveradress
          </p>
        </div>
      </div>
    </footer>
  );
}