'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import TopNavbar from './components/TopNavbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const NotFoundPage = () => {
  const notFoundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notFoundRef.current) {
      // Animate page content
      gsap.fromTo(
        notFoundRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      // Animate the 404 number
      const numberElement = document.querySelector('.number-404');
      if (numberElement) {
        gsap.fromTo(
          numberElement,
          { scale: 0.5, opacity: 0, rotation: -30 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.3)" }
        );
      }

      // Animate the CTA button
      const ctaButton = document.querySelector('.cta-button');
      if (ctaButton) {
        const tl = gsap.timeline({ paused: true });
        tl.to(ctaButton, {
          scale: 1.05,
          backgroundColor: '#003E99',
          duration: 0.3,
          ease: "power2.out"
        });

        ctaButton.addEventListener('mouseenter', () => tl.play());
        ctaButton.addEventListener('mouseleave', () => tl.reverse());
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1A2F] to-[#1a3a5f]">
      <TopNavbar />
      <Navbar />
      
      <div ref={notFoundRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="number-404 text-9xl font-bold text-[#3DDC97] mb-6">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="cta-button inline-block px-8 py-4 bg-[#0052CC] text-white font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Go Home
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;