'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const projects = [
    {
      name: 'Luxera',
      description: 'A high-end luxury fashion e-commerce store — curated collections, smooth animations, and a seamless checkout flow built for premium brands.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
      features: ['Luxury UI/UX', 'Product Catalog', 'Shopping Cart', 'Checkout Flow', 'Responsive Design'],
      image: '/two.png',
      link: 'https://luxera-omega.vercel.app/',
      gradient: 'from-fuchsia-500 to-purple-700'
    },
    {
      name: 'MN Furniture',
      description: 'A clean and modern furniture e-commerce store — rich product listings, intuitive browsing, and a polished UI designed to convert visitors into buyers.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS'],
      features: ['Product Listings', 'Modern UI', 'Shopping Cart', 'Responsive Design', 'Fast Loading'],
      image: '/one.png',
      link: 'https://mn-furniture-7zqt.vercel.app/',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Future Dev Solutions',
      description: 'Company portfolio website showcasing services and expertise. Built with modern web technologies to create an engaging user experience.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Aceternity UI'],
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: 'https://www.futuredevsolutions.com/',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'OrbyPOS',
      description: 'Restaurant Management System - A comprehensive platform for managing menus, orders, billing, and reservations. Streamlined operations for restaurant businesses.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      features: ['Menu Management', 'Order Processing', 'Billing System', 'Reservation Management', 'Real-time Updates'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      name: 'QI Tech',
      description: 'Workflow automation tool to create logic-based forms, manage data, and improve reporting processes. Helps businesses automate their workflows efficiently.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Material UI'],
      features: ['Form Builder', 'Workflow Automation', 'Data Management', 'Custom Reports', 'User Dashboard'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Delice Pizza',
      description: 'E-commerce platform for pizza ordering and delivery. Complete solution with menu browsing, cart management, and order tracking.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration', 'Order Tracking'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800',
      gradient: 'from-red-500 to-orange-600'
    },
    {
      name: 'French Tacos',
      description: 'Restaurant website with online ordering system. Modern design with seamless ordering experience for customers.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS'],
      features: ['Online Menu', 'Order Placement', 'Responsive Design', 'Fast Loading'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Rapido Pizza',
      description: 'Pizza delivery platform with real-time order tracking. Built for fast and efficient pizza ordering experience.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Quick Ordering', 'Real-time Tracking', 'Multiple Payment Options', 'User Accounts'],
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
      gradient: 'from-red-600 to-pink-600'
    },
    {
      name: 'British Energy Grants',
      description: 'Platform for managing energy grant applications. Streamlined process for users to apply and track their grant applications.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Application Forms', 'Document Upload', 'Status Tracking', 'Admin Dashboard'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Shahzad Collection Brand Shop',
      description: 'E-commerce platform for fashion brand with complete shopping experience. Features product catalog, shopping cart, checkout, and order management system.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Gateway', 'Order Management', 'Admin Dashboard'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Portfolio Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Check out my Portfolio</h1>
          <p className="text-xl text-gray-600">Here's what I have done in the past</p>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  {project.image && !imageErrors[index] ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold text-center px-4 drop-shadow-lg">{project.name}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold drop-shadow-lg">{project.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {'link' in project && project.link && (
                    <div className="mt-5">
                      <a
                        href={project.link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Live
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                        </svg>
                      </a>
                    </div>
                  )}
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
