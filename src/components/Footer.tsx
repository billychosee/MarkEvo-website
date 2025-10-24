// Footer.jsx

"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Define links based on the image's layout
  const links = {
    quick: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Services", href: "/services" },
      { name: "Hosting", href: "/hosting" },
      { name: "Media", href: "/media" },
    ],
    social: [
      { name: "Facebook", href: "https://facebook.com/markevo" },
      { name: "Twitter", href: "https://twitter.com/markevo" },
      { name: "Linkedin", href: "https://linkedin.com/company/markevo" },
      { name: "Instagram", href: "https://instagram.com/markevo" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Set background to white/light gray as in the image
    <footer className="bg-white text-gray-800 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center lg:text-left">
          {/* Column 1: Logo and Address */}
          <div className="flex flex-col items-center lg:items-start sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="/MarkEvo-logo.png"
                alt="MarkEvo Logo"
                width={150}
                height={37}
                className="mb-4 sm:mb-6 cursor-pointer"
              />
            </Link>
            <p className="text-lg sm:text-xl font-normal text-gray-800 leading-relaxed">
              1234 Market St, Suite 500,
              <br />
              Harare, ZW
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+263717479076"
                className="text-sm sm:text-base text-black hover:text-black hover:underline underline-offset-4 decoration-orange-500 transition duration-300 block"
              >
                +263 717 479 076
              </a>
              <a
                href="mailto:markevodigital@gmail.com"
                className="text-sm sm:text-base text-black hover:text-black hover:underline underline-offset-4 decoration-orange-500 transition duration-300 block"
              >
                markevodigital@gmail.com
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Follow Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- */}

        {/* Copyright and Scroll-to-Top placement (Bottom Section) */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 sm:mt-16 pt-6 gap-4 sm:gap-0">
          {/* Copyright Text */}
          <p className="text-sm text-gray-500 text-center sm:text-left">
            &copy; 2025 MarkEvo digital. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 w-12 h-12 rounded-full bg-slate-400 hover:bg-slate-500 text-white shadow-lg transition duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
