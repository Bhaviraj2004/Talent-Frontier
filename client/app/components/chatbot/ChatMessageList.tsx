import { CheckCircle2 } from 'lucide-react';
import React, { RefObject } from 'react';
import { Message } from './chatFlow';

interface ChatMessageListProps {
  messages: Message[];
  messagesEndRef: RefObject<HTMLDivElement | null>;
  onOptionClick: (label: string, action: string) => void;
}

export default function ChatMessageList({
  messages,
  messagesEndRef,
  onOptionClick
}: ChatMessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 flex flex-col bg-[#fafbfc] space-y-4">
      <div className="flex justify-center mb-2">
        <span className="bg-[#e1f3fb] text-[#55697a] text-[10px] uppercase font-bold py-1 px-3 rounded-md shadow-sm tracking-widest">
          Today
        </span>
      </div>

      {messages.map((msg) => (
        <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>

          <div className="flex flex-col max-w-[85%]">
            {msg.text && (
              <div 
                className={`relative p-3 shadow-sm text-[14px] leading-[1.45] ${
                  msg.sender === 'user' 
                    ? 'bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-br-sm' 
                    : 'bg-white text-[#111b21] rounded-2xl rounded-bl-sm border border-gray-100'
                }`}
              >
                <p>{msg.text}</p>
                <div className={`text-[10px] mt-1.5 flex items-center justify-end ${msg.sender === 'user' ? 'text-[#667781]' : 'text-[#8696a0]'}`}>
                  Just now {msg.sender === 'user' && <CheckCircle2 className="w-[14px] h-[14px] ml-1 text-[#53bdeb]" />}
                </div>
              </div>
            )}

            {/* Options */}
            {msg.options && (
              <div className="flex flex-col space-y-2 mt-2">
                {msg.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => onOptionClick(opt.label, opt.action)}
                    className="bg-white border border-[#007ba8]/30 hover:border-[#007ba8] text-[#007ba8] text-[13.5px] font-medium py-2.5 px-4 rounded-xl shadow-sm text-left transition-all hover:bg-[#f0f9fc] hover:shadow-md flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#007ba8] rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} className="h-2" />
    </div>
  );
}
