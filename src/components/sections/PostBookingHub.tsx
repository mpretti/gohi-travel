'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, CheckCircle, Download, Umbrella } from 'lucide-react';

interface TripCountdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function PostBookingHub() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [countdown, setCountdown] = useState<TripCountdown>({ days: 45, hours: 12, minutes: 30, seconds: 15 });
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleCheckItem = (item: string) => {
    setCheckedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const packingList = [
    'Passport & Travel Documents', 'Travel Insurance Papers', 'Comfortable Walking Shoes',
    'Sunscreen & Sunglasses', 'Camera & Extra Batteries', 'Portable Charger',
    'Light Rain Jacket', 'Medications', 'Local Currency', 'Travel Adapter'
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar },
    { id: 'preparation', label: 'Trip Prep', icon: CheckCircle },
    { id: 'documents', label: 'Documents', icon: Download },
    { id: 'local-info', label: 'Local Info', icon: MapPin }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Your Travel Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need for your upcoming trip in one place. Track your countdown, 
            prepare with our guides, and access all your travel documents.
          </p>
        </motion.div>

        {/* Trip Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Trip to Bali</h3>
            <p className="text-gray-600">Departure: June 15, 2024 • 7 Days</p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-4"
              >
                <div className="text-3xl font-bold mb-1">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-90">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-primary text-lg px-8 py-4">View Full Itinerary</button>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                      activeTab === tab.id ? 'bg-orange-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Weather Forecast', icon: Umbrella,
                    content: (
                      <div className="space-y-3">
                        <div className="flex justify-between"><span>Today</span><span className="font-bold">28°C ☀️</span></div>
                        <div className="flex justify-between"><span>Tomorrow</span><span className="font-bold">26°C 🌤️</span></div>
                        <div className="flex justify-between"><span>This Week</span><span className="font-bold">25-30°C</span></div>
                      </div>
                    )
                  },
                  {
                    title: 'Quick Actions', icon: Clock,
                    content: (
                      <div className="space-y-3">
                        <button className="w-full text-left p-2 hover:bg-gray-50 rounded">📱 Download Offline Maps</button>
                        <button className="w-full text-left p-2 hover:bg-gray-50 rounded">💱 Check Exchange Rates</button>
                        <button className="w-full text-left p-2 hover:bg-gray-50 rounded">🏨 Contact Hotel</button>
                      </div>
                    )
                  },
                  {
                    title: 'Trip Progress', icon: CheckCircle,
                    content: (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm">Flight Confirmed</span></div>
                        <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /><span className="text-sm">Hotel Booked</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-orange-500" /><span className="text-sm">Activities Pending</span></div>
                      </div>
                    )
                  }
                ].map((card, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                    </div>
                    {card.content}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'preparation' && (
            <motion.div key="preparation" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Packing Checklist</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {packingList.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <button
                          onClick={() => toggleCheckItem(item)}
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            checkedItems.includes(item) ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          {checkedItems.includes(item) && <CheckCircle className="w-3 h-3 text-white" />}
                        </button>
                        <span className={checkedItems.includes(item) ? 'line-through text-gray-500' : 'text-gray-900'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-sm text-gray-600">{checkedItems.length} of {packingList.length} items packed</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full transition-all" style={{ width: `${(checkedItems.length / packingList.length) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'documents' && (
            <motion.div key="documents" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  { title: 'Flight Tickets', description: 'Departure: June 15, 2024 at 10:30 AM', status: 'Confirmed' },
                  { title: 'Hotel Voucher', description: 'Ubud Resort & Spa • 7 nights', status: 'Confirmed' },
                  { title: 'Travel Insurance', description: 'Comprehensive coverage', status: 'Active' },
                  { title: 'Activity Bookings', description: 'Temple tour, Cooking class, Volcano hike', status: 'Confirmed' }
                ].map((doc, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{doc.title}</h3>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{doc.status}</span>
                    </div>
                    <button className="btn btn-outline w-full flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" />Download PDF
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'local-info' && (
            <motion.div key="local-info" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Emergency Contacts</h3>
                  <div className="space-y-4">
                    <div><h4 className="font-semibold text-gray-900">Emergency Services</h4><p className="text-gray-600">Police: 110 • Medical: 118 • Fire: 113</p></div>
                    <div><h4 className="font-semibold text-gray-900">Tourist Police</h4><p className="text-gray-600">+62 361 224111</p></div>
                    <div><h4 className="font-semibold text-gray-900">Your Hotel</h4><p className="text-gray-600">Ubud Resort: +62 361 975777</p></div>
                    <div><h4 className="font-semibold text-gray-900">Gohi Travel Support</h4><p className="text-gray-600">24/7 Hotline: +1 800 GOHI-HELP</p></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Cultural Tips</h3>
                  <div className="space-y-4">
                    <div><h4 className="font-semibold text-gray-900">Greetings</h4><p className="text-gray-600">Use both hands when giving/receiving items</p></div>
                    <div><h4 className="font-semibold text-gray-900">Dress Code</h4><p className="text-gray-600">Cover shoulders and knees when visiting temples</p></div>
                    <div><h4 className="font-semibold text-gray-900">Tipping</h4><p className="text-gray-600">10-15% at restaurants, round up for drivers</p></div>
                    <div><h4 className="font-semibold text-gray-900">Bargaining</h4><p className="text-gray-600">Expected at markets, start at 50% of asking price</p></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 