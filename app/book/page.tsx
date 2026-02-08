'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Shield, CreditCard, Calendar } from 'lucide-react';
import FAQ from '../components/FAQ'

export default function BookNow() {
  const [trip, setTrip] = useState('');

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <Navbar />

      <div className="pt-32 pb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN: The Booking Form */}
            <div className="bg-neutral-800 p-8 rounded-[40px] shadow-2xl border border-white/5">
              <h1 className="text-3xl font-bold mb-2">Secure Your Spot</h1>
              <p className="text-neutral-400 mb-8">Fill in the details below to start your journey.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                    <input type="text" className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none" placeholder="Adarsh" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                    <input type="text" className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none" placeholder="Yerram" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
                  <input type="email" className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Which Trip?</label>
                  <select 
                    value={trip} 
                    onChange={(e) => setTrip(e.target.value)}
                    className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none appearance-none"
                  >
                    <option value="" disabled>Select a journey...</option>
                    <option value="himalayas">The Himalayan Escape (April)</option>
                    <option value="varanasi">Spiritual Varanasi (May)</option>
                    <option value="rajasthan">Royal Rajasthan (Sept)</option>
                    <option value="kerala">Kerala Backwaters (Oct)</option>
                    <option value="custom">I want a Personalized Trip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Number of Travelers</label>
                  <input type="number" min="1" className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none" placeholder="1" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Special Requests / Dietary Restrictions</label>
                  <textarea rows={4} className="w-full rounded-2xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-white focus:border-orange-500 focus:outline-none" placeholder="Vegetarian, window seat, etc..."></textarea>
                </div>

                <button type="submit" className="w-full rounded-full bg-orange-600 py-4 text-lg font-bold text-white hover:bg-orange-700 transition-all hover:scale-[1.02] shadow-lg shadow-orange-900/20">
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* RIGHT COLUMN: Information & Trust (Fills up the page) */}
            <div className="flex flex-col justify-center space-y-8 lg:pl-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">What happens next?</h2>
                <div className="space-y-6">
                  {[
                    { title: "We Review", desc: "Leo or Tanu will personally review your request within 24 hours." },
                    { title: "Confirmation", desc: "You'll receive a detailed itinerary PDF and payment link via email." },
                    { title: "Onboarding", desc: "We add you to the trip WhatsApp group to meet fellow travelers." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 font-bold text-black">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{item.title}</h3>
                        <p className="text-neutral-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-neutral-800/50 p-6 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Why book directly?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <Shield className="h-5 w-5 text-green-500" /> Best Price Guarantee
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CreditCard className="h-5 w-5 text-blue-500" /> Secure Payment
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle className="h-5 w-5 text-orange-500" /> 24/7 Support during trip
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <FAQ />

      <Footer />
    </main>
  );
}