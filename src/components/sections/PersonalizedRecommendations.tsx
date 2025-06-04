'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Heart, MapPin, Star, Clock, DollarSign, Sparkles, RefreshCw, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: string[];
}

interface Recommendation {
  id: string;
  title: string;
  location: string;
  country: string;
  image: string;
  rating: number;
  price: number;
  duration: string;
  description: string;
  highlights: string[];
  matchScore: number;
  reasons: string[];
  category: 'perfect-match' | 'trending' | 'similar-travelers' | 'hidden-gem';
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'budget',
    question: 'What\'s your ideal travel budget per person?',
    type: 'single',
    options: ['Under $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', 'Over $10,000']
  },
  {
    id: 'style',
    question: 'What type of traveler are you? (Select all that apply)',
    type: 'multiple',
    options: ['Adventure Seeker', 'Culture Enthusiast', 'Luxury Traveler', 'Budget Backpacker', 'Family Traveler', 'Solo Explorer']
  },
  {
    id: 'interests',
    question: 'What interests you most while traveling?',
    type: 'multiple',
    options: ['Historical Sites', 'Natural Wonders', 'Local Cuisine', 'Nightlife', 'Art & Museums', 'Adventure Sports']
  }
];

const sampleRecommendations: Recommendation[] = [
  {
    id: 'bali-cultural',
    title: 'Cultural Immersion in Bali',
    location: 'Ubud, Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600',
    rating: 4.8,
    price: 1200,
    duration: '7 days',
    description: 'Immerse yourself in Balinese culture with temple visits, traditional cooking classes, and rice terrace walks.',
    highlights: ['Temple Ceremonies', 'Cooking Classes', 'Rice Terraces', 'Traditional Arts'],
    matchScore: 95,
    reasons: ['Matches your cultural interests', 'Perfect for your budget range', 'Ideal duration preference'],
    category: 'perfect-match'
  },
  {
    id: 'iceland-adventure',
    title: 'Iceland Adventure Circuit',
    location: 'Reykjavik & Ring Road',
    country: 'Iceland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    rating: 4.9,
    price: 2800,
    duration: '10 days',
    description: 'Epic adventure through Iceland\'s dramatic landscapes, waterfalls, and Northern Lights.',
    highlights: ['Northern Lights', 'Glacier Hiking', 'Hot Springs', 'Dramatic Waterfalls'],
    matchScore: 88,
    reasons: ['Adventure activities match your style', 'Unique natural wonders', 'Photography opportunities'],
    category: 'trending'
  }
];

export default function PersonalizedRecommendations() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAnswer = (answer: string | string[]) => {
    const question = quizQuestions[currentQuestion];
    setAnswers(prev => ({ ...prev, [question.id]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setQuizCompleted(true);
      setShowQuiz(false);
      setRecommendations(sampleRecommendations);
      setIsGenerating(false);
    }, 2000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizCompleted(false);
    setRecommendations([]);
    setShowQuiz(true);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Personalized Travel
            <span className="block font-accent italic gradient-text">Recommendations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take our smart quiz to get AI-powered recommendations tailored perfectly to your travel style and preferences
          </p>
        </motion.div>

        {!quizCompleted && !showQuiz && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <Sparkles className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Discover Your Perfect Trip</h3>
                <p className="text-gray-600 leading-relaxed">
                  Answer a few quick questions about your travel preferences, and we&apos;ll use AI to recommend 
                  destinations and experiences that match your unique style.
                </p>
              </div>
              
              <button
                onClick={() => setShowQuiz(true)}
                className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto"
              >
                Start Personalization Quiz
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Quiz Interface */}
        <AnimatePresence>
          {showQuiz && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-purple-600">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-sm text-gray-500">
                      {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (quizQuestions[currentQuestion].type === 'multiple') {
                            const currentAnswers = (answers[quizQuestions[currentQuestion].id] as string[]) || [];
                            const newAnswers = currentAnswers.includes(option)
                              ? currentAnswers.filter(a => a !== option)
                              : [...currentAnswers, option];
                            handleAnswer(newAnswers);
                          } else {
                            handleAnswer(option);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                          quizQuestions[currentQuestion].type === 'multiple'
                            ? ((answers[quizQuestions[currentQuestion].id] as string[]) || []).includes(option)
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-200 hover:border-purple-300'
                            : answers[quizQuestions[currentQuestion].id] === option
                              ? 'border-purple-500 bg-purple-50 text-purple-700'
                              : 'border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {((quizQuestions[currentQuestion].type === 'multiple' && 
                             ((answers[quizQuestions[currentQuestion].id] as string[]) || []).includes(option)) ||
                            (quizQuestions[currentQuestion].type === 'single' && 
                             answers[quizQuestions[currentQuestion].id] === option)) && (
                            <CheckCircle className="h-5 w-5 text-purple-600" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="btn btn-outline px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextQuestion}
                    disabled={!answers[quizQuestions[currentQuestion].id]}
                    className="btn btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Get Recommendations' : 'Next'}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <RefreshCw className="h-16 w-16 text-purple-600 mx-auto mb-4 animate-spin" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Your Preferences</h3>
                <p className="text-gray-600">
                  Our AI is processing your answers to find the perfect travel recommendations just for you...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recommendations */}
        {quizCompleted && recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={rec.image}
                      alt={rec.title}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{rec.matchScore}% Match</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                      ${rec.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{rec.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 flex items-center space-x-1 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{rec.location}, {rec.country}</span>
                    </p>

                    <p className="text-gray-700 mb-4 leading-relaxed">{rec.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Why this matches you:</h4>
                      <div className="space-y-1">
                        {rec.reasons.map((reason, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-green-600">
                            <CheckCircle className="h-3 w-3" />
                            <span>{reason}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.highlights.slice(0, 3).map((highlight, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{rec.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-3 w-3" />
                          <span>${rec.price}</span>
                        </div>
                      </div>
                      <button className="btn btn-primary text-sm px-4 py-2">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={restartQuiz}
                className="btn btn-outline px-6 py-3"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retake Quiz for New Recommendations
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 