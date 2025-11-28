'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/src/components/sections/HeroSection';
import WhyChooseUs from '@/src/components/sections/WhyChooseUs';
import CommunityStats from '@/src/components/sections/CommunityStats';
import Features from './components/Features';
import InternshipsShowcase from '@/src/components/sections/InternshipsShowcase';
import ServicesShowcase from '@/src/components/sections/ServicesShowcase';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

// Import the new components
import { internshipBenefits } from '@/src/lib/constants';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Internship Benefits Section Component
const InternshipBenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023153] mb-4">Benefits of Our Internship Program</h2>
          <div className="w-20 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Gain practical experience and build your career with our comprehensive internship program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {internshipBenefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-gradient-to-br from-[#023153] to-[#011f35] rounded-2xl p-6 text-center text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Assistance Section Component
const ProjectAssistanceSection = () => {
  return (
    <section className="py-20 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023153] mb-4">Project Assistance Program</h2>
          <div className="w-20 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get complete support for your academic or professional projects for just ₹799
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#023153] mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Complete project support from start to finish</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">1:1 mentor communication</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Coding help & debugging support</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Guidance in choosing the right tools & tech</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Project documentation (proper format)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#023153] mb-6">Additional Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Report writing assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Review calls and progress tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Resume building and job assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Doubt-clearing sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Portfolio building guidance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/assistance" 
              className="inline-block px-8 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64420] transition duration-300 text-lg"
            >
              Get Assistance for ₹799
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <main>
        <HeroSection />
        <WhyChooseUs />
        <CommunityStats />
        <InternshipBenefitsSection />
        <ProjectAssistanceSection />
        <ServicesShowcase />
        <InternshipsShowcase />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}