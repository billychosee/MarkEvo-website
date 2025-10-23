'use client';

import { useEffect, useState } from 'react';
// import Image from 'next/image';

export default function Hosting() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hostingPlans = [
    {
      name: "Starter",
      price: "$9.99",
      period: "/month",
      features: [
        "1 Website",
        "10GB Storage",
        "100GB Bandwidth",
        "Free SSL Certificate",
        "24/7 Support",
        "99.9% Uptime Guarantee"
      ],
      popular: false,
      color: "from-[#EE6C29] to-[#7AA6B3]"
    },
    {
      name: "Professional",
      price: "$19.99",
      period: "/month",
      features: [
        "5 Websites",
        "50GB Storage",
        "500GB Bandwidth",
        "Free SSL Certificate",
        "Priority Support",
        "99.9% Uptime Guarantee",
        "Daily Backups",
        "CDN Included"
      ],
      popular: true,
      color: "from-[#7AA6B3] to-[#EE6C29]"
    },
    {
      name: "Enterprise",
      price: "$39.99",
      period: "/month",
      features: [
        "Unlimited Websites",
        "Unlimited Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Dedicated Support",
        "99.9% Uptime Guarantee",
        "Daily Backups",
        "CDN Included",
        "Advanced Security",
        "Custom Solutions"
      ],
      popular: false,
      color: "from-[#EE6C29] to-[#7AA6B3]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#7AA6B3]/10">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Premium Web Hosting</h1>
            <p className="text-lg sm:text-xl text-[#7AA6B3] max-w-3xl mx-auto">
              Fast, reliable, and secure hosting solutions for your website. Choose from our flexible plans designed to grow with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Hosting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience lightning-fast performance, rock-solid security, and unparalleled support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "SSD storage and optimized servers ensure your website loads in milliseconds."
              },
              {
                icon: "🔒",
                title: "Secure & Reliable",
                description: "Advanced security measures and 99.9% uptime guarantee keep your site safe."
              },
              {
                icon: "🎯",
                title: "Expert Support",
                description: "24/7 technical support from our experienced hosting specialists."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Hosting Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-2 ${
                  plan.popular ? 'border-[#EE6C29] scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3] hover:shadow-lg transform hover:scale-105'
                      : 'bg-gradient-to-r from-[#7AA6B3] to-[#EE6C29] hover:shadow-lg transform hover:scale-105'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#EE6C29] to-[#7AA6B3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-[#7AA6B3] mb-8">
            Join thousands of satisfied customers who trust us with their hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#EE6C29] px-10 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#EE6C29] transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}