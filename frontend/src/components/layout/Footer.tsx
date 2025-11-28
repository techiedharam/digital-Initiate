'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTelegram, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { socialLinks, navLinks, contactInfo } from '@/src/lib/constants';
import type { SocialLink, NavLink } from '@/src/types';
import { useAppSelector } from '@/src/store/hooks';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (footerRef.current) {
      // Animate footer content
      gsap.fromTo(
        footerRef.current.children,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: 'footer',
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for social icons
      const socialIcons = document.querySelectorAll('.social-icon');
      socialIcons.forEach(icon => {
        const tl = gsap.timeline({ paused: true });
        tl.to(icon, {
          scale: 1.2,
          color: '#EF5023',
          duration: 0.3,
          ease: "power2.out"
        });

        icon.addEventListener('mouseenter', () => tl.play());
        icon.addEventListener('mouseleave', () => tl.reverse());
      });

      // Hover animations for footer links
      const footerLinks = document.querySelectorAll('.footer-link');
      footerLinks.forEach(link => {
        const tl = gsap.timeline({ paused: true });
        tl.to(link, {
          color: '#EF5023',
          x: 5,
          duration: 0.3,
          ease: "power2.out"
        });

        link.addEventListener('mouseenter', () => tl.play());
        link.addEventListener('mouseleave', () => tl.reverse());
      });
    }
  }, []);

  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Telegram: FaTelegram,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
  };

  const mainNavLinks = navLinks.filter(link => 
    ['Home', 'About', 'Services', 'Internships', 'Blog', 'Contact'].includes(link.name)
  );

  return (
    <footer ref={footerRef} className={`transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-gray-200' 
        : 'bg-gradient-to-b from-[#023153] to-[#011f35] text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full p-1 shadow-lg">
                <Image 
                  src="/assets/logo.png" 
                  alt="Digital Initiate Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}>
                Digital<span className={theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'}>Initiate</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's Leading Internship & Development Assistance Platform. Gain Real Experience • Build Real Projects • Get Hired Faster.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social: SocialLink) => {
                const Icon = socialIcons[social.name as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#EF5023] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${
              theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
            }`}>Quick Links</h3>
            <ul className="space-y-3">
              {mainNavLinks.map((link: NavLink) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`footer-link transition-all duration-300 flex items-center ${
                      theme === 'dark' 
                        ? 'text-gray-400 hover:text-[#FF6B35]' 
                        : 'text-gray-300 hover:text-[#EF5023]'
                    }`}
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${
              theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
            }`}>Our Services</h3>
            <ul className="space-y-3">
              <li className="footer-link transition-all duration-300 cursor-pointer">Web Development</li>
              <li className="footer-link transition-all duration-300 cursor-pointer">App Development</li>
              <li className="footer-link transition-all duration-300 cursor-pointer">Custom Software</li>
              <li className="footer-link transition-all duration-300 cursor-pointer">Internship Programs</li>
              <li className="footer-link transition-all duration-300 cursor-pointer">Project Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 ${
              theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
            }`}>Contact Us</h3>
            <ul className={`space-y-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-300'
            }`}>
              <li className="flex items-start">
                <FaEnvelope className={`mt-1 mr-3 flex-shrink-0 ${
                  theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
                }`} />
                <div>
                  <div className="mb-1">{contactInfo.emails.contact}</div>
                  <div>{contactInfo.emails.career}</div>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className={`mt-1 mr-3 flex-shrink-0 ${
                  theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
                }`} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Digital Initiate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className={`text-sm transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-500 hover:text-[#FF6B35]' 
                  : 'text-gray-400 hover:text-[#EF5023]'
              }`}>
                Privacy Policy
              </Link>
              <Link href="/refund" className={`text-sm transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-500 hover:text-[#FF6B35]' 
                  : 'text-gray-400 hover:text-[#EF5023]'
              }`}>
                Refund Policy
              </Link>
              <Link href="/terms" className={`text-sm transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'text-gray-500 hover:text-[#FF6B35]' 
                  : 'text-gray-400 hover:text-[#EF5023]'
              }`}>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className={`h-1 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-[#FF6B35] via-[#3B82F6] to-[#FF6B35]' 
          : 'bg-gradient-to-r from-[#EF5023] via-[#023153] to-[#EF5023]'
      }`}></div>
    </footer>
  );
};

export default Footer;