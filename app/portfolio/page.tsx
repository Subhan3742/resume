'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const projects = [
    {
      name: 'Future Dev Solutions',
      description: 'Company portfolio website showcasing services and expertise. Built with modern web technologies to create an engaging user experience.',
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Aceternity UI'],
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'SEO Friendly']
    },
    {
      name: 'OrbyPOS',
      description: 'Restaurant Management System - A comprehensive platform for managing menus, orders, billing, and reservations. Streamlined operations for restaurant businesses.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      features: ['Menu Management', 'Order Processing', 'Billing System', 'Reservation Management', 'Real-time Updates']
    },
    {
      name: 'QI Tech',
      description: 'Workflow automation tool to create logic-based forms, manage data, and improve reporting processes. Helps businesses automate their workflows efficiently.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Material UI'],
      features: ['Form Builder', 'Workflow Automation', 'Data Management', 'Custom Reports', 'User Dashboard']
    },
    {
      name: 'Delice Pizza',
      description: 'E-commerce platform for pizza ordering and delivery. Complete solution with menu browsing, cart management, and order tracking.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Product Catalog', 'Shopping Cart', 'Order Management', 'Payment Integration', 'Order Tracking']
    },
    {
      name: 'French Tacos',
      description: 'Restaurant website with online ordering system. Modern design with seamless ordering experience for customers.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS'],
      features: ['Online Menu', 'Order Placement', 'Responsive Design', 'Fast Loading']
    },
    {
      name: 'Rapido Pizza',
      description: 'Pizza delivery platform with real-time order tracking. Built for fast and efficient pizza ordering experience.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Quick Ordering', 'Real-time Tracking', 'Multiple Payment Options', 'User Accounts']
    },
    {
      name: 'British Energy Grants',
      description: 'Platform for managing energy grant applications. Streamlined process for users to apply and track their grant applications.',
      technologies: ['React.js', 'Material-UI', 'Tailwind CSS', 'Node.js'],
      features: ['Application Forms', 'Document Upload', 'Status Tracking', 'Admin Dashboard']
    },
    {
      name: 'Shahzad Collection Brand Shop',
      description: 'E-commerce platform for fashion brand with complete shopping experience. Features product catalog, shopping cart, checkout, and order management system.',
      technologies: ['Next.js', 'React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Gateway', 'Order Management', 'Admin Dashboard']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Portfolio Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
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
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold text-center px-4">{project.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
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
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Malik',
                role: 'CEO, TechSolutions Pvt Ltd',
                project: 'Future Dev Solutions',
                review: 'Sara delivered an outstanding website for our company. The design is modern, the code is clean, and the performance is excellent. She understood our requirements perfectly and delivered beyond expectations.',
                rating: 5
              },
              {
                name: 'Fatima Sheikh',
                role: 'Owner, Delice Pizza',
                project: 'Delice Pizza Platform',
                review: 'Working with Sara was a great experience. She built our online ordering system quickly and efficiently. The platform is user-friendly and our customers love it. Highly recommended!',
                rating: 5
              },
              {
                name: 'Muhammad Raza',
                role: 'Director, VisionBird Technologies',
                project: 'Multiple Projects',
                review: 'Sara is a talented developer with excellent technical skills. She worked on several projects for us including Rapido Pizza and British Energy Grants. Always professional and delivers on time.',
                rating: 5
              },
              {
                name: 'Shahzad Ali',
                role: 'Founder, Shahzad Collection',
                project: 'Shahzad Collection Brand Shop',
                review: 'Sara created an amazing e-commerce platform for our fashion brand. The website is beautiful, fast, and easy to use. Our sales have increased significantly since launching. Thank you Sara!',
                rating: 5
              },
              {
                name: 'Hassan Khan',
                role: 'Restaurant Owner',
                project: 'OrbyPOS System',
                review: 'The restaurant management system Sara built has transformed our operations. Everything is automated now - from orders to billing. It has saved us so much time and improved our efficiency.',
                rating: 5
              },
              {
                name: 'Ayesha Ahmed',
                role: 'Business Manager, QI Tech',
                project: 'QI Tech Platform',
                review: 'Sara developed our workflow automation tool and it has been a game-changer for our business. The forms and reporting features are exactly what we needed. Great work!',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{review.review}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <p className="text-xs text-indigo-600 mt-1">Project: {review.project}</p>
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
