import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';
import gallery6 from '../assets/gallery/gallery-6.jpg';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export default function EventGallery() {
  const defaultImages: GalleryImage[] = [
    { id: '1', url: gallery1, alt: 'NeoVerse Event 1' },
    { id: '2', url: gallery2, alt: 'NeoVerse Event 2' },
    { id: '3', url: gallery3, alt: 'NeoVerse Event 3' },
    { id: '4', url: gallery4, alt: 'NeoVerse Event 4' },
    { id: '5', url: gallery5, alt: 'NeoVerse Event 5' },
    { id: '6', url: gallery6, alt: 'NeoVerse Event 6' }
  ];

  const [images] = useState<GalleryImage[]>(defaultImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Clear old localStorage data on mount to ensure new images are used
  useEffect(() => {
    localStorage.removeItem('galleryImages');
  }, []);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Event Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            Moments from our previous hackathons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg border-2 border-purple-500/40 hover:border-purple-400/80 transition-all duration-300 cursor-pointer aspect-video"
              onClick={() => openLightbox(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
