
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, SkiIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FacebookIcon className="w-6 h-6" />, href: '#' },
    { icon: <InstagramIcon className="w-6 h-6" />, href: '#' },
    { icon: <TwitterIcon className="w-6 h-6" />, href: '#' },
  ];

  return (
    <footer className="bg-lightest-navy py-12">
      <div className="container mx-auto px-6 text-center text-slate">
        <div className="flex justify-center items-center mb-6">
           <a href="#hero" className="flex items-center space-x-2 text-3xl font-montserrat font-bold text-lightest-slate">
                <SkiIcon className="w-10 h-10 text-brand-cyan" />
                <span>24h Tremblant</span>
            </a>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-brand-cyan transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tremblant 24h. All Rights Reserved.
        </p>
         <p className="text-xs mt-2 text-slate/70">
          This is a promotional concept. Images are for illustrative purposes only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
