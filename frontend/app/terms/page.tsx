'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TermsAndConditionsPage = () => {
  const termsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (termsRef.current) {
      // Animate section title
      gsap.fromTo(
        termsRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div ref={termsRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Terms and Conditions</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-[#FAFAF9] rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Welcome to Digital Initiate. These terms and conditions outline the rules and regulations for the use of 
                Digital Initiate's website and services. By accessing this website, we assume you accept these terms 
                and conditions. Do not continue to use Digital Initiate if you do not agree to all the terms stated here.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-6">
                Unless otherwise stated, Digital Initiate and/or its licensors own the intellectual property rights 
                for all material on Digital Initiate. All intellectual property rights are reserved. You may access 
                this from Digital Initiate for your own personal use subjected to restrictions set in these terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Services</h2>
              <p className="text-gray-700 mb-4">
                Digital Initiate provides the following services:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Internship programs in various technology domains</li>
                <li>Project assistance services for academic and professional projects</li>
                <li>Software development and web solutions</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information when registering for our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect the intellectual property rights of Digital Initiate and others</li>
                <li>Not attempt to interfere with the proper functioning of our website or services</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                All payments for our services are due as specified in the service agreement. You agree to:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Pay all fees and charges associated with your selected services</li>
                <li>Provide valid payment information</li>
                <li>Pay any applicable taxes or fees</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Refund Policy</h2>
              <p className="text-gray-700 mb-6">
                Our refund policy is detailed in our separate Refund Policy document. Please refer to that document 
                for complete information on eligibility and procedures for refunds.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Digital Initiate, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
                or inability to access or use the service.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your account and access to our services immediately, without prior notice, 
                for any reason whatsoever, including without limitation if you breach the terms.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. 
                If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These terms shall be governed and construed in accordance with the laws of India, without regard to 
                its conflict of law provisions. Our failure to enforce any right or provision of these terms will not 
                be considered a waiver of those rights.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms and Conditions, please contact us at:{' '}
                <a href="mailto:contact@digitalinitiate.com" className="text-[#EF5023] hover:underline">
                  contact@digitalinitiate.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;