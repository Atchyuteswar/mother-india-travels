'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Heart, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Placeholder data for Founders based on doc 
const FOUNDERS = [
  {
    name: "Leo",
    role: "Co-Founder & Explorer",
    bio: "Leo believes in the raw, unfiltered beauty of India. He curates the adventures that take you off the map.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" // Placeholder
  },
  {
    name: "Tanu",
    role: "Co-Founder & Curator",
    bio: "Tanu ensures every journey has a soul. From heritage stays to local cuisine, she handles the details.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" // Placeholder
  }
];

const TESTIMONIALS = [
  {
    text: "I never thought I'd see Varanasi like this. Leo and Tanu didn't just show us the city; they showed us its heart.",
    author: "Sarah J.",
    location: "USA"
  },
  {
    text: "The personalized itinerary was perfect. Every hotel was a gem, and the drivers were so professional.",
    author: "Rahul M.",
    location: "Bangalore"
  },
  {
    text: "A life-changing experience. The group vibe was amazing, and I felt safe the entire time.",
    author: "Elena R.",
    location: "Spain"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Navbar />

      {/* 1. Hero: The Mission */}
      <section className="relative py-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Our Story
          </h1>
          <p className="text-lg text-neutral-400">
            Mother India Travels was born from a simple idea: To move beyond sightseeing and embrace <span className="text-orange-500">soul-seeing</span>.
          </p>
        </motion.div>
      </section>

      {/* 2. Meet the Founders (Leo & Tanu) */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <motion.div 
                key={founder.name}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[40px] bg-neutral-800"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white">{founder.name}</h3>
                  <p className="text-orange-400 font-medium mb-4">{founder.role}</p>
                  <p className="text-neutral-300">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feedback / Testimonials */}
      <section className="py-24 bg-neutral-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Heart className="mx-auto h-12 w-12 text-red-500 mb-6" />
          <h2 className="text-3xl font-bold mb-12">Stories from our Travelers</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="rounded-[24px] bg-neutral-900 p-8 text-left border border-white/5 shadow-xl hover:border-orange-500/30 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-xs text-neutral-500">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feedback Form CTA */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl rounded-[32px] bg-gradient-to-br from-orange-600 to-red-600 p-12 text-center text-white">
          <MessageCircle className="mx-auto h-10 w-10 mb-4 text-white/80" />
          <h2 className="text-2xl font-bold mb-4">Have you traveled with us?</h2>
          <p className="mb-8 text-orange-100">We would love to hear about your experience. Your feedback helps us grow.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-neutral-100 transition-colors shadow-lg">
            Leave Feedback
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}