import { useState, useRef, useEffect } from 'react';
import { FLOW, Message } from './chatFlow';
import ChatHeader from './ChatHeader';
import ChatMessageList from './ChatMessageList';
import ChatInputArea from './ChatInputArea';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'msg-1', sender: 'bot', text: FLOW.init.text, options: FLOW.init.options }
  ]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', contactMethod: 'Email', query: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (optionLabel: string, actionId: string) => {
    const newMessages = [...messages];
    if (newMessages.length > 0 && newMessages[newMessages.length - 1].sender === 'bot') {
      newMessages[newMessages.length - 1].options = undefined;
    }
    
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: optionLabel });
    setMessages(newMessages);

    if (actionId !== 'capture_details' && actionId !== 'end_chat') {
      setFormData(prev => ({ ...prev, query: prev.query ? `${prev.query} -> ${optionLabel}` : optionLabel }));
    }

    setTimeout(() => {
      const nextNode = FLOW[actionId as keyof typeof FLOW];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: nextNode.text, 
            options: nextNode.options,
            isForm: nextNode.isForm
          }
        ]);
      }
    }, 600);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages];
    if (newMessages.length > 0 && newMessages[newMessages.length - 1].sender === 'bot') {
      newMessages[newMessages.length - 1].options = undefined;
    }
    
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: inputValue });
    setMessages(newMessages);
    
    setFormData(prev => ({ ...prev, query: prev.query ? `${prev.query} -> ${inputValue}` : inputValue }));
    setInputValue("");

    setTimeout(() => {
      const nextNode = FLOW['capture_details'];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: nextNode.text, 
            options: nextNode.options,
            isForm: nextNode.isForm
          }
        ]);
      }
    }, 600);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/chatbot/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          query: formData.query || "General Chatbot Inquiry"
        })
      });
      
      if (res.ok) {
        setFormSubmitted(true);
        setMessages(prev => [
          ...prev.filter(m => !m.isForm),
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: "Thank you! Your details have been securely submitted. A Senior Partner will contact you shortly via your preferred method." 
          }
        ]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetChat = () => {
    setMessages([{ id: Date.now().toString(), sender: 'bot', text: FLOW.init.text, options: FLOW.init.options }]);
    setFormSubmitted(false);
    setFormData({ name: '', email: '', phone: '', contactMethod: 'Email', query: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="absolute bottom-16 right-0 w-[400px] h-[540px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right z-50 font-sans">
      
      <ChatHeader onReset={resetChat} onClose={onClose} />
      
      <ChatMessageList 
        messages={messages}
        messagesEndRef={messagesEndRef}
        formSubmitted={formSubmitted}
        isSubmitting={isSubmitting}
        formData={formData}
        setFormData={setFormData}
        onOptionClick={handleOptionClick}
        onFormSubmit={handleFormSubmit}
      />

      <ChatInputArea 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSendMessage={handleSendMessage}
      />
      
    </div>
  );
}
