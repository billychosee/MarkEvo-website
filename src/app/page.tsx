"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  MdDesignServices,
  MdCode,
  MdSearch,
  MdShare,
  MdBarChart,
  MdPhoneAndroid,
} from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Data for the new "Our work" section
const projects = [
  {
    imageSrc: "/social-media.jpg", // Reusing the hero image as the first project image
    description:
      '"undertook a project where I redesigned the ZETDC website into a modern static and clean design. I enjoyed the UI challenge..."',
    services: "UX/UI design, Web development and hosting.",
  },
  {
    imageSrc: "/social-media.jpg", // Placeholder for the second image
    description:
      '"Completed a high-impact digital marketing campaign for a major retail client, resulting in a 250% increase in online sales."',
    services: "Digital Strategy, SEO, Social Media Marketing.",
  },
  {
    imageSrc: "/social-media.jpg", // Example of a third project, use a unique image
    description:
      '"Developed a custom mobile application for a startup, focusing on performance and an intuitive user experience on both iOS and Android."',
    services: "App Design, Mobile Development, Backend API.",
  },
];

// Helper component for the Hero Section
const HeroSection = () => (
  <section className="relative h-screen flex items-center bg-white pt-20 pb-20">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
      {/* Right Side: Image (first on mobile) */}
      <div className="relative z-20 h-[500px] lg:h-auto order-1 lg:order-2">
        <Image
          src="/right-home-hero-banner.png"
          alt="Hero Banner"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Left Side: Text Content and Form */}
      <div className="text-left order-2 lg:order-1">
        <h1 className="text-4xl sm:text-5xl lg:text-4xl font-semibold text-[#1F2937] mb-6 leading-tight">
          Light Up Your
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-[#EE6C29] rotate-[-4deg]"></span>
            <span className="relative text-white">Brand</span>
          </span>
          <br />
          with <span>MarkEvo</span> digital
          <span className="relative top-[-0.1em] inline-block h-2 w-2 mx-1 bg-[#7AA6B3] rounded-full"></span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
          We specialize in creating innovative marketing strategies that drive
          results. Let us help you shine brighter in the digital landscape.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow max-w-xs sm:max-w-none px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#7AA6B3] focus:border-[#7AA6B3] transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
          <button className="bg-[#7AA6B3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#688E99] transition-colors shadow-lg max-w-[150px]">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>

    {/* Services Footer-like strip (at the very bottom of the section, as in the image) */}
    <div className="absolute bottom-0 left-0 w-full py-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
        <div className="flex items-center gap-2">
          <MdDesignServices className="w-4 h-4 text-black" />
          <span className="text-gray-500">Web Design</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCode className="w-4 h-4 text-orange-500" />
          <span className="text-gray-500">Web Development</span>
        </div>
        <div className="flex items-center gap-2">
          <MdSearch className="w-4 h-4 text-black" />
          <span className="text-gray-500">SEO</span>
        </div>
        <div className="flex items-center gap-2">
          <MdShare className="w-4 h-4 text-orange-500" />
          <span className="text-gray-500">Social Media Marketing</span>
        </div>
        <div className="flex items-center gap-2">
          <MdBarChart className="w-4 h-4 text-black" />
          <span className="text-gray-500">Graphics Design</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhoneAndroid className="w-4 h-4 text-orange-500" />
          <span className="text-gray-500">App Design</span>
        </div>
      </div>
    </div>
  </section>
);

// The main component remains the same for structure, but OurWorkSection is refined
export default function Home() {
  // Since scrolling is removed, we only need state for the current active slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = projects.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const OurWorkSection = () => (
    // Increased bottom padding on the main section for more flexible space below (pb-32).
    <section className="relative py-24 pb-32 bg-white">
      {/* Removed overflow-hidden from section to test visibility */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header and Navigation --- */}
        <div className="relative flex justify-center items-start mb-16">
          {/* Paper plane and dashed line */}
          <div className="absolute top-36 left-64 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <Image
              src="/paper-plane-arrows.png" // Assumed path for the decorative image
              alt="Decorative paper plane with dashed line"
              width={150}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Centered Header Text */}
          <div className="text-center w-full max-w-lg">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-medium text-gray-500 mb-2 w-full text-left">
                PORTFOLIO
              </h3>
              <h2 className="text-5xl font-extrabold text-[#1F2937] w-full text-left">
                Our work<span className="text-[#EE6C29]">.</span>
              </h2>
            </div>
          </div>

          {/* Arrow Buttons for slide navigation, positioned on the right */}
          <div className="absolute top-0 right-0 flex items-center space-x-3 mt-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                currentSlide > 0
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Previous project"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                currentSlide < totalSlides - 1
                  ? "border-[#7AA6B3] bg-[#7AA6B3] text-white hover:bg-[#688E99]"
                  : "border-gray-100 bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Next project"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- Projects Carousel / Grid --- */}
        <div className="relative w-full">
          {/* Inner carousel container for sliding */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                // Added p-4 for space in between cards.
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-8"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {/* Project Card Container */}
                <div className="relative w-full">
                  {/* Image of the project - z-index 20 to be on top, no border/shadow on image */}
                  <div className="relative w-full h-64 sm:h-80 overflow-hidden z-20">
                    <Image
                      src={project.imageSrc}
                      alt={`Project ${index + 1} screenshot`}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                  </div>

                  {/* White Text Card Content */}
                  <div className="relative bg-white p-6 shadow-2xl -mt-4 z-10 border-1 border-gray-500">
                    <p className="text-gray-700 italic mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm font-semibold text-[#7AA6B3] tracking-wider">
                      {project.services}
                    </p>
                  </div>

                  {/* Orange Background Card */}

                  <div className="absolute inset-0 top-28 z-0">
                    <div className="absolute inset-0 bg-[#EE6C29] rotate-[-8deg] transform translate-x-1 translate-y-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    // RESTORED overflow-x-hidden to prevent horizontal scroll from rotated elements
    <div className="min-h-screen overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* --- Hero Section (Position 1) --- */}
      <HeroSection />
      {/* ------------------------------------------------------------- */}

      {/* --- NEW OUR WORK SECTION (Position 2) --- */}
      <OurWorkSection />
      {/* ------------------------------------------------------------- */}

    </div>
  );
}
