'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sara Munir</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link href="/#about" className="text-indigo-600 font-semibold">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</Link>
              <Link href="/#clients" className="text-gray-700 hover:text-indigo-600 transition-colors">Clients</Link>
              <Link href="/#work" className="text-gray-700 hover:text-indigo-600 transition-colors">Work</Link>
              <Link href="/#statistics" className="text-gray-700 hover:text-indigo-600 transition-colors">Statistics</Link>
              <Link href="/#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who am I?</h2>
            <p className="text-xl text-gray-600">
              I'm Sara Munir, a <span className="text-indigo-600 font-semibold">Software Engineer</span>
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Passionate Full-Stack Developer with expertise in modern web technologies including Next.js, React.js, Node.js, and various UI frameworks. Specialized in building responsive, scalable applications with a focus on clean code, performance optimization, and user experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              With experience in both frontend and backend development, I deliver end-to-end solutions for clients ranging from restaurant management systems to workflow automation tools. Proficient in working with databases, API integration, and modern development tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:saramunir7272@gmail.com" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">Bachelor of Computer Science</h3>
              <p className="text-xl text-gray-800 font-semibold mb-2">University of Gujrat</p>
              <p className="text-gray-600">2019 - 2024</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">ICS</h3>
              <p className="text-xl text-gray-800 font-semibold mb-2">Punjab Group Of Colleges</p>
              <p className="text-gray-600">2017 - 2019</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">Matriculation</h3>
              <p className="text-xl text-gray-800 font-semibold">Miss Farida Sheikh Model High School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; Copyright {new Date().getFullYear()}. • Distributed by ThemeWagon • All right reserved, ATOM.</p>
        </div>
      </footer>
    </div>
  );
}
