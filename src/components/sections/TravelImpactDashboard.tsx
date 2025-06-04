'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  TrendingUp, 
  Heart, 
  Users, 
  Leaf, 
  DollarSign, 
  Globe, 
  Award, 
  Camera,
  BookOpen,
  Handshake,
  TreePine,
  Building,
  GraduationCap,
  Utensils
} from 'lucide-react';

const impactCategories = [
  {
    id: 'economic',
    name: 'Economic Impact',
    icon: DollarSign,
    color: 'blue',
    description: 'Direct financial support to local communities'
  },
  {
    id: 'cultural',
    name: 'Cultural Exchange',
    icon: Globe,
    color: 'purple',
    description: 'Meaningful connections and cultural preservation'
  },
  {
    id: 'environmental',
    name: 'Environmental',
    icon: Leaf,
    color: 'green',
    description: 'Positive environmental contributions and conservation'
  },
  {
    id: 'social',
    name: 'Social Impact',
    icon: Heart,
    color: 'red',
    description: 'Community development and social initiatives'
  }
];

const userImpactData = {
  totalTrips: 12,
  totalSpent: 18750,
  localBusinessSupport: 14200,
  familiesSupported: 47,
  culturalExchanges: 89,
  environmentalProjects: 8,
  volunteeredHours: 34,
  carbonOffset: 2.4,
  impactScore: 94
};

const impactProjects = [
  {
    id: 1,
    title: "Bali Rice Terrace Preservation",
    location: "Jatiluwih, Bali",
    category: "environmental",
    image: "https://images.unsplash.com/photo-1555400082-8dd4d78c0c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Supporting traditional farming methods and preventing erosion",
    yourContribution: 125,
    totalRaised: 8450,
    goal: 12000,
    impact: "Preserved 15 hectares of traditional rice terraces",
    beneficiaries: 23,
    status: "Active"
  },
  {
    id: 2,
    title: "Tokyo Elderly Care Program",
    location: "Shibuya, Tokyo",
    category: "social",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Technology training for elderly residents",
    yourContribution: 89,
    totalRaised: 5670,
    goal: 8000,
    impact: "Trained 45 elderly residents in digital literacy",
    beneficiaries: 45,
    status: "Completed"
  },
  {
    id: 3,
    title: "Santorini Cultural Archive",
    location: "Oia, Santorini",
    category: "cultural",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Digitizing traditional stories and recipes",
    yourContribution: 67,
    totalRaised: 3240,
    goal: 6000,
    impact: "Preserved 127 traditional recipes and 89 stories",
    beneficiaries: 156,
    status: "Active"
  },
  {
    id: 4,
    title: "Machu Picchu Trail Restoration",
    location: "Cusco, Peru",
    category: "environmental",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Sustainable trail maintenance and reforestation",
    yourContribution: 156,
    totalRaised: 11200,
    goal: 15000,
    impact: "Restored 8km of trails, planted 340 native trees",
    beneficiaries: 78,
    status: "Active"
  }
];

const culturalConnections = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Barcelona, Spain",
    connection: "Cooking Class Host",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    story: "Taught me her grandmother's paella recipe and shared stories about Barcelona's history",
    date: "March 2024",
    impact: "Cultural preservation"
  },
  {
    id: 2,
    name: "Kenji Nakamura",
    location: "Kyoto, Japan",
    connection: "Tea Ceremony Master",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    story: "Guided me through traditional tea ceremony and meditation practices",
    date: "January 2024",
    impact: "Mindfulness practice"
  },
  {
    id: 3,
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    connection: "Local Artist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    story: "Collaborated on a community mural celebrating local heritage",
    date: "November 2023",
    impact: "Community art project"
  }
];

export default function TravelImpactDashboard() {
  const [selectedCategory, setSelectedCategory] = useState('economic');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = impactProjects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      purple: 'text-purple-600 bg-purple-100',
      green: 'text-green-600 bg-green-100',
      red: 'text-red-600 bg-red-100'
    };
    return colors[category as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Travel Impact Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the real difference your travels make. Track your positive impact on local communities, 
            cultural preservation, and environmental conservation across all your journeys.
          </p>
        </motion.div>

        {/* Impact Score Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Your Impact Score</h3>
              <div className="text-6xl font-bold mb-4">{userImpactData.impactScore}</div>
              <p className="text-blue-100 mb-6">
                You&apos;re in the top 5% of conscious travelers! Your journeys have created lasting positive change 
                in {userImpactData.totalTrips} destinations worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="text-lg font-semibold">Impact Champion Badge</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">${userImpactData.localBusinessSupport.toLocaleString()}</div>
                <div className="text-blue-100">Local Business Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userImpactData.familiesSupported}</div>
                <div className="text-blue-100">Families Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userImpactData.culturalExchanges}</div>
                <div className="text-blue-100">Cultural Exchanges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userImpactData.volunteeredHours}h</div>
                <div className="text-blue-100">Volunteered</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Impact Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCategories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    isSelected 
                      ? 'bg-white shadow-lg ring-2 ring-blue-500' 
                      : 'bg-white hover:shadow-md border border-gray-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${getCategoryColor(category.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Impact Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Your Legacy Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>${project.totalRaised.toLocaleString()} / ${project.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(project.totalRaised / project.goal) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-lg font-bold text-blue-600">${project.yourContribution}</div>
                      <div className="text-xs text-gray-600">Your Contribution</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">{project.beneficiaries}</div>
                      <div className="text-xs text-gray-600">People Helped</div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-800">Impact Achieved</span>
                    </div>
                    <p className="text-sm text-green-700">{project.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cultural Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Meaningful Cultural Connections</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culturalConnections.map((connection) => (
              <div key={connection.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={connection.image}
                    alt={connection.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{connection.name}</h4>
                    <p className="text-sm text-gray-600">{connection.location}</p>
                    <p className="text-xs text-blue-600">{connection.connection}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm italic">
                  &quot;{connection.story}&quot;
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{connection.date}</span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    {connection.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Amplify Your Impact</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Ready to make an even bigger difference? Explore new destinations where your travel 
              can create lasting positive change for local communities and the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Find Impact Trips
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
                Share Your Story
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 