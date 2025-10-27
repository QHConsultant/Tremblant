import React, { useState, useEffect } from 'react';
import { SkiIcon } from './icons';
import ContactModal from './ContactModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const navLinks = ['About', 'The Cause', 'Gallery', 'Sponsors'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-light-navy/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2 text-2xl font-montserrat font-bold text-lightest-slate">
            <SkiIcon className="w-8 h-8 text-brand-cyan" />
            <span>24h</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-light-slate hover:text-brand-cyan transition-colors duration-300"
              >
                {link}
              </a>
            ))}
            <button 
              onClick={handleModalOpen}
              className="bg-transparent border border-brand-cyan text-brand-cyan px-4 py-2 rounded-md hover:bg-brand-cyan/10 transition-colors duration-300"
            >
              Donate Now
            </button>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
            <button 
              onClick={handleModalOpen}
              className="bg-brand-cyan text-navy font-bold px-4 py-2 text-sm rounded-md"
            >
              Donate
            </button>
          </div>
        </div>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default Header;