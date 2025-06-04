import Hero from '../components/sections/Hero';
import DestinationsShowcase from '../components/sections/DestinationsShowcase';
import ExperiencesShowcase from '../components/sections/ExperiencesShowcase';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <DestinationsShowcase />
      <ExperiencesShowcase />
      <Testimonials />
      
      {/* Placeholder for additional sections */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have transformed their wanderlust into unforgettable memories. 
            Your next adventure is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/destinations" className="btn btn-primary text-lg px-8 py-4">
              Explore Destinations
            </a>
            <a href="/contact" className="btn btn-outline text-lg px-8 py-4">
              Plan Your Trip
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
