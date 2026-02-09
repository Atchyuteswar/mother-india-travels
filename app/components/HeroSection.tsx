'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 60, damping: 20 } },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#F4EBD9]">
      
      {/* 1. Background Texture - Faded Watermark Style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
          alt="Vintage India"
          className="h-full w-full object-cover opacity-15 sepia filter grayscale-[0.3]" 
        />
        {/* Soft Vignette around edges to focus on text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EBD9] via-transparent to-[#F4EBD9]/60" />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl">

          {/* Main Headline - The "Indian" Look */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 mt-6 font-heading text-6xl text-[#4A3B32] sm:text-8xl md:text-[7rem] leading-[1.1] drop-shadow-sm"
          >
            Not Just Seeing, <br />
            <span className="text-[#B45309] italic">
              But Experiencing.
            </span>
          </motion.h1>

          {/* Subheadline - Elegant Serif */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mb-12 max-w-2xl font-body text-2xl md:text-3xl text-[#4A3B32]/90 leading-relaxed italic"
          >
            "Discover the soul of India through our curated cultural immersions and personalized group retreats."
          </motion.p>

          {/* Buttons - Classic & Minimal */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-6 sm:flex-row font-body">
            
            <button className="rounded-none border-b-2 border-[#D97706] bg-transparent pb-1 text-xl font-bold text-[#D97706] transition-all hover:text-[#4A3B32] hover:border-[#4A3B32]">
              Plan My Journey &rarr;
            </button>
            
            <button className="text-lg text-[#4A3B32]/70 hover:text-[#4A3B32] transition-colors underline underline-offset-4 decoration-1">
              View Upcoming Trips
            </button>

          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Minimal */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 3, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-[#4A3B32]/40"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </div>
  );
};

export default HeroSection;