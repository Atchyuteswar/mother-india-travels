'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Map } from 'lucide-react';

const FEATURES = [
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate journeys with like-minded souls. We keep our circles small to ensure genuine connections and shared memories."
  },
  {
    icon: Heart,
    title: "Deep Immersion",
    description: "Beyond sightseeing. We engage with local artisans, share meals in village homes, and participate in ancient traditions."
  },
  {
    icon: Map,
    title: "Curated Paths",
    description: "Itineraries crafted by Leo & Tanu. We take you to the hidden corners of India that guidebooks often overlook."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#F4EBD9] text-[#4A3B32]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header - Ornamental */}
        <div className="mb-20 text-center">
          <span className="font-body text-sm font-bold tracking-[0.3em] text-[#D97706] uppercase">
            Why We Travel
          </span>
          <h2 className="mt-4 font-heading text-5xl md:text-6xl text-[#4A3B32]">
            Our Philosophy
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-[#4A3B32]/30" />
        </div>

        {/* Editorial Grid */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon with Ring */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#D97706]/30 bg-[#D97706]/5 text-[#D97706] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#D97706] group-hover:text-[#F4EBD9]">
                <feature.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mb-4 font-heading text-2xl text-[#4A3B32]">
                {feature.title}
              </h3>

              {/* Text */}
              <p className="font-body text-xl leading-relaxed text-[#4A3B32]/80">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Ornamental Divider */}
        <div className="mt-24 flex items-center justify-center opacity-50">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#4A3B32]/40 to-transparent" />
          <div className="mx-4 text-[#D97706] text-2xl">✦</div>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#4A3B32]/40 to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default Features;