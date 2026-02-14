'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// 🔴 STEP 1: Update this list with the EXACT filenames inside your 'public/gallery' folder
const GALLERY_IMAGES = [
  "/gallery/gallery-1.jpg", 
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
  "/gallery/gallery-9.jpg",
  "/gallery/gallery-10.jpg",
  "/gallery/gallery-11.jpg",
  "/gallery/gallery-12.jpg",
  "/gallery/gallery-13.jpg",
  "/gallery/gallery-14.jpg",
  "/gallery/gallery-15.jpg",
  "/gallery/gallery-16.jpg",
  "/gallery/gallery-17.jpg",
  "/gallery/gallery-18.jpg",
  "/gallery/gallery-19.jpg",
  "/gallery/gallery-20.jpg",
  "/gallery/gallery-21.jpg",
  "/gallery/gallery-22.jpg",
  "/gallery/gallery-23.jpg",
  "/gallery/gallery-24.jpg",
  "/gallery/gallery-25.jpg",
  "/gallery/gallery-26.jpg",
  "/gallery/gallery-27.jpg",
  "/gallery/gallery-28.jpg",
  "/gallery/gallery-29.jpg",
  "/gallery/gallery-30.jpg",
  "/gallery/gallery-31.jpg",
  "/gallery/gallery-32.jpg",
  "/gallery/gallery-33.jpg",
  "/gallery/gallery-34.jpg",
  "/gallery/gallery-35.jpg",
  "/gallery/gallery-36.jpg",
  "/gallery/gallery-37.jpg",
  "/gallery/gallery-38.jpg",
  "/gallery/gallery-39.jpg",
  "/gallery/gallery-40.jpg",
  "/gallery/gallery-41.jpg",
  "/gallery/gallery-42.jpg",
  "/gallery/gallery-43.jpg",
  "/gallery/gallery-44.jpg",
  "/gallery/gallery-45.jpg",
  "/gallery/gallery-46.jpg",
  "/gallery/gallery-47.jpg",
  "/gallery/gallery-48.jpg",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate images every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#2A1B12]">
      
      {/* 1. BACKGROUND SLIDESHOW LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='popLayout'>
          <motion.img
            key={index} // Changing key triggers the animation
            src={GALLERY_IMAGES[index]}
            alt="Hero Slideshow"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover sepia-[.3]" 
          />
        </AnimatePresence>

        {/* 2. STATIC OVERLAYS (Keep these on top of images) */}
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
        {/* Vintage Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.5)_100%)] z-10" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F4EBD9] to-transparent z-10" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-4 mb-6 opacity-90">
             <div className="h-[1px] w-8 md:w-12 bg-[#F4EBD9]" />
             <span className="text-[#F4EBD9] font-body tracking-[0.3em] uppercase text-xs md:text-sm">
               Leo & Tanu
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
              className="inline-block border border-[#F4EBD9]/50 text-[#F4EBD9] px-10 py-4 font-body text-lg uppercase tracking-widest hover:bg-[#F4EBD9] hover:text-[#4A3B32] transition-all duration-500 backdrop-blur-sm"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#F4EBD9]/60 flex flex-col items-center gap-2"
      >
        <span className="text-[12px] font-bold uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-5 w-5 font-bold" />
      </motion.div>

    </section>
  );
};

export default HeroSection;