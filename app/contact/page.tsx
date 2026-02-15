'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contact Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Here's a contact form</h2>
            <p className="text-lg md:text-xl text-gray-600">Have Any Questions?</p>
            <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4 px-2">
              Feel free to reach out for any inquiries about web development, full-stack solutions, or collaboration opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-md">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Name</label>
                  <input type="text" className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email</label>
                  <input type="email" className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Message</label>
                  <textarea rows={5} className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg text-sm md:text-base">
                  Send
                </button>
              </form>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">My Email</p>
                    <a href="mailto:subhannadeem3742@gmail.com" className="text-blue-600 text-xs md:text-sm break-all hover:text-blue-700">subhannadeem3742@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">My Phone</p>
                    <a href="tel:03073399644" className="text-blue-600 text-xs md:text-sm hover:text-blue-700">03073399644</a>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">My Address</p>
                    <p className="text-gray-600 text-xs md:text-sm">Bahria Town Lahore</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm md:text-base">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/subhan-nadeem-193b56197/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs md:text-sm break-all">Connect on LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
