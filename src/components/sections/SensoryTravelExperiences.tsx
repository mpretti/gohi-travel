'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Eye, 
  Ear, 
  Flower2, 
  Hand, 
  Utensils, 
  Music, 
  Palette, 
  Wind,
  Waves,
  Mountain,
  Flower,
  Coffee,
  Play,
  Download,
  Share,
  Heart,
  Users
} from 'lucide-react';

const sensoryTypes = [
  {
    id: 'visual',
    name: 'Visual',
    icon: Eye,
    color: 'blue',
    description: 'Immersive visual experiences and photography'
  },
  {
    id: 'auditory',
    name: 'Auditory',
    icon: Ear,
    color: 'purple',
    description: 'Sound landscapes and musical journeys'
  },
  {
    id: 'olfactory',
    name: 'Scent',
    icon: Flower2,
    color: 'pink',
    description: 'Signature fragrances and aroma mapping'
  },
  {
    id: 'gustatory',
    name: 'Taste',
    icon: Utensils,
    color: 'orange',
    description: 'Culinary memories and flavor profiles'
  },
  {
    id: 'tactile',
    name: 'Touch',
    icon: Hand,
    color: 'green',
    description: 'Textural experiences and haptic memories'
  }
];

const sensoryExperiences = [
  // Visual Experiences
  {
    id: 1,
    title: "Golden Hour Photography Collection",
    destination: "Santorini, Greece",
    type: "visual",
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Capture the magical interplay of light and shadow across white-washed buildings",
    sensoryElements: ["Color temperature mapping", "Light intensity tracking", "Shadow pattern analysis"],
    price: 89,
    rating: 4.9,
    participants: 234,
    uniqueFeature: "AI-powered composition suggestions"
  },
  {
    id: 2,
    title: "Bioluminescent Night Kayaking",
    destination: "Mosquito Bay, Puerto Rico",
    type: "visual",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Witness nature's own light show as you paddle through glowing waters",
    sensoryElements: ["Bioluminescence intensity", "Water movement patterns", "Star reflection mapping"],
    price: 125,
    rating: 5.0,
    participants: 89,
    uniqueFeature: "Underwater light photography"
  },
  
  // Auditory Experiences
  {
    id: 3,
    title: "Tokyo Soundscape Symphony",
    destination: "Tokyo, Japan",
    type: "auditory",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Record and compose with the unique sounds of Tokyo's urban environment",
    sensoryElements: ["Train station melodies", "Street vendor calls", "Temple bell harmonics"],
    price: 67,
    rating: 4.8,
    participants: 156,
    uniqueFeature: "Personal sound composition"
  },
  {
    id: 4,
    title: "Amazon Rainforest Audio Journey",
    destination: "Manaus, Brazil",
    type: "auditory",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Immerse yourself in the complex symphony of the world's largest rainforest",
    sensoryElements: ["Bird call identification", "Insect rhythm patterns", "Water flow acoustics"],
    price: 145,
    rating: 4.9,
    participants: 78,
    uniqueFeature: "3D spatial audio recording"
  },
  
  // Olfactory Experiences
  {
    id: 5,
    title: "Provence Lavender Scent Journey",
    destination: "Provence, France",
    type: "olfactory",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Create your personal fragrance inspired by lavender fields and local herbs",
    sensoryElements: ["Lavender intensity mapping", "Herb garden exploration", "Custom scent blending"],
    price: 98,
    rating: 4.7,
    participants: 203,
    uniqueFeature: "Take-home signature scent"
  },
  {
    id: 6,
    title: "Spice Market Aroma Adventure",
    destination: "Marrakech, Morocco",
    type: "olfactory",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Navigate the complex aromatic landscape of traditional spice markets",
    sensoryElements: ["Spice identification training", "Aroma intensity mapping", "Cultural scent stories"],
    price: 56,
    rating: 4.8,
    participants: 167,
    uniqueFeature: "Scent memory journal"
  },
  
  // Gustatory Experiences
  {
    id: 7,
    title: "Molecular Gastronomy Lab",
    destination: "Copenhagen, Denmark",
    type: "gustatory",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Deconstruct and reimagine flavors using cutting-edge culinary techniques",
    sensoryElements: ["Flavor molecule analysis", "Texture transformation", "Temperature play"],
    price: 189,
    rating: 4.9,
    participants: 92,
    uniqueFeature: "Flavor memory mapping"
  },
  {
    id: 8,
    title: "Wine Terroir Tasting Journey",
    destination: "Tuscany, Italy",
    type: "gustatory",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Taste how soil, climate, and tradition create unique flavor profiles",
    sensoryElements: ["Soil taste correlation", "Climate flavor mapping", "Vintage comparison"],
    price: 134,
    rating: 4.8,
    participants: 245,
    uniqueFeature: "Personal taste profile"
  },
  
  // Tactile Experiences
  {
    id: 9,
    title: "Icelandic Thermal Texture Tour",
    destination: "Reykjavik, Iceland",
    type: "tactile",
    duration: "5 hours",
    image: "https://images.unsplash.com/photo-1539066834-3c0b2b8e8b8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Experience the contrast of ice and fire through touch and temperature",
    sensoryElements: ["Temperature gradient mapping", "Texture documentation", "Thermal sensation tracking"],
    price: 112,
    rating: 4.9,
    participants: 134,
    uniqueFeature: "Thermal memory journal"
  },
  {
    id: 10,
    title: "Balinese Textile Touch Workshop",
    destination: "Ubud, Bali",
    type: "tactile",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Learn traditional weaving while exploring the tactile qualities of natural fibers",
    sensoryElements: ["Fiber texture analysis", "Weaving pattern touch", "Natural dye textures"],
    price: 78,
    rating: 4.7,
    participants: 189,
    uniqueFeature: "Handwoven textile keepsake"
  }
];

const learningStyles = [
  {
    name: "Visual Learner",
    description: "Learn through seeing and observing",
    experiences: ["Photography workshops", "Color theory tours", "Visual mapping"],
    icon: Eye,
    color: "blue"
  },
  {
    name: "Auditory Learner", 
    description: "Learn through listening and discussion",
    experiences: ["Sound recording", "Musical workshops", "Storytelling sessions"],
    icon: Ear,
    color: "purple"
  },
  {
    name: "Kinesthetic Learner",
    description: "Learn through hands-on activities",
    experiences: ["Craft workshops", "Cooking classes", "Physical exploration"],
    icon: Hand,
    color: "green"
  }
];

export default function SensoryTravelExperiences() {
  const [selectedSense, setSelectedSense] = useState('visual');
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);

  const filteredExperiences = sensoryExperiences.filter(exp => exp.type === selectedSense);

  const getSenseColor = (sense: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 border-blue-200',
      purple: 'text-purple-600 bg-purple-100 border-purple-200',
      pink: 'text-pink-600 bg-pink-100 border-pink-200',
      orange: 'text-orange-600 bg-orange-100 border-orange-200',
      green: 'text-green-600 bg-green-100 border-green-200'
    };
    return colors[sense as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sensory Travel Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Engage all your senses and create lasting memories through immersive experiences designed 
            for different learning styles. Collect sounds, scents, tastes, and textures from around the world.
          </p>
        </motion.div>

        {/* Learning Styles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Designed for Your Learning Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningStyles.map((style) => {
              const IconComponent = style.icon;
              return (
                <div key={style.name} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${getSenseColor(style.color)}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{style.name}</h4>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="space-y-2">
                    {style.experiences.map((exp, index) => (
                      <div key={index} className="text-sm bg-gray-50 rounded-lg px-3 py-2">
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Sensory Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Sensory Journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sensoryTypes.map((sense) => {
              const IconComponent = sense.icon;
              const isSelected = selectedSense === sense.id;
              return (
                <button
                  key={sense.id}
                  onClick={() => setSelectedSense(sense.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                    isSelected 
                      ? `${getSenseColor(sense.color)} shadow-lg ring-2 ring-offset-2` 
                      : 'bg-white text-gray-600 hover:shadow-md border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">{sense.name}</div>
                    <div className="text-xs opacity-75">{sense.description}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSenseColor(sensoryTypes.find(s => s.id === experience.type)?.color || 'blue')}`}>
                      {sensoryTypes.find(s => s.id === experience.type)?.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button 
                      className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                      onClick={() => setSelectedExperience(selectedExperience === experience.id ? null : experience.id)}
                    >
                      <Heart className={`w-5 h-5 ${selectedExperience === experience.id ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h4>
                      <p className="text-sm text-gray-600">{experience.destination}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">${experience.price}</div>
                      <div className="text-xs text-gray-500">{experience.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{experience.description}</p>

                  {/* Sensory Elements */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Sensory Elements:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.sensoryElements.map((element, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {element}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Unique Feature */}
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg mb-4">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">
                        {experience.uniqueFeature}
                      </span>
                    </div>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {experience.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {experience.participants}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {experience.type === 'auditory' && (
                        <button 
                          className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                          onClick={() => setPlayingAudio(playingAudio === experience.id ? null : experience.id)}
                        >
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                        <Share className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Sensory Collection Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Your Personal Sensory Collection</h3>
              <p className="text-indigo-100 mb-6">
                Build a unique digital collection of sensory memories from your travels. 
                Record sounds, capture scents, document textures, and preserve flavors 
                to relive your experiences anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                  Start Your Collection
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                  View Sample Collection
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <Music className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">47</div>
                <div className="text-indigo-100 text-sm">Sound Recordings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <Flower className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-indigo-100 text-sm">Scent Profiles</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <Coffee className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">31</div>
                <div className="text-indigo-100 text-sm">Taste Memories</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <Hand className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">19</div>
                <div className="text-indigo-100 text-sm">Texture Maps</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Sensory Travel Profile</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our sensory preference quiz to discover which experiences will create the most 
              meaningful and memorable connections for your unique travel style.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Take Sensory Quiz
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 