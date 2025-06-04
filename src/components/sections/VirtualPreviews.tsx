'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, MapPin, Thermometer, Cloud, Sun, CloudRain, Eye, Camera, Map, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  video: string;
  panorama: string;
  weather: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    icon: 'sun' | 'cloud' | 'rain';
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  highlights: string[];
  rating: number;
  reviews: number;
  bestTime: string;
}

const destinations: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    description: 'Stunning volcanic island with white-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800',
    video: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
    panorama: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200',
    weather: {
      temperature: 24,
      condition: 'Sunny',
      humidity: 65,
      windSpeed: 12,
      icon: 'sun'
    },
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    },
    highlights: ['Oia Sunset', 'Red Beach', 'Akrotiri Archaeological Site', 'Wine Tasting', 'Volcanic Hot Springs'],
    rating: 4.8,
    reviews: 2847,
    bestTime: 'April - October'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise with ancient temples, lush rice terraces, pristine beaches, and vibrant cultural heritage.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    video: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
    panorama: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200',
    weather: {
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 78,
      windSpeed: 8,
      icon: 'cloud'
    },
    coordinates: {
      lat: -8.3405,
      lng: 115.0920
    },
    highlights: ['Tanah Lot Temple', 'Tegallalang Rice Terraces', 'Mount Batur Sunrise', 'Ubud Monkey Forest', 'Seminyak Beach'],
    rating: 4.7,
    reviews: 3521,
    bestTime: 'April - September'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    country: 'Iceland',
    description: 'Land of fire and ice featuring dramatic waterfalls, geysers, glaciers, and the magical Northern Lights.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    video: 'https://images.unsplash.com/photo-1531168556467-80aace4d0144?w=800',
    panorama: 'https://images.unsplash.com/photo-1531168556467-80aace4d0144?w=1200',
    weather: {
      temperature: 8,
      condition: 'Light Rain',
      humidity: 82,
      windSpeed: 15,
      icon: 'rain'
    },
    coordinates: {
      lat: 64.9631,
      lng: -19.0208
    },
    highlights: ['Northern Lights', 'Blue Lagoon', 'Gullfoss Waterfall', 'Geysir Hot Springs', 'Jökulsárlón Glacier Lagoon'],
    rating: 4.9,
    reviews: 1892,
    bestTime: 'September - March (Northern Lights)'
  }
];

const weatherIcons = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain
};

export default function VirtualPreviews() {
  const [selectedDestination, setSelectedDestination] = useState<Destination>(destinations[0]);
  const [activeView, setActiveView] = useState<'gallery' | 'video' | 'panorama' | 'map'>('gallery');
  const [showWeatherDetails, setShowWeatherDetails] = useState(false);

  const WeatherIcon = weatherIcons[selectedDestination.weather.icon];

  return (
    <section className="section-padding bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Virtual Destination
            <span className="block font-accent italic gradient-text">Previews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore destinations like never before with 360° views, live weather, and immersive virtual tours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Destination Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Choose Destination</h3>
              
              <div className="space-y-3">
                {destinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedDestination.id === destination.id
                        ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                                         <div className="flex items-center space-x-3">
                       <Image
                         src={destination.image}
                         alt={destination.name}
                         width={64}
                         height={64}
                         className="w-16 h-16 rounded-lg object-cover"
                       />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{destination.name}</h4>
                        <p className="text-sm text-gray-500">{destination.country}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{destination.rating}</span>
                          <span className="text-xs text-gray-400">({destination.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Weather Widget */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowWeatherDetails(!showWeatherDetails)}
                  className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl p-4 hover:from-blue-600 hover:to-teal-600 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <WeatherIcon className="h-8 w-8" />
                      <div className="text-left">
                        <div className="text-2xl font-bold">{selectedDestination.weather.temperature}°C</div>
                        <div className="text-sm opacity-90">{selectedDestination.weather.condition}</div>
                      </div>
                    </div>
                    <Thermometer className="h-5 w-5 opacity-75" />
                  </div>
                </button>

                <AnimatePresence>
                  {showWeatherDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 bg-gray-50 rounded-lg p-3 text-sm"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-gray-500">Humidity</span>
                          <div className="font-semibold">{selectedDestination.weather.humidity}%</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Wind</span>
                          <div className="font-semibold">{selectedDestination.weather.windSpeed} km/h</div>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-200">
                        <span className="text-gray-500">Best Time to Visit</span>
                        <div className="font-semibold text-blue-600">{selectedDestination.bestTime}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Main Preview Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Destination Header */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{selectedDestination.name}</h3>
                  <p className="text-lg text-gray-600 flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{selectedDestination.country}</span>
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-xl font-semibold">{selectedDestination.rating}</span>
                  <span className="text-gray-500">({selectedDestination.reviews} reviews)</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">{selectedDestination.description}</p>
              
              {/* View Toggle Buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'gallery', label: 'Gallery', icon: Camera },
                  { id: 'video', label: 'Video Tour', icon: Play },
                  { id: 'panorama', label: '360° View', icon: Eye },
                  { id: 'map', label: 'Interactive Map', icon: Map }
                ].map((view) => {
                  const IconComponent = view.icon;
                  return (
                    <button
                      key={view.id}
                                             onClick={() => setActiveView(view.id as 'gallery' | 'video' | 'panorama' | 'map')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeView === view.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-sm font-medium">{view.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preview Content */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <AnimatePresence mode="wait">
                {activeView === 'gallery' && (
                  <motion.div
                    key="gallery"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                                         <Image
                       src={selectedDestination.image}
                       alt={selectedDestination.name}
                       width={800}
                       height={384}
                       className="w-full h-96 object-cover"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Photo Gallery</h4>
                      <p className="text-white/90">Stunning views of {selectedDestination.name}</p>
                    </div>
                  </motion.div>
                )}

                {activeView === 'video' && (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                                         <Image
                       src={selectedDestination.video}
                       alt={`${selectedDestination.name} video`}
                       width={800}
                       height={384}
                       className="w-full h-96 object-cover"
                     />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300">
                        <Play className="h-12 w-12 text-white ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">Video Tour</h4>
                      <p className="text-white/90">Immersive journey through {selectedDestination.name}</p>
                    </div>
                  </motion.div>
                )}

                {activeView === 'panorama' && (
                  <motion.div
                    key="panorama"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                                         <Image
                       src={selectedDestination.panorama}
                       alt={`${selectedDestination.name} 360°`}
                       width={800}
                       height={384}
                       className="w-full h-96 object-cover"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium">
                        360° Interactive View
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold mb-2">360° Panorama</h4>
                      <p className="text-white/90">Explore every angle of {selectedDestination.name}</p>
                    </div>
                  </motion.div>
                )}

                {activeView === 'map' && (
                  <motion.div
                    key="map"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Map className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h4>
                      <p className="text-gray-600 mb-4">Explore points of interest around {selectedDestination.name}</p>
                      <div className="bg-white rounded-lg p-4 inline-block shadow-lg">
                        <div className="text-sm text-gray-500 mb-1">Coordinates</div>
                        <div className="font-mono text-blue-600">
                          {selectedDestination.coordinates.lat.toFixed(4)}, {selectedDestination.coordinates.lng.toFixed(4)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Top Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selectedDestination.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-3 border border-blue-100"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-800 font-medium">{highlight}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 