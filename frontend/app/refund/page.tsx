'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RefundPolicyPage = () => {
  const refundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refundRef.current) {
      // Animate section title
      gsap.fromTo(
        refundRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div ref={refundRef} className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#023153] mb-6">Refund Policy</h1>
            <div className="w-24 h-1 bg-[#EF5023] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-[#FAFAF9] rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                At Digital Initiate, we are committed to providing quality services. Please read this refund policy 
                carefully to understand our position regarding refunds for our internship programs and project assistance services.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">General Policy</h2>
              <p className="text-gray-700 mb-6">
                Due to the nature of our digital services and the immediate access provided upon enrollment, we have a limited 
                refund policy. Once you gain access to our internship materials or project assistance services, we cannot offer 
                a refund except under the specific circumstances outlined in this policy.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Eligibility for Refunds</h2>
              <p className="text-gray-700 mb-4">
                Refunds may be considered in the following situations:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li><strong>Technical Issues:</strong> If you experience significant technical problems that prevent access to our services and we are unable to resolve them within 72 hours.</li>
                <li><strong>Service Not Delivered:</strong> If we fail to deliver the promised services within the agreed timeframe (excluding delays caused by client-side factors).</li>
                <li><strong>Duplicate Payment:</strong> If you accidentally make duplicate payments for the same service.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Non-Refundable Situations</h2>
              <p className="text-gray-700 mb-4">
                We do not offer refunds in the following situations:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Change of mind after accessing the service materials</li>
                <li>Failure to participate in the internship or utilize the project assistance services</li>
                <li>Technical issues that are resolved promptly</li>
                <li>Delay in service delivery due to information not provided by the client</li>
                <li>Requests made after the refund period has expired</li>
                <li>Violation of our terms and conditions leading to account suspension</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                To request a refund, you must:
              </p>
              <ol className="list-decimal pl-8 text-gray-700 mb-6 space-y-2">
                <li>Contact us within 7 days of purchase or service initiation</li>
                <li>Provide detailed information about the reason for your refund request</li>
                <li>Include any supporting documentation or evidence</li>
                <li>Submit your request via email to <a href="mailto:contact@digitalinitiate.com" className="text-[#EF5023] hover:underline">contact@digitalinitiate.com</a></li>
              </ol>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Refund Timeline</h2>
              <p className="text-gray-700 mb-6">
                If your refund request is approved, we will process the refund within 10-15 business days. The refund will 
                be issued to the original payment method. Processing times may vary depending on your payment provider.
              </p>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Internship Program Specifics</h2>
              <p className="text-gray-700 mb-6">
                For our internship programs (₹799 one-time fee):
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>No refunds will be issued after 7 days from enrollment</li>
                <li>No refunds for incomplete projects if adequate support was provided</li>
                <li>Refunds may be considered for technical issues preventing access to materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Project Assistance Specifics</h2>
              <p className="text-gray-700 mb-6">
                For our project assistance services:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>No refunds will be issued after work has commenced on your project</li>
                <li>Partial refunds may be considered for incomplete deliverables due to our fault</li>
                <li>Full refunds for duplicate payments or services not delivered</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our refund policy or would like to request a refund, please contact us:
              </p>
              <ul className="list-disc pl-8 text-gray-700 mb-6 space-y-2">
                <li>Email: <a href="mailto:contact@digitalinitiate.com" className="text-[#EF5023] hover:underline">contact@digitalinitiate.com</a></li>
                <li>Subject line: "Refund Request"</li>
                <li>Please include your order number and reason for refund</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#023153] mt-8 mb-4">Policy Changes</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to update or modify this refund policy at any time. Any changes will be posted on 
                this page and will become effective immediately upon posting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;