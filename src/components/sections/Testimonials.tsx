'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Gohi Travel transformed our family vacation into an unforgettable adventure. The attention to detail and personalized experiences exceeded all our expectations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Bali Family Adventure'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'San Francisco, USA',
      rating: 5,
      text: 'The cultural immersion experience in Japan was life-changing. Every moment was carefully curated to provide authentic local interactions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Tokyo Cultural Journey'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      text: 'From the moment we landed to our departure, everything was seamless. The local guides were knowledgeable and the experiences were truly unique.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Santorini Sunset Escape'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'London, UK',
      rating: 5,
      text: 'The adventure activities were perfectly balanced with relaxation. Gohi Travel knows how to create the perfect itinerary for every type of traveler.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Iceland Ring Road Adventure'
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Seoul, South Korea',
      rating: 5,
      text: 'The photography tour was incredible! Not only did I capture amazing shots, but I learned so much about the local culture and hidden gems.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Machu Picchu Photography Expedition'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'Exceptional service from start to finish. The team went above and beyond to ensure our honeymoon was absolutely perfect.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      trip: 'Dubai Luxury Honeymoon'
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
    <section className="section-padding bg-gray-50">
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
            What Our
            <span className="block font-accent italic gradient-text">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                         Don&apos;t just take our word for it. Hear from the thousands of travelers 
            who have transformed their wanderlust into unforgettable memories with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-700 to-orange-500 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
                             <p className="text-gray-700 mb-6 leading-relaxed">
                 &ldquo;{testimonial.text}&rdquo;
               </p>

              {/* Trip Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-gray-900">{testimonial.trip}</p>
              </div>

              {/* Customer Info */}
                             <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden">
                   <Image
                     src={testimonial.image}
                     alt={testimonial.name}
                     width={48}
                     height={48}
                     className="w-full h-full object-cover"
                   />
                 </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700 mb-2">50K+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">100+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 