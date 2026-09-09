import { RefreshCcw, ChevronDown, Lock, Paperclip, ArrowRight } from 'lucide-react';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-16 right-0 w-[400px] h-[520px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right z-50 font-sans">
      
      {/* Main Header */}
      <div className="bg-gradient-to-r from-[#004a69] to-[#007ba8] px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="relative">
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-md flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm backdrop-blur-sm">
              TF
            </div> 
          </div>
          
          {/* Title and Status */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-semibold text-[15px] tracking-wide">Talent Frontier</h3>
              <span className="bg-white/20 border border-white/30 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">VERIFIED</span>
            </div>
            <div className="flex items-center space-x-1.5 mt-0.5">
              <div className="w-1.5 h-1.5 bg-[#00d084] rounded-full shadow-[0_0_4px_rgba(0,208,132,0.6)]"></div>
              <p className="text-blue-100 text-[11px]">Advisory Desk Online • Instant Response</p>
            </div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-2 text-blue-100">
          <button className="p-1 hover:bg-white/20 rounded-md transition-colors">
            <RefreshCcw className="w-[18px] h-[18px]" />
          </button>
          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-md transition-colors">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col bg-[#fafbfc]">

        {/* Message Group */}
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-[#004a69] to-[#007ba8] rounded-md flex-shrink-0 flex items-center justify-center text-white font-serif font-bold text-[13px] shadow-sm mt-1">
            TF
          </div>
          <div className="flex flex-col w-full max-w-[85%]">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm p-4 shadow-sm">
              <h4 className="font-serif font-bold text-[#004a69] text-base mb-2">Welcome to Talent Frontier.</h4>
              <p className="text-[#3c4b63] text-[13px] leading-[1.6]">
                I am your dedicated Executive Mandate Concierge. I assist Corporate Boards, HR Leaders, and Hiring Committees in registering confidential recruitment mandates or accessing leadership market intelligence.
              </p>
            </div>
            <span className="text-[#8b9bb4] text-[11px] mt-2 ml-1">10:41 AM • Automated Concierge</span>
          </div>
        </div>

        {/* Direct Actions */}
        <div className="pl-11 pr-2 mt-4">
          <p className="text-[#5c728e] text-[11px] font-semibold mb-3 tracking-widest uppercase">DIRECT ACTIONS:</p>
          <div className="space-y-2">
            <button className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center space-x-3 hover:border-[#007ba8] hover:shadow-sm transition-all text-left">
              <div className="w-1.5 h-1.5 bg-[#007ba8] rounded-full"></div>
              <span className="text-[#004a69] text-[13px] font-medium">Register Inbound Mandate</span>
            </button>
            <button className="w-full bg-white border border-gray-200 rounded-lg p-3 flex items-center space-x-3 hover:border-[#007ba8] hover:shadow-sm transition-all text-left">
              <div className="w-1.5 h-1.5 bg-transparent"></div> {/* Spacer to align text if no dot */}
              <span className="text-[#004a69] text-[13px] font-medium">Executive Salary Benchmarks</span>
            </button>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-100 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Ask about leadership search..."
              className="w-full border border-gray-200 rounded-lg py-2.5 pl-3 pr-10 text-[13px] text-[#004a69] placeholder-[#8b9bb4] focus:outline-none focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8]"
            />
          </div>
          <button className="w-10 h-10 bg-[#007ba8] hover:bg-[#005B82] rounded-lg flex items-center justify-center text-white transition-colors flex-shrink-0">
            <ArrowRight className="w-[18px] h-[18px]" />
          </button>
        </div>
        
        {/* Footer Text */}
        <div className="flex justify-between items-center text-[10.5px] text-[#8b9bb4] px-1">
          <span>Enterprise Confidentiality Guaranteed</span>
          <span>Privacy & Data Governance</span>
        </div>
      </div>
      
    </div>
  );
}
