'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMui,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJira
} from 'react-icons/si';

// Technology Icons Component
const TechIcon = ({ name }: { name: string }) => {
  const icons: { [key: string]: React.ReactElement } = {
    'Next.js': <SiNextdotjs className="w-8 h-8" />,
    'React.js': <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    'Node.js': <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
    'Tailwind CSS': <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    'Bootstrap': <SiBootstrap className="w-8 h-8 text-[#7952B3]" />,
    'Material UI': <SiMui className="w-8 h-8 text-[#007FFF]" />,
    'shadcn/ui': (
      <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
        <div className="bg-black rounded-tl"></div>
        <div className="bg-black rounded-tr"></div>
        <div className="bg-black rounded-bl"></div>
        <div className="bg-black rounded-br"></div>
      </div>
    ),
    'Aceternity UI': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'Magic UI': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#9333EA"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#9333EA" strokeWidth="2" fill="none"/>
      </svg>
    ),
    'PostgreSQL': <SiPostgresql className="w-8 h-8 text-[#336791]" />,
    'MySQL': <SiMysql className="w-8 h-8 text-[#4479A1]" />,
    'Automated Testing': (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#10B981"/>
      </svg>
    ),
    'Git': <SiGit className="w-8 h-8 text-[#F05032]" />,
    'GitHub': <SiGithub className="w-8 h-8" />,
    'Bitbucket': <SiBitbucket className="w-8 h-8 text-[#0052CC]" />,
    'Jira': <SiJira className="w-8 h-8 text-[#0052CC]" />,
  };

  return icons[name] || (
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
    </div>
  );
};

// Featured Projects Showcase Component
const showcaseProjects = [
  {
    number: '01',
    tag: 'E-Commerce · Luxury Fashion',
    name: 'Luxera',
    subtitle: 'Luxury Fashion Store',
    description:
      'A high-end luxury fashion e-commerce experience — curated collections, smooth animations, and a seamless checkout flow built for premium brands.',
    link: 'https://luxera-omega.vercel.app/',
    accentText: 'text-fuchsia-400',
    accentHover: 'hover:border-fuchsia-400/70 hover:bg-fuchsia-500/15',
    images: ['/two.png'],
  },
  {
    number: '02',
    tag: 'E-Commerce · Furniture',
    name: 'MN Furniture',
    subtitle: 'Modern Furniture Shop',
    description:
      'A clean and modern furniture e-commerce store — rich product listings, intuitive browsing, and a polished UI designed to convert visitors into buyers.',
    link: 'https://mn-furniture-7zqt.vercel.app/',
    accentText: 'text-amber-400',
    accentHover: 'hover:border-amber-400/70 hover:bg-amber-500/15',
    images: ['/one.png'],
  },
  {
    number: '03',
    tag: 'Portfolio · Agency',
    name: 'Future Dev Solutions',
    subtitle: 'Agency Portfolio Website',
    description:
      'Company portfolio website showcasing services, team, and expertise. Built with Next.js and Aceternity UI for a modern, high-performance digital presence.',
    link: 'https://www.futuredevsolutions.com/',
    accentText: 'text-cyan-400',
    accentHover: 'hover:border-cyan-400/70 hover:bg-cyan-500/15',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'],
  },
  {
    number: '04',
    tag: 'SaaS · Restaurant Tech',
    name: 'OrbyPOS',
    subtitle: 'Restaurant Management System',
    description:
      'A comprehensive POS and restaurant management platform — menu management, real-time order processing, billing, and reservation handling built with Next.js and PostgreSQL.',
    link: '',
    accentText: 'text-orange-400',
    accentHover: 'hover:border-orange-400/70 hover:bg-orange-500/15',
    images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=800&fit=crop'],
  },
  {
    number: '05',
    tag: 'SaaS · Workflow Automation',
    name: 'QI Tech',
    subtitle: 'Workflow Automation Tool',
    description:
      'A logic-based form builder and workflow automation platform. Helps businesses automate data collection, manage records, and generate custom reports from a unified dashboard.',
    link: '',
    accentText: 'text-violet-400',
    accentHover: 'hover:border-violet-400/70 hover:bg-violet-500/15',
    images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'],
  },
  {
    number: '06',
    tag: 'E-Commerce · Food Delivery',
    name: 'Delice Pizza',
    subtitle: 'Pizza Ordering Platform',
    description:
      'Full-featured pizza ordering and delivery platform — menu browsing, cart management, payment integration, and real-time order tracking for a seamless customer experience.',
    link: '',
    accentText: 'text-red-400',
    accentHover: 'hover:border-red-400/70 hover:bg-red-500/15',
    images: ['https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=800&fit=crop'],
  },
  {
    number: '07',
    tag: 'Web · Restaurant',
    name: 'French Tacos',
    subtitle: 'Restaurant Ordering Website',
    description:
      'Modern restaurant website with an integrated online ordering system — clean UI, fast loading, and a smooth ordering flow designed to drive conversions.',
    link: '',
    accentText: 'text-yellow-400',
    accentHover: 'hover:border-yellow-400/70 hover:bg-yellow-500/15',
    images: ['https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop'],
  },
  {
    number: '08',
    tag: 'Web · Food Delivery',
    name: 'Rapido Pizza',
    subtitle: 'Pizza Delivery Platform',
    description:
      'A fast pizza delivery platform with real-time order tracking, multiple payment options, and user accounts — built for speed and a friction-free customer experience.',
    link: '',
    accentText: 'text-pink-400',
    accentHover: 'hover:border-pink-400/70 hover:bg-pink-500/15',
    images: ['https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=800&fit=crop'],
  },
  {
    number: '09',
    tag: 'Web · Government / Energy',
    name: 'British Energy Grants',
    subtitle: 'Grant Application Platform',
    description:
      'A streamlined platform for managing energy grant applications — document upload, status tracking, and an admin dashboard to handle applications end-to-end.',
    link: '',
    accentText: 'text-emerald-400',
    accentHover: 'hover:border-emerald-400/70 hover:bg-emerald-500/15',
    images: ['https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&h=800&fit=crop'],
  },
  {
    number: '10',
    tag: 'E-Commerce · Fashion',
    name: 'Shahzad Collection',
    subtitle: 'Fashion Brand Shop',
    description:
      'A full-featured fashion e-commerce platform — product catalog, cart, user authentication, payment gateway, and an admin dashboard for complete order management.',
    link: '',
    accentText: 'text-rose-400',
    accentHover: 'hover:border-rose-400/70 hover:bg-rose-500/15',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop'],
  },
];

function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const project = showcaseProjects[active];

  // Scroll-driven slide change
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const totalHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      const index = Math.min(
        showcaseProjects.length - 1,
        Math.floor(progress * showcaseProjects.length)
      );
      setActive(index);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cycle images within active slide
  useEffect(() => {
    setImgIndex(0);
    if (project.images.length < 2) return;
    const t = setInterval(() => {
      setImgIndex((p) => (p + 1) % project.images.length);
    }, 3500);
    return () => clearInterval(t);
  }, [active, project.images.length]);

  return (
    // Tall scrollable wrapper — each slide gets 100vh of scroll space
    <div
      ref={containerRef}
      style={{ height: `${showcaseProjects.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#030712]">

        {/* Background images */}
        {showcaseProjects.map((p, pi) =>
          p.images.map((src, ii) => (
            <div
              key={`${pi}-${ii}`}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: pi === active && ii === imgIndex ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={p.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority={pi === 0 && ii === 0}
              />
            </div>
          ))
        )}

        {/* Gradient overlays — top + bottom + left */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10" />

        {/* ── Top bar ── */}
        <div className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 lg:px-20 pt-24 pb-6 flex items-center justify-between">
          {/* Section badge */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400">
              Featured Projects
            </span>
          </div>
          {/* Counter */}
          <div className="flex items-center gap-3">
            {showcaseProjects.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 rounded-full transition-all duration-500 bg-white ${
                  i === active ? 'w-6 opacity-100' : 'w-2 opacity-20'
                }`}
              />
            ))}
            <span className="ml-1 text-[11px] font-bold tracking-widest text-white/50">
              {String(active + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(showcaseProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── Project content ── */}
        <div className="absolute inset-0 z-20 flex items-end px-6 sm:px-10 lg:px-20 pb-16 sm:pb-20">
          {showcaseProjects.map((p, i) => (
            <div
              key={i}
              className="w-full max-w-2xl absolute bottom-16 sm:bottom-20 transition-all duration-700"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? 'translateY(0px)' : i < active ? 'translateY(-30px)' : 'translateY(30px)',
                pointerEvents: i === active ? 'auto' : 'none',
              }}
            >
              {/* Tag + category */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm text-white`}>
                  {p.tag}
                </span>
              </div>

              {/* Project name heading */}
              <h3 className="font-extrabold text-[clamp(32px,6vw,72px)] leading-[1] tracking-tight text-white mb-3 drop-shadow-lg">
                {p.name}
              </h3>

              {/* Subtitle */}
              <p className={`text-[clamp(13px,1.2vw,17px)] font-semibold mb-4 ${p.accentText}`}>
                {p.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/60 max-w-[440px] mb-8">
                {p.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                {p.link ? (
                  <>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] rounded-full hover:bg-white/90 transition-all"
                    >
                      Visit Site
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17 17 7" /></svg>
                    </a>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-white/25 text-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                    >
                      Live Preview
                    </a>
                  </>
                ) : (
                  <span className="inline-flex items-center gap-2 border border-white/15 text-white/40 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] rounded-full">
                    Client Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Image dots — bottom center */}
        {project.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === imgIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        )}

        {/* Scroll hint — first slide only */}
        {active === 0 && (
          <div className="absolute bottom-6 right-6 sm:right-10 lg:right-20 z-30 flex items-center gap-2 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
            <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Chatbot knowledge base ───────────────────────────────────────────────────
const KB: { keys: string[]; answer: string }[] = [
  // Greetings
  { keys: ['hello', 'hi', 'hey', 'salam', 'assalam', 'good morning', 'good evening', 'good afternoon'],
    answer: "👋 Hello! I'm Subhan's virtual assistant. You can ask me anything about his skills, experience, projects, services, or contact info. What would you like to know?" },

  // Who is Subhan
  { keys: ['who is subhan', 'who are you', 'about subhan', 'tell me about', 'introduce'],
    answer: "Subhan Nadeem is a Full-Stack Developer based in Bahria Town, Lahore 🇵🇰 with 4+ years of experience. He specializes in Next.js, React, Node.js, and Tailwind CSS — building fast, scalable, and beautiful web applications for clients worldwide." },

  // Skills / Technologies
  { keys: ['skill', 'technology', 'technologies', 'tech stack', 'what can you do', 'expertise', 'know', 'language', 'framework'],
    answer: "🛠️ Subhan's tech stack:\n\n• Frontend: Next.js, React.js, Tailwind CSS, Bootstrap, Material UI, shadcn/ui, Aceternity UI\n• Backend: Node.js\n• Databases: PostgreSQL, MySQL\n• Tools: Git, GitHub, Bitbucket, Jira, Figma\n• Also proficient in TypeScript and REST API development." },

  // Next.js
  { keys: ['nextjs', 'next.js', 'next js'],
    answer: "✅ Yes! Next.js is Subhan's primary framework. He rates himself 95% proficient — from App Router and Server Components to SSR, SSG, API routes, and deployment on Vercel." },

  // React
  { keys: ['react', 'reactjs', 'react.js'],
    answer: "✅ React.js is one of Subhan's core skills. He has 4+ years of React experience — hooks, context, custom components, and integrating UI libraries like shadcn/ui and Aceternity UI." },

  // Node.js / Backend
  { keys: ['node', 'nodejs', 'node.js', 'backend', 'server', 'api'],
    answer: "✅ Subhan works with Node.js for backend development — building REST APIs, handling authentication, and integrating databases like PostgreSQL and MySQL." },

  // Tailwind
  { keys: ['tailwind', 'tailwindcss', 'css', 'styling'],
    answer: "✅ Tailwind CSS is Subhan's go-to styling solution. He's rated at 98% — pixel-perfect responsive layouts are his specialty." },

  // Database
  { keys: ['database', 'postgresql', 'mysql', 'sql', 'db'],
    answer: "✅ Subhan works with PostgreSQL and MySQL for relational databases — schema design, queries, and integration with Node.js backends." },

  // TypeScript
  { keys: ['typescript', 'ts'],
    answer: "✅ Yes, Subhan uses TypeScript regularly in his projects — type-safe React components, API handlers, and full-stack Next.js applications." },

  // WordPress
  { keys: ['wordpress', 'wp', 'woocommerce'],
    answer: "✅ Subhan offers professional WordPress development — custom themes, plugin integration, WooCommerce setup, and performance optimization." },

  // Shopify
  { keys: ['shopify', 'ecommerce', 'e-commerce', 'online store'],
    answer: "✅ Subhan provides Shopify development services — custom themes, app integration, and high-converting store setups." },

  // UI/UX
  { keys: ['ui', 'ux', 'design', 'figma', 'interface'],
    answer: "✅ Subhan designs clean, modern UIs using Figma and implements them with Tailwind CSS, shadcn/ui, and Aceternity UI. He prioritizes usability and visual quality." },

  // Services
  { keys: ['service', 'offer', 'provide', 'can you build', 'can you make', 'do you do'],
    answer: "🚀 Services Subhan offers:\n\n1. Custom Next.js Development\n2. Full-Stack Web Applications\n3. Shopify & E-Commerce\n4. WordPress Development\n5. UI/UX Design\n6. Responsive & Mobile-First Design\n\nVisit /contact to discuss your project!" },

  // Projects
  { keys: ['project', 'portfolio', 'work', 'built', 'developed', 'made', 'created'],
    answer: "📁 Subhan has built 12+ projects including:\n\n• Luxera — Luxury fashion e-commerce\n• MN Furniture — Furniture store\n• OrbyPOS — Restaurant Management System\n• QI Tech — Workflow automation tool\n• Future Dev Solutions — Company website\n• Delice Pizza, French Tacos, Rapido Pizza — Food ordering platforms\n• British Energy Grants — Grant management platform\n• Shahzad Collection — Fashion e-commerce\n\nSee them all at /portfolio" },

  // Luxera
  { keys: ['luxera', 'luxury', 'fashion store'],
    answer: "✨ Luxera is a high-end luxury fashion e-commerce store built with Next.js, React.js, and Tailwind CSS. It features curated collections, smooth animations, and a seamless checkout flow. Live at: luxera-omega.vercel.app" },

  // OrbyPOS
  { keys: ['orbypos', 'orby', 'restaurant', 'pos', 'restaurant management'],
    answer: "🍽️ OrbyPOS is a full Restaurant Management System built with Next.js, Node.js, and PostgreSQL. It handles menu management, order processing, billing, and reservations in real-time." },

  // QI Tech
  { keys: ['qi tech', 'qitech', 'qi', 'workflow', 'automation', 'form builder'],
    answer: "⚙️ QI Tech is a workflow automation tool built with React.js, Node.js, and MySQL. It lets businesses build logic-based forms, manage data, and generate custom reports — all from a dashboard." },

  // ── WORK EXPERIENCE ──────────────────────────────────────────────
  { keys: ['experience', 'work experience', 'career', 'job', 'employment', 'company', 'companies', 'worked', 'history', 'background'],
    answer: "💼 Subhan's full work history (5 companies, 4+ years):\n\n1. 🟢 Hectahash · Software Engineer\n   Nov 2025 – Present (Full-time)\n\n2. Velosi Asset Integrity Limited · Software Engineer\n   Dec 2025 – Dec 2025 · 1 mo (Full-time, Lahore)\n\n3. Future Dev Solutions · Full-Stack Developer\n   Oct 2024 – Nov 2025 · 1 yr 2 mos (Full-time, Lahore)\n\n4. VisionBird Technologies · React Developer\n   Jan 2024 – Mar 2024 · 3 mos (Full-time, Gujrāt)\n\n5. Muami Tech · Frontend Developer\n   Nov 2021 – Sep 2022 · 11 mos (Full-time, Gujrāt)\n\nFull details with projects → /work" },

  // Hectahash (current)
  { keys: ['hectahash', 'current job', 'current company', 'currently working', 'present'],
    answer: "🟢 Current Role:\n\nCompany: Hectahash\nTitle: Software Engineer\nType: Full-time\nPeriod: Nov 2025 – Present\n\nSubhan is contributing to software development projects and delivering high-quality solutions at Hectahash." },

  // Velosi
  { keys: ['velosi', 'velosi asset', 'asset integrity'],
    answer: "🏢 Velosi Asset Integrity Limited\n\nTitle: Software Engineer\nType: Full-time · On-site\nLocation: Lahore, Punjab, Pakistan\nPeriod: Dec 2025 – Dec 2025 · 1 month\n\nSubhan worked on developing and maintaining software solutions for asset integrity management systems." },

  // Future Dev Solutions
  { keys: ['future dev', 'future dev solutions', 'fds'],
    answer: "🏢 Future Dev Solutions\n\nTitle: Full-Stack Developer\nType: Full-time · On-site\nLocation: Lahore, Punjab, Pakistan\nPeriod: Oct 2024 – Nov 2025 · 1 yr 2 mos\n\nBuilt full-stack applications with Next.js, Tailwind CSS, Aceternity UI & shadcn/ui.\n\nKey Projects:\n• Future Dev Solutions Website\n• OrbyPOS — Restaurant Management System\n• QI Tech — Workflow Automation Tool" },

  // VisionBird
  { keys: ['visionbird', 'vision bird'],
    answer: "🏢 VisionBird Technologies\n\nTitle: React Developer\nType: Full-time · On-site\nLocation: Gujrāt, Punjab, Pakistan\nPeriod: Jan 2024 – Mar 2024 · 3 months\n\nBuilt dynamic web apps using the MERN stack. Contributed to multiple client projects:\n• Delice Pizza\n• French Tacos\n• Rapido Pizza\n• British Energy Grants" },

  // Muami Tech
  { keys: ['muami', 'muami tech'],
    answer: "🏢 Muami Tech\n\nTitle: Frontend Developer\nType: Full-time · On-site\nLocation: Gujrāt, Punjab, Pakistan\nPeriod: Nov 2021 – Sep 2022 · 11 months\n\nBuilt responsive web applications using HTML5, CSS, and modern frontend technologies. Focused on user-friendly interfaces and great UX." },

  // ── EDUCATION ─────────────────────────────────────────────────────
  { keys: ['education', 'degree', 'university', 'study', 'college', 'qualification', 'academic', 'bsc', 'computer science'],
    answer: "🎓 Subhan's Education:\n\n1. Bachelor of Computer Science\n   University of Gujrat · 2019–2024\n\n2. ICS (Intermediate)\n   Punjab Group of Colleges · 2017–2019\n\n3. Matriculation\n   Miss Farida Sheikh Model High School" },

  // ── LOCATION ──────────────────────────────────────────────────────
  { keys: ['location', 'where', 'city', 'lahore', 'pakistan', 'based', 'from', 'live', 'address', 'bahria'],
    answer: "📍 Location:\n\nBahria Town, Lahore, Punjab, Pakistan\n\nSubhan works with clients locally in Pakistan and internationally via remote. He is open to both on-site (Lahore) and remote opportunities." },

  // ── CONTACT — full info ───────────────────────────────────────────
  { keys: ['contact', 'reach', 'message', 'connect', 'talk', 'discuss', 'get in touch', 'contact info', 'contact page'],
    answer: "📬 Contact Subhan:\n\n📧 Email: subhannadeem3742@gmail.com\n📞 Phone / WhatsApp: 03073399644\n💼 LinkedIn: linkedin.com/in/subhan-nadeem-193b56197\n📍 Location: Bahria Town, Lahore, Pakistan\n\nOr fill the contact form at /contact — he typically responds within 24 hours!" },

  // Email specifically
  { keys: ['email', 'gmail', 'mail'],
    answer: "📧 Subhan's email:\n\nsubhannadeem3742@gmail.com\n\nYou can also use the contact form at /contact. He replies within 24 hours." },

  // Phone / WhatsApp
  { keys: ['phone', 'number', 'call', 'whatsapp', 'mobile', 'contact number'],
    answer: "📞 Phone / WhatsApp:\n\n03073399644\n\nYou can call or WhatsApp Subhan directly on this number." },

  // LinkedIn
  { keys: ['linkedin', 'social', 'social media', 'profile', 'network'],
    answer: "💼 LinkedIn Profile:\n\nlinkedin.com/in/subhan-nadeem-193b56197\n\nConnect with Subhan on LinkedIn for professional inquiries and networking." },

  // ── HIRE / AVAILABILITY ───────────────────────────────────────────
  { keys: ['hire', 'freelance', 'available', 'availability', 'open to work', 'recruit', 'job offer', 'opportunity', 'full time', 'part time'],
    answer: "✅ Subhan is currently open to:\n\n• Freelance projects (any size)\n• Full-time roles\n• Remote or on-site (Lahore)\n\nReach him at:\n📧 subhannadeem3742@gmail.com\n📞 03073399644\n\nOr use the contact form at /contact" },

  // ── PRICING ───────────────────────────────────────────────────────
  { keys: ['price', 'cost', 'rate', 'charge', 'fee', 'budget', 'how much', 'pricing', 'payment'],
    answer: "💰 Project Pricing:\n\nRates vary based on scope and complexity. Rough estimates:\n\n• Landing page: $100–$300\n• Full website: $300–$1,000\n• Web app / SaaS: $500–$3,000+\n\nVisit /contact to share your requirements and get a custom quote!" },

  // ── TIMELINE ──────────────────────────────────────────────────────
  { keys: ['how long', 'timeline', 'deadline', 'duration', 'deliver', 'days', 'weeks'],
    answer: "⏱️ Estimated Delivery Times:\n\n• Landing page: 3–5 days\n• Full website: 1–2 weeks\n• Complex web app: 3–6 weeks\n\nSubhan always agrees on a timeline upfront and sticks to deadlines." },

  // ── CLIENT REVIEWS ────────────────────────────────────────────────
  { keys: ['quality', 'review', 'testimonial', 'feedback', 'rating', 'client', 'satisfied', 'happy'],
    answer: "⭐ Clients rate Subhan 5/5!\n\n\"The design is modern, the code is clean, and the performance is excellent.\" — Ahmed Malik, CEO\n\n\"He built our platform quickly and efficiently. Highly recommended!\" — Fatima Sheikh, Owner\n\n\"Our sales increased significantly since launching.\" — Shahzad Ali, Founder\n\nSee all reviews on the homepage." },

  // ── THANK YOU ─────────────────────────────────────────────────────
  { keys: ['thank', 'thanks', 'thank you', 'shukriya', 'jazakallah', 'appreciated'],
    answer: "You're welcome! 😊 Feel free to ask anything else. You can also reach Subhan directly:\n\n📧 subhannadeem3742@gmail.com\n📞 03073399644" },

  // ── BYE ───────────────────────────────────────────────────────────
  { keys: ['bye', 'goodbye', 'see you', 'later', 'take care', 'khuda hafiz'],
    answer: "Goodbye! 👋 Come back anytime. You can reach Subhan at subhannadeem3742@gmail.com or WhatsApp 03073399644 for any inquiries. Have a great day!" },
];

// Simple similarity score between two strings (0–1)
function similarity(a: string, b: string): number {
  if (a === b) return 1;
  if (a.length < 2 || b.length < 2) return 0;
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  // Check if shorter is a substring of longer
  if (longer.includes(shorter)) return shorter.length / longer.length;
  // Count matching bigrams
  const getBigrams = (s: string) => {
    const bg: string[] = [];
    for (let i = 0; i < s.length - 1; i++) bg.push(s[i] + s[i + 1]);
    return bg;
  };
  const bigA = getBigrams(a);
  const bigB = getBigrams(b);
  let matches = 0;
  for (const bg of bigA) if (bigB.includes(bg)) matches++;
  return (2 * matches) / (bigA.length + bigB.length);
}

function getBotAnswer(raw: string): string {
  const lower = raw.toLowerCase().trim();
  const words = lower.split(/\s+/).filter(w => w.length > 1);

  let bestScore = 0;
  let bestAnswer = "I'm not sure about that, but Subhan would love to help! You can reach him at:\n\n📧 subhannadeem3742@gmail.com\n📞 03073399644\n\nOr visit /contact to send a message directly.";

  for (const entry of KB) {
    let score = 0;

    for (const key of entry.keys) {
      // 1. Exact full-phrase match — highest weight
      if (lower.includes(key)) {
        score += key.split(' ').length * 4;
        continue;
      }

      // 2. Each keyword word checked against each query word
      const keyWords = key.split(' ');
      for (const kw of keyWords) {
        if (kw.length < 3) continue;
        for (const w of words) {
          const sim = similarity(w, kw);
          if (sim >= 0.82) score += sim * 3;       // very close match (handles typos)
          else if (sim >= 0.6) score += sim * 1.5; // partial match
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }
  return bestAnswer;
}

const QUICK_REPLIES = [
  'What are your skills?',
  'Work experience?',
  'How to contact you?',
  'What services do you offer?',
  'Show me projects',
  'Are you available for hire?',
];

// ─── Chatbot Component ─────────────────────────────────────────────────────────
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: "👋 Hi! I'm Subhan's AI assistant.\n\nAsk me anything about his skills, experience, projects, services, or how to get in touch. I'll give you accurate answers!" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open, messages]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const answer = getBotAnswer(trimmed);
      setMessages(prev => [...prev, { from: 'bot', text: answer }]);
      setTyping(false);
      if (!open) setUnread(u => u + 1);
    }, 700 + Math.random() * 400);
  };

  return (
    <>
      {/* ── Chat window ── */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-96 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          style={{ height: '520px', background: '#0d1117' }}>

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm border border-white/30">
                SN
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-indigo-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm">Subhan&apos;s Assistant</p>
              <p className="text-blue-200 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online · Replies instantly
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#0d1117' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                {msg.from === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mb-0.5">SN</div>
                )}
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white/6 border border-white/8 text-gray-200 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0">SN</div>
                <div className="bg-white/6 border border-white/8 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies — only show after first message */}
          {messages.length <= 2 && !typing && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap flex-shrink-0" style={{ background: '#0d1117' }}>
              {QUICK_REPLIES.slice(0, 3).map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)}
                  className="text-[11px] font-medium border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-1.5 rounded-full transition-all">
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-white/8 flex gap-2 flex-shrink-0" style={{ background: '#111827' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
              placeholder="Ask me anything about Subhan..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-blue-500/50 transition-all"
              disabled={typing}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={typing || !input.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Floating button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

        {/* Tooltip label — shown when closed */}
        {!open && (
          <div className="flex items-center gap-2 bg-[#0f1629] border border-white/10 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-xl animate-[slideInRight_0.4s_ease_forwards]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Ask me anything
          </div>
        )}

        {/* Button wrapper — ping rings */}
        <div className="relative">
          {/* Outer ping ring */}
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" style={{ animationDuration: '2s' }} />
              <span className="absolute -inset-1.5 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
            </>
          )}

          <button
            onClick={() => setOpen(o => !o)}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white w-20 h-20 rounded-full shadow-2xl shadow-blue-600/40 flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="Open chat"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <>
                <img src="/agent.avif" alt="AI Assistant" className="w-16 h-16 rounded-full object-cover animate-bounce" style={{ animationDuration: '2s' }} />
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                    {unread}
                  </span>
                )}
              </>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

const ROLES = ['Full-Stack Developer', 'Next.js Engineer', 'React Specialist', 'UI/UX Craftsman'];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712]">
      <Header />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">

        {/* ── Aurora background ── */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Aurora blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', animation: 'aurora1 8s ease-in-out infinite alternate' }} />
          <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', animation: 'aurora2 10s ease-in-out infinite alternate' }} />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', animation: 'aurora3 12s ease-in-out infinite alternate' }} />

          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="herodots" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#herodots)" />
          </svg>

          {/* Sweeping beam */}
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(99,102,241,0.04) 50%, transparent 60%)', animation: 'beam 6s ease-in-out infinite' }} />
        </div>

        {/* Aurora + beam keyframes */}
        <style>{`
          @keyframes aurora1 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(80px,60px) scale(1.15)} }
          @keyframes aurora2 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(-60px,80px) scale(1.2)} }
          @keyframes aurora3 { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(40px,-60px) scale(1.1)} }
          @keyframes beam   { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
        `}</style>

        {/* ── Main grid ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* ── LEFT ── */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Available for Work
            </div>

            {/* Name */}
            <p className="text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Subhan Nadeem
            </p>

            {/* Heading */}
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Crafting Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Experiences
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 mb-6 h-8">
              <span className="text-gray-400 text-lg font-medium">{displayed}</span>
              <span className={`w-0.5 h-5 bg-blue-400 rounded-full transition-opacity duration-100 ${cursor ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Description — short */}
            <p className="text-gray-500 text-base leading-relaxed max-w-md mb-10">
              4+ years building scalable web apps with Next.js, React &amp; Node.js — from concept to production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-12">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02]">
                Let&apos;s Connect
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 border border-white/12 bg-white/4 hover:bg-white/8 text-gray-300 hover:text-white px-6 py-3 rounded-full font-semibold text-sm transition-all backdrop-blur-sm">
                View Work
              </Link>
              <a href="/subhan-cv.pdf" download
                className="inline-flex items-center gap-2 border border-white/12 bg-white/4 hover:bg-white/8 text-gray-400 hover:text-white px-6 py-3 rounded-full font-semibold text-sm transition-all backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Resume
              </a>
            </div>

            {/* LinkedIn link */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <a href="https://www.linkedin.com/in/subhan-nadeem-193b56197/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-xs transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div className="order-1 md:order-2 relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600/15 blur-3xl" />

            {/* Outer ring — animated */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">

              {/* Ring 1 — slow spin */}
              <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/20 animate-spin" style={{ animationDuration: '25s' }} />
              {/* Ring 2 — reverse */}
              <div className="absolute inset-4 rounded-full border border-white/5 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />

              {/* Orbit dot */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/60" />
              </div>
              <div className="absolute inset-4 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60" />
              </div>

              {/* Photo frame */}
              <div className="absolute inset-8 rounded-full overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/subhannadeem.jpeg"
                  alt="Subhan Nadeem"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, 296px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating card — left */}
            <div className="absolute -left-2 sm:-left-10 top-1/2 -translate-y-1/2 bg-white/4 backdrop-blur-xl border border-white/8 rounded-2xl px-4 py-3 shadow-2xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-green-500/15 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Open to Work</p>
                  <p className="text-gray-400 text-[10px]">Full-time / Freelance</p>
                </div>
              </div>
            </div>

            {/* Floating card — bottom */}
            <div className="absolute -bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-white/4 backdrop-blur-xl border border-white/8 rounded-2xl px-5 py-2.5 shadow-2xl whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <p className="text-gray-300 text-xs font-medium">4+ Years · 12+ Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-gray-500">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>

      </section>

      {/* Featured Projects Showcase */}
      <ProjectShowcase />

      {/* ═══ SERVICES SECTION — FDS card style ═══ */}
      <section id="services" className="py-24 px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-900/20 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">What I Do</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Services I Offer
              </h2>
              <p className="text-gray-500 mt-3 max-w-lg">
                We blend technical expertise with clean design to craft platforms that aren&apos;t just tools — but catalysts for your success.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors whitespace-nowrap">
              Explore all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                ),
                color: 'from-blue-500 to-cyan-500',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20 hover:border-blue-500/50',
                num: '01',
                title: 'Custom Next.js Development',
                desc: 'High-performance, SEO-optimized web apps built with Next.js. Modern, fast, and scalable solutions tailored to your business.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" /></svg>
                ),
                color: 'from-violet-500 to-purple-600',
                bg: 'bg-violet-500/10',
                border: 'border-violet-500/20 hover:border-violet-500/50',
                num: '02',
                title: 'Full-Stack Development',
                desc: 'End-to-end development from frontend UI to backend APIs and database — complete digital products under one roof.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                ),
                color: 'from-emerald-500 to-teal-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20 hover:border-emerald-500/50',
                num: '03',
                title: 'Shopify & E-Commerce',
                desc: 'Complete Shopify stores, custom themes, app integration, and high-converting e-commerce experiences.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                ),
                color: 'from-orange-500 to-amber-500',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20 hover:border-orange-500/50',
                num: '04',
                title: 'WordPress Development',
                desc: 'Professional WordPress websites with custom themes, WooCommerce, and plugin development for businesses of all sizes.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                ),
                color: 'from-pink-500 to-rose-500',
                bg: 'bg-pink-500/10',
                border: 'border-pink-500/20 hover:border-pink-500/50',
                num: '05',
                title: 'UI/UX Design',
                desc: 'Beautiful, intuitive interfaces using Figma, shadcn/ui, Aceternity UI — pixel-perfect designs that users love.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                ),
                color: 'from-cyan-500 to-sky-500',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20 hover:border-cyan-500/50',
                num: '06',
                title: 'Responsive Design',
                desc: 'Mobile-first, fully responsive websites that look and perform flawlessly on every device and screen size.',
              },
            ].map((s, i) => (
              <div key={i} className={`group relative border ${s.border} ${s.bg} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer`}>
                {/* Number */}
                <span className="absolute top-6 right-7 text-5xl font-extrabold text-white/5 select-none">{s.num}</span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {s.icon}
                </div>

                {/* Divider */}
                <div className={`w-8 h-0.5 bg-gradient-to-r ${s.color} rounded-full mb-5`} />

                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>

                <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                  View Details
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SKILLS / EXPERTISE ═══ */}
      <section className="py-24 px-6 bg-[#050b18]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Expertise</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Skills &amp; Technologies
              </h2>
              <p className="text-gray-500 mb-10">
                4+ years of hands-on experience building production-grade applications across the full stack — from pixel-perfect UIs to robust server-side systems.
              </p>
              {[
                { label: 'Next.js & React.js', pct: 95, color: 'from-blue-500 to-cyan-400' },
                { label: 'Node.js & APIs', pct: 85, color: 'from-green-500 to-emerald-400' },
                { label: 'Tailwind CSS & UI Libs', pct: 98, color: 'from-violet-500 to-purple-400' },
                { label: 'PostgreSQL & MySQL', pct: 80, color: 'from-orange-500 to-amber-400' },
                { label: 'TypeScript', pct: 88, color: 'from-sky-500 to-blue-400' },
              ].map((s, i) => (
                <div key={i} className="mb-5">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-gray-300 text-sm font-medium">{s.label}</span>
                    <span className="text-gray-400 text-sm font-bold">{s.pct}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className={`h-2 rounded-full bg-gradient-to-r ${s.color}`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right — tech grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Next.js', icon: <SiNextdotjs className="w-7 h-7" /> },
                { name: 'React', icon: <SiReact className="w-7 h-7 text-[#61DAFB]" /> },
                { name: 'Node.js', icon: <SiNodedotjs className="w-7 h-7 text-[#339933]" /> },
                { name: 'Tailwind', icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" /> },
                { name: 'Bootstrap', icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" /> },
                { name: 'Material UI', icon: <SiMui className="w-7 h-7 text-[#007FFF]" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="w-7 h-7 text-[#336791]" /> },
                { name: 'MySQL', icon: <SiMysql className="w-7 h-7 text-[#4479A1]" /> },
                { name: 'Git', icon: <SiGit className="w-7 h-7 text-[#F05032]" /> },
                { name: 'GitHub', icon: <SiGithub className="w-7 h-7 text-white" /> },
                { name: 'Jira', icon: <SiJira className="w-7 h-7 text-[#0052CC]" /> },
                { name: 'Bitbucket', icon: <SiBitbucket className="w-7 h-7 text-[#0052CC]" /> },
              ].map((t, i) => (
                <div key={i} className="bg-white/4 border border-white/8 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-white/8 hover:border-white/15 transition-all duration-200 group">
                  <div className="opacity-80 group-hover:opacity-100 transition-opacity">{t.icon}</div>
                  <span className="text-gray-500 text-[11px] font-medium group-hover:text-gray-300 transition-colors">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE ME ═══ */}
      <section className="py-24 px-6 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">Why Work With Me</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              What Sets Me Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'I value your time. Projects are delivered on schedule without cutting corners on quality.', color: 'text-yellow-400' },
              { icon: '🎯', title: 'Clean Code', desc: 'Every line is purposeful. Scalable, maintainable code that teams love to work with.', color: 'text-blue-400' },
              { icon: '🔄', title: 'Agile Process', desc: 'Regular updates, sprint demos, and full transparency throughout the project lifecycle.', color: 'text-green-400' },
              { icon: '🛡️', title: 'Post-Launch Support', desc: 'I don\'t disappear after launch. Ongoing support, bug fixes, and feature additions.', color: 'text-purple-400' },
            ].map((item, i) => (
              <div key={i} className="bg-white/3 border border-white/8 rounded-2xl p-7 hover:bg-white/6 hover:border-white/15 transition-all duration-300 group">
                <span className={`text-4xl mb-5 block ${item.color}`}>{item.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-20 px-6 bg-[#050b18] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12+', label: 'Projects Delivered', icon: '📁' },
              { number: '8+', label: 'Happy Clients', icon: '😊' },
              { number: '4+', label: 'Years Experience', icon: '🏆' },
              { number: '99', label: 'Bugs Fixed', icon: '🔧' },
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl mb-2">{s.icon}</div>
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-1">{s.number}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 px-6 bg-[#050b18] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#1e40af20,transparent)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Let&apos;s Work Together
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"> Something Great?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Let&apos;s bring your ideas to life. Whether it&apos;s a startup MVP, e-commerce store, or enterprise platform — I&apos;m here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-semibold text-base transition-all shadow-2xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-[1.03]">
              Get In Touch
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/work" className="inline-flex items-center gap-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold text-base transition-all backdrop-blur-sm hover:border-white/30">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
