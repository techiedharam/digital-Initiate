'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaMobileAlt, FaChartLine, FaEnvelope, FaSearch, FaDesktop } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      // Animate section title
      gsap.fromTo(
        servicesRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate service cards with stagger
      gsap.fromTo(
        '.service-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.service-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for service cards
      const serviceCards = document.querySelectorAll('.service-card');
      serviceCards.forEach(card => {
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

  const softwareServices = [
    {
      icon: <FaCode className="h-12 w-12 text-[#EF5023]" />,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your business needs and goals."
    },
    {
      icon: <FaDesktop className="h-12 w-12 text-[#EF5023]" />,
      title: "Web Solutions",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies."
    },
    {
      icon: <FaMobileAlt className="h-12 w-12 text-[#EF5023]" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    }
  ];

  const marketingServices = [
    {
      icon: <FaChartLine className="h-12 w-12 text-[#EF5023]" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to grow your brand presence and engagement."
    },
    {
      icon: <FaSearch className="h-12 w-12 text-[#EF5023]" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website."
    },
    {
      icon: <FaEnvelope className="h-12 w-12 text-[#EF5023]" />,
      title: "Email Marketing",
      description: "Effective email campaigns to nurture leads and retain customers."
    },
    {
      icon: <FaChartLine className="h-12 w-12 text-[#EF5023]" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to maximize your online visibility."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div ref={servicesRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions to transform your digital presence and drive business growth
            </p>
          </div>

          {/* Software Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#023153] mb-2">Software Services</h2>
              <div className="w-20 h-1 bg-[#EF5023] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {softwareServices.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#EF5023] transition-all duration-300"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#023153] mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Services */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#023153] mb-2">Marketing Services</h2>
              <div className="w-20 h-1 bg-[#EF5023] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketingServices.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#EF5023] transition-all duration-300"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#023153] mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;