'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReelsSection from "../components/ReelsSection"; // Keeping your Reel Carousel
import { motion } from 'framer-motion';
import { Camera, Instagram, Sun, Moon, Coffee, Music, MapPin, Feather } from 'lucide-react';

// --- DATA: INSTAGRAM STORY HIGHLIGHTS ---
// --- DATA: INSTAGRAM STORY HIGHLIGHTS ---
const HIGHLIGHTS = [
  { label: "North India", img: "/insta-highlight/north-india.jpg", link: "https://www.instagram.com/stories/highlights/18081285535575065/"},
  { label: "Jaipur", img: "/insta-highlight/jaipur.jpg", link: "https://www.instagram.com/stories/highlights/17857385886329960/" },
  { label: "Delhi", img: "/insta-highlight/delhi.jpg", link: "https://www.instagram.com/stories/highlights/18298407919246328/" },
  { label: "Pushkar", img: "/insta-highlight/pushkar.jpg", link: "https://www.instagram.com/stories/highlights/18136244092387727/" },
  { label: "Feedback", img: "/insta-highlight/feedback.jpg", link: "https://www.instagram.com/stories/highlights/17844767874377578/" },
];

// --- DATA: INSTAGRAM GRID POSTS ---
const INSTA_GRID = [
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

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />
      
      {/* 1. HERO: THE PROMISE + HIGHLIGHTS INTEGRATED */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop" 
            alt="Indian Architecture Detail" 
            className="w-full h-full object-cover sepia-[.3]"
          />
          {/* Darker Overlay so text pops */}
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
          {/* Gradient at bottom to blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4EBD9] via-transparent to-transparent" />
        </div>

        {/* Title Content */}
        <div className="relative z-10 text-center max-w-5xl px-6 pt-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#F4EBD9] font-heading tracking-widest text-xl mb-4 block opacity-90">
              Curated by Leo & Tanu
            </span>
            <h1 className="font-heading text-7xl md:text-9xl text-[#F4EBD9] drop-shadow-lg mb-8">
              The Art of Immersion
            </h1>
            <p className="font-body text-xl md:text-3xl text-[#F4EBD9]/90 italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              "India is not a place you visit. It is a feeling you carry home."
            </p>
          </motion.div>
        </div>

        {/* HIGHLIGHTS (Moved Inside Here) */}
        <div className="relative z-10 w-full overflow-x-auto px-6 pb-12 no-scrollbar">
          <div className="flex gap-8 md:justify-center min-w-max mx-auto px-4">
            {HIGHLIGHTS.map((story, i) => (
              <a 
                key={i} 
                href={story.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                {/* Ring */}
                <div className="p-[3px] rounded-full border-2 border-[#F4EBD9]/30 group-hover:border-[#D97706] transition-all duration-500 bg-black/20 backdrop-blur-sm">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-[#F4EBD9] relative">
                    <img 
                      src={story.img} 
                      className="w-full h-full object-cover sepia-[0.4] group-hover:sepia-0 transition-all duration-500 group-hover:scale-110" 
                      alt={story.label} 
                    />
                  </div>
                </div>
                {/* Label (Changed to Light Color for Dark Background) */}
                <span className="font-heading text-[#F4EBD9] text-lg tracking-wide drop-shadow-md group-hover:text-[#D97706] transition-colors">
                  {story.label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </section>

      {/* 3. REELS SECTION (Your Carousel) */}
      <ReelsSection />

      {/* 4. THE 5 SENSES (Deep Immersion) */}
      <section className="py-24 px-6 bg-[#E6D5C0]/30 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Feather className="h-8 w-8 text-[#D97706] mx-auto mb-4" />
            <h2 className="font-heading text-5xl text-[#4A3B32]">A Feast for the Senses</h2>
            <p className="font-body text-xl text-[#4A3B32]/60 italic mt-2">"We curate moments that linger in your memory."</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-[#F4EBD9] p-8 border border-[#4A3B32]/10 shadow-lg group hover:-translate-y-2 transition-transform duration-500">
              <div className="h-48 overflow-hidden mb-6 border border-[#4A3B32]/10">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover sepia-[.3] group-hover:scale-110 transition-transform duration-700" alt="Spices" />
              </div>
              <h3 className="font-heading text-3xl text-[#4A3B32] mb-2">Taste</h3>
              <p className="font-body text-lg text-[#4A3B32]/80">From the fiery curries of the south to the sweet saffron milk of the north. We eat where the locals eat.</p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F4EBD9] p-8 border border-[#4A3B32]/10 shadow-lg group hover:-translate-y-2 transition-transform duration-500">
              <div className="h-48 overflow-hidden mb-6 border border-[#4A3B32]/10">
                <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover sepia-[.3] group-hover:scale-110 transition-transform duration-700" alt="Bells" />
              </div>
              <h3 className="font-heading text-3xl text-[#4A3B32] mb-2">Sound</h3>
              <p className="font-body text-lg text-[#4A3B32]/80">The morning temple bells, the chaotic symphony of rickshaws, and the silence of the Himalayas.</p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#F4EBD9] p-8 border border-[#4A3B32]/10 shadow-lg group hover:-translate-y-2 transition-transform duration-500">
              <div className="h-48 overflow-hidden mb-6 border border-[#4A3B32]/10">
                <img src="https://images.unsplash.com/photo-1606293926075-69a00febf280?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover sepia-[.3] group-hover:scale-110 transition-transform duration-700" alt="Touch" />
              </div>
              <h3 className="font-heading text-3xl text-[#4A3B32] mb-2">Touch</h3>
              <p className="font-body text-lg text-[#4A3B32]/80">Feel the cool marble of the Taj, the rough sandstone of forts, and the soft Pashmina silk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTAGRAM GRID (The Visual Diary) */}
      <section className="py-24 px-6 bg-[#4A3B32] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="flex items-center justify-between mb-12 text-[#F4EBD9]">
            <div>
              <h2 className="font-heading text-5xl">The Visual Diary</h2>
              <p className="font-body text-xl opacity-60 italic">@motherindiatravels</p>
            </div>
            <a href="https://www.instagram.com/motherindiatravels/" className="hidden md:flex items-center gap-2 border border-[#D97706] px-6 py-2 hover:bg-[#D97706] hover:text-[#4A3B32] transition-colors">
              <Instagram className="h-5 w-5" /> Follow Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
             {INSTA_GRID.map((src, i) => (
               <div key={i} className="group relative aspect-square overflow-hidden bg-black/20 border border-[#F4EBD9]/10">
                 <img src={src} className="w-full h-full object-cover opacity-80" alt="Instagram Post" />
              </div>
             ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <a href="https://www.instagram.com/motherindiatravels/" className="inline-flex items-center gap-2 text-[#D97706] font-heading text-xl border-b border-[#D97706] pb-1">
               Follow on Instagram &rarr;
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}