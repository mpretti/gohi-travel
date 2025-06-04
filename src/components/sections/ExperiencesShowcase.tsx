'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Clock, Star, Camera, Mountain, Utensils, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperiencesShowcase = () => {
  const experiences = [
    {
      id: 1,
      title: 'Cultural Immersion',
      description: 'Live like a local and discover authentic traditions, customs, and ways of life.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Local Family Stays', 'Traditional Workshops', 'Community Projects'],
      duration: '3-7 days',
      rating: 4.9,
      price: 'From $299',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Adventure & Outdoors',
      description: 'Push your limits with thrilling outdoor activities and extreme sports.',
      icon: Mountain,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Mountain Climbing', 'White Water Rafting', 'Zip Lining'],
      duration: '1-5 days',
      rating: 4.8,
      price: 'From $199',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Culinary Journeys',
      description: 'Taste your way through destinations with authentic food experiences.',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Cooking Classes', 'Street Food Tours', 'Wine Tastings'],
      duration: 'Half day - 3 days',
      rating: 4.7,
      price: 'From $89',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Photography Tours',
      description: 'Capture stunning moments with professional guidance and unique perspectives.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Golden Hour Shoots', 'Wildlife Photography', 'Street Photography'],
      duration: '1-3 days',
      rating: 4.8,
      price: 'From $149',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Wellness & Relaxation',
      description: 'Rejuvenate your mind, body, and soul with transformative wellness experiences.',
      icon: Waves,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      activities: ['Spa Retreats', 'Yoga Sessions', 'Meditation Workshops'],
      duration: '2-7 days',
      rating: 4.9,
      price: 'From $399',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
            Curated
            <span className="block font-accent italic gradient-text">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Go beyond sightseeing with our carefully crafted experiences that connect you 
            with local culture, adventure, and personal growth opportunities.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Background Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${experience.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <experience.icon className="w-6 h-6" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{experience.rating}</span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {experience.title}
                  </h3>
                  
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Activities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.activities.map((activity, actIndex) => (
                      <span
                        key={actIndex}
                        className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <span className="text-lg font-bold text-yellow-300">{experience.price}</span>
                    </div>
                    
                    <Link
                      href={`/experiences/${experience.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-colors duration-300 group/btn"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our travel experts can create a completely customized experience just for you. 
                             Tell us your dreams, and we&apos;ll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/experiences"
                className="btn btn-outline text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Browse All Experiences</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
              >
                <span>Create Custom Experience</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencesShowcase; 