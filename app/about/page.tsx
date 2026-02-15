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
              I'm Subhan Nadeem, a <span className="text-blue-600 font-semibold">Software Engineer</span>
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
              <a href="mailto:subhannadeem3742@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Connect with me
              </a>
              <a href="https://www.linkedin.com/in/subhan-nadeem-193b56197/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">My academic background</p>
          </div>
          <div className="space-y-8">
            {[
              { 
                degree: 'Bachelor of Computer Science', 
                institution: 'University of Gujrat', 
                period: '2019-2024',
                desc: ''
              },
              { 
                degree: 'ICS', 
                institution: 'Punjab Group Of Colleges', 
                period: '2017-2019',
                desc: ''
              },
              { 
                degree: 'Matriculation', 
                institution: 'Miss Farida Sheikh Model High School', 
                period: '',
                desc: ''
              }
            ].map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 font-semibold mb-1">{edu.institution}</p>
                    {edu.period && <p className="text-blue-600 font-semibold text-sm">{edu.period}</p>}
                    {edu.desc && <p className="text-gray-700 mt-3">{edu.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
