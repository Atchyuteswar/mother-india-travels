'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, X, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Data with FULL DETAILS (Paste PDF text here later)
const TRIPS = [
  {
    id: 1,
    title: "The Himalayan Escape", 
    location: "Himachal Pradesh",
    date: "April 10 - 15, 2026",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop", 
    price: "₹18,999",
    description: "Experience the serene beauty of the Himalayas. From the bustling streets of Manali to the quiet solitude of Spiti Valley.",
    itinerary: [
      "Day 1: Arrival in Manali. Acclimatization walk.",
      "Day 2: Drive to Rohtang Pass. Snow activities.",
      "Day 3: Camping at Chandratal Lake.",
      "Day 4: Visit Key Monastery and Kibber Village.",
      "Day 5: Return drive with scenic stops."
    ]
  },
  {
    id: 2,
    title: "Spiritual Varanasi", 
    location: "Varanasi, UP",
    date: "May 05 - 08, 2026",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2000&auto=format&fit=crop",
    price: "₹12,499",
    description: "Witness the oldest living city in the world. attending the Ganga Aarti and boat rides at sunrise.",
    itinerary: [
      "Day 1: Arrival and evening Ganga Aarti.",
      "Day 2: Sunrise boat ride and temple tour.",
      "Day 3: Sarnath excursion and silk weaving tour.",
      "Day 4: Departure."
    ]
  },
  {
    id: 3,
    title: "Royal Rajasthan", 
    location: "Jaipur & Udaipur",
    date: "Sep 12 - 18, 2026",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop",
    price: "₹24,999",
    description: "Live like royalty. Visit the Amber Fort, City Palace, and enjoy authentic Rajasthani cuisine.",
    itinerary: [
      "Day 1: Jaipur arrival. Chowki Dhani dinner.",
      "Day 2: Amber Fort and Hawa Mahal.",
      "Day 3: Drive to Udaipur via Pushkar.",
      "Day 4: Udaipur City Palace and Lake Pichola.",
      "Day 5: Shopping and Departure."
    ]
  },
  {
    id: 4,
    title: "Kerala Backwaters", 
    location: "Alleppey",
    date: "Oct 02 - 06, 2026",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    price: "₹21,000",
    description: "Relax on a houseboat as you drift through the palm-fringed canals of God's Own Country.",
    itinerary: [
      "Day 1: Kochi arrival and transfer to Munnar.",
      "Day 2: Munnar Tea Gardens tour.",
      "Day 3: Drive to Alleppey. Houseboat check-in.",
      "Day 4: Backwater cruise and village walk.",
      "Day 5: Departure from Kochi."
    ]
  }
];

const GroupTravels = () => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-neutral-900 py-20 text-white" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Upcoming <span className="text-orange-500">Group Trips</span>
            </h2>
            <p className="mt-2 text-neutral-400">Curated experiences for the wandering soul.</p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRIPS.map((trip) => (
            <motion.div 
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              onClick={() => setSelectedTrip(trip)}
              className="group relative flex h-[400px] cursor-pointer flex-col justify-end overflow-hidden rounded-[32px] bg-neutral-800"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="relative z-10 p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-orange-400">
                  <Calendar className="h-3 w-3" />
                  {trip.date}
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">{trip.title}</h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <span className="text-lg font-bold">{trip.price}</span>
                  <div className="rounded-full bg-white p-2 text-black"><ArrowRight className="h-4 w-4" /></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL POPUP */}
        <AnimatePresence>
          {selectedTrip && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTrip(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              {/* Modal Content */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[40px] bg-neutral-900 border border-white/10 shadow-2xl no-scrollbar"
              >
                {/* Modal Image Header */}
                <div className="relative h-64 w-full">
                  <img src={selectedTrip.image} className="h-full w-full object-cover" />
                  <button 
                    onClick={() => setSelectedTrip(null)}
                    className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900 to-transparent p-8">
                    <h3 className="text-3xl font-bold text-white">{selectedTrip.title}</h3>
                    <p className="text-orange-400 font-medium">{selectedTrip.date}</p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8">
                  <p className="text-lg text-neutral-300 mb-6">{selectedTrip.description}</p>
                  
                  <h4 className="text-xl font-bold text-white mb-4">Itinerary Highlights</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedTrip.itinerary.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-400">
                        <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-sm text-neutral-500">Total Price</p>
                      <p className="text-3xl font-bold text-white">{selectedTrip.price}</p>
                    </div>
                    <Link href="/book">
                      <button className="rounded-full bg-orange-600 px-8 py-3 font-bold text-white hover:bg-orange-700 transition-colors">
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