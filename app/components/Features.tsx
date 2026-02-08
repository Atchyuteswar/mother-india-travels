'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Heart, Camera } from 'lucide-react';

const FEATURES = [
  {
    icon: <Globe className="h-6 w-6 text-orange-500" />,
    title: "Cultural Immersion",
    description: "We don't just show you places; we help you live them. Experience local traditions and hidden gems."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-500" />,
    title: "Small Groups",
    description: "Intimate group sizes ensure you make lifelong friends without feeling like just another tourist."
  },
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Personalized Care",
    description: "From the moment you land until you leave, Leo & Tanu are there to guide your journey."
  },
  {
    icon: <Camera className="h-6 w-6 text-purple-500" />,
    title: "Curated Memories",
    description: "We plan the perfect photo ops and experiences so you can focus on being in the moment."
  }
];

const Features = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Travel With <span className="text-orange-500">Mother India?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            We move beyond standard sightseeing to offer deep, meaningful connections with the land and its people.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center p-6 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 border border-white/20">
                  {feature.icon}
                </div>
                <dt className="text-base font-semibold leading-7 text-white">
                  {feature.title}
                </dt>
                <dd className="mt-1 text-base leading-7 text-neutral-400">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;