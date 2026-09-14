"use client";

import { X } from 'lucide-react';
import { useState } from 'react';
import ChatBox from './ChatBox';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="relative">
        {/* Side Message Bubble */}
        {!isOpen && showMessage && (
          <div 
            className="absolute right-full mr-4 bottom-1/2 transform translate-y-1/2 w-max bg-white text-[#0A2540] text-sm font-medium py-3 px-4 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center gap-2 cursor-pointer transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] z-50" 
            onClick={() => { setIsOpen(true); setShowMessage(false); }}
          >
            <span>Hi, how can I help you?</span>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowMessage(false); }}
              className="text-gray-400 hover:text-gray-700 transition-colors ml-1 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={14} />
            </button>
            {/* Arrow pointer */}
            <div className="absolute top-1/2 -right-[6px] w-3 h-3 bg-white border-t border-r border-gray-100 transform -translate-y-1/2 rotate-45 rounded-tr-[2px]"></div>
          </div>
        )}

        {/* Widget Button */}
        <button
          onClick={() => { setIsOpen(!isOpen); setShowMessage(false); }}
          className={`relative group flex items-center justify-center w-14 h-14 transition-all duration-300 ease-out ${!isOpen ? 'bg-transparent animate-float' : 'bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-gray-100'}`}
          aria-label="Toggle Chat"
        >
          {/* Smooth Pulse Animation Ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-[#005B82] animate-ping opacity-[0.15]"></span>
          )}
          
          {isOpen ? (
            <X className="w-6 h-6 text-[#005B82] relative z-10 transition-transform duration-300 ease-out group-hover:rotate-90" strokeWidth={2.5} />
          ) : (
            <img src="/chatlogo.png" alt="Chat Bot" className="w-14 h-14 relative z-10 transition-transform duration-300 ease-out group-hover:scale-110 object-contain drop-shadow-md" />
          )}
        </button>
      </div>

      {/* Chat Window Component */}
      <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
