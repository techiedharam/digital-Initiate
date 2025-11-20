'use client';

import { useState, useEffect } from 'react';
import { FaTelegram, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const TopNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px, hide top navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up, show top navbar
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`bg-[#0A1A2F] text-white py-2 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-[#3DDC97]" />
              <span className="text-sm">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-[#3DDC97]" />
              <span className="text-sm">info@digitalinitiate.com</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://t.me/digitalinitiate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3DDC97] transition-colors duration-300"
              aria-label="Telegram"
            >
              <FaTelegram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/digitalinitiate/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3DDC97] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/digital-initiate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#3DDC97] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;