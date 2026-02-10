'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const TRIPS = [
    {
        id: 1,
        title: "Holi",
        subtitle: "Trip To India",
        dates: "March 1 - 12, 2026",
        location: "Delhi • Agra • Jaipur • Rishikesh",
        //price: "₹34,999",
        description: "We invite you to join us on this journey through Mother India! We will dive into its teachings and spirituality, experiencing timeless rituals and ancestral customs, wandering through colorful markets and hidden trails,...",
        image: "/trips/trip-1.jpg", // Big Landscape Image
        tags: ["Heritage", "Festival", "Culture"],
        document: "/trips/trip-docs/Holi-Trip.pdf"
    },
    {
        id: 2,
        title: "Devi Darshan",
        subtitle: "Trip To India",
        dates: "October 09 - 21, 2026",
        location: "Delhi • Rishikesh • Varanasi • Kolkata",
        //price: "₹24,999",
        description: "We invite you on a journey not just across India, but into the heart of the Divine Feminine. Together we will visit sacred temples, join in the rhythms of dance and devotion, and experience the living presence of Devi in...",
        image: "/trips/trip-2.jpg",
        tags: ["Spirituality", "Culture", "Heritage"],
        document: "/trips/trip-docs/Devi-Darshan-Trip.pdf"
    },
    // {
    //     id: 3,
    //     title: "Himalayan Escape",
    //     subtitle: "Valley of Gods",
    //     dates: "Dec 15 - 22, 2026",
    //     location: "Manali • Kasol • Spiti",
    //     //price: "₹28,999",
    //     description: "Breathe in the crisp mountain air. A journey through snow-capped peaks, pine forests, and hidden monasteries. Reconnect with nature in its purest form.",
    //     image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    //     tags: ["Adventure", "Nature", "Trekking"],
    //     document: "/trips/trip-docs/Holi-Trip.pdf"
    // }
];

const FeaturedTrips = () => {
    return (
        <section className="py-24 px-6 bg-[#F4EBD9] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-2 text-[#D97706]">
                        <span className="font-heading tracking-widest uppercase text-md">Upcoming Departures</span>
                    </div>
                    <h2 className="font-heading text-6xl text-[#4A3B32] mb-6">Journeys & Retreats</h2>
                    <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full opacity-60" />
                </div>

                {/* TRIPS LIST - Alternating Layout */}
                <div className="space-y-24">
                    {TRIPS.map((trip, index) => (
                        <motion.div
                            key={trip.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            // 🔴 ADDED 'justify-center' HERE
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center justify-center`}
                        >

                            {/* 1. BIG IMAGE CARD */}
                            <div className="w-full lg:w-1/4 group cursor-pointer relative">
                                <div className="relative overflow-hidden rounded-sm shadow-2xl border-8 border-white bg-white transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1">

                                    {/* The Image */}
                                    <div className="aspect-[10/16] overflow-hidden">
                                        <img
                                            src={trip.image}
                                            alt={trip.title}
                                            className="w-full h-full object-cover sepia-[.15] group-hover:sepia-0 transition-all duration-1000 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Overlay Date Badge */}
                                    <div className="absolute top-6 left-6 bg-[#F4EBD9] text-[#4A3B32] px-2 py-1 font-heading tracking-widest uppercase text-xs border border-[#4A3B32]/20 shadow-lg">
                                        {trip.dates}
                                    </div>

                                    {/* "View Trip" Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="border border-[#F4EBD9] px-8 py-3 text-[#F4EBD9] font-heading uppercase tracking-widest backdrop-blur-sm">
                                            View Itinerary
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Shadow Box behind */}
                                <div className={`absolute top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-full h-full border-2 border-[#D97706]/30 -z-10 rounded-sm`} />
                            </div>

                            {/* 2. TRIP DETAILS */}
                            <div className="w-full lg:w-2/5 space-y-6 text-center lg:text-left">

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    {trip.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-[#4A3B32]/20 text-[#4A3B32]/60 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div>
                                    <h3 className="font-heading text-5xl text-[#4A3B32] mb-2">{trip.title}</h3>
                                    <p className="font-heading text-xl text-[#D97706] italic">{trip.subtitle}</p>
                                </div>

                                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#4A3B32]/70 font-body">
                                    <MapPin className="w-4 h-4 text-[#D97706]" />
                                    <span>{trip.location}</span>
                                </div>

                                <p className="font-body text-lg text-[#4A3B32]/80 leading-relaxed">
                                    {trip.description}
                                </p>

                                <div className="pt-4 flex items-center justify-center lg:justify-start gap-8">
                                    {/* <div>
                      <span className="block text-xs uppercase tracking-widest text-[#4A3B32]/50">Starting From</span>
                      <span className="font-heading text-3xl text-[#4A3B32]">{trip.price}</span>
                   </div> */}

                                    <Link
                                        href={trip.document}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#4A3B32] text-[#F4EBD9] px-6 py-3 rounded-sm font-heading tracking-widest uppercase text-sm hover:bg-[#D97706] transition-colors flex items-center gap-2 group"
                                    >
                                        Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedTrips;