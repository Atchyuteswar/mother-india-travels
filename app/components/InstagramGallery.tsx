'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';

// Bento Grid Configuration
// span: Tailwind classes for grid layout (Mobile: 1 col, Desktop: varied)
const POSTS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    alt: "Varanasi Ghats",
    span: "md:col-span-2 md:row-span-2", // Large Square (Main Feature)
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    alt: "Himalayan View",
    span: "md:col-span-1 md:row-span-1", // Standard Square
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    alt: "Local Culture",
    span: "md:col-span-1 md:row-span-1", // Standard Square
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    alt: "Rajasthan Fort",
    span: "md:col-span-2 md:row-span-1", // Wide Rectangle
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    alt: "Kerala Boat",
    span: "md:col-span-1 md:row-span-1", // Standard Square
  },
];

const InstagramGallery = () => {
  return (
    <section className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-2">
              <Instagram className="h-5 w-5" />
              <span className="font-bold tracking-wide text-sm uppercase">@motherindiatravels</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Live from the Gram
            </h2>
          </div>
          
          <a 
            href="https://www.instagram.com/motherindiatravels" 
            target="_blank"
            className="group flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition-all"
          >
            Follow Us <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[32px] bg-neutral-900 ${post.span}`}
            >
              {/* Image with Zoom Effect */}
              <img 
                src={post.src} 
                alt={post.alt} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              
              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-md">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* "More" Card - Optional Filler */}
          <motion.a
            href="https://www.instagram.com/motherindiatravels"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition-colors md:col-span-1 md:row-span-1"
          >
            <div className="mb-3 rounded-full bg-orange-500/20 p-3 text-orange-500 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="h-6 w-6" />
            </div>
            <span className="font-medium text-white">View More</span>
            <span className="text-sm text-neutral-400">on Instagram</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default InstagramGallery;