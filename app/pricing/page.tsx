'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Pricing Packages</h2>
            <p className="text-lg md:text-xl text-gray-600">Choose the perfect package for your project</p>
          </div>

          {/* WordPress Packages */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">💻</span>
              <span>WordPress Website Packages</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* WordPress Silver */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Silver (Basic)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$300</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">WordPress</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Basic setup (1 tool)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 3 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Basic form</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Template-based</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">7-10 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">1 revision</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$99/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-gray-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* WordPress Gold */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-600 hover:shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Popular</span>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Gold (Standard)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$600</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">WordPress + 1 more</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">CRM integration (2 tools)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 7 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Custom forms + automation</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Custom design</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-green-500">✓</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">1 integration</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">10-15 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">3 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$149/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* WordPress Platinum */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-purple-500 hover:border-purple-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Platinum (Pro)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$1,200</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">WordPress + custom integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Full CRM automation suite</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 12 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Advanced forms + workflow</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Premium UI/UX with animations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-gray-600 text-right">✓ with SSL, CDN</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">Multiple integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">15-25 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">5 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$199/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Shopify Packages */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">🛒</span>
              <span>Shopify Store Packages</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Shopify Silver */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Silver (Basic)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$500</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Shopify</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Basic setup (1 tool)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 3 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Basic form</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Template-based</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">7-10 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">1 revision</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$99/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-gray-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* Shopify Gold */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-600 hover:shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Popular</span>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Gold (Standard)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$900</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Shopify + Apps</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">CRM integration (2 tools)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 7 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Custom forms + automation</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Custom design</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-green-500">✓</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">1 integration</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">10-15 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">3 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$149/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* Shopify Platinum */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-purple-500 hover:border-purple-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Platinum (Pro)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$1,800</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Shopify + custom integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Full CRM automation suite</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 12 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Advanced forms + workflow</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Premium UI/UX with animations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-gray-600 text-right">✓ with SSL, CDN</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">Multiple integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">15-25 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">5 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$199/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Next.js Packages */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">⚡</span>
              <span>Custom Next.js Packages</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Next.js Silver */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-200 hover:border-blue-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Silver (Basic)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$800</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Next.js (Full-stack)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Basic setup (1 tool)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 3 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Basic form</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Template-based</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-red-500">✗</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">7-10 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">1 revision</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$99/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-gray-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* Next.js Gold */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-blue-600 hover:shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Popular</span>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Gold (Standard)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$1,500</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Next.js + Database</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">CRM integration (2 tools)</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 7 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Custom forms + automation</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Custom design</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-green-500">✓</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">1 integration</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">10-15 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">3 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$149/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>

              {/* Next.js Platinum */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-purple-500 hover:border-purple-600 transition-all hover:shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">Platinum (Pro)</div>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600">$2,500</span>
                  </div>
                  <p className="text-gray-500 text-sm">One-Time Cost</p>
                </div>
                <ul className="space-y-3 mb-6 md:mb-8 text-sm">
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Website Platforms:</span>
                    <span className="text-gray-600 text-right">Next.js + Database + Integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">CRM Setup:</span>
                    <span className="text-gray-600 text-right">Full CRM automation suite</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Pages Included:</span>
                    <span className="text-gray-600 text-right">Up to 12 pages</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Contact Forms:</span>
                    <span className="text-gray-600 text-right">Advanced forms + workflow</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">UI/UX Design:</span>
                    <span className="text-gray-600 text-right">Premium UI/UX with animations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Hosting/Domain:</span>
                    <span className="text-gray-600 text-right">✓ with SSL, CDN</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">API Integrations:</span>
                    <span className="text-gray-600 text-right">Multiple integrations</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Delivery Time:</span>
                    <span className="text-gray-600 text-right">15-25 days</span>
                  </li>
                  <li className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Revisions:</span>
                    <span className="text-gray-600 text-right">5 revisions</span>
                  </li>
                  <li className="flex justify-between items-start py-2">
                    <span className="text-gray-700 font-medium">Monthly Maintenance:</span>
                    <span className="text-gray-600 text-right">$199/month</span>
                  </li>
                </ul>
                <Link href="/contact" className="block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all text-sm md:text-base">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
