'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      // Animate section title
      gsap.fromTo(
        testimonialsRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate testimonial cards with stagger
      gsap.fromTo(
        '.testimonial-card',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.testimonial-card',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Digital Initiate transformed our online presence completely. Their team delivered beyond our expectations and helped us increase our customer base by 150% in just six months.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The digital marketing strategies implemented by Digital Initiate have significantly improved our conversion rates. Their attention to detail and innovative approach is impressive.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupHub",
      content: "Working with Digital Initiate was a game-changer for our business. Their software development expertise helped us create a product that our users love.",
      avatar: "ER"
    }
  ];

  return (
    <section ref={testimonialsRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023153] mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-[#FAFAF9] p-8 rounded-lg shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#023153] flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#023153]">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;