'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210" // Replace with client's real number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-white shadow-xl transition-transform hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-bold hidden md:inline">Chat with Us</span>
    </a>
  );
};

export default WhatsAppButton;