'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';
import { softwareServices, marketingServices } from '@/src/lib/constants';

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
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#EF5023]/10 rounded-full blur-3xl -z-10"></div>
          <h2
            className={`section-title text-4xl md:text-6xl font-extrabold mb-6 relative ${
              theme === 'dark' ? 'text-white' : 'text-[#023153]'
            }`}
          >
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#EF5023] to-[#FF6B35] mx-auto mb-8 rounded-full"></div>
          <p
            className={`section-title text-lg md:text-2xl max-w-4xl mx-auto font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Software Development Services */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
            }`}
          >
            Software Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {softwareServices.map((service) => (
              <div
                key={service.id}
                className={`service-card p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
                }`}
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-lg bg-[#EF5023]/10 flex items-center justify-center mb-6">
                    <div className="text-2xl text-[#EF5023]">💻</div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-[#023153]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
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

        {/* Digital Marketing Services */}
        <div>
          <h3
            className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
            }`}
          >
            Digital Marketing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((service) => (
              <div
                key={service.id}
                className={`service-card p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
                }`}
              >
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-lg bg-[#EF5023]/10 flex items-center justify-center mb-6">
                    <div className="text-2xl text-[#EF5023]">📈</div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-[#023153]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
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

        <div className="text-center mt-16">
          <Link
            href="/services"
            className={`inline-block px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#EF5023] text-white'
                : 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white'
            }`}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
