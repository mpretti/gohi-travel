'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Calendar, Users, Shield, Clock, CheckCircle, DollarSign, Percent } from 'lucide-react';

interface BookingOption {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  popular?: boolean;
}

export default function FlexibleBooking() {
  const [selectedOption, setSelectedOption] = useState('pay-later');
  const [groupSize, setGroupSize] = useState(4);
  const [paymentPlan, setPaymentPlan] = useState('3-months');

  const bookingOptions: BookingOption[] = [
    {
      id: 'pay-later',
      title: 'Book Now, Pay Later',
      description: 'Secure your spot with $0 down, pay closer to your travel date',
      icon: Calendar,
      features: ['No upfront payment', 'Lock in current prices', 'Free cancellation up to 14 days', 'Automatic payment reminders'],
      popular: true
    },
    {
      id: 'payment-plan',
      title: 'Payment Plans',
      description: 'Split your trip cost into manageable monthly payments',
      icon: CreditCard,
      features: ['0% interest options', 'Flexible payment schedules', 'Auto-pay available', 'Early payment discounts']
    },
    {
      id: 'group-booking',
      title: 'Group Bookings',
      description: 'Special rates and coordination for groups of 6 or more',
      icon: Users,
      features: ['Group discounts up to 20%', 'Dedicated coordinator', 'Flexible payment collection', 'Custom itineraries']
    },
    {
      id: 'insurance',
      title: 'Travel Protection',
      description: 'Comprehensive coverage for peace of mind',
      icon: Shield,
      features: ['Trip cancellation coverage', 'Medical emergency protection', 'Baggage protection', '24/7 assistance hotline']
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Flexible Booking Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Travel on your terms with flexible payment options, group discounts, 
            and comprehensive protection plans designed for modern travelers.
          </p>
        </motion.div>

        {/* Booking Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bookingOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedOption(option.id)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all hover:shadow-lg ${
                  selectedOption === option.id
                    ? 'bg-white shadow-xl ring-2 ring-emerald-500'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    selectedOption === option.id ? 'bg-emerald-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      selectedOption === option.id ? 'text-emerald-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>

                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedOption}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          >
            {selectedOption === 'pay-later' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Now, Pay Later</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Book Today</h4>
                    <p className="text-gray-600 text-sm">Reserve your spot with $0 down payment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Pay Later</h4>
                    <p className="text-gray-600 text-sm">Payment due 30 days before travel</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Protected</h4>
                    <p className="text-gray-600 text-sm">Free cancellation up to 14 days</p>
                  </div>
                </div>
                <button className="btn btn-primary text-lg px-8 py-4">
                  Reserve Your Trip - $0 Today
                </button>
              </div>
            )}

            {selectedOption === 'payment-plan' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Plans</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { id: '3-months', duration: '3 Months', monthly: '$433', total: '$1,299', interest: '0%' },
                    { id: '6-months', duration: '6 Months', monthly: '$216', total: '$1,299', interest: '0%' },
                    { id: '12-months', duration: '12 Months', monthly: '$119', total: '$1,399', interest: '7.9%' }
                  ].map(plan => (
                    <div
                      key={plan.id}
                      onClick={() => setPaymentPlan(plan.id)}
                      className={`cursor-pointer rounded-xl p-4 border-2 transition-all ${
                        paymentPlan === plan.id ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <h4 className="font-bold text-gray-900 mb-2">{plan.duration}</h4>
                        <div className="text-2xl font-bold text-emerald-600 mb-1">{plan.monthly}</div>
                        <div className="text-sm text-gray-600 mb-2">per month</div>
                        <div className="text-xs text-gray-500">Total: {plan.total}</div>
                        <div className="text-xs text-gray-500">{plan.interest} APR</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <button className="btn btn-primary text-lg px-8 py-4">
                    Start Payment Plan
                  </button>
                </div>
              </div>
            )}

            {selectedOption === 'group-booking' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Group Booking</h3>
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="6"
                        max="50"
                        value={groupSize}
                        onChange={(e) => setGroupSize(parseInt(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-lg font-bold text-gray-900 w-12">{groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-emerald-900 mb-2">Your Group Discount</h4>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">
                        {Math.min(Math.floor((groupSize - 6) * 2) + 10, 20)}% OFF
                      </div>
                      <div className="text-emerald-700">
                        Save ${Math.floor(1299 * (Math.min(Math.floor((groupSize - 6) * 2) + 10, 20) / 100))} per person
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <DollarSign className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">Flexible Payment</div>
                      <div className="text-sm text-gray-600">Collect payments individually or as a group</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <div className="font-bold text-gray-900">Dedicated Coordinator</div>
                      <div className="text-sm text-gray-600">Personal assistance for your group</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-primary text-lg px-8 py-4">
                      Get Group Quote
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedOption === 'insurance' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Travel Protection</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">What&apos;s Covered</h4>
                    <ul className="space-y-3">
                      {[
                        'Trip cancellation up to 100% of trip cost',
                        'Medical emergencies up to $100,000',
                        'Emergency evacuation up to $500,000',
                        'Baggage loss/delay up to $2,500',
                        'Travel delay compensation',
                        '24/7 emergency assistance'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Coverage Options</h4>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Basic Coverage</span>
                          <span className="text-emerald-600 font-bold">$89</span>
                        </div>
                        <p className="text-sm text-gray-600">Essential protection for your trip</p>
                      </div>
                      <div className="border-2 border-emerald-500 bg-emerald-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Comprehensive</span>
                          <span className="text-emerald-600 font-bold">$149</span>
                        </div>
                        <p className="text-sm text-gray-600">Full protection with Cancel for Any Reason</p>
                        <span className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded mt-2">
                          Recommended
                        </span>
                      </div>
                    </div>
                    <button className="btn btn-primary w-full mt-6">
                      Add Protection Plan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 