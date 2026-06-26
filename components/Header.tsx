'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/work', label: 'Work' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-[#030712]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
