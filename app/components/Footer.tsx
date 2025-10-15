import Link from 'next/link';
import { HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

const socialLogos = [
  {
    icon: <SlSocialLinkedin />,
    href: 'https://www.linkedin.com/in/wildanlh',
    color: 'hover:text-blue-500',
  },
  {
    icon: <SiGithub />,
    href: 'https://github.com/wildanlh',
    color: 'hover:text-gray-300',
  },
  {
    icon: <SiInstagram />,
    href: 'https://instagram.com/wildanlh__',
    color: 'hover:text-pink-500',
  },
  {
    icon: <HiOutlineMail />,
    href: 'mailto:wildanluqmanul@gmail.com',
    color: 'hover:text-yellow-400',
  },
  {
    icon: <SlSocialTwitter />,
    href: 'https://twitter.com/wldnlh',
    color: 'hover:text-sky-400',
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full border-t border-white/10 bg-white/5 backdrop-blur-md 
        mt-20 pb-28 sm:pb-12 md:pb-8
      "
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
        {/* Copyright */}
        <div className="text-center md:text-left text-xs sm:text-sm">
          <span>
            &copy; {new Date().getFullYear()} Wildan Luqmanul Hakim. All rights
            reserved.
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6 sm:space-x-8 text-xl sm:text-2xl">
          {socialLogos.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer transition-all duration-300 transform hover:scale-125 ${social.color}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
