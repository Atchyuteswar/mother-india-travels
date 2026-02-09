'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Feather } from 'lucide-react';

const FAQS = [
  {
    question: "What is included in the package cost?",
    answer: "Our royal packages typically include heritage accommodation, daily breakfast and dinner, chauffeur-driven transport, and entry to all monuments. We handle the logistics so you can focus on the experience."
  },
  {
    question: "Is it safe for solo female travelers?",
    answer: "Absolutely. We pride ourselves on safety. You will be accompanied by trusted guides, and Tanu ensures a supportive environment for all our female guests."
  },
  {
    question: "Can I customize a group trip?",
    answer: "Group trips follow a curated path to ensure harmony. However, for a bespoke journey tailored solely to your whims, please visit our 'Personalized Trips' section."
  },
  {
    question: "What is the cancellation policy?",
    answer: "We understand that life is unpredictable. We offer a full refund if cancelled 30 days prior. For details, please consult our formal booking terms."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F4EBD9] py-24 px-6 border-t border-[#4A3B32]/10">
      <div className="mx-auto max-w-3xl">
        
        <div className="text-center mb-16">
          <Feather className="h-8 w-8 text-[#D97706] mx-auto mb-4" />
          <h2 className="font-heading text-5xl text-[#4A3B32] mb-4">Common Inquiries</h2>
          <p className="font-body text-xl text-[#4A3B32]/70 italic">"Everything you need to know before the journey begins."</p>
        </div>
        
        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-[#4A3B32]/20 pb-4">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left group"
              >
                <span className="font-heading text-2xl text-[#4A3B32] group-hover:text-[#D97706] transition-colors">
                  {faq.question}
                </span>
                {activeIndex === index ? 
                  <Minus className="text-[#D97706] h-6 w-6" /> : 
                  <Plus className="text-[#4A3B32]/50 h-6 w-6 group-hover:text-[#D97706]" />
                }
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-xl text-[#4A3B32]/80 leading-relaxed pb-6 pl-2 border-l-2 border-[#D97706]/30 ml-2">
                      {faq.answer}
                    </p>
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