'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = [
  {
    name: 'Luxera',
    description: 'A high-end luxury fashion e-commerce store — curated collections, smooth animations, and a seamless checkout flow built for premium brands.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
    features: ['Luxury UI/UX', 'Product Catalog', 'Shopping Cart', 'Checkout Flow', 'Responsive Design'],
    image: '/two.png',
    link: 'https://luxera-omega.vercel.app/',
    color: 'from-fuchsia-500 to-purple-700',
    accent: 'border-fuchsia-500/30 hover:border-fuchsia-500/60',
    tag: 'E-Commerce · Fashion',
  },
  {
    name: 'MN Furniture',
    description: 'A clean and modern furniture e-commerce store — rich product listings, intuitive browsing, and a polished UI designed to convert visitors into buyers.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
    features: ['Product Listings', 'Modern UI', 'Shopping Cart', 'Responsive Design', 'Fast Loading'],
    image: '/one.png',
    link: 'https://mn-furniture-7zqt.vercel.app/',
    color: 'from-amber-500 to-orange-600',
    accent: 'border-amber-500/30 hover:border-amber-500/60',
    tag: 'E-Commerce · Furniture',
  },
  {
    name: 'Future Dev Solutions',
    description: 'Company portfolio website showcasing services and expertise. Built with modern web technologies to create an engaging user experience.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Aceternity UI'],
    features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: 'https://www.futuredevsolutions.com/',
    color: 'from-blue-500 to-cyan-600',
    accent: 'border-blue-500/30 hover:border-blue-500/60',
    tag: 'Portfolio · Agency',
  },
  {
    name: 'OrbyPOS',
    description: 'Restaurant Management System — comprehensive platform for managing menus, orders, billing, and reservations. Streamlined operations for restaurant businesses.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Menu Management', 'Order Processing', 'Billing System', 'Reservation Management', 'Real-time Updates'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    color: 'from-orange-500 to-red-600',
    accent: 'border-orange-500/30 hover:border-orange-500/60',
    tag: 'SaaS · Restaurant',
  },
  {
    name: 'QI Tech',
    description: 'Workflow automation tool to create logic-based forms, manage data, and improve reporting processes. Helps businesses automate their workflows efficiently.',
    technologies: ['React.js', 'Node.js', 'MySQL', 'Material UI'],
    features: ['Form Builder', 'Workflow Automation', 'Data Management', 'Custom Reports', 'User Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'from-purple-500 to-indigo-600',
    accent: 'border-purple-500/30 hover:border-purple-500/60',
    tag: 'SaaS · Automation',
  },
  {
    name: 'Delice Pizza',
    description: 'E-commerce platform for pizza ordering and delivery. Complete solution with menu browsing, cart management, and order tracking.',
    technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
    features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration', 'Order Tracking'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
    color: 'from-red-500 to-orange-600',
    accent: 'border-red-500/30 hover:border-red-500/60',
    tag: 'E-Commerce · Food',
  },
  {
    name: 'French Tacos',
    description: 'Restaurant website with online ordering system. Modern design with seamless ordering experience for customers.',
    technologies: ['React.js', 'Material-UI', 'Tailwind CSS'],
    features: ['Online Menu', 'Order Placement', 'Responsive Design', 'Fast Loading'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    color: 'from-yellow-500 to-orange-600',
    accent: 'border-yellow-500/30 hover:border-yellow-500/60',
    tag: 'Web · Restaurant',
  },
  {
    name: 'Rapido Pizza',
    description: 'Pizza delivery platform with real-time order tracking. Built for fast and efficient pizza ordering experience.',
    technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
    features: ['Quick Ordering', 'Real-time Tracking', 'Multiple Payment Options', 'User Accounts'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    color: 'from-red-600 to-pink-600',
    accent: 'border-pink-500/30 hover:border-pink-500/60',
    tag: 'Web · Delivery',
  },
  {
    name: 'British Energy Grants',
    description: 'Platform for managing energy grant applications. Streamlined process for users to apply and track their grant applications.',
    technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
    features: ['Application Forms', 'Document Upload', 'Status Tracking', 'Admin Dashboard'],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
    color: 'from-green-500 to-emerald-600',
    accent: 'border-green-500/30 hover:border-green-500/60',
    tag: 'Web · Government',
  },
  {
    name: 'Shahzad Collection',
    description: 'E-commerce platform for fashion brand with complete shopping experience. Features product catalog, cart, checkout, and order management.',
    technologies: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Gateway', 'Order Management', 'Admin Dashboard'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    color: 'from-pink-500 to-rose-600',
    accent: 'border-rose-500/30 hover:border-rose-500/60',
    tag: 'E-Commerce · Fashion',
  },
];

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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
          <p className="text-blue-400 font-semibold text-xs uppercase tracking-widest mb-3">My Work</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Portfolio &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            10+ projects spanning e-commerce, SaaS, restaurant tech, and workflow automation.
          </p>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="pb-24 px-6 bg-[#030712]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white/3 border ${project.accent} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && !imageErrors[index] ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImageErrors(p => ({ ...p, [index]: true }))}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold text-center px-4">{project.name}</span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/30 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-white font-bold text-xl">{project.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-full border border-white/10 bg-white/5 text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-500 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {'link' in project && project.link ? (
                    <a
                      href={project.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90 shadow-lg`}
                    >
                      View Live
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 border border-white/10 text-gray-600 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                      Client Project
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#050b18] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Have a project in mind?</h2>
          <p className="text-gray-500 mb-8">Let&apos;s build something great together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-blue-600/30">
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
