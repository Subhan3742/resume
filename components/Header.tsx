'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
            {/* <span className="text-xl font-bold text-gray-900">Sara Munir</span> */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
            <Link href="/portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</Link>
            <Link href="/work" className="text-gray-700 hover:text-indigo-600 transition-colors">Work</Link>
            <Link href="/contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
