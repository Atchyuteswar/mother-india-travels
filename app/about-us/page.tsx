'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <span className="font-body font-bold tracking-[0.3em] text-[#D97706] uppercase text-sm mb-4 block">
          Since 2024
        </span>
        <h1 className="font-heading text-6xl md:text-8xl text-[#4A3B32] mb-8">
          The Story of Us
        </h1>
        <div className="h-px w-32 bg-[#4A3B32]/30 mx-auto" />
      </section>

      {/* The Narrative Section */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image - Polaroid Style */}
          <div className="relative rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-[#4A3B32] translate-x-4 translate-y-4" />
            <div className="relative bg-white p-4 border border-[#4A3B32]/10 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop" 
                alt="Leo and Tanu" 
                className="w-full h-auto filter sepia-[.3] contrast-110"
              />
              <p className="font-heading text-2xl text-center mt-4 text-[#4A3B32]">Leo & Tanu</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <Quote className="h-12 w-12 text-[#D97706]/30 mb-4" />
            <h2 className="font-heading text-4xl text-[#4A3B32] leading-tight">
              "Mother India Travels was born out of a deep friendship and a shared love for this sacred land."
            </h2>
            <div className="font-body text-xl text-[#4A3B32]/80 space-y-6 leading-relaxed text-justify">
              <p>
                Honoring the motherly spirit that gave birth to our unique bond as siblings, transcending cultural and geographical boundaries.
              </p>
              <p>
                Together, we have created a bridge for those who wish to immerse themselves in the vibrant culture, timeless traditions, and warm-hearted people of India. We don't just guide you; we welcome you into our family.
              </p>
            </div>
            
            {/* Signature Area */}
            <div className="pt-8">
              <p className="font-heading text-3xl text-[#D97706] opacity-80" style={{ fontFamily: 'cursive' }}>
                Leo & Tanu
              </p>
              <p className="font-body text-sm uppercase tracking-widest text-[#4A3B32]/50 mt-2">Founders</p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#E6D5C0] mt-24">
        <div className="mx-auto max-w-4xl text-center px-6">
           <h3 className="font-heading text-4xl text-[#4A3B32] mb-12">Our Vows to You</h3>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Authenticity", desc: "No tourist traps. Only real, raw India." },
               { title: "Kinship", desc: "You arrive as a guest, you leave as family." },
               { title: "Respect", desc: "We honor the land, the culture, and the people." }
             ].map((vow, i) => (
               <div key={i} className="border border-[#4A3B32]/20 p-8 hover:bg-[#F4EBD9] transition-colors">
                 <h4 className="font-heading text-2xl mb-4 text-[#D97706]">{vow.title}</h4>
                 <p className="font-body text-lg text-[#4A3B32]/80">{vow.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}