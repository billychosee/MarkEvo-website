"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MdDesignServices,
  MdCode,
  MdSearch,
  MdShare,
  MdBarChart,
  MdPhoneAndroid,
  MdArrowForward,
} from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// --- Data for Client Testimonials ---
const testimonials = [
  {
    name: "Amelia Joseph",
    title: "Chief Manager",
    quote:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    // Placeholder image path
    imageSrc: "/client-amelia.png",
    color: "bg-[#EE6C29]",
  },
  {
    name: "Jacob Joshua",
    title: "Chief Manager",
    quote:
      "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes.",
    // Placeholder image path
    imageSrc: "/client-jacob-joshua.png",
    color: "bg-white",
  },
  {
    name: "Jacob Joe",
    title: "Chief Manager",
    quote:
      "Embrace really nails it! Creative and approachable style. They're what you want—'artistry meets strategy,' and they achieved!",
    // Placeholder image path
    imageSrc: "/client-jacob-joe.png",
    color: "bg-white",
  },
  // Add more testimonials if needed for a longer carousel
];

// Data for the new "Our work" section
const projects = [
  {
    imageSrc: "/social-media.jpg",
    description:
      '"undertook a project where I redesigned the ZETDC website into a modern static and clean design. I enjoyed the UI challenge..."',
    services: "UX/UI design, Web development and hosting.",
  },
  {
    imageSrc: "/social-media.jpg",
    description:
      '"Completed a high-impact digital marketing campaign for a major retail client, resulting in a 250% increase in online sales."',
    services: "Digital Strategy, SEO, Social Media Marketing.",
  },
  {
    imageSrc: "/social-media.jpg",
    description:
      '"Developed a custom mobile application for a startup, focusing on performance and an intuitive user experience on both iOS and Android."',
    services: "App Design, Mobile Development, Backend API.",
  },
  {
    imageSrc: "/social-media.jpg",
    description:
      '"Executed a successful brand refresh and launched a new e-commerce platform, leading to a 40% rise in conversion rate."',
    services: "Branding, E-commerce Development, CRO.",
  },
];

// Data for the new "Our Services" section
const serviceItems = [
  {
    title: "Design Services",
    description:
      "We create stunning visual designs that capture your brand's essence. From logos to user interfaces, our design services ensure your brand stands out.",
  },
  {
    title: "Development Services",
    description:
      "Our expert developers build robust, scalable web and mobile applications using cutting-edge technologies to bring your ideas to life.",
  },
  {
    title: "Digital Marketing Services",
    description:
      "Boost your online presence with our comprehensive digital marketing strategies, including SEO, social media, and targeted advertising campaigns.",
  },
];

// Helper component for the Hero Section (omitted for brevity, assume it's included)
const HeroSection = () => (
  <section className="relative h-screen flex items-center bg-white pt-2 pb-20 md:pt-20">
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left order-1 lg:order-1">
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
        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
          We specialize in creating innovative marketing strategies that drive
          results. Let us help you shine brighter in the digital landscape.
        </p>
        <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 gap-3 justify-center lg:justify-start">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full lg:max-w-xs lg:flex-grow px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#7AA6B3] focus:border-[#7AA6B3] transition-all duration-300 text-gray-700 placeholder-gray-400"
          />
          <button className="bg-[#7AA6B3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#688E99] transition-colors shadow-lg w-full lg:max-w-none whitespace-nowrap">
            Let&apos;s Talk
          </button>
        </div>
      </div>
      <div className="relative z-20 h-[500px] lg:h-auto order-2 lg:order-2 hidden lg:flex justify-center lg:justify-end">
        <Image
          src="/right-home-hero-banner.png"
          alt="Hero Banner"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-3xl max-w-md lg:max-w-none shadow-xl"
        />
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full py-4 bg-gray-50/70 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 text-sm text-gray-700 font-medium">
        <div className="flex items-center gap-2">
          <MdDesignServices className="w-4 h-4 text-[#EE6C29]" />
          <span className="text-gray-600">Web Design</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCode className="w-4 h-4 text-[#7AA6B3]" />
          <span className="text-gray-600">Web Development</span>
        </div>
        <div className="flex items-center gap-2">
          <MdSearch className="w-4 h-4 text-[#EE6C29]" />
          <span className="text-gray-600">SEO</span>
        </div>
        <div className="flex items-center gap-2">
          <MdShare className="w-4 h-4 text-[#7AA6B3]" />
          <span className="text-gray-600">Social Media Marketing</span>
        </div>
        <div className="flex items-center gap-2">
          <MdBarChart className="w-4 h-4 text-[#EE6C29]" />
          <span className="text-gray-600">Graphics Design</span>
        </div>
        <div className="flex items-center gap-2">
          <MdPhoneAndroid className="w-4 h-4 text-[#7AA6B3]" />
          <span className="text-gray-600">App Design</span>
        </div>
      </div>
    </div>
  </section>
);

// OurServicesSection (omitted for brevity, assume it's included)
const OurServicesSection = () => (
  <section className="relative py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative order-2 lg:order-1 h-full min-h-[400px]">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#EE6C29] z-0 translate-x-10 -translate-y-10 hidden lg:block rounded-tl-2xl rounded-br-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#EE6C29] z-0 -translate-x-10 translate-y-10 hidden lg:block rounded-tl-2xl rounded-br-2xl"></div>
        <div className="relative z-10 overflow-hidden shadow-xl h-full">
          <Image
            src="/our-services.png"
            alt="Person coding on a laptop with dual monitors"
            width={700}
            height={470}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="order-1 lg:order-2 min-h-[400px]">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">
          ILLUMINATE
        </p>
        <h2 className="text-5xl font-extrabold text-[#1F2937] mb-6">
          Our Services<span className="text-[#EE6C29]">.</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl">
          At MarkEvo Digital, we harness innovative strategies tailored to your
          unique needs. Our targeted marketing solutions ensure that your
          message reaches the right audience effectively.
        </p>
        <div className="space-y-6">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 mr-4 mt-1">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#EE6C29] rounded-full">
                  <MdArrowForward className="w-4 h-4 text-white" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 max-w-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-[#7AA6B3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#688E99] transition-colors shadow-lg">
          View more
        </button>
      </div>
    </div>
  </section>
);

// ClientTestimonialsSection (omitted for brevity, assume it's included)
const ClientTestimonialsSection = ({
  currentSlide,
  nextSlide,
  prevSlide,
  totalSlides,
}: {
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  totalSlides: number;
}) => {
  const maxSlide = Math.max(0, totalSlides - 3);

  return (
    <section className="relative py-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="text-left">
            <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">
              TESTIMONIES
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F2937]">
              What Our Client Said About Us
              <span className="text-[#EE6C29]">.</span>
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide > 0
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  : "bg-gray-50 text-gray-300 opacity-70"
              }`}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === maxSlide}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide < maxSlide
                  ? "bg-[#7AA6B3]/20 text-black hover:bg-[#7AA6B3]/30"
                  : "bg-[#7AA6B3] text-white opacity-70"
              }`}
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / 3)}%)`,
              width: `${totalSlides * (100 / 3)}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4"
              >
                <div
                  className={`p-8 h-full rounded-2xl shadow-xl transition-all duration-300 ${testimonial.color}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div
                      className={`ml-4 ${
                        testimonial.color === "bg-[#EE6C29]"
                          ? "text-white"
                          : "text-[#1F2937]"
                      }`}
                    >
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-base font-medium opacity-80">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-lg leading-relaxed ${
                      testimonial.color === "bg-[#EE6C29]"
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ContactUsSection (omitted for brevity, assume it's included)
const ContactUsSection = () => (
  <section className="relative py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase mb-4">
          CONTACT US
        </p>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-[#1F2937] mb-6 leading-tight">
          Ready to Light Up Your Brand
          <span className="text-[#7AA6B3] opacity-80">?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
          We&apos;re here to help you take your brand to the next level.
          Let&apos;s craft a strategy that&apos;s as bright as your future.
        </p>
        <button className="bg-[#7AA6B3]/80 text-white px-8 py-3 rounded-full font-medium hover:bg-[#688E99]/90 transition-colors shadow-lg">
          Book a Free Consultation
        </button>
      </div>
      <div className="flex justify-end lg:justify-start">
        <div className="relative w-full max-w-sm h-[500px] overflow-hidden">
          <Image
            src="/contact-us.png"
            alt="Fashion model holding an orange vintage telephone handset to her ear"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
          />
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  // State for the project carousel
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const totalProjectSlides = projects.length;

  // The max slide index ensures that the last visible set of projects is shown.
  // Assuming 3 projects visible on large desktop (lg), max index is total - 3.
  const maxProjectSlide = Math.max(0, totalProjectSlides - 3);

  const nextProjectSlide = () => {
    // Navigate one slide at a time.
    setCurrentProjectSlide((prev) =>
      prev < maxProjectSlide ? prev + 1 : prev
    );
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // State for the NEW Testimonial Carousel (omitted for brevity, assume it's included)
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const totalTestimonialSlides = testimonials.length;

  const nextTestimonialSlide = () => {
    const maxSlide = Math.max(0, totalTestimonialSlides - 3);
    setCurrentTestimonialSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const OurWorkSection = () => {
    return (
      <section className="relative py-24 pb-32 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* --- Header and Navigation --- */}
          <div className="relative flex justify-center items-start mb-16">
            <div className="absolute top-36 left-64 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <Image
                src="/paper-plane-arrows.png"
                alt="Decorative paper plane with dashed line"
                width={150}
                height={100}
                className="object-contain"
              />
            </div>

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

            {/* Arrow Buttons for slide navigation */}
            <div className="absolute top-0 right-0 flex items-center space-x-3 mt-4">
              <button
                onClick={prevProjectSlide}
                disabled={currentProjectSlide === 0}
                className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  currentProjectSlide > 0
                    ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                    : "border-gray-100 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Previous project"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProjectSlide}
                disabled={currentProjectSlide >= maxProjectSlide}
                className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  currentProjectSlide < maxProjectSlide
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
          <div className="relative w-full overflow-hidden">
            {/* Inner carousel container for sliding */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                // Shifting by one card's width (1/Nth of the total container width) per click.
                // Since totalProjectSlides is 4, it shifts by 25% for each slide.
                transform: `translateX(-${
                  (currentProjectSlide * 100) / totalProjectSlides
                }%)`,
                width: `${totalProjectSlides * 100}%`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  // **KEY FOR RESPONSIVENESS:**
                  // w-full: Mobile (1 card in view)
                  // md:w-1/2: Tablet (2 cards in view)
                  // lg:w-1/3: Desktop (3 cards in view)
                  className="flex-shrink-0 **w-full md:w-1/2 lg:w-1/3** p-8"
                  // Each card takes up 1/Nth of the total width for calculation purposes
                  style={{ width: `${100 / totalProjectSlides}%` }}
                >
                  {/* Project Card Container */}
                  <div className="relative w-full">
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
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      <HeroSection />
      {/* ------------------------------------------------------------- */}

      {/* --- OUR WORK SECTION (Position 2) --- */}
      <OurWorkSection />

      {/* ------------------------------------------------------------- */}
      <OurServicesSection />
      {/* ------------------------------------------------------------- */}

      {/* --- CLIENT TESTIMONIALS SECTION (Position 4) --- */}
      <ClientTestimonialsSection
        currentSlide={currentTestimonialSlide}
        nextSlide={nextTestimonialSlide}
        prevSlide={prevTestimonialSlide}
        totalSlides={totalTestimonialSlides}
      />
      {/* ------------------------------------------------------------- */}

      {/* --- NEW CONTACT US SECTION (Position 5 - Last) --- */}
      <ContactUsSection />
      {/* ------------------------------------------------------------- */}
    </div>
  );
}
