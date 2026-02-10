'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919557908816" // Replace with real number
      target="_blank"
      rel="noopener noreferrer"
      // Changed to Gold/Saffron branding with Sepia Text
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#D97706] text-[#F4EBD9] shadow-2xl shadow-[#4A3B32]/40 border-4 border-[#F4EBD9] hover:scale-110 hover:rotate-12 transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-full border border-[#4A3B32]/20"></div>
      <MessageCircle className="h-8 w-8" strokeWidth={2.5} />
      
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-4 bg-[#4A3B32] text-[#F4EBD9] px-4 py-2 rounded-sm font-body font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Chat with Us
      </span>
    </a>
  );
};

export default WhatsAppButton;