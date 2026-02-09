'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, X, Stamp } from 'lucide-react';
import Link from 'next/link';

interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  price: string;
  description: string;
  itinerary: string[];
}

// Data remains the same...
const TRIPS: Trip[] = [
  {
    id: 1,
    title: "The Himalayan Escape", 
    location: "Himachal Pradesh",
    date: "April 10 - 15, 2026",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop", 
    price: "₹18,999",
    description: "Experience the serene beauty of the Himalayas. From the bustling streets of Manali to the quiet solitude of Spiti Valley.",
    itinerary: ["Day 1: Arrival in Manali", "Day 2: Rohtang Pass", "Day 3: Chandratal Lake", "Day 4: Key Monastery", "Day 5: Return"]
  },
  {
    id: 2,
    title: "Spiritual Varanasi", 
    location: "Varanasi, UP",
    date: "May 05 - 08, 2026",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2000&auto=format&fit=crop",
    price: "₹12,499",
    description: "Witness the oldest living city in the world. attending the Ganga Aarti and boat rides at sunrise.",
    itinerary: ["Day 1: Ganga Aarti", "Day 2: Sunrise Boat Ride", "Day 3: Sarnath Tour", "Day 4: Departure"]
  },
  {
    id: 3,
    title: "Royal Rajasthan", 
    location: "Jaipur & Udaipur",
    date: "Sep 12 - 18, 2026",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop",
    price: "₹24,999",
    description: "Live like royalty. Visit the Amber Fort, City Palace, and enjoy authentic Rajasthani cuisine.",
    itinerary: ["Day 1: Jaipur Arrival", "Day 2: Amber Fort", "Day 3: Drive to Udaipur", "Day 4: City Palace", "Day 5: Departure"]
  },
  {
    id: 4,
    title: "Kerala Backwaters", 
    location: "Alleppey",
    date: "Oct 02 - 06, 2026",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    price: "₹21,000",
    description: "Relax on a houseboat as you drift through the palm-fringed canals of God's Own Country.",
    itinerary: ["Day 1: Kochi Arrival", "Day 2: Munnar Tea Gardens", "Day 3: Houseboat Stay", "Day 4: Village Walk", "Day 5: Departure"]
  }
];

const GroupTravels = () => {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  return (
    <section className="bg-[#F4EBD9] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Vintage Style */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 border-b border-[#D97706] pb-1 mb-4">
            <Stamp className="h-5 w-5 text-[#D97706]" />
            <span className="font-body font-bold text-[#D97706] uppercase tracking-widest text-sm">Upcoming Departures</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl text-[#4A3B32]">Journeys & Retreats</h2>
        </div>

        {/* Postcard Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRIPS.map((trip) => (
            <motion.div 
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTrip(trip)}
              className="group cursor-pointer bg-white p-3 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-2xl border border-[#4A3B32]/10"
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden bg-gray-100 mb-4 border border-gray-200">
                <img 
                  src={trip.image} 
                  alt={trip.title} 
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 sepia-[.4] group-hover:sepia-0" 
                />
                <div className="absolute top-2 right-2 bg-[#F4EBD9] px-2 py-1 text-xs font-bold text-[#4A3B32] shadow-sm">
                  {trip.date}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-2 pb-2">
                <h3 className="font-body font-bold text-2xl text-[#4A3B32] mb-1 group-hover:text-[#D97706] transition-colors">
                  {trip.title}
                </h3>
                <div className="flex justify-center items-center gap-2 text-[#4A3B32]/60 font-body text-sm italic mb-3">
                  <MapPin className="h-3 w-3" />
                  {trip.location}
                </div>
                <div className="border-t border-[#4A3B32]/10 pt-3 flex justify-between items-center">
                  <span className="font-bold text-[#4A3B32] font-body text-lg">{trip.price}</span>
                  <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold border-b border-[#D97706]">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL (Same logic, updated style) */}
        <AnimatePresence>
          {selectedTrip && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTrip(null)}
                className="absolute inset-0 bg-[#4A3B32]/60 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`trip-${selectedTrip.id}`}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#F4EBD9] p-2 shadow-2xl"
              >
                {/* Vintage Border Wrapper */}
                <div className="border-2 border-double border-[#4A3B32]/20 p-6 h-full bg-[#F4EBD9]">
                  
                  <button onClick={() => setSelectedTrip(null)} className="absolute top-6 right-6 text-[#4A3B32] hover:text-[#D97706]">
                    <X className="h-6 w-6" />
                  </button>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <img src={selectedTrip.image} className="w-full md:w-1/3 h-48 object-cover sepia-[.2] border border-[#4A3B32]/20 p-1 bg-white" />
                    <div>
                       <h3 className="font-heading text-4xl text-[#4A3B32] mb-2">{selectedTrip.title}</h3>
                       <p className="font-body text-xl text-[#D97706] italic mb-4">{selectedTrip.date}</p>
                       <p className="font-body text-lg text-[#4A3B32]/80 leading-relaxed">{selectedTrip.description}</p>
                    </div>
                  </div>

                  <h4 className="font-heading text-2xl text-[#4A3B32] mb-4 border-b border-[#4A3B32]/10 pb-2">Itinerary</h4>
                  <ul className="space-y-3 mb-8 font-body text-lg text-[#4A3B32]/80">
                    {selectedTrip.itinerary.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#D97706] font-bold">Day {i+1}:</span> {item.split(': ')[1]}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#4A3B32]/10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#4A3B32]/50">Total Price</p>
                      <p className="font-heading text-3xl text-[#4A3B32]">{selectedTrip.price}</p>
                    </div>
                    <Link href="/book">
                      <button className="bg-[#4A3B32] text-[#F4EBD9] px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#D97706] transition-colors">
                        Book This Trip
                      </button>
                    </Link>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default GroupTravels;