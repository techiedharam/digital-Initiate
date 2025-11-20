'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/src/components/ui/Button';
import { FaRocket, FaChartLine, FaCode } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && buttonRef.current && imageRef.current) {
      // Initial animations
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        buttonRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.6 }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 0.4 }
      );

      // Continuous floating animation for decorative elements
      const floatingElements = imageRef.current.querySelectorAll('.floating-icon');
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3
        });
      });
    }
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-[#023153] via-[#024060] to-[#023153] text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#EF5023]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#EF5023]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef} className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#EF5023]/20 rounded-full border border-[#EF5023]/30 backdrop-blur-sm">
              <span className="text-[#EF5023] font-semibold">🚀 Welcome to Digital Initiate</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EF5023] to-[#ff8055]">
                Digital Future
              </span>
              <span className="block">Simplified.</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Transform your business with cutting-edge software solutions and data-driven digital marketing strategies that deliver real results.
            </p>

            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" href="/services">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-[#023153]">
                Get Started Free
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#EF5023]">500+</div>
                <div className="text-sm text-gray-400">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#EF5023]">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#EF5023]">50+</div>
                <div className="text-sm text-gray-400">Team Experts</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EF5023]/20 to-[#023153]/20 backdrop-blur-sm border-2 border-white/10"></div>
              
              {/* Floating Icons */}
              <div className="floating-icon absolute top-10 left-10 w-16 h-16 bg-gradient-to-br from-[#EF5023] to-[#d64420] rounded-2xl flex items-center justify-center shadow-2xl">
                <FaCode className="text-2xl text-white" />
              </div>
              
              <div className="floating-icon absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-[#023153] to-[#011f35] rounded-2xl flex items-center justify-center shadow-2xl">
                <FaChartLine className="text-2xl text-white" />
              </div>
              
              <div className="floating-icon absolute bottom-20 left-16 w-16 h-16 bg-gradient-to-br from-[#3DDC97] to-[#2bc787] rounded-2xl flex items-center justify-center shadow-2xl">
                <FaRocket className="text-2xl text-white" />
              </div>

              {/* Center Content with Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl">
                  <div className="mb-4 flex justify-center">
                    <Image 
                      src="/assets/logo.png" 
                      alt="Digital Initiate Logo" 
                      width={100} 
                      height={100}
                      className="w-24 h-24 object-cover rounded-full shadow-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Digital Excellence</h3>
                  <p className="text-gray-300">Innovation Meets Results</p>
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#EF5023]/30 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full border-2 border-[#023153]/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#FAFAF9" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;