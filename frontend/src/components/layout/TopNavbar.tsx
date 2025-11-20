'use client';

import { useState, useEffect } from 'react';
import { FaTelegram, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks, contactInfo } from '@/src/lib/constants';
import type { SocialLink } from '@/src/types';
import { useAppSelector } from '@/src/store/hooks';

const TopNavbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const socialIcons = {
    Telegram: FaTelegram,
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
  };

  return (
    <div className={`transition-all duration-300 py-2 ${visible ? 'translate-y-0' : '-translate-y-full'} ${
      theme === 'dark' 
        ? 'bg-[#0F172A] text-gray-300 border-b border-gray-700' 
        : 'bg-[#023153] text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <FaEnvelope className={`mr-2 ${
                theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
              }`} />
              <span className="text-sm">{contactInfo.emails.contact}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className={`mr-2 ${
                theme === 'dark' ? 'text-[#FF6B35]' : 'text-[#EF5023]'
              }`} />
              <span className="text-sm">{contactInfo.emails.career}</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social: SocialLink) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors duration-300 ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:text-[#FF6B35]' 
                      : 'text-gray-300 hover:text-[#EF5023]'
                  }`}
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;