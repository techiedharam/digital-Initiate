'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { toggleTheme } from '@/src/store/themeSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.mode);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
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
          ? theme === 'dark'
            ? 'bg-[#1E293B]/95 shadow-2xl backdrop-blur-md border-b border-gray-700'
            : 'bg-white/95 shadow-2xl backdrop-blur-md border-b border-gray-200'
          : theme === 'dark'
            ? 'bg-[#1E293B]/90 backdrop-blur-sm'
            : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105 group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-1 shadow-md group-hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                  <Image 
                    src="/assets/logo.png" 
                    alt="Digital Initiate Logo" 
                    width={40} 
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className={`hidden sm:block text-lg md:text-xl font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-[#023153]'
                }`}>
                  Digital<span className="text-[#EF5023]">Initiate</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative font-medium transition-all duration-300 group text-sm lg:text-base ${
                    pathname === link.path 
                      ? 'text-[#EF5023]' 
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-[#FF6B35]'
                        : 'text-[#023153] hover:text-[#EF5023]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5023] transition-all duration-300 group-hover:w-full ${
                    pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun className="h-4 w-4 lg:h-5 lg:w-5" /> : <FiMoon className="h-4 w-4 lg:h-5 lg:w-5" />}
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-[#d64420] hover:to-[#EF5023] text-sm lg:text-base"
              >
                Work with Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 text-gray-700'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              </button>
              
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-white hover:text-[#FF6B35] hover:bg-gray-700'
                    : 'text-[#023153] hover:text-[#EF5023] hover:bg-gray-100'
                }`}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FiX className="block h-6 w-6 md:h-7 md:w-7 transition-transform duration-300 rotate-90" />
                ) : (
                  <FiMenu className="block h-6 w-6 md:h-7 md:w-7 transition-transform duration-300" />
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
          className={`absolute top-0 right-0 w-64 h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } ${theme === 'dark' ? 'bg-[#1E293B]' : 'bg-white'}`}
        >
          <div className="flex flex-col h-full pt-16 pb-6 px-4">
            {/* Logo in Mobile Menu */}
            <div className={`flex items-center justify-center mb-6 pb-4 border-b ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div className="w-12 h-12 bg-white rounded-full p-1.5 shadow-lg">
                <Image 
                  src="/assets/logo.png" 
                  alt="Digital Initiate Logo" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className={`ml-3 text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#023153]'}`}>
                Digital<span className="text-[#EF5023]">Initiate</span>
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    pathname === link.path 
                      ? 'bg-[#EF5023] text-white shadow-lg' 
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-[#023153] hover:bg-gray-100'
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
              className="block w-full px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-[#EF5023] to-[#FF6B35] text-white text-center font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Work with Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;