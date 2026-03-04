"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { text: "#ItWasNeverADress", href: "/" },
  { text: "Share Your Story", href: "/share-your-story" },
  { text: "About", href: "/about" },
  { text: "Store", href: "https://www.zazzle.com/store/_itwasneveradress/products" },
  { text: "Free Stuff", href: "/free-stuff" },
  { text: "Press", href: "/press" },
  { text: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg">
            #itwasneveradress
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="text-white/80 hover:text-white text-sm transition-colors"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="block text-white/80 hover:text-white py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}