'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F4EBD9]/95 backdrop-blur-sm py-4 border-b border-[#4A3B32]/10 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        {/* Logo - Rozha One Font */}
        <Link href="/" className="text-2xl font-bold text-[#4A3B32] font-heading tracking-wide">
          Mother India <span className="text-[#D97706]">Travels</span>
        </Link>

        {/* Desktop Menu - Cormorant Font */}
        <div className="hidden md:flex items-center gap-10">
          {['About Us', 'Experience'].map((item) => (
             <Link 
               key={item}
               href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
               className="text-lg font-bold text-[#4A3B32] hover:text-[#D97706] transition-colors font-body tracking-wide"
             >
               {item}
             </Link>
          ))}
          
          {/* Classic "Stamp" Button style */}
          <Link href="/book">
            <button className="border border-[#4A3B32] px-6 py-2 text-sm font-bold text-[#4A3B32] uppercase tracking-widest hover:bg-[#4A3B32] hover:text-[#F4EBD9] transition-all duration-300 font-body">
              Book Now
            </button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#4A3B32]">
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F4EBD9] border-b border-[#4A3B32]/20 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8 text-center">
              {['About Us', 'The Experience'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#4A3B32] text-2xl font-heading hover:text-[#D97706]"
                >
                  {item}
                </Link>
              ))}
              <Link href="/book" onClick={() => setIsOpen(false)} className="text-[#D97706] text-xl font-body font-bold uppercase tracking-widest mt-4">
                Book a Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;