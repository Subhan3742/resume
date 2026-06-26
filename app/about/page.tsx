'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-blue-900/20 blur-[120px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="white" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">About Me</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Subhan Nadeem
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Passionate Full-Stack Developer with expertise in modern web technologies including Next.js, React.js, Node.js, and various UI frameworks. Specialized in building responsive, scalable applications with a focus on clean code, performance optimization, and user experience.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                With experience in both frontend and backend development, I deliver end-to-end solutions for clients ranging from restaurant management systems to workflow automation tools. Proficient in working with databases, API integration, and modern development tools.
              </p>

              {/* Social links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:subhannadeem3742@gmail.com"
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/subhan-nadeem-193b56197/"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/30"
                >
                  Hire Me
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-3xl" />
                <div className="absolute inset-0 rounded-2xl border border-blue-500/20 animate-spin" style={{ animationDuration: '25s' }}>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="absolute inset-4 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/subhannadeem.jpeg"
                    alt="Subhan Nadeem"
                    fill
                    className="object-cover"
                    priority
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white text-xs font-semibold">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-12 px-6 border-y border-white/5 bg-[#050b18]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '12+', label: 'Projects Built' },
            { number: '8+', label: 'Happy Clients' },
            { number: '5', label: 'Companies Worked' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{s.number}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-24 px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[100px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-14">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Academic Background</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Education</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  degree: 'Bachelor of Computer Science',
                  institution: 'University of Gujrat',
                  period: '2019 – 2024',
                  icon: '🎓',
                },
                {
                  degree: 'ICS — Intermediate',
                  institution: 'Punjab Group Of Colleges',
                  period: '2017 – 2019',
                  icon: '📖',
                },
                {
                  degree: 'Matriculation',
                  institution: 'Miss Farida Sheikh Model High School',
                  period: '',
                  icon: '🏫',
                },
              ].map((edu, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  {/* Timeline dot */}
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-xl group-hover:bg-blue-500/20 transition-colors z-10">
                    {edu.icon}
                  </div>
                  <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-white/15 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                      {edu.period && (
                        <span className="text-blue-400 text-xs font-semibold border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {edu.period}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6 bg-[#050b18]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">My Approach</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">How I Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'User-First Mindset', desc: 'Every decision is guided by what serves the end user best — intuitive flows, clear hierarchy, and accessible design.' },
              { icon: '⚙️', title: 'Engineering Precision', desc: 'Clean, maintainable code that scales. No shortcuts, no hacks — just solid engineering built to last.' },
              { icon: '🚀', title: 'Delivery Focus', desc: 'Deadlines matter. I balance speed and quality to ship on time without sacrificing what actually counts.' },
            ].map((v, i) => (
              <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-8 hover:bg-white/6 hover:border-white/15 transition-all">
                <span className="text-4xl block mb-5">{v.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#030712] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to build something together?
          </h2>
          <p className="text-gray-500 mb-8">Let&apos;s talk about your project and how I can help.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-blue-600/30">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
