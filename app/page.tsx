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
    tag: 'E-Commerce · Luxury',
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">

        {/* Section label — top left */}
        <div className="absolute top-24 left-6 sm:left-10 lg:left-20 z-30">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-400 mb-2">Featured Work</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Projects I&apos;ve <span className="text-violet-400">Built</span>
          </h2>
        </div>

        {/* Background images — all rendered, only active visible */}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content layer */}
        <div className="absolute inset-0 z-20 flex items-center px-6 sm:px-10 lg:px-20">
          <div className="w-full max-w-6xl">
            {showcaseProjects.map((p, i) => (
              <div
                key={i}
                className="max-w-2xl absolute transition-all duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0px)' : i < active ? 'translateY(-40px)' : 'translateY(40px)',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                {/* Ghost number */}
                <span className="block select-none font-serif text-[clamp(56px,12vw,150px)] font-normal leading-[0.8] tracking-tighter text-white/[0.07]">
                  {p.number}
                </span>

                {/* Meta row */}
                <div className="mb-5 mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white">
                    {p.name}
                  </span>
                  <span className="h-px w-4 bg-white/25" />
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${p.accentText}`}>
                    {p.tag}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mb-3 font-serif text-[clamp(40px,7vw,92px)] font-bold leading-[0.98] tracking-tight text-white">
                  {p.name}
                </h3>

                {/* Subtitle */}
                <p className={`mb-4 text-[clamp(14px,1.3vw,19px)] font-medium ${p.accentText}`}>
                  {p.subtitle}
                </p>

                {/* Description */}
                <p className="mb-9 max-w-[460px] text-sm leading-[1.85] text-white/55 sm:text-[15px]">
                  {p.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-2.5 border border-white/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 ${p.accentHover}`}
                  >
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 bg-white text-black px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition duration-300 hover:bg-white/90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide counter — bottom right */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center gap-5">
          {showcaseProjects.map((_, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 transition-all duration-500 ${
                i === active ? 'opacity-100' : 'opacity-35'
              }`}
            >
              <span className={`block h-px transition-all duration-500 bg-white ${i === active ? 'w-8' : 'w-3'}`} />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Image dots — bottom center (only if multiple images) */}
        {project.images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                aria-label={`Image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === imgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Scroll hint — first slide only */}
        {active === 0 && (
          <div className="absolute bottom-8 left-6 sm:left-10 lg:left-20 z-30 flex items-center gap-2 text-white/40">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Subhan Nadeem",
    "Full Stack Developer",
    "Web Developer",
    "Software Engineer"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && typedText === currentPhrase) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typedText === '') {
      // Move to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (!isDeleting && typedText.length < currentPhrase.length) {
      // Type
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 100);
    } else if (isDeleting && typedText.length > 0) {
      // Delete
      timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, 50);
    }

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      if (timeout) clearTimeout(timeout);
      clearInterval(cursorInterval);
    };
  }, [typedText, isDeleting, currentPhraseIndex]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero/Author Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Section - Mobile First */}
            <div className="relative w-full flex justify-center items-center order-1 md:order-2">
              {/* Mobile: Circular frame */}
              <div className="w-64 h-64 md:mt-[-50px] md:w-full md:max-w-md md:h-[600px] rounded-full md:rounded-3xl overflow-hidden relative">
        <Image
                  src="/subhannadeem.jpeg"
                  alt="Subhan Nadeem"
                  fill 
                  className="object-cover"
          priority
                  sizes="(max-width: 768px) 256px, 500px"
                />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="text-center md:text-left order-2 md:order-1 w-full">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 md:mb-6">
                Software Engineer
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                <span className="text-gray-900">Hello I'm </span>
                <span className="text-blue-600">
                  {typedText}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
          </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-3 md:mb-4">
                Full-Stack Developer | Web Developer
              </p>
              <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8">
                Building modern, scalable web applications with cutting-edge technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
                >
                  Let's connect
                </Link>
                <a 
                  href="/about" 
                  className="inline-block border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <ProjectShowcase />

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Here's what I'm good at</h2>
            <p className="text-xl text-gray-600">My expertise in key technologies</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Next.js & React.js</span>
                <span className="text-blue-600 font-bold text-xl">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Node.js</span>
                <span className="text-blue-600 font-bold text-xl">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Tailwind CSS</span>
                <span className="text-blue-600 font-bold text-xl">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">PostgreSQL & MySQL</span>
                <span className="text-blue-600 font-bold text-xl">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">These are the services I offer</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'WordPress Development', desc: 'Professional WordPress websites with custom themes, plugins, and full customization. Perfect for blogs, business sites, and e-commerce solutions.' },
              { icon: '⚡', title: 'Custom Next.js Development', desc: 'High-performance, scalable web applications built with Next.js. Modern, fast, and SEO-optimized custom solutions tailored to your needs.' },
              { icon: '🛒', title: 'Shopify Development', desc: 'Complete Shopify store setup, theme customization, app integration, and e-commerce solutions. Build and optimize your online store.' },
              { icon: '📱', title: 'Responsive Design', desc: 'Mobile-first, fully responsive designs that work perfectly on all devices - desktop, tablet, and mobile.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Designing beautiful and intuitive user interfaces using Figma, Material UI, shadcn/ui, and Aceternity UI.' },
              { icon: '🌐', title: 'Full-Stack Development', desc: 'End-to-end development solutions from frontend to backend with database integration and API development.' }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stacks Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technology Stacks</h2>
            <p className="text-xl text-gray-600">Technologies I work with to build amazing products</p>
          </div>
          
          {/* Frontend & Backend */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Frontend & Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'shadcn/ui', 'Aceternity UI', 'Magic UI'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600">
                      <TechIcon name={tech} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Testing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Databases & Testing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['PostgreSQL', 'MySQL', 'Automated Testing'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600">
                      <TechIcon name={tech} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools and Softwares */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-600 rounded"></div>
              Tools and Softwares
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Git', 'GitHub', 'Bitbucket', 'Jira'].map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-blue-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600">
                      <TechIcon name={tool} />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 px-6 bg-gradient-to-br from-blue-600 via-slate-700 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Achievements</h2>
            <p className="text-blue-100 text-lg">Numbers that speak for themselves</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📁', number: '12', label: 'Finished Projects' },
              { icon: '🏆', number: '3', label: 'Awards Won' },
              { icon: '😊', number: '8', label: 'Happy Clients' },
              { icon: '🔧', number: '99', label: 'Bugs Fixed' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="clients" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600"></p>
          </div>
          
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {[
                  {
                    name: 'Ahmed Malik',
                    role: 'CEO, TechSolutions Pvt Ltd',
                    company: 'Future Dev Solutions',
                    review: 'Subhan delivered an outstanding website for our company. The design is modern, the code is clean, and the performance is excellent. He understood our requirements perfectly and delivered beyond expectations.',
                    rating: 5
                  },
                  {
                    name: 'Fatima Sheikh',
                    role: 'Owner, Delice Pizza',
                    company: 'Delice Pizza Platform',
                    review: 'Working with Subhan was a great experience. He built our online ordering system quickly and efficiently. The platform is user-friendly and our customers love it. Highly recommended!',
                    rating: 5
                  },
                  {
                    name: 'Shahzad Ali',
                    role: 'Founder, Shahzad Collection',
                    company: 'Shahzad Collection Brand Shop',
                    review: 'Subhan created an amazing e-commerce platform for our fashion brand. The website is beautiful, fast, and easy to use. Our sales have increased significantly since launching. Thank you Subhan!',
                    rating: 5
                  },
                  {
                    name: 'Hassan Khan',
                    role: 'Restaurant Owner',
                    company: 'OrbyPOS System',
                    review: 'The restaurant management system Subhan built has transformed our operations. Everything is automated now - from orders to billing. It has saved us so much time and improved our efficiency.',
                    rating: 5
                  },
                  {
                    name: 'Ayesha Ahmed',
                    role: 'Business Manager, QI Tech',
                    company: 'QI Tech Platform',
                    review: 'Subhan developed our workflow automation tool and it has been a game-changer for our business. The forms and reporting features are exactly what we needed. Great work!',
                    rating: 5
                  },
                  {
                    name: 'Muhammad Raza',
                    role: 'Director, VisionBird Technologies',
                    company: 'Multiple Projects',
                    review: 'Subhan is a talented developer with excellent technical skills. He worked on several projects for us including Rapido Pizza and British Energy Grants. Always professional and delivers on time.',
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4 md:px-8">
                    <div className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                      <div className="flex items-center gap-1 mb-6 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic leading-relaxed text-lg text-center">"{testimonial.review}"</p>
                      <div className="border-t border-gray-200 pt-6 text-center">
                        <p className="font-semibold text-gray-900 text-xl">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? 5 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 5 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-slate-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-semibold mb-6">
            Let's Work Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Get in touch and let's discuss how I can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <Link 
              href="/work" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
