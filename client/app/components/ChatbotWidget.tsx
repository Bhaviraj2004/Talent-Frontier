"use client";

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import ChatBox from './ChatBox';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-100 hover:-translate-y-1 transition-all duration-300 ease-out"
        aria-label="Toggle Chat"
      >
        {/* Smooth Pulse Animation Ring */}
        <span className="absolute inset-0 rounded-full bg-[#005B82] animate-ping opacity-[0.15]"></span>
        
        <MessageCircle className="w-5 h-5 text-[#005B82] relative z-10 transition-transform duration-300 ease-out group-hover:scale-110" strokeWidth={2} />
      </button>

      {/* Chat Window Component */}
      <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
