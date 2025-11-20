'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

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
          color: '#3DDC97',
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
          color: '#3DDC97',
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

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/digitalinitiate',
      icon: <FaTelegram className="h-6 w-6" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/digitalinitiate/',
      icon: <FaInstagram className="h-6 w-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/digital-initiate',
      icon: <FaLinkedin className="h-6 w-6" />,
    },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Internships', path: '/internships' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer ref={footerRef} className="bg-[#0A1A2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Initiate</h3>
            <p className="text-gray-300 mb-4">
              Building Your Digital Future: Software & Marketing, Simplified.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-300 hover:text-[#3DDC97] transition duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="footer-link text-gray-300 hover:text-[#3DDC97] transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Have questions? Reach out to us:
            </p>
            <p className="text-gray-300">info@digitalinitiate.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Digital Initiate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;