'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactInfo } from '@/src/lib/constants';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      // Animate section title
      gsap.fromTo(
        contactRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate contact sections
      gsap.fromTo(
        '.contact-section',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.contact-section',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate form elements
      gsap.fromTo(
        '.form-element',
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.form-element',
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animation for submit button
      const submitButton = document.querySelector('.submit-button');
      if (submitButton) {
        const tl = gsap.timeline({ paused: true });
        tl.to(submitButton, {
          scale: 1.05,
          backgroundColor: '#d64420',
          duration: 0.3,
          ease: "power2.out"
        });

        submitButton.addEventListener('mouseenter', () => tl.play());
        submitButton.addEventListener('mouseleave', () => tl.reverse());
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      <div ref={contactRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Get In Touch</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="contact-section md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-3xl font-bold text-[#023153] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#EF5023] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#023153]">Contact Email</h3>
                      <p className="text-gray-700">{contactInfo.emails.contact}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#EF5023] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#023153]">Career Email</h3>
                      <p className="text-gray-700">{contactInfo.emails.career}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#EF5023] p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-[#023153]">Office</h3>
                      <p className="text-gray-700">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-[#023153] mb-4">Business Hours</h3>
                  <p className="text-gray-700">{contactInfo.businessHours.weekdays}</p>
                  <p className="text-gray-700">{contactInfo.businessHours.saturday}</p>
                  <p className="text-gray-700">{contactInfo.businessHours.sunday}</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-section md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-[#023153] mb-6">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="form-element">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF5023] focus:border-transparent transition duration-300" 
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="form-element">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF5023] focus:border-transparent transition duration-300" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="form-element">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF5023] focus:border-transparent transition duration-300" 
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div className="form-element">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EF5023] focus:border-transparent transition duration-300" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-button w-full px-6 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;