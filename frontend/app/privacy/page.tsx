'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicyPage = () => {
  const privacyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (privacyRef.current) {
      // Animate section title
      gsap.fromTo(
        privacyRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div ref={privacyRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Privacy Policy</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-[#FAFAF9] rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Digital Initiate, we respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Register for our internship programs or project assistance services</li>
                <li>Express interest in our services or contact us</li>
                <li>Participate in surveys, contests, or promotions</li>
                <li>Provide feedback or testimonials</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners</li>
                <li>Process transactions and manage your orders</li>
                <li>Send you updates, newsletters, and marketing communications</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>To prevent or investigate possible wrongdoing in connection with our services</li>
                <li>To protect the personal safety of users of our services or the public</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational security measures to protect the security 
                of your personal information. However, please note that no method of transmission over the 
                Internet or method of electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to track activity on our services and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default PrivacyPolicyPage;