import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Brand Column */}
          <div>
            <span className="text-2xl font-bold text-orange-500">Mother India Travels</span>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs">
              Not just seeing, but experiencing. Join us for curated journeys across the heart of India.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/motherindiatravels" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              {/* Add other socials here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">Our Team</a></li>
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-sm leading-6 text-neutral-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-neutral-500">
            &copy; 2026 Mother India Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;