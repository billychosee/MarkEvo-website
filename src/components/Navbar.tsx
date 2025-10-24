'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/hosting', label: 'Hosting' },
    { href: '/media', label: 'Media' },
    { href: '/about-us', label: 'About Us' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50'
        : 'bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-2">
                <Image
                  src="/MarkEvo-logo.png"
                  alt="MarkEvo Logo"
                  width={120}
                  height={120}
                  className="transform group-hover:rotate-12 transition-transform duration-300"
                />
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 ">
                  MarkEvo
                </span> */}
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-[#EE6C29] font-medium transition-all duration-300 group rounded-lg hover:bg-[#EE6C29]/10"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-gradient-to-l from-[#EE6C29] to-[#7AA6B3] transition-all duration-300 group-hover:w-1/2 group-hover:right-1/4"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-[#7AA6B3] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-[#688E99]">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#EE6C29] focus:outline-none group"
            >
              <div className="relative">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-gray-700 hover:text-[#EE6C29] hover:bg-[#EE6C29]/10 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2 ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/50">
                <button className="w-full bg-[#7AA6B3] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-[#688E99]">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;