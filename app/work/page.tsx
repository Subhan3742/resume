'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function calcDuration(start: string, end: string | null): string {
  const [startMonth, startYear] = start.split(' ');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const startDate = new Date(parseInt(startYear), months.indexOf(startMonth));
  const endDate = end ? (() => { const [m, y] = end.split(' '); return new Date(parseInt(y), months.indexOf(m)); })() : new Date();
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  if (yrs > 0 && mos > 0) return `${yrs} yr ${mos} mos`;
  if (yrs > 0) return `${yrs} yr`;
  return `${mos} mos`;
}

const experiences = [
  {
    period: `Nov 2025 – Present`,
    duration: () => calcDuration('Nov 2025', null),
    title: 'Software Engineer',
    company: 'Hectahash',
    type: 'Full-time',
    location: '',
    desc: 'Working as a Software Engineer, contributing to software development projects and delivering high-quality solutions.',
    projects: [],
    color: 'from-blue-500 to-cyan-500',
    active: true,
  },
  {
    period: 'Dec 2025 – Dec 2025',
    duration: () => '1 mo',
    title: 'Software Engineer',
    company: 'Velosi Asset Integrity Limited',
    type: 'Full-time · On-site',
    location: 'Lahore, Punjab, Pakistan',
    desc: 'Worked as a Software Engineer, developing and maintaining software solutions for asset integrity management systems.',
    projects: [],
    color: 'from-violet-500 to-purple-500',
    active: false,
  },
  {
    period: 'Oct 2024 – Nov 2025',
    duration: () => '1 yr 2 mos',
    title: 'Full-Stack Developer',
    company: 'Future Dev Solutions',
    type: 'Full-time · On-site',
    location: 'Lahore, Punjab, Pakistan',
    desc: 'Developed and maintained full-stack applications using Next.js, Tailwind CSS, Aceternity UI, and shadcn/ui. Delivered responsive, scalable solutions with a focus on clean UI, performance, and code quality.',
    projects: ['Future Dev Solutions Website — Company portfolio site', 'OrbyPOS — Restaurant Management System', 'QI Tech — Workflow automation tool'],
    color: 'from-emerald-500 to-teal-500',
    active: false,
  },
  {
    period: 'Jan 2024 – Mar 2024',
    duration: () => '3 mos',
    title: 'React Developer',
    company: 'VisionBird Technologies',
    type: 'Full-time · On-site',
    location: 'Gujrāt, Punjab, Pakistan',
    desc: 'Frontend developer with hands-on experience building dynamic web applications using the MERN stack. Contributed to multiple client projects, refining skills in frontend development and problem-solving.',
    projects: ['Delice Pizza', 'French Tacos', 'Rapido Pizza', 'British Energy Grants'],
    color: 'from-orange-500 to-amber-500',
    active: false,
  },
  {
    period: 'Nov 2021 – Sep 2022',
    duration: () => '11 mos',
    title: 'Frontend Developer',
    company: 'Muami Tech',
    type: 'Full-time · On-site',
    location: 'Gujrāt, Punjab, Pakistan',
    desc: 'Worked as a Frontend Developer, building responsive web applications using HTML5, CSS, and modern frontend technologies. Focused on creating user-friendly interfaces and improving user experience.',
    projects: [],
    color: 'from-pink-500 to-rose-500',
    active: false,
  },
];

export default function Work() {
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
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Career</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Experience
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            5 companies · 4+ years · Full-time roles across frontend, full-stack, and software engineering.
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="pb-24 px-6 bg-[#030712]">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/5 to-transparent hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-8 group">
                  {/* Dot */}
                  <div className="flex-shrink-0 flex flex-col items-center hidden md:flex">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white/3 border border-white/8 rounded-2xl p-7 hover:bg-white/6 hover:border-white/15 transition-all duration-300">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                          {exp.active && (
                            <span className="inline-flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 font-semibold">{exp.company}</p>
                        {exp.location && <p className="text-gray-600 text-sm mt-0.5">{exp.location}</p>}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white mb-1`}>
                          {exp.duration()}
                        </div>
                        <p className="text-gray-500 text-xs">{exp.period}</p>
                        <p className="text-gray-600 text-xs">{exp.type}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className={`w-12 h-0.5 bg-gradient-to-r ${exp.color} rounded-full mb-4`} />

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

                    {exp.projects.length > 0 && (
                      <div>
                        <p className="text-gray-300 font-semibold text-sm mb-3">Key Projects:</p>
                        <ul className="space-y-2">
                          {exp.projects.map((project, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#050b18] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Want to work together?</h2>
          <p className="text-gray-500 mb-8">I&apos;m open to full-time roles and freelance projects.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-xl shadow-blue-600/30">
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/portfolio" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
