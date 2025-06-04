'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CreditCard, Shield, Clock, CheckCircle, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

interface BookingStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function MobileBookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState('Bali, Indonesia');
  const [travelers, setTravelers] = useState(2);
  const [selectedDate, setSelectedDate] = useState('June 15-22, 2024');

  const steps: BookingStep[] = [
    { id: 1, title: 'Select Trip', description: 'Choose your destination and dates', completed: currentStep > 1 },
    { id: 2, title: 'Travelers', description: 'Add traveler information', completed: currentStep > 2 },
    { id: 3, title: 'Payment', description: 'Secure payment processing', completed: currentStep > 3 },
    { id: 4, title: 'Confirmation', description: 'Trip confirmed and ready!', completed: currentStep > 4 }
  ];

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Mobile-First Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Book your dream trip in under 3 minutes with our streamlined mobile experience. 
            Secure, fast, and designed for travelers on the go.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Preview */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                    <h3 className="font-bold">Gohi Travel</h3>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      <span className="text-sm">Mobile Booking</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Step {currentStep} of 4</span>
                      <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: '25%' }}
                        animate={{ width: `${(currentStep / 4) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="p-4 h-[400px] overflow-y-auto">
                    <AnimatePresence mode="wait">
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h4 className="text-lg font-bold text-gray-900">Select Your Trip</h4>
                          
                          <div className="space-y-3">
                            <div className="border border-blue-200 bg-blue-50 rounded-xl p-3">
                              <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <div>
                                  <div className="font-semibold text-gray-900">{selectedDestination}</div>
                                  <div className="text-sm text-gray-600">7 days • All inclusive</div>
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-3">
                              <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-gray-600" />
                                <div>
                                  <div className="font-semibold text-gray-900">{selectedDate}</div>
                                  <div className="text-sm text-gray-600">Perfect weather season</div>
                                </div>
                              </div>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-3">
                              <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-gray-600" />
                                <div>
                                  <div className="font-semibold text-gray-900">{travelers} Travelers</div>
                                  <div className="text-sm text-gray-600">Adults</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-700">$1,299</div>
                              <div className="text-sm text-green-600">per person</div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h4 className="text-lg font-bold text-gray-900">Traveler Information</h4>
                          
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="John Doe" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                              <input type="email" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="john@example.com" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                              <input type="tel" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="+1 (555) 123-4567" />
                            </div>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                            <div className="flex items-center gap-2 text-blue-700">
                              <Shield className="w-4 h-4" />
                              <span className="text-sm font-medium">Your information is secure and encrypted</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-4"
                        >
                          <h4 className="text-lg font-bold text-gray-900">Payment Details</h4>
                          
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                              <button className="p-3 border-2 border-blue-600 bg-blue-50 rounded-xl text-center">
                                <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                                <span className="text-xs font-medium text-blue-600">Card</span>
                              </button>
                              <button className="p-3 border border-gray-300 rounded-xl text-center">
                                <div className="w-5 h-5 mx-auto mb-1 bg-gray-400 rounded"></div>
                                <span className="text-xs text-gray-600">PayPal</span>
                              </button>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                              <input type="text" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="1234 5678 9012 3456" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="MM/YY" />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg text-sm" placeholder="123" />
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                            <div className="flex items-center gap-2 text-yellow-700">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">Book Now, Pay Later available</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-center space-y-4"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-900">Booking Confirmed!</h4>
                          <p className="text-sm text-gray-600">Your trip to {selectedDestination} is confirmed. Check your email for details.</p>
                          
                          <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                            <div className="text-sm">
                              <div className="font-semibold text-green-700">Booking Reference</div>
                              <div className="text-green-600">GT-2024-001234</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                              View Trip Details
                            </button>
                            <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm">
                              Download Confirmation
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="p-4 bg-gray-50 border-t">
                    <div className="flex gap-2">
                      {currentStep > 1 && currentStep < 4 && (
                        <button
                          onClick={prevStep}
                          className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          Back
                        </button>
                      )}
                      {currentStep < 4 && (
                        <button
                          onClick={nextStep}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                        >
                          {currentStep === 3 ? 'Complete Booking' : 'Continue'}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Mobile Optimized',
                description: 'Designed specifically for mobile devices with touch-friendly interfaces and fast loading.'
              },
              {
                icon: Shield,
                title: 'Secure Payments',
                description: 'Bank-level encryption and PCI compliance ensure your payment information is always safe.'
              },
              {
                icon: Clock,
                title: 'Quick Booking',
                description: 'Complete your entire booking in under 3 minutes with our streamlined process.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 