'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationsShowcase = () => {
  const destinations = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with ancient temples, lush rice terraces, and pristine beaches.',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7-14 days',
      rating: 4.9,
      price: 'From $1,299',
      highlights: ['Ubud Rice Terraces', 'Temple Tours', 'Beach Relaxation'],
      featured: true
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      description: 'Where ancient traditions meet cutting-edge technology in perfect harmony.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5-10 days',
      rating: 4.8,
      price: 'From $1,899',
      highlights: ['Cherry Blossoms', 'Sushi Experience', 'Modern Culture'],
      featured: false
    },
    {
      id: 3,
      name: 'Santorini, Greece',
      description: 'Iconic white-washed buildings overlooking the stunning Aegean Sea.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-8 days',
      rating: 4.7,
      price: 'From $1,599',
      highlights: ['Sunset Views', 'Wine Tasting', 'Island Hopping'],
      featured: false
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      description: 'Ancient Incan citadel nestled high in the Andes Mountains.',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6-12 days',
      rating: 4.9,
      price: 'From $1,799',
      highlights: ['Inca Trail', 'Sacred Valley', 'Cultural Immersion'],
      featured: true
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      description: 'Futuristic city of luxury, innovation, and desert adventures.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-7 days',
      rating: 4.6,
      price: 'From $1,199',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Luxury Shopping'],
      featured: false
    },
    {
      id: 6,
      name: 'Iceland',
      description: 'Land of fire and ice with dramatic landscapes and natural wonders.',
      image: 'https://images.unsplash.com/photo-1539066834-3c0e6e2b8b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8-14 days',
      rating: 4.8,
      price: 'From $2,299',
      highlights: ['Northern Lights', 'Blue Lagoon', 'Ring Road'],
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Discover Your Next
            <span className="block font-accent italic gradient-text">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From tropical paradises to ancient wonders, explore our handpicked destinations 
            that promise unforgettable experiences and lifelong memories.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                destination.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Featured Badge */}
                {destination.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">{destination.name}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {destination.name}
                </h3>
                
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.slice(0, 2).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                    <span className="text-lg font-bold text-yellow-400">{destination.price}</span>
                  </div>
                  
                  <Link
                    href={`/destinations/${destination.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors duration-300 group/btn"
                  >
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/destinations"
            className="btn btn-outline text-lg px-8 py-4 inline-flex items-center space-x-2 group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsShowcase; 