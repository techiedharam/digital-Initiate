'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRocket, FaLightbulb, FaChartLine, FaHeadset } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current) {
      // Animate section title
      gsap.fromTo(
        featuresRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate feature cards with stagger
      gsap.fromTo(
        '.feature-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.feature-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for feature cards
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          duration: 0.3,
          ease: "power2.out"
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });
    }
  }, []);

  const features = [
    {
      icon: <FaRocket className="h-12 w-12 text-[#EF5023]" />,
      title: "Fast Delivery",
      description: "We deliver projects on time without compromising on quality. Our agile approach ensures rapid development and deployment."
    },
    {
      icon: <FaLightbulb className="h-12 w-12 text-[#EF5023]" />,
      title: "Innovative Solutions",
      description: "Our team stays ahead of the curve with cutting-edge technologies and innovative approaches to problem-solving."
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-[#EF5023]" />,
      title: "Proven Results",
      description: "We have a track record of delivering measurable results that help businesses grow and succeed in their markets."
    },
    {
      icon: <FaHeadset className="h-12 w-12 text-[#EF5023]" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or issues."
    }
  ];

  return (
    <section ref={featuresRef} className="py-16 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023153] mb-4">Why Choose Digital Initiate?</h2>
          <div className="w-20 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive digital solutions that help businesses thrive in the modern marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300"
            >
              <div className="mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#023153] mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;