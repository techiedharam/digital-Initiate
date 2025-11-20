'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      // Initial animation
      gsap.fromTo(
        aboutRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      // Animate values cards with scroll trigger
      gsap.fromTo(
        '.value-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.value-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#023153] to-[#011f35]">
      <div ref={aboutRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Digital Initiate
            </h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're passionate about helping businesses thrive in the digital world through innovative software solutions and strategic marketing.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#023153] mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  At Digital Initiate, we believe that every business deserves a strong digital presence. 
                  Our mission is to empower companies with cutting-edge technology solutions and data-driven 
                  marketing strategies that drive real results.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Founded in 2020, we've helped over 200 businesses transform their digital landscape, 
                  from startups to established enterprises.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#023153] text-white px-6 py-3 rounded-lg font-semibold">
                    200+ Clients
                  </div>
                  <div className="bg-[#EF5023] text-white px-6 py-3 rounded-lg font-semibold">
                    98% Satisfaction
                  </div>
                  <div className="bg-[#023153] text-white px-6 py-3 rounded-lg font-semibold">
                    5 Years Expertise
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-[#EF5023] rounded-full opacity-20 absolute -top-6 -left-6"></div>
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#023153] to-[#011f35] rounded-2xl shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4 text-[#EF5023]">🎯</div>
                      <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                      <p className="mt-2 text-gray-300">Innovative solutions for tomorrow's challenges</p>
                    </div>
                  </div>
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-[#EF5023] rounded-full opacity-20 absolute -bottom-6 -right-6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[#023153] text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="value-card text-center p-6 bg-gradient-to-b from-[#023153] to-[#011f35] rounded-xl text-white">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p>We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="value-card text-center p-6 bg-gradient-to-b from-[#023153] to-[#011f35] rounded-xl text-white">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3">Integrity</h3>
                <p>We build trust through transparent communication and ethical business practices.</p>
              </div>
              <div className="value-card text-center p-6 bg-gradient-to-b from-[#023153] to-[#011f35] rounded-xl text-white">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p>We strive for perfection in every project, delivering exceptional results consistently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;