
import React from 'react';

const SponsorLogo: React.FC<{ name: string; logoUrl: string }> = ({ name, logoUrl }) => (
    <div className="flex justify-center items-center p-4">
        <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className="h-12 md:h-16 object-contain grayscale transition-all duration-300 hover:grayscale-0" 
        />
    </div>
);

const Sponsors: React.FC = () => {
    const sponsors = [
        { name: 'Sponsor One', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+1' },
        { name: 'Sponsor Two', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+2' },
        { name: 'Sponsor Three', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+3' },
        { name: 'Sponsor Four', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+4' },
        { name: 'Sponsor Five', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+5' },
        { name: 'Sponsor Six', logoUrl: 'https://via.placeholder.com/150x60/cccccc/888888?text=Sponsor+6' },
    ];

    return (
        <section id="sponsors" className="py-20 md:py-32 bg-navy">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-lightest-slate text-center mb-16">
                    Our Valued Partners
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {sponsors.map((sponsor) => (
                        <SponsorLogo key={sponsor.name} name={sponsor.name} logoUrl={sponsor.logoUrl} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
