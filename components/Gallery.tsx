
import React from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="overflow-hidden rounded-lg shadow-lg group">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
  </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/seed/gallery1/500/500', alt: 'Skiers at night' },
    { src: 'https://picsum.photos/seed/gallery2/500/500', alt: 'Concert at the event' },
    { src: 'https://picsum.photos/seed/gallery3/500/500', alt: 'Team celebrating' },
    { src: 'https://picsum.photos/seed/gallery4/500/500', alt: 'Sunrise over the slopes' },
    { src: 'https://picsum.photos/seed/gallery5/500/500', alt: 'Family enjoying the event' },
    { src: 'https://picsum.photos/seed/gallery6/500/500', alt: 'Snowboarder in action' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-light-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-lightest-slate text-center mb-16">
          The 24h Experience
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <GalleryImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
