'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Clock, 
  MapPin, 
  Users, 
  Heart, 
  Star, 
  Coffee, 
  Camera, 
  Utensils,
  TreePine,
  Building,
  Compass,
  Award
} from 'lucide-react';

const microAdventures = [
  {
    id: 1,
    title: "Morning Coffee with Maria",
    location: "Little Italy, NYC",
    duration: "15 min",
    type: "Local Family",
    host: "Maria Rossi",
    hostImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Join Maria for authentic Italian espresso and hear stories about her grandmother's recipes",
    price: "Free",
    rating: 4.9,
    reviews: 127,
    icon: Coffee,
    category: "Cultural Exchange",
    impact: "Support local family business"
  },
  {
    id: 2,
    title: "Secret Garden Photography",
    location: "Hidden Courtyard, Paris",
    duration: "20 min",
    type: "Hidden Gem",
    host: "Local Photographer",
    hostImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Discover a hidden 17th-century garden known only to locals, perfect for golden hour photos",
    price: "$5",
    rating: 4.8,
    reviews: 89,
    icon: Camera,
    category: "Photography",
    impact: "Preserve local heritage"
  },
  {
    id: 3,
    title: "Community Garden Volunteering",
    location: "Brooklyn, NYC",
    duration: "2 hours",
    type: "Micro-Volunteer",
    host: "Green Brooklyn Initiative",
    hostImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Help plant vegetables that will feed local families while learning urban farming techniques",
    price: "Free",
    rating: 4.9,
    reviews: 203,
    icon: TreePine,
    category: "Environmental",
    impact: "Feed 5 local families"
  },
  {
    id: 4,
    title: "Grandma's Dumpling Lesson",
    location: "Chinatown, San Francisco",
    duration: "45 min",
    type: "Local Family",
    host: "Mrs. Chen",
    hostImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Learn traditional dumpling folding techniques passed down through 4 generations",
    price: "$15",
    rating: 5.0,
    reviews: 156,
    icon: Utensils,
    category: "Culinary",
    impact: "Preserve cultural traditions"
  },
  {
    id: 5,
    title: "Rooftop Sunrise Meditation",
    location: "Local Apartment, Tokyo",
    duration: "30 min",
    type: "Hidden Gem",
    host: "Kenji Tanaka",
    hostImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Start your day with meditation overlooking Tokyo skyline from a local's private rooftop",
    price: "$10",
    rating: 4.9,
    reviews: 94,
    icon: Building,
    category: "Wellness",
    impact: "Mental health awareness"
  },
  {
    id: 6,
    title: "Neighborhood Story Walk",
    location: "Historic Quarter, Prague",
    duration: "25 min",
    type: "Hidden Gem",
    host: "Local Historian",
    hostImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    description: "Discover untold stories of your neighborhood through the eyes of a lifelong resident",
    price: "$8",
    rating: 4.7,
    reviews: 78,
    icon: Compass,
    category: "History",
    impact: "Preserve local stories"
  }
];

const categories = [
  { name: "All", icon: Star, count: 6 },
  { name: "Local Family", icon: Users, count: 2 },
  { name: "Hidden Gem", icon: MapPin, count: 3 },
  { name: "Micro-Volunteer", icon: Heart, count: 1 }
];

export default function HyperLocalAdventures() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAdventure, setSelectedAdventure] = useState<number | null>(null);

  const filteredAdventures = selectedCategory === "All" 
    ? microAdventures 
    : microAdventures.filter(adventure => adventure.type === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hyper-Local Micro-Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover authentic neighborhood experiences in just 15 minutes. Connect with local families, 
            uncover hidden gems, and make real impact through micro-volunteering opportunities.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2,847</div>
              <div className="text-sm text-gray-600">Local Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">156</div>
              <div className="text-sm text-gray-600">Hidden Gems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">1,203</div>
              <div className="text-sm text-gray-600">Volunteer Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">89%</div>
              <div className="text-sm text-gray-600">Return Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.name
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Adventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredAdventures.map((adventure, index) => {
              const IconComponent = adventure.icon;
              return (
                <motion.div
                  key={adventure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedAdventure(selectedAdventure === adventure.id ? null : adventure.id)}
                >
                  {/* Adventure Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-blue-600">{adventure.type}</div>
                          <div className="text-xs text-gray-500">{adventure.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{adventure.price}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {adventure.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {adventure.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      {adventure.location}
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {adventure.description}
                    </p>

                    {/* Host Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <Image
                        src={adventure.hostImage}
                        alt={adventure.host}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{adventure.host}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {adventure.rating} ({adventure.reviews} reviews)
                        </div>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <Award className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-800">
                        Impact: {adventure.impact}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {selectedAdventure === adventure.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-100 p-6 bg-gray-50"
                      >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">What You&apos;ll Experience:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Authentic local interaction</li>
                              <li>• Cultural insight and stories</li>
                              <li>• Unique photo opportunities</li>
                              <li>• Meaningful community impact</li>
                            </ul>
                          </div>
                          
                          <div className="flex gap-3">
                            <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                              Book Now
                            </button>
                            <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                              Save
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Become a Local Host</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Share your neighborhood&apos;s hidden gems and authentic experiences with travelers. 
              Earn extra income while preserving local culture and building meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Host an Experience
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 