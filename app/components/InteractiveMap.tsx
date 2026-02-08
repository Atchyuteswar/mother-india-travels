'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

// Data for the Hotspots
const REGIONS = [
  {
    id: 'north',
    name: "The Himalayas",
    description: "Snow-capped peaks, spiritual monasteries, and trekking trails.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
    top: "15%", // Adjust these % based on your map image
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
    id: 'northeast',
    name: "Hidden Northeast",
    description: "Living root bridges, clouds, and untouched nature.",
    image: "https://images.unsplash.com/photo-1589041120968-45ec2d1b7b7a?q=80&w=800&auto=format&fit=crop",
    top: "35%",
    left: "82%"
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
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]); // Default to North

  return (
    <section className="bg-neutral-900 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Explore by Region</h2>
          <p className="text-neutral-400">Click on a location to discover our curated destinations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: The Info Card (Updates when you click map) */}
          <div className="order-2 lg:order-1 h-full min-h-[300px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeRegion.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-800 rounded-[40px] overflow-hidden border border-white/5 shadow-2xl h-full flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={activeRegion.image} alt={activeRegion.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                      Destination
                    </span>
                    <h3 className="text-3xl font-bold text-white">{activeRegion.name}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                    {activeRegion.description}
                  </p>
                  <button className="group flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                    View Trips here <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: The Map Visual */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/5] lg:aspect-square bg-neutral-950/50 rounded-[40px] border border-white/5 p-4 flex items-center justify-center">
             
            {/* NOTE: You need a transparent PNG of India map for best results.
                If you don't have one, this SVGrepo link usually works well.
                Or you can just use a dark placeholder shape.
            */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/India_map_blank.svg/1414px-India_map_blank.svg.png" 
              alt="Map of India" 
              className="h-[90%] w-auto object-contain opacity-20 invert" // Invert makes it white-ish on dark mode
            />

            {/* Render Hotspots */}
            {REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region)}
                style={{ top: region.top, left: region.left }}
                className="absolute group transform -translate-x-1/2 -translate-y-1/2"
              >
                {/* Pulse Effect */}
                <span className={`absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping ${activeRegion.id === region.id ? 'block' : 'hidden'}`}></span>
                
                {/* The Dot */}
                <div className={`relative inline-flex items-center justify-center h-4 w-4 rounded-full transition-all duration-300 ${activeRegion.id === region.id ? 'bg-orange-500 scale-150' : 'bg-neutral-600 hover:bg-orange-400'}`}>
                  {activeRegion.id === region.id && <div className="h-1.5 w-1.5 bg-white rounded-full" />}
                </div>

                {/* Tooltip Label (Desktop only) */}
                <span className={`absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold transition-all duration-300 ${activeRegion.id === region.id ? 'text-white opacity-100 translate-x-0' : 'text-neutral-500 opacity-0 -translate-x-2'}`}>
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