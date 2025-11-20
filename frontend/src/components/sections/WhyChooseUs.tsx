'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.why-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
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

  const reasons = [
    {
      icon: '☀️',
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with years of experience in their fields.',
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Accelerate your career with programs tailored for high-impact roles.',
    },
    {
      icon: '📚',
      title: 'Practical Learning',
      description: 'Hands-on projects to ensure you gain real-world skills and knowledge.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0F172A]' : 'bg-[#FAFAF9]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#023153]'
            }`}
          >
            Why Choose Us?
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            We bring you the best programs designed to help you succeed in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`why-card p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                theme === 'dark'
                  ? 'bg-[#1E293B] border border-gray-700'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="text-6xl mb-6">{reason.icon}</div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-[#023153]'
                }`}
              >
                {reason.title}
              </h3>
              <p
                className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
