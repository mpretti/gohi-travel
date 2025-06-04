'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Star, 
  ChefHat, 
  Camera, 
  Palette, 
  Music, 
  Heart,
  Languages,
  Trophy,
  Target,
  CheckCircle,
  Lock
} from 'lucide-react';

const skillCategories = [
  {
    id: 'culinary',
    name: 'Culinary Arts',
    icon: ChefHat,
    color: 'orange',
    description: 'Master cooking techniques from around the world'
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    color: 'blue',
    description: 'Capture stunning travel moments like a pro'
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Languages,
    color: 'green',
    description: 'Communicate fluently with locals'
  },
  {
    id: 'crafts',
    name: 'Traditional Crafts',
    icon: Palette,
    color: 'purple',
    description: 'Learn ancient artisan techniques'
  },
  {
    id: 'wellness',
    name: 'Wellness & Fitness',
    icon: Heart,
    color: 'pink',
    description: 'Enhance your physical and mental well-being'
  },
  {
    id: 'music',
    name: 'Music & Dance',
    icon: Music,
    color: 'indigo',
    description: 'Express yourself through rhythm and movement'
  }
];

const skillPrograms = [
  {
    id: 1,
    title: "Master Chef Tuscany",
    category: "culinary",
    location: "Tuscany, Italy",
    duration: "7 days",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    instructor: "Chef Marco Benedetti",
    instructorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    students: 234,
    price: 2499,
    certification: "Certified Italian Cuisine Specialist",
    skills: ["Pasta Making", "Wine Pairing", "Sauce Mastery", "Regional Specialties"],
    description: "Learn authentic Italian cooking from a Michelin-starred chef in the heart of Tuscany",
    unlocked: true
  },
  {
    id: 2,
    title: "Zen Photography Retreat",
    category: "photography",
    location: "Kyoto, Japan",
    duration: "5 days",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    instructor: "Yuki Tanaka",
    instructorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4.8,
    students: 189,
    price: 1899,
    certification: "Mindful Photography Certificate",
    skills: ["Composition", "Natural Light", "Meditation Photography", "Digital Processing"],
    description: "Combine mindfulness with photography in Japan's most serene temples and gardens",
    unlocked: true
  }
];

const userProgress = {
  totalSkills: 12,
  completedPrograms: 3,
  certifications: 2,
  hoursLearned: 156,
  currentLevel: "Intermediate Explorer",
  nextLevel: "Advanced Adventurer",
  progressToNext: 65
};

export default function SkillBuildingAdventures() {
  const [selectedCategory, setSelectedCategory] = useState('culinary');
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const filteredPrograms = skillPrograms.filter(program => program.category === selectedCategory);

  const getCategoryColor = (color: string) => {
    const colors = {
      orange: 'text-orange-600 bg-orange-100',
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      pink: 'text-pink-600 bg-pink-100',
      indigo: 'text-indigo-600 bg-indigo-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    };
    return colors[level as keyof typeof colors] || colors['Beginner'];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Skill-Building Travel Adventures
            </h2>
            <Award className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your travels into a journey of mastery. Learn from world-renowned experts, 
            earn internationally recognized certifications, and build skills that last a lifetime.
          </p>
        </motion.div>

        {/* User Progress Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 text-white mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Your Learning Journey</h3>
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6" />
                <span className="text-xl font-semibold">{userProgress.currentLevel}</span>
              </div>
              <p className="text-amber-100 mb-6">
                You&apos;re {userProgress.progressToNext}% of the way to becoming an {userProgress.nextLevel}! 
                Keep learning to unlock exclusive master classes and mentorship opportunities.
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress to {userProgress.nextLevel}</span>
                  <span>{userProgress.progressToNext}%</span>
                </div>
                <div className="w-full bg-amber-500 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-300"
                    style={{ width: `${userProgress.progressToNext}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                View Detailed Progress
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-2">{userProgress.totalSkills}</div>
                <div className="text-amber-100 text-sm">Skills Learned</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-2">{userProgress.certifications}</div>
                <div className="text-amber-100 text-sm">Certifications</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-2">{userProgress.hoursLearned}h</div>
                <div className="text-amber-100 text-sm">Learning Time</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold mb-2">{userProgress.completedPrograms}</div>
                <div className="text-amber-100 text-sm">Programs Completed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Learning Path</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                    isSelected 
                      ? `${getCategoryColor(category.color)} shadow-lg ring-2 ring-offset-2` 
                      : 'bg-white hover:shadow-md border border-gray-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${getCategoryColor(category.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(program.level)}`}>
                      {program.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h4>
                      <p className="text-sm text-gray-600">{program.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">${program.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">{program.duration}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{program.description}</p>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src={program.instructorImage}
                      alt={program.instructor}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{program.instructor}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {program.rating} ({program.students} students)
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Skills You&apos;ll Learn:</h5>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certification */}
                  <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-sm font-medium text-amber-800">
                        {program.certification}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                      Enroll Now
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Become a Certified Travel Expert</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Join our instructor network and teach your skills to fellow travelers. 
              Share your expertise, earn additional income, and help others discover their passions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">$3,200</div>
                <div className="text-emerald-100 text-sm">Average Instructor Earnings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">4.8★</div>
                <div className="text-emerald-100 text-sm">Instructor Rating</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">89%</div>
                <div className="text-emerald-100 text-sm">Student Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                Apply to Teach
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 