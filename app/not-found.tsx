'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 text-center text-white">
      
      {/* 1. Background Image (Misty Mountains - NEW LINK) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Lost in the mountains"
          className="h-full w-full object-cover opacity-40"
        />
        {/* Gradient Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Rotating Compass Animation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-orange-500/30 bg-white/5 backdrop-blur-sm shadow-xl"
          >
            <Compass className="h-12 w-12 text-orange-500" />
          </motion.div>

          <h1 className="mb-2 text-7xl font-bold tracking-tighter sm:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            404
          </h1>
          
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Looks like you've wandered off the map.
          </h2>
          
          <p className="mb-10 max-w-md text-neutral-300">
            The page you are looking for might be lost in the clouds. Let's get you back on track.
          </p>

          <Link 
            href="/"
            className="group flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-orange-700 hover:scale-105 shadow-lg shadow-orange-900/20"
          >
            <Home className="h-5 w-5" />
            Return to Base Camp
          </Link>
        </motion.div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 text-xs text-neutral-500 z-10">
        Lost? Contact Mother India Travels support.
      </div>
    </div>
  );
}