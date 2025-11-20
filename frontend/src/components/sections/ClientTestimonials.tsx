'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';

gsap.registerPlugin(ScrollTrigger);

const ClientTestimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        '.testimonial-card',
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

  const testimonials = [
    {
      id: 'SJ',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      quote: '"Digital Initiate transformed our online presence completely. Their team delivered beyond our expectations and helped us increase our customer base by 150% in just six months."',
      avatar: 'SJ',
    },
    {
      id: 'MC',
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      quote: '"The digital marketing strategies implemented by Digital Initiate have significantly improved our conversion rates. Their attention to detail and innovative approach is impressive."',
      avatar: 'MC',
    },
    {
      id: 'ER',
      name: 'Emily Rodriguez',
      role: 'Founder, StartupHub',
      quote: '"Working with Digital Initiate was a game-changer for our business. Their software development expertise helped us create a product that our users love."',
      avatar: 'ER',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0F172A]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#023153]'
            }`}
          >
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial-card p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-[#1E293B] border border-gray-700'
                  : 'bg-white border border-gray-100'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#EF5023] to-[#FF6B35] flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-[#023153]'
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p
                className={`italic leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
