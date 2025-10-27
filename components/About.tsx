
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-lightest-slate text-center mb-16">
          More Than Just a Race
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-light-slate text-lg leading-relaxed space-y-4">
            <p>
              The 24h Tremblant is an experience of a lifetime. It's a weekend of skiing, snowboarding, music, and celebration where teams of 6 to 12 participants relay for 24 hours. 
            </p>
            <p>
              Since its creation in 2001, this event has become a beacon of hope, raising millions of dollars for children's charities. It's a testament to the power of community, endurance, and generosity, set against the breathtaking backdrop of Mont Tremblant.
            </p>
            <p>
              Join us for an unforgettable adventure and make a lasting impact on the lives of children.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/skiteam/800/600" 
              alt="Ski team at Tremblant" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
