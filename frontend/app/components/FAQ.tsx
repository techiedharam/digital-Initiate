'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (faqRef.current) {
      // Animate section title
      gsap.fromTo(
        faqRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Animate FAQ items with stagger
      gsap.fromTo(
        '.faq-item',
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.faq-item',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites can be completed in 2-4 weeks, while complex applications may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Next.js, Node.js, and Python. For mobile development, we work with React Native and Flutter. Our marketing team excels in SEO, social media, and content marketing."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your project continues to run smoothly. Our support includes bug fixes, updates, and performance optimization."
    },
    {
      question: "How do you ensure the security of our data?",
      answer: "We follow industry best practices for data security, including encryption, secure authentication, regular security audits, and compliance with GDPR and other relevant regulations. Your data's safety is our top priority."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We're experienced in integrating with existing development teams and can adapt to your workflows and processes. We provide regular updates and maintain clear communication throughout the project."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is transparent and depends on project scope, complexity, and timeline. We offer both fixed-price and time-and-materials models. We provide detailed quotes after understanding your requirements."
    }
  ];

  return (
    <section ref={faqRef} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#023153] mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#EF5023] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item bg-[#FAFAF9] rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-[#023153]">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-[#EF5023] transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg hover:bg-[#d64420] transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;