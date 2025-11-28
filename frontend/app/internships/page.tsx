'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { internshipRoles, internshipBenefits } from '@/src/lib/constants';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const InternshipsPage = () => {
  const internshipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (internshipsRef.current) {
      // Animate section title
      gsap.fromTo(
        internshipsRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate internship cards with stagger
      gsap.fromTo(
        '.internship-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.internship-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for internship cards
      const internshipCards = document.querySelectorAll('.internship-card');
      internshipCards.forEach(card => {
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
      <div ref={internshipsRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Internship Opportunities</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Gain real-world experience in cutting-edge technologies with our comprehensive internship program
            </p>
          </div>

          {/* Internship Domains */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#023153] mb-4">Available Domains</h2>
              <div className="w-20 h-1 bg-[#EF5023] mx-auto"></div>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                Choose from a variety of technology domains to kickstart your career
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {internshipRoles.map((internship, index) => (
                <div 
                  key={index} 
                  className="internship-card bg-gradient-to-br from-[#023153] to-[#011f35] rounded-xl shadow-xl overflow-hidden transform transition-all duration-300"
                >
                  <div className="p-8 text-center">
                    <div className="text-5xl mb-6 text-white">{internship.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-6">{internship.title}</h3>
                    <a 
                      href="https://forms.gle/Wh1zznmfEJWZ3BL36" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-[#EF5023] text-white font-semibold rounded-lg hover:bg-[#d64420] transition duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#023153] mb-4">Internship Benefits</h2>
              <div className="w-20 h-1 bg-[#EF5023] mx-auto"></div>
              <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                What you'll gain from our comprehensive internship program
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internshipBenefits.map((benefit) => (
                <div 
                  key={benefit.id} 
                  className="bg-gradient-to-br from-[#023153] to-[#011f35] rounded-2xl p-6 text-center text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Details */}
          <div className="bg-[#FAFAF9] rounded-2xl shadow-xl p-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#023153] text-center mb-8">Program Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#023153] mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Real-world project development with industry-standard tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Version control and collaborative development practices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Agile methodologies and project management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Debugging and problem-solving techniques</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#023153] mb-4">Program Structure</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">3-6 months duration with flexible timing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Weekly mentor sessions and progress reviews</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Access to exclusive learning resources and tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#EF5023] flex items-center justify-center mr-3 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700">Certificate and experience letter upon completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Ready to kickstart your career? Apply now for our internship program!
            </p>
            <a 
              href="https://forms.gle/Wh1zznmfEJWZ3BL36" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block px-8 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Apply for Internship
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;