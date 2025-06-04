'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, MessageCircle, Share2, MapPin, Users, Star, Plus, Filter, Trending } from 'lucide-react';
import Image from 'next/image';

interface CommunityPost {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
    location: string;
  };
  destination: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
  tags: string[];
  isLiked: boolean;
}

interface TravelerProfile {
  id: string;
  name: string;
  avatar: string;
  location: string;
  tripsCount: number;
  followers: number;
  travelStyle: string[];
  recentDestinations: string[];
}

const mockCommunityPosts: CommunityPost[] = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
      verified: true,
      location: 'San Francisco, CA'
    },
    destination: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500',
    caption: 'The bamboo forest in Arashiyama is absolutely magical at sunrise! 🎋 Pro tip: arrive early to avoid crowds and capture that perfect golden hour light.',
    likes: 234,
    comments: 18,
    timeAgo: '2 hours ago',
    tags: ['#Kyoto', '#BambooForest', '#Sunrise', '#Photography'],
    isLiked: false
  },
  {
    id: '2',
    user: {
      name: 'Marco Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      verified: false,
      location: 'Barcelona, Spain'
    },
    destination: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500',
    caption: 'Sunset dinner in Oia - every bit as incredible as the photos! The blue domes and white buildings create the perfect backdrop. Already planning my return trip! 🌅',
    likes: 189,
    comments: 12,
    timeAgo: '5 hours ago',
    tags: ['#Santorini', '#Sunset', '#Oia', '#Greece'],
    isLiked: true
  },
  {
    id: '3',
    user: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      verified: true,
      location: 'London, UK'
    },
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500',
    caption: 'Rice terraces in Jatiluwih - nature&apos;s stairway to heaven! The morning mist rolling over the emerald fields was pure poetry. Bali never fails to amaze! 🌾',
    likes: 312,
    comments: 25,
    timeAgo: '1 day ago',
    tags: ['#Bali', '#RiceTerraces', '#Nature', '#Indonesia'],
    isLiked: false
  }
];

const mockTravelers: TravelerProfile[] = [
  {
    id: '1',
    name: 'Alex Kim',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    location: 'Seoul, South Korea',
    tripsCount: 47,
    followers: 1200,
    travelStyle: ['Adventure', 'Photography', 'Cultural'],
    recentDestinations: ['Nepal', 'Peru', 'Iceland']
  },
  {
    id: '2',
    name: 'Luna Martinez',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    location: 'Mexico City, Mexico',
    tripsCount: 32,
    followers: 890,
    travelStyle: ['Culinary', 'Art', 'History'],
    recentDestinations: ['Italy', 'France', 'Morocco']
  },
  {
    id: '3',
    name: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    location: 'Vancouver, Canada',
    tripsCount: 28,
    followers: 654,
    travelStyle: ['Nature', 'Hiking', 'Wildlife'],
    recentDestinations: ['Costa Rica', 'New Zealand', 'Norway']
  }
];

export default function CommunityFeatures() {
  const [activeTab, setActiveTab] = useState<'feed' | 'travelers' | 'journals'>('feed');
  const [posts, setPosts] = useState(mockCommunityPosts);
  const [showUpload, setShowUpload] = useState(false);

  const toggleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const tabs = [
    { id: 'feed', label: 'Community Feed', icon: Camera },
    { id: 'travelers', label: 'Connect', icon: Users },
    { id: 'journals', label: 'Travel Journals', icon: MessageCircle }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Travel Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with fellow travelers, share your adventures, and discover hidden gems 
            through authentic experiences from our global community.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Community Feed */}
          {activeTab === 'feed' && (
            <motion.div
              key="feed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Upload Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUpload(!showUpload)}
                  className="btn btn-primary flex items-center gap-2 mx-auto"
                >
                  <Plus className="w-5 h-5" />
                  Share Your Adventure
                </motion.button>
              </div>

              {/* Upload Form */}
              <AnimatePresence>
                {showUpload && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto"
                  >
                    <h3 className="text-xl font-bold mb-4">Share Your Travel Moment</h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                        <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Drop your photo here or click to upload</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Where was this taken?"
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                      <textarea
                        placeholder="Tell us about your experience..."
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-xl"
                      />
                      <div className="flex gap-2">
                        <button className="btn btn-primary">Share Post</button>
                        <button 
                          onClick={() => setShowUpload(false)}
                          className="btn btn-outline"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.destination}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                          {post.destination}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={post.user.avatar}
                          alt={post.user.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                            {post.user.verified && (
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{post.user.location}</p>
                        </div>
                        <span className="text-sm text-gray-500">{post.timeAgo}</span>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-3">{post.caption}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span key={tag} className="text-blue-600 text-sm hover:underline cursor-pointer">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-2 ${
                              post.isLiked ? 'text-red-500' : 'text-gray-600'
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                            <span>{post.likes}</span>
                          </motion.button>
                          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                            <MessageCircle className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                        <button className="text-gray-600 hover:text-blue-600">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Travelers Connect */}
          {activeTab === 'travelers' && (
            <motion.div
              key="travelers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Connect with Fellow Travelers</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find travel companions, share experiences, and build lasting friendships 
                  with people who share your passion for exploration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockTravelers.map((traveler, index) => (
                  <motion.div
                    key={traveler.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="text-center mb-6">
                      <Image
                        src={traveler.avatar}
                        alt={traveler.name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                      />
                      <h4 className="text-xl font-bold text-gray-900">{traveler.name}</h4>
                      <p className="text-gray-600 flex items-center justify-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {traveler.location}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{traveler.tripsCount}</div>
                          <div className="text-sm text-gray-600">Trips</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{traveler.followers}</div>
                          <div className="text-sm text-gray-600">Followers</div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Travel Style</h5>
                        <div className="flex flex-wrap gap-2">
                          {traveler.travelStyle.map(style => (
                            <span key={style} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Recent Destinations</h5>
                        <div className="text-sm text-gray-600">
                          {traveler.recentDestinations.join(' • ')}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="btn btn-primary flex-1">Connect</button>
                        <button className="btn btn-outline px-4">Message</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Travel Journals */}
          {activeTab === 'journals' && (
            <motion.div
              key="journals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Travel Journals</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Dive deep into detailed travel stories, tips, and insights from experienced travelers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Two Weeks in Southeast Asia: A Backpacker's Guide",
                    author: "Sarah Chen",
                    readTime: "12 min read",
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                    excerpt: "From the bustling streets of Bangkok to the serene beaches of Bali, here's everything I learned during my solo adventure through Southeast Asia..."
                  },
                  {
                    title: "Photography Tips for the Northern Lights",
                    author: "David Park",
                    readTime: "8 min read",
                    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400",
                    excerpt: "Capturing the aurora borealis requires patience, preparation, and the right techniques. Here's my complete guide to northern lights photography..."
                  }
                ].map((journal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <Image
                      src={journal.image}
                      alt={journal.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{journal.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>By {journal.author}</span>
                        <span>{journal.readTime}</span>
                      </div>
                      <p className="text-gray-700 line-clamp-3">{journal.excerpt}</p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium mt-4">
                        Read More →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 