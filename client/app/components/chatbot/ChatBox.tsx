import { useState, useRef, useEffect } from 'react';
import { FLOW, Message, FormDataState, validateField, GREETING_STATEMENT } from './chatFlow';
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
      id: 'msg-greeting',
      sender: 'bot',
      text: GREETING_STATEMENT
    },
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
  const nameRef = useRef<string>("");

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

    const leadName = (data.name || nameRef.current || '').trim();
    const bodyRaw = `Dear Talent Frontier Team,\n\nI recently interacted with your website chatbot and would like to formally request further assistance. Below is a summary of my requirements and contact details:\n\n--------------------------------------------------\nContact Details:\n• Name: ${leadName || 'Not provided'}\n• Work Email: ${data.email || 'Not provided'}\n• Contact Number: ${data.phone || 'Not provided'}\n--------------------------------------------------\nSelected Hiring Requirements (Chatbot Selections):\n${formattedQuery}\n${notesSection}--------------------------------------------------\n\nPlease reach out to me at your earliest convenience.\n\nBest regards,\n${leadName || 'User'}`;

    const subject = encodeURIComponent(`Inquiry via Talent Frontier Chatbot - ${leadName || 'Lead'}`);
    const body = encodeURIComponent(bodyRaw);

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=admin@talentfrontier.com.au&cc=vivek@moranaccountants.com.au&su=${subject}&body=${body}`;
    const mailtoLink = `mailto:admin@talentfrontier.com.au?cc=vivek@moranaccountants.com.au&subject=${subject}&body=${body}`;

    const newWindow = window.open(gmailLink, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = mailtoLink;
    }
  };

  const formatBotText = (text: string, currentName?: string) => {
    const displayName = (currentName || nameRef.current || formData.name || '').trim() || 'there';
    return text.replace(/\[name\]/gi, displayName);
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
      'ask_custom_notes', 
      'finalize_lead_skip'
    ];
    if (!excludedFromQuery.includes(actionId)) {
      setFormData(prev => ({
        ...prev,
        query: prev.query ? `${prev.query} -> ${optionLabel}` : optionLabel
      }));
    }

    // Direct submit lead if user clicks "Skip & send details as is"
    if (actionId === 'finalize_lead_skip') {
      setTimeout(() => {
        sendLeadEmail(formData);

        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: formatBotText(FLOW.final_confirmation.text, nameRef.current || formData.name)
          }
        ]);
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
            text: formatBotText(nextNode.text, nameRef.current || formData.name), 
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

    // 1. Read expectation from the last message BEFORE clearing it
    const expectedField = lastMessage?.expects;
    const nextNodeId = lastMessage?.nextAction;
    const inputType = lastMessage?.inputType;
    const placeholder = lastMessage?.placeholder;
    
    // Clear the active text input expectation from the current message
    if (lastMessage && lastMessage.sender === 'bot') {
      lastMessage.expects = undefined;
      lastMessage.placeholder = undefined;
    }

    if (expectedField) {
      // Validate input strictly
      const validation = validateField(expectedField, trimmedInput);
      if (!validation.isValid) {
        // Show validation error from bot with retry
        newMessages.push({ 
          id: Date.now().toString(), 
          sender: 'user', 
          text: trimmedInput 
        });
        newMessages.push({
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: validation.error || "Please check your input and try again.",
          isError: true,
          expects: expectedField,
          nextAction: nextNodeId,
          inputType: inputType,
          placeholder: placeholder
        });
        setMessages(newMessages);
        setInputValue("");
        return;
      }
    }

    // Input is valid: record user message
    newMessages.push({ id: Date.now().toString(), sender: 'user', text: trimmedInput });
    setMessages(newMessages);
    setInputValue("");

    let updatedFormData = { ...formData };
    let currentName = nameRef.current || formData.name;

    if (expectedField) {
      updatedFormData = {
        ...updatedFormData,
        [expectedField]: trimmedInput
      };
      setFormData(updatedFormData);
      if (expectedField === 'name') {
        currentName = trimmedInput;
        nameRef.current = trimmedInput;
      }
    }

    // If finalizing lead notes
    if (nextNodeId === 'finalize_lead_notes') {
      const finalData = {
        ...updatedFormData,
        notes: trimmedInput
      };
      setFormData(finalData);

      setTimeout(() => {
        sendLeadEmail(finalData);

        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: formatBotText(FLOW.final_confirmation.text, currentName)
          }
        ]);
      }, 500);
      return;
    }

    // If free typing without expected form action
    if (!nextNodeId) {
      setTimeout(() => {
        const queryText = `Custom Query: "${trimmedInput}"`;
        const updatedQuery = updatedFormData.query 
          ? `${updatedFormData.query} -> ${queryText}` 
          : queryText;
        setFormData(prev => ({ ...prev, query: updatedQuery }));

        const nextNode = FLOW.decision_gate;
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
    nameRef.current = "";
    setMessages([
      {
        id: 'msg-greeting-' + Date.now(),
        sender: 'bot',
        text: GREETING_STATEMENT
      },
      { 
        id: 'msg-init-' + Date.now(), 
        sender: 'bot', 
        text: FLOW.init.text, 
        options: FLOW.init.options,
        nextAction: FLOW.init.nextAction,
        expects: FLOW.init.expects,
        inputType: FLOW.init.inputType,
        placeholder: FLOW.init.placeholder
      }
    ]);
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
