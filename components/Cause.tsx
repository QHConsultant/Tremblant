
import React from 'react';
import { HeartIcon, ChildIcon, FoundationIcon } from './icons';

interface CauseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CauseCard: React.FC<CauseCardProps> = ({ icon, title, description }) => (
  <div className="bg-light-navy p-8 rounded-lg shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="text-brand-cyan mb-4">{icon}</div>
    <h3 className="font-montserrat font-bold text-xl text-lightest-slate mb-2">{title}</h3>
    <p className="text-light-slate">{description}</p>
  </div>
);

const Cause: React.FC = () => {
  const causes = [
    {
      icon: <HeartIcon className="w-12 h-12" />,
      title: 'Children\'s Health',
      description: 'Funding for pediatric care, research, and specialized equipment to give every child a fighting chance.',
    },
    {
      icon: <ChildIcon className="w-12 h-12" />,
      title: 'Social Well-being',
      description: 'Support for programs that foster safe environments, education, and development for at-risk youth.',
    },
    {
      icon: <FoundationIcon className="w-12 h-12" />,
      title: 'Major Foundations',
      description: 'Partnering with leading foundations to amplify our impact and reach more children in need across the region.',
    },
  ];

  return (
    <section id="the-cause" className="py-20 md:py-32 bg-light-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-lightest-slate text-center mb-16">
          Skiing for a Brighter Future
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <CauseCard key={cause.title} {...cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cause;
