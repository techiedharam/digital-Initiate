'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (blogRef.current) {
      // Initial animation for blog header
      gsap.fromTo(
        blogRef.current.children[0],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Staggered animation for blog posts
      gsap.fromTo(
        '.blog-post',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.blog-post',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for blog cards
      const blogCards = document.querySelectorAll('.blog-card');
      blogCards.forEach(card => {
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          duration: 0.3,
          ease: "power2.out"
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      // Animate featured post
      gsap.fromTo(
        '.featured-post',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.featured-post',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate newsletter section
      gsap.fromTo(
        '.newsletter-section',
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.newsletter-section',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Modern Frameworks",
      excerpt: "Learn how to architect and build scalable web applications using the latest technologies and best practices.",
      date: "May 15, 2023",
      author: "Jane Smith",
      category: "Web Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering the MERN Stack: A Complete Guide",
      excerpt: "A comprehensive guide to becoming proficient in MongoDB, Express.js, React, and Node.js development.",
      date: "April 28, 2023",
      author: "John Doe",
      category: "Full Stack Development",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Career Paths in Technology: Choosing Your Specialization",
      excerpt: "Exploring different technology career paths and how to choose the right specialization for your goals.",
      date: "April 12, 2023",
      author: "Alice Johnson",
      category: "Career Guidance",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div ref={blogRef} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6">
              Digital Initiate Blog
            </h1>
            <div className="w-24 h-1 bg-[#FF7B00] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on software development and digital marketing
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="featured-post bg-gradient-to-r from-[#0A2342] to-[#1a3a5f] rounded-2xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-[#FF7B00] text-white text-sm font-semibold rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    The Complete Guide to Modern Web Development Frameworks
                  </h2>
                  <p className="text-gray-300 mb-6">
                    An in-depth analysis of the most popular web development frameworks and when to use each one for optimal results.
                  </p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>May 10, 2025</span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                  <Link 
                    href="/blog/modern-web-frameworks" 
                    className="mt-6 inline-block px-6 py-3 bg-[#FF7B00] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 w-max"
                  >
                    Read Article
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-full" />
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="blog-card blog-post bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                >
                  <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-[#FF7B00]">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2342] mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link 
                        href={`/blog/post-${post.id}`} 
                        className="text-[#0A2342] font-semibold hover:text-[#FF7B00] transition duration-300"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-section bg-gradient-to-r from-[#0A2342] to-[#1a3a5f] rounded-2xl shadow-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Subscribe to our newsletter and never miss our latest articles and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7B00]"
                />
                <button className="px-6 py-3 bg-[#FF7B00] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;