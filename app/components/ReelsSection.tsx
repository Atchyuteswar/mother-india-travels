'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const REELS = [
  { id: 1, title: "Morning Aarti", views: "12.5k", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Kerala Waters", views: "8.2k", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Desert Safari", views: "15k", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Snowy Peaks", views: "20k", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop" },
];

const ReelsSection = () => {
  return (
    <section className="bg-[#4A3B32] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 mb-12 flex items-end justify-between">
        <div>
           <h2 className="font-heading text-5xl text-[#F4EBD9]">Moving Pictures</h2>
           <p className="font-body text-xl text-[#F4EBD9]/60 italic mt-2">"Glimpses of the magic that awaits."</p>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-12 px-6 snap-x no-scrollbar">
        {REELS.map((reel, i) => (
          <motion.div 
            key={reel.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="snap-center shrink-0 relative w-[280px] h-[500px] border-4 border-[#F4EBD9] bg-black group cursor-pointer shadow-2xl"
          >
            {/* Film Strip Holes Effect (Top/Bottom) */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-[#222] z-20 flex justify-between px-2 items-center opacity-50"><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div></div>
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#222] z-20 flex justify-between px-2 items-center opacity-50"><div className="w-2 h-2 bg-white rounded-full"></div><div className="w-2 h-2 bg-white rounded-full"></div></div>

            <img src={reel.image} alt={reel.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 sepia-[.3] group-hover:sepia-0" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#F4EBD9] flex items-center justify-center bg-[#4A3B32]/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <Play className="fill-[#F4EBD9] text-[#F4EBD9] ml-1" />
              </div>
            </div>

            <div className="absolute bottom-6 left-0 p-6 w-full text-center">
              <h3 className="font-heading text-2xl text-[#F4EBD9] tracking-wide shadow-black drop-shadow-md">{reel.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;