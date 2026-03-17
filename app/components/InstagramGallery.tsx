'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Camera } from 'lucide-react';
import VaranasiGhats from '../../public/visual-archive/varanasi-ghats.jpg';
import HimalayanMorning from '../../public/visual-archive/himalayan-morning.jpg';
import LocalChai from '../../public/visual-archive/local-chai.jpg';
import AmberFort from '../../public/visual-archive/amber-fort.jpg';

const POSTS = [
  { id: 1, src: VaranasiGhats, caption: "Varanasi Ghats", rotate: "-2deg" },
  { id: 2, src: HimalayanMorning, caption: "Himalayan Morning", rotate: "1deg" },
  { id: 3, src: LocalChai, caption: "Local Chai", rotate: "-1deg" },
  { id: 4, src: AmberFort, caption: "Amber Fort", rotate: "2deg" },
];

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-[#E6D5C0] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url(https://www.transparenttextures.com/patterns/cubes.png)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block p-3 rounded-full border-2 border-[#4A3B32]/20 mb-4 bg-[#F4EBD9]">
            <Camera className="h-6 w-6 text-[#4A3B32]" />
          </div>
          <h2 className="font-heading text-5xl text-[#4A3B32] mb-2">Visual Archive</h2>
          <a href="https://instagram.com" target="_blank" className="font-body text-[#D97706] hover:underline font-bold tracking-widest text-sm">
            @motherindiatravels
          </a>
        </div>

        {/* Polaroid Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: post.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group w-64 bg-white p-3 pt-3 pb-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-10"
              style={{ rotate: post.rotate }} // Initial rotation for messy look
            >
              {/* Tape Effect (Optional visual flair) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border-l border-r border-white/50 shadow-sm opacity-60 rotate-1"></div>

              {/* Image */}
              <div className="h-64 w-full overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                <img 
                  src={post.src.src} 
                  alt={post.caption} 
                  className="h-full w-full object-cover filter sepia-[.2] group-hover:sepia-0 transition-all duration-500"
                />
              </div>
              
              {/* Handwritten Caption */}
              <div className="text-center">
                <p className="font-body text-[#4A3B32] text-xl">{post.caption}</p>
                <div className="mt-2 flex justify-center text-[#D97706]">
                   <Instagram className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramGallery;