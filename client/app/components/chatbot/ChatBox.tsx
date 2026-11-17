import { useState, useRef, useEffect } from 'react';
import { FLOW, Message, FormDataState, validateField } from './chatFlow';
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
  const [formData, setFormData] = useState<FormDataState>({ 
    name: '', 
    email: '', 
    phone: '', 
    notes: '', 
    contactMethod: 'Email', 
    query: '' 
  });
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitLead = async (data: FormDataState) => {
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

  const sendLeadEmail = (data: FormDataState) => {
    submitLead(data);

    const formattedQuery = data.query 
      ? data.query.split(' -> ').map(item => `• ${item}`).join('\n') 
      : '• General Enquiry';

    const notesSection = data.notes && data.notes.trim()
      ? `\nAdditional Notes / Requirements:\n"${data.notes.trim()}"\n`
      : '';

    const bodyRaw = `Dear Talent Frontier Team,\n\nI recently interacted with your website chatbot and would like to formally request further assistance. Below is a summary of my requirements and contact details:\n\n--------------------------------------------------\nContact Details:\n• Name: ${data.name || 'Not provided'}\n• Work Email: ${data.email || 'Not provided'}\n• Contact Number: ${data.phone || 'Not provided'}\n--------------------------------------------------\nSelected Hiring Requirements (Chatbot Selections):\n${formattedQuery}\n${notesSection}--------------------------------------------------\n\nPlease reach out to me at your earliest convenience.\n\nBest regards,\n${data.name || 'User'}`;

    const subject = encodeURIComponent(`Inquiry via Talent Frontier Chatbot - ${data.name || 'Lead'}`);
    const body = encodeURIComponent(bodyRaw);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=admin@talentfrontier.com.au&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:admin@talentfrontier.com.au?subject=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoLink;
    }
  };

  const formatBotText = (text: string, currentName?: string) => {
    const displayName = (currentName || formData.name || '').trim() || 'there';
    return text.replace(/\[Name\]/g, displayName);
  };

  const handleOptionClick = (optionLabel: string, actionId: string) => {
    const newMessages = [...messages];
    const lastMessage = newMessages[newMessages.length - 1];
    
    if (lastMessage && lastMessage.sender === 'bot') {
      lastMessage.options = undefined;
    }
    
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: optionLabel });
    setMessages(newMessages);

    // Save choice to query if it's not a control / contact action
    const excludedFromQuery = [
      'ask_name', 
      'end_chat', 
      'init', 
      'decision_gate', 
      'ask_custom_notes', 
      'finalize_lead_skip'
    ];
    if (!excludedFromQuery.includes(actionId)) {
      setFormData(prev => ({ 
        ...prev, 
        query: prev.query ? `${prev.query} -> ${optionLabel}` : optionLabel 
      }));
    }

    // If user clicked "Skip & send details as is"
    if (actionId === 'finalize_lead_skip') {
      sendLeadEmail(formData);
      setTimeout(() => {
        const nextNode = FLOW['final_confirmation'];
        if (nextNode) {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: 'bot',
              text: formatBotText(nextNode.text, formData.name),
              options: nextNode.options
            }
          ]);
        }
      }, 500);
      return;
    }

    // If user clicked "Return to Main Menu"
    if (actionId === 'init') {
      setTimeout(() => {
        const nextNode = FLOW.init;
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
      }, 500);
      return;
    }

    setTimeout(() => {
      const nextNode = FLOW[actionId];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: formatBotText(nextNode.text, formData.name), 
            options: nextNode.options,
            nextAction: nextNode.nextAction,
            expects: nextNode.expects,
            inputType: nextNode.inputType,
            placeholder: nextNode.placeholder
          }
        ]);
      }
    }, 500);
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
    
    let nextNodeId = 'ask_name';
    let currentName = formData.name;
    let updatedFormData = { ...formData };
    
    if (lastMessage && lastMessage.sender === 'bot') {
      if (lastMessage.expects) {
        updatedFormData = { ...formData, [lastMessage.expects]: trimmedInput };
        setFormData(updatedFormData);
        if (lastMessage.expects === 'name') {
          currentName = trimmedInput;
        }
      } else {
        updatedFormData = { 
          ...formData, 
          query: formData.query ? `${formData.query} -> ${trimmedInput}` : trimmedInput 
        };
        setFormData(updatedFormData);
      }
      
      if (lastMessage.nextAction) {
        nextNodeId = lastMessage.nextAction;
      }
    } else {
      updatedFormData = { 
        ...formData, 
        query: formData.query ? `${formData.query} -> ${trimmedInput}` : trimmedInput 
      };
      setFormData(updatedFormData);
    }

    // If finalizing from notes input
    if (nextNodeId === 'finalize_lead_notes') {
      sendLeadEmail(updatedFormData);
      setTimeout(() => {
        const nextNode = FLOW['final_confirmation'];
        if (nextNode) {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: 'bot',
              text: formatBotText(nextNode.text, currentName),
              options: nextNode.options
            }
          ]);
        }
      }, 500);
      return;
    }

    setTimeout(() => {
      const nextNode = FLOW[nextNodeId];
      if (nextNode) {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now().toString(), 
            sender: 'bot', 
            text: formatBotText(nextNode.text, currentName), 
            options: nextNode.options,
            nextAction: nextNode.nextAction,
            expects: nextNode.expects,
            inputType: nextNode.inputType,
            placeholder: nextNode.placeholder
          }
        ]);
      }
    }, 500);
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
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      notes: '', 
      contactMethod: 'Email', 
      query: '' 
    });
  };

  if (!isOpen) return null;

  const lastBotMessage = [...messages].reverse().find(m => m.sender === 'bot');
  const activeInputType = lastBotMessage?.inputType || 'text';
  const activePlaceholder = lastBotMessage?.placeholder || "Type your message here...";

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
