'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">{name.charAt(0)}</span>
    </div>
  );
};

export default function Home() {
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
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#clients" className="text-gray-700 hover:text-indigo-600 transition-colors">Clients</a>
              <Link href="/work" className="text-gray-700 hover:text-indigo-600 transition-colors">Work</Link>
              <a href="#statistics" className="text-gray-700 hover:text-indigo-600 transition-colors">Statistics</a>
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/Author Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                Software Engineer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hello I'm <span className="text-indigo-600">Sara Munir</span>
          </h1>
              <p className="text-xl text-gray-600 mb-4">
                Full-Stack Developer | Web Developer
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Building modern, scalable web applications with cutting-edge technologies
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Let's connect
                </Link>
                <a 
                  href="/about" 
                  className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
                  <span className="text-6xl font-bold text-white">SM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-indigo-600 font-bold text-xl">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Node.js</span>
                <span className="text-indigo-600 font-bold text-xl">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">Tailwind CSS</span>
                <span className="text-indigo-600 font-bold text-xl">98%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-gray-900 text-lg">PostgreSQL & MySQL</span>
                <span className="text-indigo-600 font-bold text-xl">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-4 rounded-full transition-all" style={{ width: '80%' }}></div>
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
              { icon: '💻', title: 'Web Development', desc: 'Building responsive and scalable web applications using Next.js, React.js, and modern web technologies.' },
              { icon: '📝', title: 'Technical Writing', desc: 'Creating clear and comprehensive technical documentation and content for developers and users.' },
              { icon: '📱', title: 'Mobile Development', desc: 'Developing mobile-responsive applications and progressive web apps with modern frameworks.' },
              { icon: '📧', title: 'Email Development', desc: 'Creating responsive email templates and email marketing campaigns with HTML and CSS.' },
              { icon: '🎨', title: 'UI/UX Design', desc: 'Designing beautiful and intuitive user interfaces using Figma, Material UI, shadcn/ui, and Aceternity UI.' },
              { icon: '🌐', title: 'Full-Stack Development', desc: 'End-to-end development solutions from frontend to backend with database integration.' }
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
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Frontend & Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'shadcn/ui', 'Aceternity UI', 'Magic UI'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
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
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Databases & Testing
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['PostgreSQL', 'MySQL', 'Automated Testing'].map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
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
              <div className="w-1 h-8 bg-indigo-600 rounded"></div>
              Tools and Softwares
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Git', 'GitHub', 'Bitbucket', 'Jira'].map((tool, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-indigo-100">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-indigo-600">
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Check out my Portfolio</h2>
            <p className="text-xl text-gray-600">Here's what I have done in the past</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Future Dev Solutions',
              'OrbyPOS',
              'QI Tech',
              'Delice Pizza',
              'French Tacos',
              'Rapido Pizza',
              'British Energy Grants',
              'Portfolio Site'
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl h-64 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                <span className="text-white text-xl font-bold text-center px-4">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My latest clients</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((client) => (
              <div key={client} className="bg-gray-100 rounded-xl h-32 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <span className="text-gray-400 font-semibold">Client {client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-20 px-6 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
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

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
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
              className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
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

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SM</span>
                </div>
                <span className="text-xl font-bold text-white">Sara Munir</span>
              </div>
              <p className="text-gray-400 text-sm">
                Software Engineer & Full-Stack Developer passionate about building modern web applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work Experience</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:saramunir7272@gmail.com" className="hover:text-white transition-colors">saramunir7272@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>G-15 Islamabad</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Sara Munir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
