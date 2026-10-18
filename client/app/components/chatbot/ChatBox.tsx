import { useState, useRef, useEffect } from 'react';
import { FLOW, Message, validateField } from './chatFlow';
import ChatHeader from './ChatHeader';
import ChatMessageList from './ChatMessageList';
import ChatInputArea from './ChatInputArea';

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 'msg-1', 
      sender: 'bot', 
      text: FLOW.init.text, 
      options: FLOW.init.options,
      nextAction: FLOW.init.nextAction,
      expects: FLOW.init.expects,
      inputType: FLOW.init.inputType,
      placeholder: FLOW.init.placeholder
    }
  ]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', contactMethod: 'Email', query: '' });
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitLead = async (data: typeof formData) => {
    try {
      await fetch('/api/chatbot/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          query: data.query || "General Chatbot Inquiry"
        })
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }
  };

  const handleOptionClick = (optionLabel: string, actionId: string) => {
    const newMessages = [...messages];
    const lastMessage = newMessages[newMessages.length - 1];
    
    if (lastMessage && lastMessage.sender === 'bot') {
      lastMessage.options = undefined;
    }
    
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: optionLabel });
    setMessages(newMessages);

    // Save choice to query if it's not a final contact action
    if (!actionId.startsWith('continue_') && !actionId.startsWith('ask_') && actionId !== 'end_chat') {
      setFormData(prev => ({ ...prev, query: prev.query ? `${prev.query} -> ${optionLabel}` : optionLabel }));
    }

    // Handle final contact methods
    if (actionId.startsWith('continue_')) {
      let method = 'Email';
      if (actionId === 'continue_whatsapp') method = 'WhatsApp';
      if (actionId === 'continue_call') method = 'Phone Call';
      
      setFormData(prev => {
        const newData = { ...prev, contactMethod: method };
        submitLead(newData);
        return newData;
      });
      
      if (actionId === 'continue_email') {
        const formattedQuery = formData.query 
          ? formData.query.split(' -> ').map(item => `• ${item}`).join('\n') 
          : '• General Inquiry';

        const bodyRaw = `Dear Talent Frontier Team,\n\nI recently interacted with your chatbot and would like to formally request further assistance. Below is a summary of my requirements and contact details:\n\n---\nPrimary Interest:\n${formattedQuery}\n\nContact Details:\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\n---\n\nPlease reach out to me at your earliest convenience.\n\nBest regards,\n${formData.name || 'User'}`;
        
        const subject = encodeURIComponent(`Inquiry via Talent Frontier Chatbot - ${formData.name || 'User'}`);
        const body = encodeURIComponent(bodyRaw);
        
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=admin@talentfrontier.com.au&su=${subject}&body=${body}`;
        const mailtoLink = `mailto:admin@talentfrontier.com.au?subject=${subject}&body=${body}`;
        
        const newWindow = window.open(gmailLink, '_blank', 'noopener,noreferrer');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          window.location.href = mailtoLink;
        }
      }
    }

    setTimeout(() => {
      const nextNode = FLOW[actionId];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: nextNode.text, 
            options: nextNode.options,
            nextAction: nextNode.nextAction,
            expects: nextNode.expects,
            inputType: nextNode.inputType,
            placeholder: nextNode.placeholder
          }
        ]);
      }
    }, 600);
  };

  const handleSendMessage = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;
    
    const newMessages = [...messages];
    const lastMessage = newMessages[newMessages.length - 1];

    // Validate expected field before advancing
    if (lastMessage && lastMessage.sender === 'bot' && lastMessage.expects) {
      const validation = validateField(lastMessage.expects, trimmedInput);
      if (!validation.isValid) {
        // Show user message
        newMessages.push({ id: Date.now().toString(), sender: 'user', text: trimmedInput });
        setMessages(newMessages);
        setInputValue("");

        // Respond with friendly validation error & retain expects/nextAction
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: 'bot',
              text: validation.error || "Please enter valid information to proceed.",
              expects: lastMessage.expects,
              nextAction: lastMessage.nextAction,
              inputType: lastMessage.inputType,
              placeholder: lastMessage.placeholder,
              isError: true
            }
          ]);
        }, 500);
        return;
      }
    }
    
    if (lastMessage && lastMessage.sender === 'bot') {
      lastMessage.options = undefined;
    }
    
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: trimmedInput });
    setMessages(newMessages);
    setInputValue("");
    
    let nextNodeId = 'transition_to_contact'; // default jump if randomly typing
    
    if (lastMessage && lastMessage.sender === 'bot') {
       if (lastMessage.expects) {
         setFormData(prev => ({ ...prev, [lastMessage.expects!]: trimmedInput }));
       } else {
         setFormData(prev => ({ ...prev, query: prev.query ? `${prev.query} -> ${trimmedInput}` : trimmedInput }));
       }
       
       if (lastMessage.nextAction) {
         nextNodeId = lastMessage.nextAction;
       }
    } else {
       setFormData(prev => ({ ...prev, query: prev.query ? `${prev.query} -> ${trimmedInput}` : trimmedInput }));
    }

    setTimeout(() => {
      const nextNode = FLOW[nextNodeId];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: nextNode.text, 
            options: nextNode.options,
            nextAction: nextNode.nextAction,
            expects: nextNode.expects,
            inputType: nextNode.inputType,
            placeholder: nextNode.placeholder
          }
        ]);
      }
    }, 600);
  };

  const resetChat = () => {
    setMessages([{ 
      id: Date.now().toString(), 
      sender: 'bot', 
      text: FLOW.init.text, 
      options: FLOW.init.options,
      nextAction: FLOW.init.nextAction,
      expects: FLOW.init.expects,
      inputType: FLOW.init.inputType,
      placeholder: FLOW.init.placeholder
    }]);
    setFormData({ name: '', email: '', phone: '', contactMethod: 'Email', query: '' });
  };

  if (!isOpen) return null;

  const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
  const activeInputType = lastBotMessage?.inputType || 'text';
  const activePlaceholder = lastBotMessage?.placeholder || "Ask about leadership search...";

  return (
    <div className="absolute bottom-16 right-0 w-[calc(100vw-48px)] sm:w-[400px] h-[calc(100vh-120px)] sm:h-[540px] max-h-[540px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] border border-gray-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300 origin-bottom-right z-50 font-sans">
      
      <ChatHeader onReset={resetChat} onClose={onClose} />
      
      <ChatMessageList 
        messages={messages}
        messagesEndRef={messagesEndRef}
        onOptionClick={handleOptionClick}
      />

      <ChatInputArea 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSendMessage={handleSendMessage}
        inputType={activeInputType}
        placeholder={activePlaceholder}
      />
      
    </div>
  );
}
