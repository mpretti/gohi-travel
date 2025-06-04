'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, Bot, User, Globe, Headphones, Clock, Star } from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
  suggestions?: string[];
}

export default function TravelConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'bot',
      message: "Hi! I'm your AI travel concierge. I can help you plan trips, find deals, answer questions, and connect you with human experts. How can I assist you today?",
      timestamp: new Date(),
      suggestions: ['Find me a romantic getaway', 'Best time to visit Japan', 'Budget trip to Europe', 'Adventure activities in Costa Rica']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: getBotResponse(message),
        timestamp: new Date(),
        suggestions: getBotSuggestions(message)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('romantic') || msg.includes('honeymoon')) {
      return "Perfect! For romantic getaways, I'd recommend Santorini with its stunning sunsets, Bali for tropical romance, or Paris for classic charm. What's your budget range and preferred travel dates?";
    } else if (msg.includes('japan')) {
      return "Japan is amazing! The best times to visit are spring (March-May) for cherry blossoms or autumn (September-November) for fall colors. Summer can be hot and humid, while winter is great for skiing. What interests you most?";
    } else if (msg.includes('budget') || msg.includes('cheap')) {
      return "I love helping with budget travel! Eastern Europe, Southeast Asia, and Central America offer incredible value. I can find you deals on flights, accommodations, and activities. What's your target budget per day?";
    } else if (msg.includes('adventure')) {
      return "Adventure awaits! Costa Rica offers zip-lining, volcano hiking, and wildlife spotting. New Zealand has bungee jumping and skydiving. What type of adventure activities excite you most?";
    } else {
      return "That's a great question! I'm here to help with any travel planning needs. Would you like me to connect you with one of our human travel experts for more personalized assistance?";
    }
  };

  const getBotSuggestions = (userMessage: string): string[] => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('romantic')) {
      return ['Show me Santorini packages', 'Bali honeymoon deals', 'Paris romantic itinerary', 'Talk to human expert'];
    } else if (msg.includes('japan')) {
      return ['Cherry blossom tours', 'Tokyo city guide', 'Japan Rail Pass info', 'Cultural experiences'];
    } else if (msg.includes('budget')) {
      return ['Southeast Asia backpacking', 'Europe on $50/day', 'Hostel recommendations', 'Flight deals'];
    } else {
      return ['Plan a custom trip', 'Find flight deals', 'Hotel recommendations', 'Connect with expert'];
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            24/7 Travel Concierge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get instant travel advice, personalized recommendations, and expert assistance 
            whenever you need it. Our AI-powered concierge is always here to help.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Bot, title: 'AI Assistant', description: 'Instant responses to travel questions' },
              { icon: Headphones, title: 'Human Experts', description: 'Connect with travel specialists' },
              { icon: Globe, title: 'Multilingual', description: 'Support in 12+ languages' },
              { icon: Clock, title: '24/7 Available', description: 'Help whenever you need it' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Chat Demo */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="bg-indigo-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Travel Concierge</h3>
                    <p className="text-indigo-200 text-sm">Online • Responds instantly</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' ? 'bg-blue-600' : 'bg-indigo-100'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-indigo-600" />
                      )}
                    </div>
                    <div className={`rounded-2xl p-3 ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.message}</p>
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => sendMessage(suggestion)}
                              className="block w-full text-left text-xs bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-colors"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3 max-w-xs">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                  placeholder="Ask me anything about travel..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(inputValue)}
                  className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Try asking: "Plan a 7-day trip to Japan" or "Find me budget hotels in Paris"
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Plan a custom trip',
                'Find flight deals',
                'Hotel recommendations',
                'Local experiences',
                'Travel insurance',
                'Visa requirements',
                'Weather updates',
                'Emergency assistance'
              ].map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage(action)}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-900 font-medium">{action}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 