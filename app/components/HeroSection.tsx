'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* 1. Background Image/Video (Replace with Client's Instagram Reel/Post) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" // Placeholder: Varanasi/India vibe
          alt="Mother India Travels Background"
          className="h-full w-full object-cover opacity-60"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Pill Label - Android 16 Style */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 backdrop-blur-md border border-orange-500/30">
              Mother India Travels
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            Not Just Seeing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              But Experiencing.
            </span>
          </motion.h1>

          {/* Subheadline from Docs */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg text-neutral-200 sm:text-xl"
          >
            Discover the soul of India through our curated cultural immersions and personalized group retreats.
          </motion.p>

          {/* CTA Buttons - Android 16 "Pill" Shapes */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button className="group relative overflow-hidden rounded-[28px] bg-white px-8 py-4 text-lg font-semibold text-black transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10">Plan My Journey</span>
              <div className="absolute inset-0 -translate-x-full bg-orange-100 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
            
            <button className="rounded-[28px] border border-white/20 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40 active:scale-95">
              View Upcoming Trips
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;