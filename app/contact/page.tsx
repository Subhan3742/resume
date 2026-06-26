'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-blue-900/20 blur-[100px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="white" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Work Together
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project idea or want to collaborate? Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="pb-24 px-6 bg-[#030712]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── Left: Contact info ── */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-white font-bold text-xl mb-2">Get in touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Feel free to reach out for web development, full-stack solutions, or collaboration opportunities.
                </p>
              </div>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ),
                  label: 'Email',
                  value: 'subhannadeem3742@gmail.com',
                  href: 'mailto:subhannadeem3742@gmail.com',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  ),
                  label: 'Phone',
                  value: '03073399644',
                  href: 'tel:03073399644',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ),
                  label: 'Location',
                  value: 'Bahria Town, Lahore',
                  href: null,
                  color: 'from-orange-500 to-amber-500',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  ),
                  label: 'LinkedIn',
                  value: 'Connect on LinkedIn',
                  href: 'https://www.linkedin.com/in/subhan-nadeem-193b56197/',
                  color: 'from-blue-600 to-indigo-600',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/3 border border-white/8 rounded-xl p-4 hover:bg-white/6 hover:border-white/15 transition-all group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-sm transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability badge */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">Available for work</span>
                </div>
                <p className="text-emerald-600 text-xs">Open to freelance &amp; full-time opportunities</p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white/3 border border-emerald-500/30 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Name</label>
                      <input
                        type="text" required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Email</label>
                      <input
                        type="email" required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      placeholder="Project inquiry, collaboration..."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Budget Range</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 text-sm focus:outline-none focus:border-blue-500/50 transition-all appearance-none">
                      <option value="" className="bg-[#030712]">Select budget range</option>
                      <option value="<500" className="bg-[#030712]">Under $500</option>
                      <option value="500-2000" className="bg-[#030712]">$500 – $2,000</option>
                      <option value="2000-5000" className="bg-[#030712]">$2,000 – $5,000</option>
                      <option value="5000+" className="bg-[#030712]">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows={5} required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    I typically respond within 24 hours · No spam, promise.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
