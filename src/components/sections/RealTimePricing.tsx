'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, TrendingUp, TrendingDown, Bell, Clock, Users, Star, MapPin } from 'lucide-react';

interface PricingData {
  destination: string;
  basePrice: number;
  currentPrice: number;
  availability: 'high' | 'medium' | 'low';
  priceChange: number;
  lastUpdated: string;
  deals: string[];
  image: string;
  rating: number;
  duration: string;
}

const mockPricingData: PricingData[] = [
  {
    destination: 'Bali, Indonesia',
    basePrice: 1299,
    currentPrice: 999,
    availability: 'medium',
    priceChange: -23,
    lastUpdated: '2 minutes ago',
    deals: ['Early Bird 25% Off', 'Free Airport Transfer'],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400',
    rating: 4.8,
    duration: '7 days'
  },
  {
    destination: 'Tokyo, Japan',
    basePrice: 1899,
    currentPrice: 2199,
    availability: 'low',
    priceChange: 16,
    lastUpdated: '5 minutes ago',
    deals: ['Cherry Blossom Special'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
    rating: 4.9,
    duration: '10 days'
  },
  {
    destination: 'Santorini, Greece',
    basePrice: 1599,
    currentPrice: 1399,
    availability: 'high',
    priceChange: -12,
    lastUpdated: '1 minute ago',
    deals: ['Summer Special', 'Free Sunset Tour'],
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400',
    rating: 4.7,
    duration: '6 days'
  }
];

export default function RealTimePricing() {
  const [selectedMonth, setSelectedMonth] = useState('June 2024');
  const [priceAlerts, setPriceAlerts] = useState<string[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const togglePriceAlert = (destination: string) => {
    setPriceAlerts(prev => 
      prev.includes(destination) 
        ? prev.filter(d => d !== destination)
        : [...prev, destination]
    );
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriceChangeIcon = (change: number) => {
    return change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const getPriceChangeColor = (change: number) => {
    return change > 0 ? 'text-red-600' : 'text-green-600';
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Live Pricing & Availability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real-time pricing updates, availability tracking, and smart price alerts 
            to help you book at the perfect moment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="btn btn-primary flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              View Calendar
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              Last updated: 30 seconds ago
            </div>
          </div>
        </motion.div>

        {/* Calendar View */}
        <AnimatePresence>
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12 bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Availability Calendar</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="font-semibold text-gray-600 p-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 30 }, (_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      Math.random() > 0.7 ? 'bg-red-100 text-red-600' :
                      Math.random() > 0.4 ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-100 rounded"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-100 rounded"></div>
                  <span>Limited</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-100 rounded"></div>
                  <span>Sold Out</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPricingData.map((item, index) => (
            <motion.div
              key={item.destination}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => togglePriceAlert(item.destination)}
                    className={`p-2 rounded-full transition-colors ${
                      priceAlerts.includes(item.destination)
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-orange-50'
                    }`}
                  >
                    <Bell className="w-4 h-4" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(item.availability)}`}>
                    {item.availability === 'high' ? 'High Availability' :
                     item.availability === 'medium' ? 'Limited Spots' : 'Almost Sold Out'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.destination}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{item.duration}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">${item.currentPrice}</span>
                    {item.currentPrice !== item.basePrice && (
                      <span className="text-lg text-gray-500 line-through">${item.basePrice}</span>
                    )}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${getPriceChangeColor(item.priceChange)}`}>
                    {getPriceChangeIcon(item.priceChange)}
                    <span>{Math.abs(item.priceChange)}% {item.priceChange > 0 ? 'increase' : 'decrease'}</span>
                    <span className="text-gray-500">from last week</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Deals:</h4>
                  <div className="space-y-1">
                    {item.deals.map((deal, dealIndex) => (
                      <div key={dealIndex} className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                        {deal}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Updated {item.lastUpdated}</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{Math.floor(Math.random() * 20) + 5} people viewing</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="btn btn-primary flex-1">
                    Book Now
                  </button>
                  <button className="btn btn-outline px-4">
                    Compare
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price Alert Summary */}
        {priceAlerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-orange-50 border border-orange-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-900">Active Price Alerts</h3>
            </div>
            <p className="text-orange-700 mb-4">
              You&apos;ll receive notifications when prices drop for these destinations:
            </p>
            <div className="flex flex-wrap gap-2">
              {priceAlerts.map(destination => (
                <span key={destination} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {destination}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 