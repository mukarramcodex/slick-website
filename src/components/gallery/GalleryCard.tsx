import React from 'react';
import { Button } from "@/components/ui/button";

interface GalleryCardProps {
  item: string;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, index }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
      <img
        src={item}
        alt={`Gallery ${index + 1}`}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <Button className="!rounded-button whitespace-nowrap w-full bg-[#e6002e] hover:bg-[#e6002e]/80 text-white transition-all">
            View Full Size
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(230,0,46,0)] group-hover:shadow-[inset_0_0_50px_rgba(230,0,46,0.3)] transition-all duration-300"></div>
    </div>
  );
};

export default GalleryCard;