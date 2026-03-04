"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { text: "#ItWasNeverADress", href: "/" },
  { text: "Share Your Story", href: "/share-your-stories" },
  { text: "About", href: "/about" },
  { text: "Store", href: "https://www.zazzle.com/store/_itwasneveradress/products" },
  { text: "Free Stuff", href: "/disrupt" },
  { text: "Press", href: "/media" },
  { text: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-white text-xl font-bold tracking-tight">
              <span className="text-primary-400">#</span>itwasneveradress
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden bg-navy-900/95 backdrop-blur-sm rounded-xl p-4 mt-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-white/90 hover:text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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