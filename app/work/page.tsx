'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Work() {
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
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</Link>
              <Link href="/#clients" className="text-gray-700 hover:text-indigo-600 transition-colors">Clients</Link>
              <Link href="/work" className="text-indigo-600 font-semibold">Work</Link>
              <Link href="/#statistics" className="text-gray-700 hover:text-indigo-600 transition-colors">Statistics</Link>
              <Link href="/#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Work Experience Section */}
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My work experience</h2>
            <p className="text-xl text-gray-600">Here's what I did before freelancing</p>
          </div>
          <div className="space-y-8">
            {[
              { 
                period: 'October 2024 - Present', 
                title: 'Full-Stack Developer', 
                company: 'Future Dev Solutions - Lahore', 
                desc: 'Developed and maintained full-stack applications using Next.js, Tailwind CSS, Aceternity UI, and shadcn/ui. Delivered responsive, scalable solutions with a focus on clean UI, performance, and code quality. Collaborated on both client and internal tools, handling front-end interfaces and back-end logic.',
                projects: ['Future Dev Solutions Website - Company portfolio site', 'OrbyPOS - Restaurant Management System', 'QI Tech - Workflow automation tool']
              },
              { 
                period: 'Jan 2024 - Mar 2024', 
                title: 'Full Stack Developer', 
                company: 'VisionBird Technologies', 
                desc: 'Developed responsive and interactive web applications using React.js, Material-UI, and Tailwind CSS. Collaborated on full-stack projects for clients including Delice Pizza, French Tacos, Rapido Pizza, and British Energy Grants. Focused on building reusable components, improving performance, and integrating frontend interfaces with backend APIs.',
                projects: ['Delice Pizza', 'French Tacos', 'Rapido Pizza', 'British Energy Grants']
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold text-xl">SM</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-indigo-600 font-semibold mb-1">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-700 mb-4">{exp.desc}</p>
                    {exp.projects && (
                      <div className="mt-4">
                        <p className="text-gray-800 font-semibold mb-2">Key Projects:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {exp.projects.map((project, i) => (
                            <li key={i}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
