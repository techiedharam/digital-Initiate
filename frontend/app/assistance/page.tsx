'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectAssistanceFeatures } from '@/src/lib/constants';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectAssistancePage = () => {
  const assistanceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (assistanceRef.current) {
      // Animate section title
      gsap.fromTo(
        assistanceRef.current.children[0],
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

      // Animate the main CTA button
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
    <div className="min-h-screen bg-white">
      <div ref={assistanceRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Project Assistance Program</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get complete support for your academic or professional projects with our expert guidance
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#023153] to-[#011f35] rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete Project Support for Just ₹799</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Our comprehensive project assistance program provides end-to-end support from concept to completion. 
                  Whether you're working on an academic project, internship requirement, or personal development, 
                  our experts are here to guide you every step of the way.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#EF5023] text-white px-6 py-3 rounded-lg font-semibold">
                    1:1 Mentor Support
                  </div>
                  <div className="bg-[#3DDC97] text-[#023153] px-6 py-3 rounded-lg font-semibold">
                    Unlimited Doubt Clearing
                  </div>
                  <div className="bg-[#EF5023] text-white px-6 py-3 rounded-lg font-semibold">
                    Until Completion
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-6xl font-bold text-[#EF5023] mb-2">₹799</div>
                  <div className="text-2xl font-bold mb-4">One Time Fee</div>
                  <div className="text-gray-300">Complete Project Assistance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#023153] mb-4">What's Included in Our Assistance</h2>
              <div className="w-20 h-1 bg-[#EF5023] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectAssistanceFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-card bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#EF5023] transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#023153] mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FAFAF9] rounded-2xl shadow-xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#023153] mb-6">Ready to Get Started?</h2>
              <p className="text-gray-700 text-lg mb-8">
                Join hundreds of students who have successfully completed their projects with our assistance. 
                Get expert guidance and support for just ₹799.
              </p>
              <a 
                href="https://forms.gle/Wh1zznmfEJWZ3BL36" 
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block px-8 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg transition duration-300 text-lg"
              >
                Apply for Project Assistance
              </a>
              <div className="mt-6 text-gray-600">
                <p>Have questions? Contact us at contact@digitalinitiate.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAssistancePage;