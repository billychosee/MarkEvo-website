import Link from 'next/link';
import Image from 'next/image';
import { MdLink, MdHome, MdDns, MdVideocam, MdHelp, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#022530] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/MarkEvo-logo.png"
                alt="MarkEvo Logo"
                width={100}
                height={100}
                className="mr-2"
              />
            </div>
            <p className="text-[#7AA6B3]">
              Empowering your digital evolution with innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MdLink className="w-5 h-5 text-[#EE6C29]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#7AA6B3] hover:text-white transition duration-300 flex items-center gap-2">
                  <MdHome className="w-4 h-4 text-[#EE6C29]" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/hosting" className="text-[#7AA6B3] hover:text-white transition duration-300 flex items-center gap-2">
                  <MdDns className="w-4 h-4 text-[#7AA6B3]" />
                  Hosting
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-[#7AA6B3] hover:text-white transition duration-300 flex items-center gap-2">
                  <MdVideocam className="w-4 h-4 text-[#EE6C29]" />
                  Media
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-[#7AA6B3] hover:text-white transition duration-300 flex items-center gap-2">
                  <MdHelp className="w-4 h-4 text-[#7AA6B3]" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MdEmail className="w-5 h-5 text-[#7AA6B3]" />
              Contact Info
            </h4>
            <div className="space-y-3">
              <p className="text-[#7AA6B3] flex items-center gap-2">
                <MdEmail className="w-4 h-4 text-[#EE6C29]" />
                info@markevo.com
              </p>
              <p className="text-[#7AA6B3] flex items-center gap-2">
                <MdPhone className="w-4 h-4 text-[#7AA6B3]" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#7AA6B3]/30 mt-8 pt-8 text-center">
          <p className="text-[#7AA6B3]">
            &copy; 2024 MarkEvo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;