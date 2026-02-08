'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Coffee, Heart, Music, Sun } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReelsSection from '../components/ReelsSection';

// "How We Do Things" Steps
const STEPS = [
  {
    title: "Curated Consultation",
    description: "We start with a coffee chat. We want to know what moves you—art, food, history, or silence.",
    icon: <Coffee className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Handpicked Stays",
    description: "No generic hotels. We book heritage havelis, eco-lodges, and homestays with soul.",
    icon: <Sun className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "Cultural Immersion",
    description: "Dinner with a local family, pottery workshops, or a private sunrise boat ride. Real connections.",
    icon: <Heart className="h-6 w-6 text-red-500" />
  }
];

// Placeholder images for "Past Retreats"
const GALLERY = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598890777032-bde66e6db0b2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f00d42?q=80&w=800&auto=format&fit=crop"
];

export default function ExperiencePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Navbar />

      {/* 1. Hero Text */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Not Just Seeing, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            But Experiencing.
          </span>
        </motion.h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto">
          Travel is not about ticking boxes. It's about the stories you bring back.
        </p>
      </section>

      <ReelsSection />

      {/* 2. Timeline: How We Do Things */}
      <section ref={containerRef} className="relative py-24 px-6 max-w-4xl mx-auto">
        {/* The Vertical Line */}
        <div className="absolute left-8 top-24 bottom-24 w-1 bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <motion.div 
            style={{ height }} 
            className="w-full bg-gradient-to-b from-orange-500 to-red-600 rounded-full"
          />
        </div>

        <div className="space-y-24">
          {STEPS.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "flex-row text-left"
              }`}
            >
              {/* Content */}
              <div className="flex-1 pl-12 md:pl-0">
                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
              </div>

              {/* Icon Bubble (Center) */}
              <div className="absolute left-0 md:static flex-shrink-0 z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800 border-4 border-neutral-900 shadow-xl">
                  {step.icon}
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Past Retreats Gallery */}
      <section className="py-24 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 px-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Past Retreats</h2>
              <p className="text-neutral-500">Memories from our recent journeys.</p>
            </div>
            <Camera className="h-6 w-6 text-neutral-600" />
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl"
              >
                <img 
                  src={src} 
                  alt="Retreat memory" 
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}