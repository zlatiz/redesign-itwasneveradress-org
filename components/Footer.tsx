import Link from "next/link";

const footerLinks = {
  itwasneveradress: [
    { text: "Share Your Story", href: "/share-your-stories" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact-us" },
  ],
  shareYourStory: [
    { text: "Disclaimers", href: "#" },
    { text: "Careers", href: "#" },
    { text: "New Kommients", href: "#" },
    { text: "Contact Us", href: "/contact-us" },
  ],
  about: [
    { text: "Store", href: "https://www.zazzle.com/store/_itwasneveradress/products" },
    { text: "Free Stuff", href: "/disrupt" },
    { text: "Press", href: "/media" },
    { text: "Contact Us", href: "/contact-us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">#ItWasNeverADress</h4>
            <ul className="space-y-3">
              {footerLinks.itwasneveradress.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Share Your Story</h4>
            <ul className="space-y-3">
              {footerLinks.shareYourStory.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-white text-lg font-bold tracking-tight">
                <span className="text-primary-400">#</span>itwasneveradress
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 text-center">
            © Copyright © 2022 #ItwasneverAdress
          </p>
        </div>
      </div>
    </footer>
  );
}