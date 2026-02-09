import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ"; // Make sure FAQ.tsx is updated first!
import { Calendar, CheckCircle } from 'lucide-react';

export default function Book() {
  return (
    <main className="min-h-screen bg-[#F4EBD9] text-[#4A3B32]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="font-heading text-6xl md:text-8xl text-[#4A3B32] mb-6">Begin Your Journey</h1>
        <p className="font-body text-2xl text-[#4A3B32]/70 max-w-2xl mx-auto italic">
          "Reserve your place in history."
        </p>
      </section>

      <section className="py-12 px-6">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-2 gap-12">
          
          {/* Left: The Ledger Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-[#D97706]">
            <h2 className="font-heading text-3xl text-[#4A3B32] mb-8">Reservation Request</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body font-bold text-[#4A3B32] mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#F4EBD9]/30 border border-[#4A3B32]/20 p-3 focus:border-[#D97706] focus:outline-none font-body" />
                </div>
                <div>
                  <label className="block font-body font-bold text-[#4A3B32] mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#F4EBD9]/30 border border-[#4A3B32]/20 p-3 focus:border-[#D97706] focus:outline-none font-body" />
                </div>
              </div>

              <div>
                <label className="block font-body font-bold text-[#4A3B32] mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#F4EBD9]/30 border border-[#4A3B32]/20 p-3 focus:border-[#D97706] focus:outline-none font-body" />
              </div>

              <div>
                <label className="block font-body font-bold text-[#4A3B32] mb-2">Select Trip</label>
                <select className="w-full bg-[#F4EBD9]/30 border border-[#4A3B32]/20 p-3 focus:border-[#D97706] focus:outline-none font-body text-[#4A3B32]">
                  <option>Himalayan Escape (April)</option>
                  <option>Spiritual Varanasi (May)</option>
                  <option>Royal Rajasthan (Sept)</option>
                  <option>Kerala Backwaters (Oct)</option>
                </select>
              </div>

              <button className="w-full bg-[#4A3B32] text-[#F4EBD9] py-4 font-heading text-xl hover:bg-[#D97706] transition-colors mt-4">
                Confirm Reservation
              </button>
              
              <p className="text-center text-xs font-body uppercase tracking-widest text-[#4A3B32]/40 mt-4">
                Secure Booking • No Payment Required Yet
              </p>
            </form>
          </div>

          {/* Right: Trust Indicators */}
          <div className="flex flex-col justify-center space-y-8">
             <div className="bg-[#E6D5C0] p-8 border border-[#4A3B32]/10">
               <h3 className="font-heading text-2xl text-[#4A3B32] mb-4">Why Book With Us?</h3>
               <ul className="space-y-4 font-body text-lg text-[#4A3B32]/80">
                 <li className="flex items-center gap-3">
                   <CheckCircle className="h-5 w-5 text-[#D97706]" /> Small groups (Max 12 people)
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="h-5 w-5 text-[#D97706]" /> Hand-picked heritage stays
                 </li>
                 <li className="flex items-center gap-3">
                   <CheckCircle className="h-5 w-5 text-[#D97706]" /> 24/7 Support from Founders
                 </li>
               </ul>
             </div>

             <div className="text-center p-8 border-2 border-dashed border-[#4A3B32]/20">
               <Calendar className="h-10 w-10 text-[#D97706] mx-auto mb-4" />
               <p className="font-body text-xl text-[#4A3B32] italic">
                 "Travel is the only thing you buy that makes you richer."
               </p>
             </div>
          </div>

        </div>
      </section>

      {/* Add the FAQ Section here */}
      <FAQ />

      <Footer />
    </main>
  );
}