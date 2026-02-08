'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "What is included in the package cost?",
    answer: "Our packages typically include all accommodation (4-star or boutique heritage stays), breakfast and dinner, inter-city transport in private AC vehicles, and entry fees for major monuments. Flights are usually excluded unless specified."
  },
  {
    question: "Is it safe for solo female travelers?",
    answer: "Absolutely. Safety is our #1 priority. We have verified drivers, 24/7 support from Leo & Tanu, and we only book hotels with excellent safety ratings. We also have women-only group departures."
  },
  {
    question: "Can I customize a group trip?",
    answer: "Group trips have a fixed itinerary to ensure the best price and coordination. If you want a custom experience, please check our 'Personalized Trips' section where we design the tour entirely around you."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We offer a flexible cancellation policy. 100% refund if cancelled 30 days before the trip. 50% refund between 15-30 days. No refund within 15 days of departure."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-neutral-900 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="rounded-[24px] bg-neutral-800 border border-white/5 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {activeIndex === index ? <Minus className="text-orange-500" /> : <Plus className="text-white/50" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-neutral-400 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;