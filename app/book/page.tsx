import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Feather, Send } from 'lucide-react';

export default function PersonalizedTrips() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-[#4A3B32]/10">
        <h1 className="font-heading text-6xl md:text-8xl text-[#4A3B32] mb-6">Bespoke Journeys</h1>
        <p className="font-body text-2xl text-[#4A3B32]/70 max-w-2xl mx-auto italic">
          "Tell us your dreams, and we shall weave them into an itinerary."
        </p>
      </section>

      {/* The "Paper Form" */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-[#F4EBD9] border-2 border-[#4A3B32]/20 p-8 md:p-12 shadow-2xl relative">
          
          {/* Decorative Corner */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#D97706]" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#D97706]" />

          <div className="flex items-center gap-3 mb-10 justify-center text-[#D97706]">
            <Feather className="h-6 w-6" />
            <span className="font-body font-bold uppercase tracking-widest text-sm">Trip Inquiry Form</span>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-body font-bold text-xl text-[#4A3B32]">Traveler's Name</label>
                <input type="text" className="w-full bg-transparent border-b border-[#4A3B32]/40 py-2 focus:outline-none focus:border-[#D97706] font-body text-xl" />
              </div>
              <div className="space-y-2">
                <label className="font-body font-bold text-xl text-[#4A3B32]">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-[#4A3B32]/40 py-2 focus:outline-none focus:border-[#D97706] font-body text-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-body font-bold text-xl text-[#4A3B32]">Destinations of Interest</label>
              <select className="w-full bg-transparent border-b border-[#4A3B32]/40 py-2 focus:outline-none font-body text-xl text-[#4A3B32]">
                <option>Rajasthan (Forts & Palaces)</option>
                <option>Kerala (Backwaters & Tea)</option>
                <option>Himalayas (Mountains & Peace)</option>
                <option>Varanasi (Spirituality)</option>
                <option>Other (Custom)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-body font-bold text-xl text-[#4A3B32]">Your Vision</label>
              <textarea 
                rows={4}
                placeholder="Describe your dream trip..."
                className="w-full bg-[#4A3B32]/5 border border-[#4A3B32]/20 p-4 focus:outline-none focus:border-[#D97706] font-body text-xl"
              ></textarea>
            </div>

            <div className="text-center pt-6">
              <button className="bg-[#4A3B32] text-[#F4EBD9] px-12 py-4 font-bold font-body text-lg uppercase tracking-widest hover:bg-[#D97706] transition-colors shadow-lg flex items-center gap-2 mx-auto">
                Submit Request <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}