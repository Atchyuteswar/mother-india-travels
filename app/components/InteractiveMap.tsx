'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const REGIONS = [
  {
    id: 'north',
    name: "The Himalayas",
    description: "Snow-capped peaks, spiritual monasteries, and trekking trails.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    top: "15%",
    left: "32%"
  },
  {
    id: 'west',
    name: "Royal Rajasthan",
    description: "Land of kings, golden deserts, and massive forts.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop",
    top: "35%",
    left: "22%"
  },
  {
    id: 'central',
    name: "Varanasi & UP",
    description: "The spiritual heart of India along the Ganges.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
    top: "38%",
    left: "52%"
  },
  {
    id: 'south',
    name: "Kerala & South",
    description: "Backwaters, coffee plantations, and temple towns.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
    top: "85%",
    left: "35%"
  }
];

const InteractiveMap = () => {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <section className="bg-[#F4EBD9] py-24 overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="mb-12 text-center">
          <h2 className="font-heading text-5xl text-[#4A3B32] mb-4">Explore the Map</h2>
          <p className="font-body text-xl text-[#4A3B32]/70 italic">"Every corner of India tells a different story."</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: The "Field Note" Card */}
          <div className="order-2 lg:order-1 h-full min-h-[300px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: -20, rotate: -2 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: 20, rotate: 2 }}
                transition={{ duration: 0.4 }}
                // Vintage Card Style: Cream background, border, shadow
                className="bg-[#E6D5C0] p-4 rounded-sm shadow-xl border border-[#4A3B32]/20 rotate-1"
              >
                {/* Image like a Polaroid */}
                <div className="h-64 overflow-hidden relative border-b-4 border-[#F4EBD9]">
                  <img 
                    src={activeRegion.image} 
                    alt={activeRegion.name} 
                    className="w-full h-full object-cover sepia-[.3] hover:sepia-0 transition-all duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-[#F4EBD9] px-3 py-1 text-xs font-bold tracking-widest uppercase text-[#4A3B32] border border-[#4A3B32]/30 shadow-sm">
                    Field Note No. {REGIONS.indexOf(activeRegion) + 1}
                  </div>
                </div>
                
                <div className="p-6 bg-[#F4EBD9] border-t border-[#4A3B32]/10 mt-2">
                  <h3 className="font-heading text-4xl text-[#4A3B32] mb-3">{activeRegion.name}</h3>
                  <p className="font-body text-xl text-[#4A3B32]/80 mb-6 leading-relaxed">
                    {activeRegion.description}
                  </p>
                  <button className="group flex items-center gap-2 text-[#D97706] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                    View Itinerary <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: The Vintage Map */}
          <div className="order-1 lg:order-2 relative w-full aspect-square flex items-center justify-center p-8 bg-[#E6D5C0]/30 rounded-full border-2 border-dashed border-[#4A3B32]/10">
             
            {/* Map Image - Inverted to look like Ink on Paper */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_map_blank.svg/1414px-India_map_blank.svg.png" 
              alt="Map of India" 
              className="h-[90%] w-auto object-contain opacity-40 mix-blend-multiply filter sepia contrast-125" 
            />

            {/* Hotspots - Looking like Wax Seals or Pins */}
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                style={{ top: region.top, left: region.left }}
                className="absolute group transform -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pulse Ring */}
                <span className={`absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-40 animate-ping ${activeRegion.id === region.id ? 'block' : 'hidden'}`}></span>
                
                {/* The Pin */}
                <div className={`relative flex items-center justify-center h-6 w-6 rounded-full border-2 border-[#F4EBD9] shadow-md transition-all duration-300 ${activeRegion.id === region.id ? 'bg-[#D97706] scale-125' : 'bg-[#4A3B32] hover:bg-[#D97706]'}`}>
                  <div className="h-1.5 w-1.5 bg-[#F4EBD9] rounded-full" />
                </div>

                {/* Label (Typewriter style) */}
                <span className={`absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap font-body font-bold text-lg bg-[#F4EBD9] px-2 py-1 shadow-sm border border-[#4A3B32]/10 transition-all duration-300 ${activeRegion.id === region.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  {region.name}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;