'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { Quote, HandHeart, Leaf, Users, Heart, Compass, Star } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-[#4A3B32]/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-us/about-us-cover.jpg"
            alt="Varanasi Boats"
            className="w-full h-full object-cover sepia-[.3]"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4EBD9] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-heading text-7xl md:text-9xl text-[#F4EBD9] drop-shadow-lg mb-6">
              The Soul of India
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY (From your Image 1) */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Texture similar to your image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
          {/* Text Side */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="font-heading text-6xl text-[#4A3B32] mb-8">About Us</h2>
            <div className="font-body text-xl text-[#4A3B32]/80 space-y-6 leading-relaxed tracking-wide text-justify">
              <p>
                <span className="font-bold text-[#D97706]">Maa India Travels</span> was born out of the deep friendship and shared love for India between two friends: <span className="font-bold">Leo and Tanu</span>.
              </p>
              <p>
                Honoring the motherly spirit that gave birth to our unique bond as siblings, transcending cultural and geographical boundaries.
              </p>
              <p>
                Together, we have created a bridge for those who wish to immerse themselves in the vibrant culture, timeless traditions, and warm-hearted people of this sacred land.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 order-1 md:order-2 relative">
            <div className="relative p-2 border-2 border-[#4A3B32]/20 rounded-sm">
              <div className="aspect-[4/5] overflow-hidden bg-[#E6D5C0]">
                {/* REPLACE with your actual Leo & Tanu photo */}
                <img
                  src="/about-us/about-us.png"
                  alt="Leo and Tanu"
                  className="w-full h-full object-cover sepia-[.2]"
                />
              </div>
              {/* Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#D97706]" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#D97706]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEO'S STORY (From your Image 2) */}
      <section className="py-24 px-6 bg-[#E6D5C0]/30 relative">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">

          {/* Image Side (Left for variety) */}
          <div className="md:w-1/2 relative">
            <div className="relative p-2 border-2 border-[#4A3B32]/20 rounded-sm rotate-[-1deg]">
              <div className="aspect-[4/5] overflow-hidden bg-[#E6D5C0]">
                {/* REPLACE with Leo's Prayer Photo */}
                <img
                  src="/about-us/leo.png"
                  alt="Leo"
                  className="w-full h-full object-cover sepia-[.2]"
                />
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-heading text-6xl text-[#4A3B32] mb-8">Leo</h2>
            <div className="font-body text-xl text-[#4A3B32]/80 space-y-6 leading-relaxed text-justify">
              <p>
                Having lived in India for several years, Leo immersed herself in the study of <span className="text-[#D97706] font-bold">Yoga, Ayurveda, and Vedanta</span>. Her teachings during the travels guide participants to connect with the spirituality of this sacred land.
              </p>
              <p>
                With a vast knowledge of Indian mythology, symbolism, and ancient traditions, Leo offers a unique perspective on the stories and rituals that shape the culture, providing a deeper understanding of their meaning and relevance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TANU'S STORY (Matching Structure) */}
      <section className="py-24 px-6 relative">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">

          {/* Text Side */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h2 className="font-heading text-6xl text-[#4A3B32] mb-8">Tanu</h2>
            <div className="font-body text-xl text-[#4A3B32]/80 space-y-6 leading-relaxed text-justify">
              <p>
                Born and raised in the heart of the motherland, Tanu is the grounding force of our journeys. With a smile that opens doors and a spirit that navigates chaos with grace, he ensures that every traveler feels safe, welcomed, and seen.
              </p>
              <p>
                More than just a guide, Tanu is a storyteller of the streets, a keeper of local secrets, and the brother you never knew you had in India. He bridges the gap between observer and participant, turning strangers into family.
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="md:w-1/2 order-1 md:order-2 relative">
            <div className="relative p-2 border-2 border-[#4A3B32]/20 rounded-sm rotate-[1deg]">
              <div className="aspect-[4/5] overflow-hidden bg-[#E6D5C0]">
                {/* REPLACE with Tanu's Photo */}
                <img
                  src="/about-us/tanu.png"
                  alt="Tanu"
                  className="w-full h-full object-cover sepia-[.2]"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEW SECTION 1: THE MANIFESTO (Philosophy) --- */}
      <section className="py-24 px-6 bg-[#4A3B32] text-[#F4EBD9] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <Leaf className="w-12 h-12 mx-auto mb-6 text-[#D97706]" />
          <h2 className="font-heading text-5xl md:text-6xl mb-12">Not a Tour. A Pilgrimage.</h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6 border-r border-[#D97706]/30 pr-6">
              <h3 className="font-body font-bold text-3xl text-[#D97706]">The Tourist</h3>
              <ul className="font-body text-lg opacity-70 space-y-4 list-disc pl-5">
                <li>Sees India through a bus window.</li>
                <li>Eats at continental buffets.</li>
                <li>Takes photos of locals without asking.</li>
                <li>Checks boxes off a list.</li>
              </ul>
            </div>
            <div className="space-y-6 pl-6">
              <h3 className="font-body font-bold text-3xl text-[#F4EBD9]">The Mother India Traveler</h3>
              <ul className="font-body text-lg space-y-4 list-disc pl-5 text-[#F4EBD9]">
                <li>Walks the alleyways to find hidden temples.</li>
                <li>Breaks bread with local families.</li>
                <li>Learns the stories behind the faces.</li>
                <li>Leaves a piece of their heart behind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative bg-[#E6D5C0]/30">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-6xl text-[#4A3B32] mb-4">Feedback</h2>
            <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1: LAURA */}
            <div className="bg-[#F4EBD9] p-8 shadow-xl border border-[#4A3B32]/10 relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="w-10 h-10 text-[#D97706] opacity-20 mb-4" />

              <div className="h-[200px] w-full mb-6 overflow-hidden rounded-sm border border-[#4A3B32]/20">
                {/* Replace src with "/images/laura.jpg" */}
                <img src="/feedback/laura.png" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop"} className="w-full h-full object-cover sepia-[.3]" alt="Laura" />
              </div>

              <p className="font-body text-[#4A3B32]/80 text-lg mb-6 leading-relaxed">
                "My trip to India was magical... Together, Leo and Tanu created the perfect balance of spiritual connection and cultural immersion. Their teamwork and genuine care made the trip unforgettable. I left India with a deeper appreciation for its culture."
              </p>

              <div className="border-t border-[#D97706]/20 pt-4 text-center">
                <h4 className="font-body font-bold text-2xl text-[#4A3B32]">Laura</h4>
                <p className="text-xs uppercase tracking-widest text-[#D97706] mt-1">Trip to North India 2022</p>
              </div>
            </div>

            {/* CARD 2: CAROLINA */}
            <div className="bg-[#F4EBD9] p-8 shadow-xl border border-[#4A3B32]/10 relative group hover:-translate-y-2 transition-transform duration-500 z-10 md:-mt-8">
              <Quote className="w-10 h-10 text-[#D97706] opacity-20 mb-4" />

              <div className="h-[200px] w-full mb-6 overflow-hidden rounded-sm border border-[#4A3B32]/20">
                {/* Replace src with "/images/carolina.jpg" */}
                <img src="/feedback/carolina.png" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"} className="w-full h-full object-cover sepia-[.3]" alt="Carolina" />
              </div>

              <p className="font-body text-[#4A3B32]/80 text-lg mb-6 leading-relaxed">
                "India called me through Leo’s guidance. I came back completely surrendered to this new India. Leo is truly the perfect person to take us there... she’s practically Indian! I felt super safe, warmly welcomed, and perfectly guided."
              </p>

              <div className="border-t border-[#D97706]/20 pt-4 text-center">
                <h4 className="font-body font-bold text-2xl text-[#4A3B32]">Carolina</h4>
                <p className="text-xs uppercase tracking-widest text-[#D97706] mt-1">Trip to North India 2022</p>
              </div>
            </div>

            {/* CARD 3: ELSA */}
            <div className="bg-[#F4EBD9] p-8 shadow-xl border border-[#4A3B32]/10 relative group hover:-translate-y-2 transition-transform duration-500">
              <Quote className="w-10 h-10 text-[#D97706] opacity-20 mb-4" />

              <div className="h-[200px] w-full mb-6 overflow-hidden rounded-sm border border-[#4A3B32]/20">
                {/* Replace src with "/images/elsa.jpg" */}
                <img src="/feedback/elsa.png" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"} className="w-full h-full object-cover sepia-[.3]" alt="Elsa" />
              </div>

              <p className="font-body text-[#4A3B32]/80 text-lg mb-6 leading-relaxed">
                "Traveling to India with Leo was the trip of my life. I always felt extremely guided and supported. We lived unique moments! I didn’t return the same person. Thank you, Leo, for your tenderness and for always keeping calm."
              </p>

              <div className="border-t border-[#D97706]/20 pt-4 text-center">
                <h4 className="font-body font-bold text-2xl text-[#4A3B32]">Elsa</h4>
                <p className="text-xs uppercase tracking-widest text-[#D97706] mt-1">Trip to North India 2022</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: OUR DHARMA (Giving Back) --- */}
      <section className="py-24 px-6 bg-[#4A3B32] text-[#F4EBD9] border-t border-[#F4EBD9]/10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16">
          
          {/* IMAGE SIDE (The Empty Circle) */}
          <div className="md:w-1/2 relative">
             <div className="relative w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-[#D97706]/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#2A1B12]">
                  {/* 🟢 NEW IMAGE: Artisan Hands molding clay (Pottery) */}
                  <img 
                    src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&auto=format&fit=crop"
                    onError={(e) => e.currentTarget.src="https://images.unsplash.com/photo-1590615370581-265ae1d21e43?q=80&w=800&auto=format&fit=crop"} // Fallback
                    alt="Indian artisan hands creating pottery" 
                    className="w-full h-full object-cover sepia-[.2] hover:scale-110 transition-transform duration-700"
                  />
                </div>
             </div>
          </div>
          
          {/* TEXT SIDE */}
          <div className="md:w-1/2">
             <div className="flex items-center gap-2 mb-4 text-[#D97706]">
                <HandHeart className="w-6 h-6" />
                <span className="font-body font-bold tracking-widest uppercase text-lg">Our Dharma</span>
             </div>
             <h2 className="font-heading text-5xl mb-6">Empowering the Hands that Create</h2>
             <p className="font-body text-xl opacity-80 mb-6 leading-relaxed">
               We believe that travel should heal, not harm. A portion of every journey goes directly to supporting the local artisan communities in Rajasthan and the ashrams in Rishikesh.
             </p>
             <p className="font-body text-xl opacity-80 leading-relaxed">
               When you travel with Mother India, you aren't just a spectator—you become a patron of the arts and a guardian of tradition.
             </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}