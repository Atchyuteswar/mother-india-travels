'use client';

import React from 'react';
import { Send, Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-[#4A3B32] py-24 px-6 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center border border-[#D97706]/30 p-8 md:p-12 outline outline-1 outline-[#4A3B32] outline-offset-8">
        <Mail className="h-10 w-10 text-[#D97706] mx-auto mb-6" />
        
        <h2 className="font-heading text-5xl text-[#F4EBD9] mb-4">Letters from the Road</h2>
        <p className="font-body text-xl text-[#F4EBD9]/70 mb-10 max-w-xl mx-auto italic">
          Subscribe to receive handwritten travel guides, hidden gem alerts, and early invitations to our next retreat.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-6 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-transparent border-b-2 border-[#F4EBD9]/30 py-3 text-[#F4EBD9] placeholder-[#F4EBD9]/30 focus:outline-none focus:border-[#D97706] font-body text-lg transition-colors"
          />
          <button className="bg-[#D97706] text-[#F4EBD9] px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#F4EBD9] hover:text-[#4A3B32] transition-colors font-body">
            Subscribe
          </button>
        </form>
        
        <p className="mt-6 text-sm text-[#F4EBD9]/30 font-body uppercase tracking-widest">
          No spam. Only stories.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;