'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Map, Sun } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const DESTINATIONS = [
  {
    id: 1,
    name: "Royal Rajasthan",
    description: "Land of Kings, forts, and vibrant deserts.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2", // Wide card
  },
  {
    id: 2,
    name: "Serene Kerala",
    description: "Backwaters, houseboats, and green tea hills.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-1", // Tall/Normal card
  },
  {
    id: 3,
    name: "Spiritual Varanasi",
    description: "The city of lights, ghats, and ancient rituals.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    name: "Hidden Northeast",
    description: "Undiscovered mountains and living root bridges.",
    image: "https://images.unsplash.com/photo-1589041120968-45ec2d1b7b7a?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  }
];

export default function PersonalizedTrips() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Navbar />
      <section className="relative py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <span className="mb-4 inline-block rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 border border-orange-500/30">
            Tailor-Made Journeys
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Your Dream, <span className="text-orange-500">Designed by Us.</span>
          </h1>
          <p className="text-lg text-neutral-400">
            Choose a region, tell us your vibe, and we'll craft an itinerary that fits you perfectly.
          </p>
        </motion.div>
      </section>

      {/* 2. Bento Grid of Destinations */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid gap-4 md:grid-cols-3 auto-rows-[300px]">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[32px] bg-neutral-800 ${dest.colSpan}`}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{dest.name}</h3>
                    <p className="mt-2 text-sm text-neutral-300">{dest.description}</p>
                  </div>
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-md transition-transform group-hover:-rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Steps to Customize */}
      <section className="bg-neutral-800 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { icon: <Map />, title: "Pick a Region", desc: "Select from our curated list or suggest your own." },
              { icon: <Compass />, title: "Consultation", desc: "We discuss your preferences, budget, and pace." },
              { icon: <Sun />, title: "We Handle It All", desc: "Hotels, transport, and experiences booked for you." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}