'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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

      <Footer />
    </div>
  );
}
