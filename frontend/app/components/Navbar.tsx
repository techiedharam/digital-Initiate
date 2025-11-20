'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Internships', path: '/internships' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#023153] shadow-2xl backdrop-blur-md' 
          : 'bg-[#023153]/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
              >
                <Image 
                  src="/assets/logo.png" 
                  alt="Digital Initiate Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span className="text-white text-xl font-bold tracking-tight">
                  Digital<span className="text-[#EF5023]">Initiate</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative text-white font-medium transition-all duration-300 hover:text-[#EF5023] group ${
                    pathname === link.path ? 'text-[#EF5023]' : ''
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5023] transition-all duration-300 group-hover:w-full ${
                    pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#EF5023] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#d64420] hover:scale-105 hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#EF5023] hover:bg-[#023153]/50 focus:outline-none transition-all duration-300"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FiX className="block h-7 w-7 transition-transform duration-300 rotate-90" />
                ) : (
                  <FiMenu className="block h-7 w-7 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Off-Canvas Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-[#023153] shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            {/* Logo in Mobile Menu */}
            <div className="flex items-center justify-center mb-8 pb-6 border-b border-white/10">
              <Image 
                src="/assets/logo.png" 
                alt="Digital Initiate Logo" 
                width={50} 
                height={50}
                className="w-14 h-14 object-cover rounded-full"
              />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-[#EF5023] hover:text-white ${
                    pathname === link.path ? 'bg-[#EF5023] text-white' : ''
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block w-full px-6 py-4 bg-[#EF5023] text-white text-center font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#d64420] hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;