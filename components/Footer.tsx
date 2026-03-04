import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#careers" className="text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-gray-600 hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about#blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://www.zazzle.com/store/_itwasneveradress/products" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                  Store
                </a>
              </li>
              <li>
                <Link href="/about#community" className="text-gray-600 hover:text-primary">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Stuff Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Free Stuff</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/share-your-stories" className="text-gray-600 hover:text-primary">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="/disrupt" className="text-gray-600 hover:text-primary">
                  Publicly Available
                </Link>
              </li>
              <li>
                <Link href="/share-your-stories" className="text-gray-600 hover:text-primary">
                  Equity And Diversity
                </Link>
              </li>
            </ul>
          </div>

          {/* Press Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Press</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/media" className="text-gray-600 hover:text-primary">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2022 #ItWasNeverADress
          </p>
        </div>
      </div>
    </footer>
  );
}
