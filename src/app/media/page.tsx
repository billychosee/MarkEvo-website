'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Media() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mediaServices = [
    {
      title: "Video Production",
      description: "Professional video content creation for commercials, tutorials, and brand storytelling.",
      icon: "🎥",
      features: ["4K Video Production", "Professional Editing", "Motion Graphics", "Sound Design", "Color Grading"]
    },
    {
      title: "Photography",
      description: "High-quality photography services for products, events, and corporate branding.",
      icon: "📸",
      features: ["Product Photography", "Event Coverage", "Portrait Sessions", "Commercial Shoots", "Photo Editing"]
    },
    {
      title: "Social Media Content",
      description: "Engaging content creation for all social media platforms to boost your online presence.",
      icon: "📱",
      features: ["Platform Optimization", "Content Strategy", "Graphic Design", "Video Content", "Analytics & Reporting"]
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design including logos, guidelines, and marketing materials.",
      icon: "🎨",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Print Design", "Digital Assets"]
    }
  ];

  const portfolioItems = [
    {
      title: "Corporate Video",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Product Photography",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#7AA6B3]/10">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Media Production & Design
            </h1>
            <p className="text-lg sm:text-xl text-[#7AA6B3] max-w-3xl mx-auto">
              Creative media solutions that bring your vision to life. From
              video production to brand design, we create compelling content
              that engages your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Media Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive media production and design services tailored to
              your brand&apos;s unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-[#EE6C29] mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we&apos;ve helped brands
              tell their stories through compelling media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#7AA6B3] text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-[#7AA6B3]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Creative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to bringing your creative vision to life
              with exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, audience, and creative vision.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Developing a comprehensive plan and creative concept.",
              },
              {
                step: "03",
                title: "Creation",
                description:
                  "Bringing ideas to life with professional production.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Final delivery with revisions and ongoing support.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-[#7AA6B3] mb-8">
            Let&apos;s collaborate on your next media project. Contact us today
            to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#EE6C29] px-10 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#EE6C29] transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}