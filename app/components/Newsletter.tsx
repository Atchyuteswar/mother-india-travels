import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-orange-600 py-20 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join the Tribe</h2>
        <p className="text-orange-100 mb-8">
          Get exclusive travel tips, hidden gem alerts, and early access to our group trips.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 rounded-full px-6 py-4 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="rounded-full bg-black text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors">
            Subscribe <Send className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-4 text-xs text-orange-200">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default Newsletter;