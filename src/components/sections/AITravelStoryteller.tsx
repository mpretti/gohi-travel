'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, 
  Camera, 
  Mic, 
  Heart, 
  Share, 
  Download,
  Play,
  Pause,
  Clock,
  MapPin,
  Users,
  Zap,
  Brain,
  Palette
} from 'lucide-react';

const storyTypes = [
  {
    id: 'adventure',
    name: 'Adventure Epic',
    icon: Zap,
    color: 'orange',
    description: 'Transform your journey into a thrilling adventure story'
  },
  {
    id: 'romance',
    name: 'Love Story',
    icon: Heart,
    color: 'pink',
    description: 'Capture romantic moments and connections'
  },
  {
    id: 'discovery',
    name: 'Discovery Journal',
    icon: Brain,
    color: 'blue',
    description: 'Document personal growth and revelations'
  },
  {
    id: 'cultural',
    name: 'Cultural Immersion',
    icon: Palette,
    color: 'purple',
    description: 'Celebrate cultural exchanges and learning'
  }
];

export default function AITravelStoryteller() {
  const [selectedStoryType, setSelectedStoryType] = useState('adventure');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const startGeneration = () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const getStoryTypeColor = (type: string) => {
    const colors = {
      orange: 'text-orange-600 bg-orange-100',
      pink: 'text-pink-600 bg-pink-100',
      blue: 'text-blue-600 bg-blue-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[type as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              AI Travel Storyteller
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your travel memories into compelling stories with AI. Generate personalized narratives, 
            create memory timelines, and share your journey in ways that inspire others to explore the world.
          </p>
          
          {/* AI Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">12,847</div>
              <div className="text-sm text-gray-600">Stories Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">98.7%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">2.3M</div>
              <div className="text-sm text-gray-600">Story Reads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">156</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
          </div>
        </motion.div>

        {/* Story Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Story Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storyTypes.map((type) => {
              const IconComponent = type.icon;
              const isSelected = selectedStoryType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedStoryType(type.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    isSelected 
                      ? `${getStoryTypeColor(type.color)} shadow-lg ring-2 ring-offset-2` 
                      : 'bg-white hover:shadow-md border border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${getStoryTypeColor(type.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{type.name}</h4>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Story Generation Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Generate Your Story Now</h3>
              <p className="text-purple-100 mb-6">
                Upload your photos, add voice notes, and let our AI create a personalized travel story 
                that captures the essence of your journey. Ready in under 60 seconds!
              </p>
              
              {!isGenerating ? (
                <button 
                  onClick={startGeneration}
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-colors flex items-center gap-3"
                >
                  <Sparkles className="w-6 h-6" />
                  Generate My Story
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 animate-pulse" />
                    <span className="font-semibold">AI is crafting your story...</span>
                  </div>
                  <div className="w-full bg-purple-500 rounded-full h-3">
                    <div 
                      className="bg-white h-3 rounded-full transition-all duration-300"
                      style={{ width: `${generationProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-purple-100">
                    {generationProgress < 30 && "Analyzing your photos..."}
                    {generationProgress >= 30 && generationProgress < 60 && "Processing emotions and memories..."}
                    {generationProgress >= 60 && generationProgress < 90 && "Crafting your narrative..."}
                    {generationProgress >= 90 && "Adding final touches..."}
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <h4 className="font-bold mb-4">Story Preview</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  <span className="text-sm">47 photos uploaded</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mic className="w-5 h-5" />
                  <span className="text-sm">12 voice notes recorded</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">8 locations visited</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">7-day journey</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Story Marketplace</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Publish your AI-generated stories and earn from your travel experiences. 
              Join thousands of storytellers who are inspiring others while generating passive income.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">$2,847</div>
                <div className="text-indigo-100 text-sm">Average Monthly Earnings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">156K</div>
                <div className="text-indigo-100 text-sm">Story Downloads</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">4.9★</div>
                <div className="text-indigo-100 text-sm">Average Rating</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                Publish Your Story
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors">
                Browse Marketplace
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 