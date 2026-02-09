'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Map } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F4EBD9] text-center text-[#4A3B32]">
      
      {/* Background Image - Sepia Filter applied */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Lost in the mountains"
          className="h-full w-full object-cover opacity-20 sepia contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4EBD9] via-[#F4EBD9]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Vintage Icon */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#4A3B32]/30 bg-[#F4EBD9]/80 backdrop-blur-sm shadow-xl"
          >
            <Compass className="h-12 w-12 text-[#D97706]" strokeWidth={1.5} />
          </motion.div>

          <h1 className="mb-2 font-heading text-8xl md:text-9xl text-[#4A3B32] opacity-90">
            404
          </h1>
          
          <h2 className="mb-6 font-heading text-3xl md:text-4xl text-[#4A3B32]">
            You have wandered off the path.
          </h2>
          
          <p className="mb-10 max-w-md font-body text-xl text-[#4A3B32]/70 italic">
            "Not all who wander are lost, but this page seems to be."
          </p>

          <Link 
            href="/"
            className="group flex items-center gap-3 border-b-2 border-[#D97706] pb-1 text-xl font-bold uppercase tracking-widest text-[#D97706] hover:text-[#4A3B32] hover:border-[#4A3B32] transition-all"
          >
            <Map className="h-5 w-5" />
            Return to Safety
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 text-xs font-body uppercase tracking-widest text-[#4A3B32]/40 z-10">
        Mother India Travels • Est. 2024
      </div>
    </div>
  );
}