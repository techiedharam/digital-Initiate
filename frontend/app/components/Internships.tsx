'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Internships = () => {
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
          backgroundColor: '#0A2342',
          duration: 0.3,
          ease: "power2.out"
        });

        ctaButton.addEventListener('mouseenter', () => tl.play());
        ctaButton.addEventListener('mouseleave', () => tl.reverse());
      }
    }
  }, []);

  const internships = [
    { title: "Web Development", icon: "💻" },
    { title: "Android App Development", icon: "📱" },
    { title: "Data Science", icon: "📊" },
    { title: "Java Programming", icon: "☕" },
    { title: "C++ Programming", icon: "🔍" },
    { title: "Python Programming", icon: "🐍" },
    { title: "Machine Learning", icon: "🤖" },
    { title: "Artificial Intelligence", icon: "🧠" },
    { title: "Graphic Design", icon: "🎨" }
  ];

  return (
    <section id="internships" ref={internshipsRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">Internship Opportunities</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Gain real-world experience in cutting-edge technologies with our internship program
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div 
              key={index} 
              className="internship-card bg-gradient-to-br from-[#0A2342] to-[#1a3a5f] rounded-xl shadow-xl overflow-hidden transform transition-all duration-300"
            >
              <div className="p-8 text-center">
                <div className="text-5xl mb-6 text-white">{internship.icon}</div>
                <h3 className="text-xl font-bold text-white mb-6">{internship.title}</h3>
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-[#FF7B00] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Ready to kickstart your career? Apply now for our internship program!
          </p>
          <a 
            href="#" 
            className="cta-button inline-block px-8 py-4 bg-[#0A2342] text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            View All Internships
          </a>
        </div>
      </div>
    </section>
  );
};

export default Internships;