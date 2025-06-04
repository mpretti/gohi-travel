'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Calendar, MapPin, Clock, DollarSign, Users, Share2, Download, Trash2, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TripItem {
  id: string;
  type: 'destination' | 'activity' | 'accommodation' | 'transport';
  title: string;
  description: string;
  duration: number;
  cost: number;
  location: string;
  image: string;
  day: number;
  startTime?: string;
}

interface TripDay {
  day: number;
  date: string;
  items: TripItem[];
}

const sampleDestinations = [
  {
    id: 'dest-1',
    type: 'destination' as const,
    title: 'Eiffel Tower',
    description: 'Iconic iron lattice tower and symbol of Paris',
    duration: 3,
    cost: 25,
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400',
    day: 0,
    startTime: '09:00'
  },
  {
    id: 'dest-2',
    type: 'destination' as const,
    title: 'Louvre Museum',
    description: 'World\'s largest art museum and historic monument',
    duration: 4,
    cost: 17,
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1566139884669-4b9356b4c040?w=400',
    day: 0,
    startTime: '14:00'
  },
  {
    id: 'act-1',
    type: 'activity' as const,
    title: 'Seine River Cruise',
    description: 'Romantic boat tour along the Seine River',
    duration: 2,
    cost: 35,
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400',
    day: 0,
    startTime: '19:00'
  },
  {
    id: 'acc-1',
    type: 'accommodation' as const,
    title: 'Hotel Le Marais',
    description: 'Boutique hotel in historic district',
    duration: 24,
    cost: 150,
    location: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400',
    day: 0
  }
];

export default function TripPlanner() {
  const [tripDays, setTripDays] = useState<TripDay[]>([
    {
      day: 1,
      date: '2024-06-15',
      items: []
    }
  ]);
  
  const [availableItems] = useState<TripItem[]>(sampleDestinations);
  const [draggedItem, setDraggedItem] = useState<TripItem | null>(null);
  const [showBudget, setShowBudget] = useState(false);
  const [tripTitle, setTripTitle] = useState('My Paris Adventure');
  const [travelers, setTravelers] = useState(2);

  const addDay = () => {
    const newDay = tripDays.length + 1;
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + newDay - 1);
    
    setTripDays([...tripDays, {
      day: newDay,
      date: newDate.toISOString().split('T')[0],
      items: []
    }]);
  };

  const removeDay = (dayIndex: number) => {
    if (tripDays.length > 1) {
      setTripDays(tripDays.filter((_, index) => index !== dayIndex));
    }
  };

  const handleDragStart = (item: TripItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dayIndex: number) => {
    e.preventDefault();
    if (draggedItem) {
      const newItem = {
        ...draggedItem,
        id: `${draggedItem.id}-${Date.now()}`,
        day: dayIndex + 1
      };
      
      const updatedDays = [...tripDays];
      updatedDays[dayIndex].items.push(newItem);
      setTripDays(updatedDays);
      setDraggedItem(null);
    }
  };

  const removeItem = (dayIndex: number, itemIndex: number) => {
    const updatedDays = [...tripDays];
    updatedDays[dayIndex].items.splice(itemIndex, 1);
    setTripDays(updatedDays);
  };

  const calculateTotalCost = () => {
    return tripDays.reduce((total, day) => {
      return total + day.items.reduce((dayTotal, item) => dayTotal + item.cost, 0);
    }, 0);
  };

  const calculateTotalDuration = () => {
    return tripDays.reduce((total, day) => {
      return total + day.items.reduce((dayTotal, item) => {
        return item.type === 'accommodation' ? dayTotal : dayTotal + item.duration;
      }, 0);
    }, 0);
  };

  const formatTime = (hours: number) => {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    if (days > 0) {
      return `${days}d ${remainingHours}h`;
    }
    return `${remainingHours}h`;
  };

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Plan Your Perfect
            <span className="block font-accent italic gradient-text">Itinerary</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Drag and drop destinations, activities, and accommodations to create your custom travel itinerary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Available Items Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Available Items</h3>
              
              <div className="space-y-3">
                {availableItems.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    className="bg-gray-50 rounded-lg p-3 cursor-move hover:bg-gray-100 transition-colors duration-200 border-2 border-transparent hover:border-blue-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 truncate">{item.title}</h4>
                        <p className="text-xs text-gray-500 truncate">{item.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-blue-600 font-medium">${item.cost}</span>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{formatTime(item.duration)}</span>
                        </div>
                      </div>
                      <GripVertical className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Trip Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Trip Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Cost:</span>
                    <span className="font-semibold text-green-600">${calculateTotalCost() * travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{formatTime(calculateTotalDuration())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Travelers:</span>
                    <input
                      type="number"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                      className="w-16 text-right font-semibold bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none"
                      min="1"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Per Person:</span>
                    <span className="font-semibold text-blue-600">${Math.round(calculateTotalCost())}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2">
                <button
                  onClick={() => setShowBudget(!showBudget)}
                  className="w-full btn btn-outline text-sm py-2"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Budget Breakdown
                </button>
                <button className="w-full btn btn-primary text-sm py-2">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Trip
                </button>
                <button className="w-full btn btn-outline text-sm py-2">
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trip Planner Main Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Trip Header */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <input
                  type="text"
                  value={tripTitle}
                  onChange={(e) => setTripTitle(e.target.value)}
                  className="text-2xl font-bold text-gray-900 bg-transparent border-none outline-none focus:bg-gray-50 rounded px-2 py-1"
                />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={addDay}
                    className="btn btn-primary text-sm px-4 py-2"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Day
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{tripDays.length} days</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{travelers} travelers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="h-4 w-4" />
                  <span>${calculateTotalCost() * travelers} total</span>
                </div>
              </div>
            </div>

            {/* Trip Days */}
            <div className="space-y-6">
              {tripDays.map((day, dayIndex) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: dayIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Day {day.day}</h3>
                        <p className="text-blue-100">{new Date(day.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</p>
                      </div>
                      {tripDays.length > 1 && (
                        <button
                          onClick={() => removeDay(dayIndex)}
                          className="text-white hover:text-red-200 transition-colors duration-200"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, dayIndex)}
                    className={`p-6 min-h-[200px] ${
                      day.items.length === 0 
                        ? 'border-2 border-dashed border-gray-300 flex items-center justify-center' 
                        : ''
                    }`}
                  >
                    {day.items.length === 0 ? (
                      <div className="text-center text-gray-500">
                        <MapPin className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                        <p className="text-lg font-medium">Drop items here to plan your day</p>
                        <p className="text-sm">Drag destinations, activities, or accommodations from the sidebar</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {day.items.map((item, itemIndex) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-4">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                  <button
                                    onClick={() => removeItem(dayIndex, itemIndex)}
                                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                                <div className="flex items-center space-x-4 text-sm">
                                  <div className="flex items-center space-x-1 text-green-600">
                                    <DollarSign className="h-3 w-3" />
                                    <span>${item.cost}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-blue-600">
                                    <Clock className="h-3 w-3" />
                                    <span>{formatTime(item.duration)}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-gray-500">
                                    <MapPin className="h-3 w-3" />
                                    <span>{item.location}</span>
                                  </div>
                                  {item.startTime && (
                                    <div className="flex items-center space-x-1 text-purple-600">
                                      <Calendar className="h-3 w-3" />
                                      <span>{item.startTime}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Budget Breakdown Modal */}
        <AnimatePresence>
          {showBudget && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowBudget(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl font-semibold mb-4">Budget Breakdown</h3>
                <div className="space-y-3">
                  {tripDays.map((day) => (
                    <div key={day.day}>
                      <h4 className="font-medium text-gray-900 mb-2">Day {day.day}</h4>
                      {day.items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">{item.title}</span>
                          <span className="font-medium">${item.cost * travelers}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="border-t pt-3 mt-4">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total for {travelers} travelers:</span>
                      <span className="text-green-600">${calculateTotalCost() * travelers}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowBudget(false)}
                  className="w-full btn btn-primary mt-4"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 