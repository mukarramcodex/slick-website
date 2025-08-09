import React from 'react';
import GalleryCard from './GalleryCard';
import { GalleryProps } from './GalleryTypes';

const Gallery: React.FC<GalleryProps> = ({ galleryItems }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-[#e6002e]">Gallery</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A visual showcase of our creative process, workspace, and the innovative solutions we deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;