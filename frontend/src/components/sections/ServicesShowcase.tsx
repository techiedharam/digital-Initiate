'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';
import { softwareServices, projectAssistanceFeatures } from '@/src/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate service cards
      gsap.fromTo(
        '.service-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate section title
      gsap.fromTo(
        '.section-title',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-[#EF5023]/10 rounded-full blur-2xl -z-10"></div>
          <h2
            className={`section-title text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 relative ${theme === 'dark' ? 'text-white' : 'text-[#023153]'}`}
          >
            Our Services
          </h2>
          <div className="w-16 h-1 md:w-32 md:h-1 bg-gradient-to-r from-[#EF5023] to-[#FF6B35] mx-auto mb-4 md:mb-8 rounded-full"></div>
          <p
            className={`section-title text-base md:text-lg lg:text-2xl max-w-4xl mx-auto font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Comprehensive development solutions and internship programs designed to accelerate your career
          </p>
        </div>

        {/* Software Development Services */}
        <div className="mb-16">
          <h3
            className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center ${theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'}`}
          >
            Software Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {softwareServices.map((service) => (
              <div
                key={service.id}
                className={`service-card p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
                }`}
              >
                <div className="mb-4 md:mb-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#EF5023]/10 flex items-center justify-center mb-4 md:mb-6">
                    <div className="text-xl md:text-2xl text-[#EF5023]">💻</div>
                  </div>
                  <h3
                    className={`text-lg md:text-xl font-bold mb-3 md:mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-[#023153]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Assistance Section */}
        <div>
          <h3
            className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center ${theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'}`}
          >
            Project Assistance - ₹799
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectAssistanceFeatures.slice(0, 6).map((feature) => (
              <div
                key={feature.id}
                className={`service-card p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
                }`}
              >
                <div className="mb-4 md:mb-5">
                  <h3
                    className={`text-lg md:text-xl font-bold mb-3 md:mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-[#023153]'
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/assistance"
              className={`inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-[#FF6B35] to-[#EF5023] text-white' : 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white'}`}
            >
              Get Assistance for ₹799
            </Link>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            href="/services"
            className={`inline-block px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-[#FF6B35] to-[#EF5023] text-white' : 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white'}`}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
