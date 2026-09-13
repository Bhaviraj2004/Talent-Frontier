import { CheckCircle2, ChevronDown } from 'lucide-react';
import React, { RefObject } from 'react';
import { Message, FormDataState } from './chatFlow';

interface ChatMessageListProps {
  messages: Message[];
  messagesEndRef: RefObject<HTMLDivElement>;
  formSubmitted: boolean;
  isSubmitting: boolean;
  formData: FormDataState;
  setFormData: (data: FormDataState | ((prev: FormDataState) => FormDataState)) => void;
  onOptionClick: (label: string, action: string) => void;
  onFormSubmit: (e: React.FormEvent) => void;
}

export default function ChatMessageList({
  messages,
  messagesEndRef,
  formSubmitted,
  isSubmitting,
  formData,
  setFormData,
  onOptionClick,
  onFormSubmit
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

            {/* Form */}
            {msg.isForm && !formSubmitted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mt-2 w-[280px]">
                <form onSubmit={onFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-[11.5px] text-gray-500 font-bold mb-1.5 block uppercase tracking-wider">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[13.5px] focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-[11.5px] text-gray-500 font-bold mb-1.5 block uppercase tracking-wider">Work Email *</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[13.5px] focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8] outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-[11.5px] text-gray-500 font-bold mb-1.5 block uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))}
                      className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[13.5px] focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8] outline-none transition-colors"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                  <div>
                    <label className="text-[11.5px] text-gray-500 font-bold mb-1.5 block uppercase tracking-wider">Contact via</label>
                    <div className="relative">
                      <select 
                        value={formData.contactMethod}
                        onChange={e => setFormData(prev => ({...prev, contactMethod: e.target.value}))}
                        className="w-full border border-gray-200 rounded-lg py-2 px-3 text-[13.5px] focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8] outline-none bg-white appearance-none cursor-pointer"
                      >
                        <option value="Email">Email</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone Call">Phone Call</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#004a69] to-[#007ba8] hover:shadow-md text-white text-[14px] font-semibold py-2.5 rounded-lg transition-all mt-4 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Details'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} className="h-2" />
    </div>
  );
}
