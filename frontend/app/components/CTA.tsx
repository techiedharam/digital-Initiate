'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      // Animate section content
      gsap.fromTo(
        ctaRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the CTA button
      const ctaButton = document.querySelector('.cta-button');
      if (ctaButton) {
        const tl = gsap.timeline({ paused: true });
        tl.to(ctaButton, {
          scale: 1.05,
          backgroundColor: '#d64420',
          duration: 0.3,
          ease: "power2.out"
        });

        ctaButton.addEventListener('mouseenter', () => tl.play());
        ctaButton.addEventListener('mouseleave', () => tl.reverse());
      }
    }
  }, []);

  return (
    <section ref={ctaRef} className="py-16 bg-gradient-to-r from-[#023153] to-[#011f35] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Let's discuss how our software solutions and marketing services can help your business grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="cta-button inline-block px-8 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Get Started Today
          </a>
          <a 
            href="/services" 
            className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition duration-300"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;