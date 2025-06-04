'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign, Users, Heart, Mountain, Camera, Utensils, Waves, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchFilters {
  query: string;
  destinationType: string;
  budget: string;
  duration: string;
  activities: string[];
  vibe: string;
  travelers: string;
}

const destinationTypes = [
  'All Destinations',
  'Beach & Islands',
  'Mountains & Nature',
  'Cities & Culture',
  'Adventure & Outdoors',
  'Luxury & Wellness'
];

const budgetRanges = [
  'Any Budget',
  'Under $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  'Over $10,000'
];

const durationOptions = [
  'Any Duration',
  '1-3 days',
  '4-7 days',
  '1-2 weeks',
  '2-4 weeks',
  'Over 1 month'
];

const activityTypes = [
  'Cultural Tours',
  'Adventure Sports',
  'Food & Wine',
  'Photography',
  'Wellness & Spa',
  'Wildlife',
  'Nightlife',
  'Shopping',
  'Museums',
  'Beaches'
];

const vibeOptions = [
  { id: 'romantic', label: 'Romantic', icon: Heart, color: 'from-pink-500 to-red-500' },
  { id: 'adventure', label: 'Adventure', icon: Mountain, color: 'from-green-500 to-teal-500' },
  { id: 'family', label: 'Family-Friendly', icon: Users, color: 'from-blue-500 to-purple-500' },
  { id: 'photography', label: 'Photography', icon: Camera, color: 'from-purple-500 to-pink-500' },
  { id: 'culinary', label: 'Culinary', icon: Utensils, color: 'from-orange-500 to-red-500' },
  { id: 'relaxation', label: 'Relaxation', icon: Waves, color: 'from-teal-500 to-blue-500' }
];

const travelerCounts = [
  'Any Group Size',
  'Solo Travel',
  '2 Travelers',
  '3-4 Travelers',
  '5-8 Travelers',
  '9+ Travelers'
];

const popularSearches = [
  'Bali honeymoon',
  'Japan cherry blossoms',
  'Iceland northern lights',
  'Safari adventure',
  'Mediterranean cruise',
  'Thailand backpacking'
];

export default function SearchAndFilter() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    destinationType: 'All Destinations',
    budget: 'Any Budget',
    duration: 'Any Duration',
    activities: [],
    vibe: '',
    travelers: 'Any Group Size'
  });

  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  // Simulate search suggestions
  useEffect(() => {
    if (filters.query.length > 0) {
      const suggestions = popularSearches.filter(search => 
        search.toLowerCase().includes(filters.query.toLowerCase())
      );
      setSearchSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [filters.query]);

  const handleFilterChange = (key: keyof SearchFilters, value: string | string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleActivity = (activity: string) => {
    setFilters(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const clearFilters = () => {
    setFilters({
      query: '',
      destinationType: 'All Destinations',
      budget: 'Any Budget',
      duration: 'Any Duration',
      activities: [],
      vibe: '',
      travelers: 'Any Group Size'
    });
  };

  const hasActiveFilters = filters.destinationType !== 'All Destinations' ||
    filters.budget !== 'Any Budget' ||
    filters.duration !== 'Any Duration' ||
    filters.activities.length > 0 ||
    filters.vibe !== '' ||
    filters.travelers !== 'Any Group Size';

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Find Your Perfect
            <span className="block font-accent italic gradient-text">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Search by destination, vibe, or let us help you discover your next unforgettable journey
          </p>
        </motion.div>

        {/* Main Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-8"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Where do you want to go? (e.g., 'Bali honeymoon', 'adventure in Iceland')"
              value={filters.query}
              onChange={(e) => handleFilterChange('query', e.target.value)}
              onFocus={() => setShowSuggestions(searchSuggestions.length > 0)}
              className="w-full pl-16 pr-32 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  showFilters || hasActiveFilters
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Filter className="h-5 w-5" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1 ml-1">
                    {filters.activities.length + 
                     (filters.destinationType !== 'All Destinations' ? 1 : 0) +
                     (filters.budget !== 'Any Budget' ? 1 : 0) +
                     (filters.duration !== 'Any Duration' ? 1 : 0) +
                     (filters.vibe !== '' ? 1 : 0) +
                     (filters.travelers !== 'Any Group Size' ? 1 : 0)}
                  </span>
                )}
              </button>
              <button className="btn btn-primary px-8 py-3">
                Search
              </button>
            </div>
          </div>

          {/* Search Suggestions */}
          <AnimatePresence>
            {showSuggestions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50"
              >
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">Popular Searches</h4>
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleFilterChange('query', suggestion);
                        setShowSuggestions(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center space-x-3"
                    >
                      <Search className="h-4 w-4 text-gray-400" />
                      <span>{suggestion}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search by Vibe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Or search by vibe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {vibeOptions.map((vibe) => {
              const IconComponent = vibe.icon;
              return (
                <button
                  key={vibe.id}
                  onClick={() => handleFilterChange('vibe', filters.vibe === vibe.id ? '' : vibe.id)}
                  className={`relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 ${
                    filters.vibe === vibe.id
                      ? 'ring-4 ring-blue-300 scale-105'
                      : 'hover:scale-105'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${vibe.color} opacity-90`} />
                  <div className="relative z-10 text-white">
                    <IconComponent className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">{vibe.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Advanced Filters</h3>
                <div className="flex items-center space-x-3">
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <X className="h-4 w-4" />
                      <span>Clear All</span>
                    </button>
                  )}
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Destination Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Destination Type
                  </label>
                  <select
                    value={filters.destinationType}
                    onChange={(e) => handleFilterChange('destinationType', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {destinationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="h-4 w-4 inline mr-1" />
                    Budget Range
                  </label>
                  <select
                    value={filters.budget}
                    onChange={(e) => handleFilterChange('budget', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {budgetRanges.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Trip Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {durationOptions.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>

                {/* Travelers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="h-4 w-4 inline mr-1" />
                    Group Size
                  </label>
                  <select
                    value={filters.travelers}
                    onChange={(e) => handleFilterChange('travelers', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    {travelerCounts.map(count => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Activities */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Activities & Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {activityTypes.map(activity => (
                    <button
                      key={activity}
                      onClick={() => toggleActivity(activity)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        filters.activities.includes(activity)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 mb-8"
          >
            <span className="text-sm font-medium text-gray-600">Active filters:</span>
            {filters.destinationType !== 'All Destinations' && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{filters.destinationType}</span>
                <button onClick={() => handleFilterChange('destinationType', 'All Destinations')}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.budget !== 'Any Budget' && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{filters.budget}</span>
                <button onClick={() => handleFilterChange('budget', 'Any Budget')}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.duration !== 'Any Duration' && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{filters.duration}</span>
                <button onClick={() => handleFilterChange('duration', 'Any Duration')}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.vibe && (
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{vibeOptions.find(v => v.id === filters.vibe)?.label}</span>
                <button onClick={() => handleFilterChange('vibe', '')}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.travelers !== 'Any Group Size' && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{filters.travelers}</span>
                <button onClick={() => handleFilterChange('travelers', 'Any Group Size')}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.activities.map(activity => (
              <span key={activity} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <span>{activity}</span>
                <button onClick={() => toggleActivity(activity)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
} 