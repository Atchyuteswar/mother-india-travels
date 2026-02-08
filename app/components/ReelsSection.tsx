'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const REELS = [
  {
    id: 1,
    title: "Morning Aarti at Varanasi",
    views: "12.5k",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Hidden Waterfalls of Kerala",
    views: "8.2k",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Desert Safari in Jaisalmer",
    views: "15k",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Snowfall in Manali",
    views: "20k",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
  }
];

const ReelsSection = () => {
  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Watch the Experience</h2>
        <p className="text-neutral-400">Real moments from our travelers' cameras.</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto pb-8 px-4 snap-x no-scrollbar">
        {REELS.map((reel, i) => (
          <motion.div 
            key={reel.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="snap-center shrink-0 relative w-[280px] h-[500px] rounded-[32px] overflow-hidden cursor-pointer group bg-neutral-800"
          >
            <img src={reel.image} alt={reel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="fill-white text-white ml-1" />
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-white font-bold text-lg leading-tight mb-1">{reel.title}</h3>
              <p className="text-xs text-neutral-400">{reel.views} views</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;