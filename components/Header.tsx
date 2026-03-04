import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">#ItWasNeverADress</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/share-your-stories"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Share Your Story
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <a
              href="https://www.zazzle.com/store/_itwasneveradress/products"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Store
            </a>
            <Link
              href="/disrupt"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Free Stuff
            </Link>
            <Link
              href="/media"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Press
            </Link>
            <Link
              href="/contact-us"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
