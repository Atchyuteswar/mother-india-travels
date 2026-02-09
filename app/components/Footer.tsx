'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#4A3B32] text-[#F4EBD9] pt-20 pb-10 border-t-8 border-[#D97706]">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="grid gap-12 md:grid-cols-4 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="font-heading text-4xl text-[#F4EBD9] tracking-wide">
                Mother India <span className="text-[#D97706]">Travels</span>
              </h2>
            </Link>
            <p className="font-body text-xl text-[#F4EBD9]/80 max-w-sm leading-relaxed mb-8 italic">
              "To travel is to discover that everyone is wrong about other countries."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-[#F4EBD9]/20 hover:bg-[#D97706] hover:border-[#D97706] transition-all text-[#F4EBD9]">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-heading text-2xl text-[#D97706] mb-6">Explore</h3>
            <ul className="space-y-4 font-body text-lg text-[#F4EBD9]/70">
              {['Home', 'Personalized Trips', 'The Experience', 'Journal', 'About Us'].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-[#F4EBD9] hover:pl-2 transition-all duration-300 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="font-heading text-2xl text-[#D97706] mb-6">Join the Tribe</h3>
            <p className="font-body text-[#F4EBD9]/60 mb-6">
              Receive handwritten notes, travel guides, and early invites to our retreats.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-[#F4EBD9]/30 py-3 pr-10 text-[#F4EBD9] placeholder-[#F4EBD9]/40 focus:outline-none focus:border-[#D97706] font-body text-lg transition-colors"
              />
              <button className="absolute right-0 top-3 text-[#D97706] hover:text-[#F4EBD9] transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#F4EBD9]/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#F4EBD9]/40 font-body text-sm">
          <p>© 2026 Mother India Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Hyderabad, India
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" /> hello@motherindia.com
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;