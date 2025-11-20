'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingPage = () => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingRef.current) {
      // Animate the loading spinner
      const spinner = document.querySelector('.spinner');
      if (spinner) {
        gsap.to(spinner, {
          rotation: 360,
          duration: 1,
          repeat: -1,
          ease: "linear"
        });
      }

      // Animate the text
      gsap.fromTo(
        '.loading-text',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={loadingRef} className="fixed inset-0 bg-[#0A1A2F] flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="spinner w-16 h-16 border-4 border-[#3DDC97] border-t-transparent rounded-full mb-8"></div>
        <div className="loading-text text-white text-2xl font-semibold">Loading Digital Initiate</div>
        <div className="loading-text mt-4 text-gray-300">Preparing your experience...</div>
      </div>
    </div>
  );
};

export default LoadingPage;