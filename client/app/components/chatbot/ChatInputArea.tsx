import { ArrowRight } from 'lucide-react';

interface ChatInputAreaProps {
  inputValue: string;
  setInputValue: (val: string) => void;
  onSendMessage: () => void;
}

export default function ChatInputArea({ inputValue, setInputValue, onSendMessage }: ChatInputAreaProps) {
  return (
    <div className="bg-white border-t border-gray-100 p-4 z-10">
      <div className="flex items-center space-x-2 mb-3">
        <div className="flex-1 relative">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
            placeholder="Ask about leadership search..."
            className="w-full border border-gray-200 rounded-lg py-2.5 pl-3 pr-3 text-[13px] text-[#004a69] placeholder-[#8b9bb4] focus:outline-none focus:border-[#007ba8] focus:ring-1 focus:ring-[#007ba8]"
          />
        </div>
        <button 
          onClick={onSendMessage}
          className="w-10 h-10 bg-[#007ba8] hover:bg-[#005B82] rounded-lg flex items-center justify-center text-white transition-colors flex-shrink-0 shadow-sm"
        >
          <ArrowRight className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
