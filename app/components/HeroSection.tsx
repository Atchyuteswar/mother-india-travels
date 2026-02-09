'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Layer (The "About Us" Style) */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Image - Taj Mahal at Golden Hour */}
        <img
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop"
          alt="Vintage India Hero"
          className="h-full w-full object-cover sepia-[.2] scale-105" 
          style={{ 
            animation: 'kenburns 20s infinite alternate', // Optional: Adds slow zoom effect
            transformOrigin: 'center center'
          }}
        />
        
        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
        {/* Bottom Fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F4EBD9] to-transparent" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-90">
             <div className="h-[1px] w-8 md:w-12 bg-[#F4EBD9]" />
             <span className="text-[#F4EBD9] font-heading tracking-[0.3em] uppercase text-xs md:text-sm">
               Est. 2024 • Leo & Tanu
             </span>
             <div className="h-[1px] w-8 md:w-12 bg-[#F4EBD9]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-6xl sm:text-8xl md:text-[7rem] leading-none text-[#F4EBD9] drop-shadow-2xl mb-8">
            Not Just Seeing, <br />
            <span className="text-[#B45309] italic">
              But Experiencing.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-2xl font-body text-xl md:text-3xl text-[#F4EBD9]/90 leading-relaxed italic drop-shadow-md">
             "Discover the soul of India through our curated cultural immersions and personalized group retreats."
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row font-body">
            <a 
              href="/experience" 
              className="inline-block border border-[#F4EBD9]/50 text-[#F4EBD9] px-10 py-4 font-heading text-lg uppercase tracking-widest hover:bg-[#F4EBD9] hover:text-[#4A3B32] transition-all duration-500 backdrop-blur-sm"
            >
              Begin The Journey
            </a>
          </div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#F4EBD9]/60 flex flex-col items-center gap-2"
      >
        <span className="text-[12px] text-bold uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-5 w-5 text-bold" />
      </motion.div>

      {/* Optional: Add CSS for the slow zoom effect inline if not in global css */}
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;