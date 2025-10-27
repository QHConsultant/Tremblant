import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon, MailIcon, PhoneIcon } from './icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-light-navy p-8 rounded-lg shadow-2xl relative w-11/12 max-w-md text-lightest-slate transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-4 right-4 text-slate hover:text-brand-cyan transition-colors"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <h2 id="contact-modal-title" className="font-montserrat font-bold text-2xl text-center mb-6">
          Get in Touch to Donate
        </h2>

        <div className="space-y-4 text-lg">
          <p className="flex items-center">
            <span className="font-bold mr-2 w-16">Name:</span>
            <span>Tremblant 24h Team</span>
          </p>
          <p className="flex items-center">
            <MailIcon className="w-5 h-5 mr-3 text-brand-cyan flex-shrink-0" />
            <a href="mailto:contact@tremblant24h.com" className="hover:text-brand-cyan transition-colors break-all">
              contact@tremblant24h.com
            </a>
          </p>
          <p className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-3 text-brand-cyan flex-shrink-0" />
            <a href="tel:+18885552424" className="hover:text-brand-cyan transition-colors">
              +1 (888) 555-2424
            </a>
          </p>
        </div>

        <div className="my-6 border-t border-lightest-navy/20"></div>

        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/200x200?text=WeChat+QR"
            alt="WeChat QR Code"
            className="w-48 h-48 rounded-md bg-white"
          />
          <p className="mt-4 text-light-slate">Scan to connect on WeChat</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
