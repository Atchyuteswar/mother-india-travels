'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Loader2 } from 'lucide-react';

// --- YOUR DATA ---
const REELS = [
  { 
    id: 1, 
    title: "Our last trip to the south", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-1.jpg",
    videoUrl: "https://www.instagram.com/reel/DTnO9V-jbsC/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" 
  },
  { 
    id: 2, 
    title: "The people of India", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-2.jpg",
    videoUrl: "https://www.instagram.com/reel/DSh5JlIjfBL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" // Placeholder (Reuse same link to test)
  },
  { 
    id: 3, 
    title: "Goa, the Pearl of the Orient", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-3.jpg",
    videoUrl: "https://www.instagram.com/reel/DPzL89kjdV8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 4, 
    title: "Kerala Backwaters", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-4.jpg",
    videoUrl: "https://www.instagram.com/reel/DPjPCW4DXHR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 5, 
    title: "Mumbai is named after Mumba Devi,...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-5.jpg",
    videoUrl: "https://www.instagram.com/reel/DOvnIBvjda7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 6, 
    title: "This Diwali, step into the heart of...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-6.jpg",
    videoUrl: "https://www.instagram.com/reel/DOWHwVSjUhh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 7, 
    title: "Travelling to India awakens all your...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-7.jpg",
    videoUrl: "https://www.instagram.com/reel/DNB2tpUNkgg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 8, 
    title: "India, I got lost in its lands and...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-8.jpg",
    videoUrl: "https://www.instagram.com/reel/DL7aGxJTbOB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 9, 
    title: "Desde o primeiro instante, há...", 
    category: "Cuisine",
    image: "/reel-thumb/thumb-9.jpg",
    videoUrl: "https://www.instagram.com/reel/DIn2VT_MLMV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 10, 
    title: "India is not just a place you...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-10.jpg",
    videoUrl: "https://www.instagram.com/reel/DHyGRmhsTz8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 11, 
    title: "Why do we see so many cows...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-11.jpg",
    videoUrl: "https://www.instagram.com/reel/DHTvQXNTSqP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 12, 
    title: "Soham (सोऽहम्) is a Sanskrit...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-12.jpg",
    videoUrl: "https://www.instagram.com/reel/DHOyTrDzo8W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 13, 
    title: "Holi, the festival of colours, a...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-13.jpg",
    videoUrl: "https://www.instagram.com/reel/DHL9Vw9zh7V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 14, 
    title: "A day of Holi cultural and spiritual...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-14.jpg",
    videoUrl: "https://www.instagram.com/reel/DHFxUWAJ9HY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 15, 
    title: "Holi cultural and spiritual immersion...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-15.jpg",
    videoUrl: "https://www.instagram.com/reel/DHAczpAp5aT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 16, 
    title: "The vibrant and busy streets of...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-16.jpg",
    videoUrl: "https://www.instagram.com/reel/DFk8G3QtwUV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 17, 
    title: "Grateful to Mother India for all...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-17.jpg",
    videoUrl: "https://www.instagram.com/reel/DEsBUVnt1hf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 18, 
    title: "Guiding groups to travel India is...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-18.jpg",
    videoUrl: "https://www.instagram.com/reel/DDHWVLWMEB0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 19, 
    title: "We journey alone, far from home...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-19.jpg",
    videoUrl: "https://www.instagram.com/reel/DCxA1XWMNup/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  { 
    id: 20, 
    title: "In one of the many beautiful...", 
    category: "motherindiatravels",
    image: "/reel-thumb/thumb-20.jpg",
    videoUrl: "https://www.instagram.com/reel/DCcB60pM5TJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
];

// --- SMART LINK CLEANER ---
const getEmbedUrl = (url: string) => {
  try {
    // 1. Extract the unique Reel ID (DTnO9V-jbsC) using Regex
    // This ignores all the ?utm_source junk at the end
    const match = url.match(/\/reel\/([a-zA-Z0-9_-]+)/);
    
    if (match && match[1]) {
      // 2. Return the clean Player URL
      return `https://www.instagram.com/reel/${match[1]}/embed/`; 
    }
  } catch (e) {
    console.error("Link error", e);
  }
  return url; 
};

const ReelsSection = () => {
  const [selectedReel, setSelectedReel] = useState<typeof REELS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="bg-[#4A3B32] py-24 overflow-hidden relative border-t border-[#F4EBD9]/10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
             <h2 className="font-heading text-5xl text-[#F4EBD9]">The Archives</h2>
          </div>
          <div className="hidden md:block text-[#F4EBD9]/40 text-sm font-body italic">
            Select a reel to watch &rarr;
          </div>
        </div>

        {/* --- CAROUSEL SCROLL --- */}
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {REELS.map((reel, i) => (
            <motion.div 
              key={reel.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedReel(reel);
                setIsLoading(true);
              }}
              className="snap-center shrink-0 relative w-[280px] h-[500px] group cursor-pointer"
            >

              {/* Cover Image */}
              <div className="absolute inset-[12px] overflow-hidden bg-black">
                <img 
                  src={reel.image} 
                  alt={reel.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 sepia-[.4] group-hover:sepia-0" 
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                  <div className="w-16 h-16 rounded-full border-2 border-[#F4EBD9]/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="fill-[#F4EBD9] text-[#F4EBD9] ml-1" />
                  </div>
                </div>

                {/* Text Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent pt-12">
                   <p className="text-[#D97706] text-xs uppercase tracking-widest mb-1">{reel.category}</p>
                   <h3 className="font-body font-bold text-2xl text-[#F4EBD9] leading-tight">{reel.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- CINEMA MODAL (Plays on Site) --- */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
            onClick={() => setSelectedReel(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-[#F4EBD9]/50 hover:text-[#D97706] transition-colors z-50 flex items-center gap-2">
              <span className="uppercase tracking-widest text-xs font-bold">Close</span>
              <X className="w-8 h-8" />
            </button>

            {/* Video Player Wrapper */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-[400px] h-[80vh] bg-black rounded-lg overflow-hidden shadow-2xl border border-[#4A3B32]"
            >
               {/* Loading Spinner */}
               {isLoading && (
                 <div className="absolute inset-0 flex items-center justify-center z-0">
                   <Loader2 className="w-10 h-10 text-[#D97706] animate-spin" />
                 </div>
               )}

               {/* INSTAGRAM EMBED PLAYER */}
               <iframe 
                 src={getEmbedUrl(selectedReel.videoUrl)}
                 className="w-full h-full relative z-10"
                 frameBorder="0"
                 allowFullScreen
                 scrolling="no"
                 onLoad={() => setIsLoading(false)}
                 allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                 title="Instagram Reel"
               ></iframe>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ReelsSection;