import React from 'react';  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReelsSection from "../components/ReelsSection";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none" />
        <h1 className="font-heading text-7xl md:text-9xl text-[#4A3B32] mb-6">The Experience</h1>
        <p className="font-body text-2xl md:text-3xl text-[#4A3B32]/70 italic max-w-3xl mx-auto">
          "We don't just show you India. We invite you to become a part of its story."
        </p>
      </section>

      {/* Video Reels Section */}
      <ReelsSection />

      {/* The Timeline / Path */}
      <section className="py-24 px-6 relative">
        <div className="mx-auto max-w-4xl border-l-2 border-[#D97706]/30 pl-8 md:pl-16 space-y-24">
          
          {[
            { title: "Arrival", desc: "A warm welcome with marigold garlands and ancient rituals." },
            { title: "Immersion", desc: "Workshops with local artisans, cooking lessons in village homes." },
            { title: "Connection", desc: "Late night bonfires, storytelling, and finding family in strangers." },
            { title: "Departure", desc: "Leaving with a bag full of souvenirs and a heart full of memories." }
          ].map((item, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] md:-left-[73px] top-2 h-5 w-5 rounded-full bg-[#D97706] border-4 border-[#F4EBD9]" />
              
              <h3 className="font-heading text-4xl text-[#4A3B32] mb-4">{item.title}</h3>
              <p className="font-body text-xl text-[#4A3B32]/80 leading-relaxed max-w-xl">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}