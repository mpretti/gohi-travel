import Hero from '../components/sections/Hero';
import SearchAndFilter from '../components/sections/SearchAndFilter';
import TripPlanner from '../components/sections/TripPlanner';
import VirtualPreviews from '../components/sections/VirtualPreviews';
import PersonalizedRecommendations from '../components/sections/PersonalizedRecommendations';
import DestinationsShowcase from '../components/sections/DestinationsShowcase';
import ExperiencesShowcase from '../components/sections/ExperiencesShowcase';
import Testimonials from '../components/sections/Testimonials';
import RealTimePricing from '../components/sections/RealTimePricing';
import CommunityFeatures from '../components/sections/CommunityFeatures';
import MobileBookingFlow from '../components/sections/MobileBookingFlow';
import TravelConcierge from '../components/sections/TravelConcierge';
import FlexibleBooking from '../components/sections/FlexibleBooking';
import PostBookingHub from '../components/sections/PostBookingHub';
import HyperLocalAdventures from '../components/sections/HyperLocalAdventures';
import TravelImpactDashboard from '../components/sections/TravelImpactDashboard';
import SensoryTravelExperiences from '../components/sections/SensoryTravelExperiences';
import AITravelStoryteller from '../components/sections/AITravelStoryteller';
import SkillBuildingAdventures from '../components/sections/SkillBuildingAdventures';

export default function Home() {
  return (
    <div>
      <Hero />
      <SearchAndFilter />
      <TripPlanner />
      <VirtualPreviews />
      <PersonalizedRecommendations />
      <DestinationsShowcase />
      <ExperiencesShowcase />
      <RealTimePricing />
      <CommunityFeatures />
      <MobileBookingFlow />
      <TravelConcierge />
      <FlexibleBooking />
      <PostBookingHub />
      <HyperLocalAdventures />
      <TravelImpactDashboard />
      <SensoryTravelExperiences />
      <AITravelStoryteller />
      <SkillBuildingAdventures />
      <Testimonials />
      
      {/* Final Call to Action */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Wanderlust Into Reality?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of travelers who have discovered their perfect adventures with Gohi Travel. 
            Your extraordinary journey starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/destinations" className="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 font-semibold">
              Explore All Destinations
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold">
              Start Planning Your Trip
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
