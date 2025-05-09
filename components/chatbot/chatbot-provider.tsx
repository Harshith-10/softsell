"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Define message type
type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Predefined bot responses based on keywords
const responses: Record<string, string> = {
  "hello": "Hello! How can I help you today?",
  "hi": "Hi there! How can I assist you with selling your software licenses?",
  "how": "To sell your licenses with SoftSell, simply upload your license details, get a valuation, and then get paid within 48 hours!",
  "sell": "You can easily sell your software licenses by uploading the details through our platform. We'll provide an instant valuation based on market conditions.",
  "payment": "We offer multiple payment methods including bank transfer, PayPal, and cryptocurrency. Payments are typically processed within 48 hours of accepting our offer.",
  "price": "Our pricing is transparent and competitive. We analyze current market trends to offer you the best possible value for your software licenses.",
  "license": "We accept most major software licenses including Microsoft, Adobe, Oracle, IBM, SAP, and many more. If you're unsure, just ask us!",
  "support": "Our support team is available Monday to Friday, 9 AM to 6 PM EST. You can reach us via chat, email, or phone.",
  "secure": "Security is our top priority. We use bank-level encryption to protect your data and ensure all transactions are completely secure.",
  "valuation": "Our AI-powered system analyzes current market conditions and historical data to provide the most accurate valuation for your software licenses.",
};

// Default welcome messages
const defaultMessages: Message[] = [
  {
    id: "1",
    content: "Hello! I'm the SoftSell assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "2",
    content: "You can ask me questions about selling your software licenses, our process, payment methods, or anything else you'd like to know!",
    sender: "bot",
    timestamp: new Date(),
  },
];

export function ChatbotProvider() {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Function to generate bot response based on user input
  const generateResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, response] of Object.entries(responses)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }
    
    // Default response if no matches
    return "I'm not sure I understand. Could you please rephrase your question or ask about our license selling process, payment methods, or valuation?";
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Generate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-background rounded-lg shadow-xl border overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground">
              <h3 className="font-medium">SoftSell Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full hover:bg-primary-foreground/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="h-80" ref={scrollAreaRef}>
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      )}
                    >
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-h-10 resize-none"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  className="h-10 w-10"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}