'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';
import { internshipRoles } from '@/src/lib/constants';

gsap.registerPlugin(ScrollTrigger);

const InternshipsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate cards with enhanced effect
      gsap.fromTo(
        '.internship-card',
        { y: 60, opacity: 0, scale: 0.8, rotationX: -15 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate icons with bounce effect
      gsap.fromTo(
        '.internship-icon',
        { scale: 0, rotation: -30 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
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
            className={`text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 relative ${
              theme === 'dark' ? 'text-white' : 'text-[#023153]'
            }`}
          >
            Internship Opportunities
          </h2>
          <div className="w-16 h-1 md:w-32 md:h-1 bg-gradient-to-r from-[#EF5023] to-[#FF6B35] mx-auto mb-4 md:mb-8 rounded-full"></div>
          <p
            className={`text-base md:text-lg lg:text-2xl max-w-4xl mx-auto font-medium ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Gain real-world experience in cutting-edge technologies with our comprehensive internship programs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {internshipRoles.map((role, index) => (
            <div
              key={role.id}
              className={`internship-card p-6 md:p-8 rounded-2xl shadow-xl text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer group relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'
              }`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#EF5023]/5 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-[#023153]/5 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 internship-icon transform group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h3
                  className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-[#023153]'
                  }`}
                >
                  {role.title}
                </h3>
                <a
                  href="https://forms.gle/Wh1zznmfEJWZ3BL36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 transform group-hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white shadow-lg'
                      : 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white shadow-lg'
                  }`}
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center relative mt-12 md:mt-16">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#023153]/5 rounded-full blur-3xl -z-10"></div>
          <Link
            href="/internships"
            className={`inline-flex items-center px-6 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-[#FF6B35] to-[#EF5023] text-white'
                : 'bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white'
            }`}
          >
            View All Internships
            <svg
              className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternshipsShowcase;
