'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BlogPostPage = () => {
  const postRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postRef.current) {
      // Animate post content
      gsap.fromTo(
        postRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );

      // Animate back to blog link
      gsap.fromTo(
        '.back-link',
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.back-link',
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate post header
      gsap.fromTo(
        '.post-header',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.post-header',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate featured image
      gsap.fromTo(
        '.featured-image',
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.featured-image',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate post content elements
      gsap.fromTo(
        '.post-content > *',
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.post-content',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate author box
      gsap.fromTo(
        '.author-box',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.author-box',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div ref={postRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <a 
            href="/blog" 
            className="back-link inline-flex items-center text-[#0A2342] hover:text-[#FF7B00] font-semibold mb-8 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </a>

          {/* Post Header */}
          <header className="post-header mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#0A2342] text-white text-sm font-semibold rounded-full">
                Web Development
              </span>
              <span className="text-gray-500">May 15, 2025</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6">
              The Future of Web Development in 2025
            </h1>
            <p className="text-xl text-gray-600">
              Exploring the latest trends and technologies that will shape the web development landscape in the coming year.
            </p>
          </header>

          {/* Featured Image */}
          <div className="featured-image mb-12 rounded-2xl overflow-hidden shadow-xl">
            <div className="h-96 bg-gradient-to-r from-[#0A2342] to-[#1a3a5f] w-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-white">Web Development Trends</h3>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-content prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              The web development landscape is constantly evolving, with new technologies and frameworks emerging regularly. 
              As we approach 2025, several key trends are shaping the future of how we build and interact with websites and web applications.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-12">1. Server-Side Rendering Evolution</h2>
            <p className="text-gray-700 mb-6">
              Server-side rendering (SSR) has gained significant traction with frameworks like Next.js and Nuxt.js. 
              In 2025, we're seeing even more sophisticated SSR implementations that combine the best of both server and client-side rendering.
            </p>

            <blockquote className="border-l-4 border-[#FF7B00] pl-6 py-2 my-8 italic text-gray-700">
              "The future of web development lies in the seamless integration of server and client capabilities, 
              providing optimal performance and user experience."
            </blockquote>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-12">2. AI-Powered Development Tools</h2>
            <p className="text-gray-700 mb-6">
              Artificial intelligence is revolutionizing how developers write code. From intelligent code completion 
              to automated bug detection, AI tools are becoming indispensable in the development workflow.
            </p>

            <div className="bg-gray-100 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-[#0A2342] mb-4">Key Benefits:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Faster development cycles</li>
                <li>Reduced error rates</li>
                <li>Enhanced code quality</li>
                <li>Improved developer productivity</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-12">3. Progressive Web Apps (PWAs) Maturity</h2>
            <p className="text-gray-700 mb-6">
              PWAs continue to bridge the gap between web and native applications. With improved browser support 
              and enhanced capabilities, PWAs are becoming the preferred choice for many businesses.
            </p>

            <h2 className="text-3xl font-bold text-[#0A2342] mb-6 mt-12">Conclusion</h2>
            <p className="text-gray-700 mb-6">
              As we move into 2025, web development continues to evolve at a rapid pace. By staying informed about 
              these trends and adopting the right technologies, developers can create more efficient, user-friendly, 
              and powerful web experiences.
            </p>
          </div>

          {/* Author Box */}
          <div className="author-box mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0A2342] to-[#1a3a5f] flex items-center justify-center text-white text-2xl mr-4">
                AJ
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2342]">Alex Johnson</h3>
                <p className="text-gray-600">Senior Developer & Tech Lead at Digital Initiate</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Alex has over 10 years of experience in web development and is passionate about exploring new technologies 
              and sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;