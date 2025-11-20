'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && buttonRef.current && imageRef.current) {
      // Initial animations
      gsap.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(
        buttonRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.4 }
      );

      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)", delay: 0.6 }
      );

      // Hover animations for buttons
      const buttons = buttonRef.current.querySelectorAll('a');
      buttons.forEach(button => {
        const tl = gsap.timeline({ paused: true });
        tl.to(button, {
          scale: 1.05,
          backgroundColor: button.classList.contains('bg-[#0052CC]') ? '#003E99' : '#F4F6F8',
          color: button.classList.contains('bg-[#0052CC]') ? 'white' : '#0A1A2F',
          duration: 0.3,
          ease: "power2.out"
        });

        button.addEventListener('mouseenter', () => tl.play());
        button.addEventListener('mouseleave', () => tl.reverse());
      });

      // Continuous floating animation for image elements
      gsap.to(imageRef.current.children[0], {
        x: 10,
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(imageRef.current.children[2], {
        x: -10,
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white text-[#0A1A2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block">Building Your Digital Future:</span>
              <span className="block text-[#0052CC]">Software & Marketing</span>
              <span className="block">Simplified.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive software solutions and digital marketing services to elevate your business to new heights.
            </p>
            <div ref={buttonRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/services"
                className="px-8 py-4 bg-[#0052CC] text-white font-semibold rounded-lg shadow-lg transition duration-300 text-center hover:shadow-xl"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-[#0A1A2F] text-[#0A1A2F] font-semibold rounded-lg transition duration-300 text-center hover:bg-[#0A1A2F] hover:text-white"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div ref={imageRef} className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#3DDC97] rounded-full opacity-20 absolute -top-6 -left-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#0A1A2F] border-4 border-[#0052CC] rounded-lg shadow-2xl relative z-10 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-5xl mb-4 text-white">🚀</div>
                  <h3 className="text-xl font-bold text-white">Digital Innovation</h3>
                  <p className="mt-2 text-gray-200">Software & Marketing Excellence</p>
                </div>
              </div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#3DDC97] rounded-full opacity-20 absolute -bottom-6 -right-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;