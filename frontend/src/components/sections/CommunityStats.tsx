'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAppSelector } from '@/src/store/hooks';

gsap.registerPlugin(ScrollTrigger);

const CommunityStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate stats with counter effect
      gsap.fromTo(
        '.stat-card',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate numbers
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((num) => {
        const finalValue = num.textContent || '0';
        gsap.fromTo(
          num,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: 'power1.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
            onUpdate: function () {
              num.textContent = Math.ceil(parseFloat(num.textContent || '0')).toString();
            },
          }
        );
      });
    }
  }, []);

  const stats = [
    {
      value: '1000',
      suffix: '+',
      label: 'LinkedIn community',
      color: theme === 'dark' ? '#3B82F6' : '#0077B5',
    },
    {
      value: '850',
      suffix: '+',
      label: 'Telegram community',
      color: theme === 'dark' ? '#60A5FA' : '#0088CC',
    },
    {
      value: '650',
      suffix: '+',
      label: 'Instagram community',
      color: theme === 'dark' ? '#F59E0B' : '#E4405F',
    },
    {
      value: '500',
      suffix: '+',
      label: 'Facebook community',
      color: theme === 'dark' ? '#3B82F6' : '#1877F2',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#1E293B]' : 'bg-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Connect with a community of individuals who share your vision, unlocking boundless
            opportunities and fostering personal growth as you pursue success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-8 rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-3">
                <span
                  className="stat-number text-5xl md:text-6xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-5xl md:text-6xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p
                className={`text-base font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
