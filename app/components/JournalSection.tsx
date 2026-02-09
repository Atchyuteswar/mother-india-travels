'use client';

import React from 'react';
import { ArrowRight, Feather } from 'lucide-react';

const ARTICLES = [
  {
    category: "Field Notes",
    date: "Oct 12, 2025",
    title: "5 Hidden Cafes in Jaipur",
    excerpt: "Beyond the forts and palaces, the Pink City hides a vibrant cafe culture in its ancient havelis...",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Reflections",
    date: "Nov 08, 2025",
    title: "Why Varanasi Changes You",
    excerpt: "It is not just a city; it is an experience of life and death co-existing on the ghats...",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "Travel Guide",
    date: "Dec 01, 2025",
    title: "Packing for the Himalayas",
    excerpt: "Don't let the cold surprise you. Here is the ultimate packing list for the wandering soul...",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop"
  }
];

const JournalSection = () => {
  return (
    <section className="bg-[#F4EBD9] py-24 px-6 border-t border-[#4A3B32]/10">
      <div className="mx-auto max-w-7xl">
        
        {/* Header - Newspaper Style */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-[#4A3B32] pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#D97706] mb-2">
              <Feather className="h-5 w-5" />
              <span className="font-body font-bold uppercase tracking-widest text-sm">From the Journal</span>
            </div>
            <h2 className="font-heading text-5xl text-[#4A3B32]">Stories from the Road</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#4A3B32] font-bold hover:text-[#D97706] transition-colors border-b border-transparent hover:border-[#D97706]">
            View All Entries <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              
              {/* Image - Simple Border */}
              <div className="mb-6 overflow-hidden border border-[#4A3B32]/20 p-1 bg-white shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full aspect-[4/3] object-cover filter sepia-[.3] group-hover:sepia-0 transition-all duration-700"
                />
              </div>

              {/* Meta Data */}
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-[#4A3B32]/50 mb-3 font-body">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 font-heading text-3xl text-[#4A3B32] group-hover:text-[#D97706] transition-colors leading-tight">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-4 font-body text-lg text-[#4A3B32]/80 leading-relaxed border-l-2 border-[#D97706]/30 pl-4">
                {article.excerpt}
              </p>

              {/* Read More Link */}
              <span className="inline-flex items-center gap-1 font-bold text-[#D97706] hover:gap-2 transition-all text-sm uppercase tracking-wider">
                Read Story <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;