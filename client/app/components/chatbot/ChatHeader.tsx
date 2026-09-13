import { RefreshCcw, ChevronDown, Bot } from 'lucide-react';

interface ChatHeaderProps {
  onReset: () => void;
  onClose: () => void;
}

export default function ChatHeader({ onReset, onClose }: ChatHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#004a69] to-[#007ba8] px-4 py-3.5 flex items-center justify-between shadow-md z-10">
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <div className="relative">
          <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white shadow-sm backdrop-blur-sm">
            <Bot className="w-6 h-6" />
          </div> 
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00d084] rounded-full border-2 border-[#007ba8]"></div>
        </div>
        
        {/* Title and Status */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h3 className="text-white font-semibold text-[15.5px] tracking-wide">Talent Frontier Bot</h3>
          </div>
          <p className="text-blue-100 text-[11px] mt-0.5 opacity-90">Online • Typically replies instantly</p>
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-1.5 text-blue-100">
        <button onClick={onReset} className="p-1.5 hover:bg-white/20 rounded-md transition-colors" title="Restart Chat">
          <RefreshCcw className="w-[18px] h-[18px]" />
        </button>
        <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-md transition-colors" title="Close">
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
