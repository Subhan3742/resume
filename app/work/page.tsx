'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

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
                period: 'Nov 2025 - Present · 4 mos', 
                title: 'Software Engineer', 
                company: 'Hectahash · Full-time', 
                location: '',
                desc: 'Working as a Software Engineer, contributing to software development projects and delivering high-quality solutions.',
                projects: []
              },
              { 
                period: 'Dec 2025 - Dec 2025 · 1 mo', 
                title: 'Software Engineer', 
                company: 'Velosi Asset Integrity Limited · Full-time', 
                location: 'Lahore, Punjab, Pakistan · On-site',
                desc: 'Worked as a Software Engineer, developing and maintaining software solutions for asset integrity management systems.',
                projects: []
              },
              { 
                period: 'Oct 2024 - Nov 2025 · 1 yr 2 mos', 
                title: 'Full-stack Developer', 
                company: 'Future Dev Solutions · Full-time', 
                location: 'Lahore, Punjab, Pakistan · On-site',
                desc: 'Developed and maintained full-stack applications using Next.js, Tailwind CSS, Aceternity UI, and shadcn/ui. Delivered responsive, scalable solutions with a focus on clean UI, performance, and code quality. Collaborated on both client and internal tools, handling front-end interfaces and back-end logic.',
                projects: ['Future Dev Solutions Website - Company portfolio site', 'OrbyPOS - Restaurant Management System', 'QI Tech - Workflow automation tool']
              },
              { 
                period: 'Jan 2024 - Mar 2024 · 3 mos', 
                title: 'React Developer', 
                company: 'VisionBird Technologies', 
                location: 'Gujrāt, Punjab, Pakistan · On-site',
                desc: 'Dedicated frontend developer with hands-on experience in HTML, CSS, JavaScript, and Bootstrap. Proficient in building dynamic web applications using the MERN stack—MongoDB, Express.js, React.js, and Node.js. Successfully contributed to projects at VisionBird Company, refining skills in frontend development and problem-solving.',
                projects: ['Delice Pizza', 'French Tacos', 'Rapido Pizza', 'British Energy Grants']
              },
              { 
                period: 'Nov 2021 - Sep 2022 · 11 mos', 
                title: 'Frontend Developer', 
                company: 'Muami Tech · Full-time', 
                location: 'Gujrāt, Punjab, Pakistan · On-site',
                desc: 'Worked as a Frontend Developer, building responsive web applications using HTML5, CSS, and modern frontend technologies. Focused on creating user-friendly interfaces and improving user experience.',
                projects: []
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">SN</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-600 font-semibold mb-1">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-gray-600 font-semibold mb-1">{exp.company}</p>
                    {exp.location && <p className="text-gray-500 text-sm mb-3">{exp.location}</p>}
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

      <Footer />
    </div>
  );
}
