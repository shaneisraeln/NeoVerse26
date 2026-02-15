import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export default function EventGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load images from localStorage
    const savedImages = localStorage.getItem('galleryImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      // Default placeholder images
      setImages([
        { id: '1', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', alt: 'Hackathon Event 1' },
        { id: '2', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', alt: 'Hackathon Event 2' },
        { id: '3', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', alt: 'Hackathon Event 3' },
        { id: '4', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', alt: 'Hackathon Event 4' },
        { id: '5', url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Hackathon Event 5' },
        { id: '6', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', alt: 'Hackathon Event 6' }
      ]);
    }
    setIsLoading(false);
  }, []);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-purple-300">Loading gallery...</div>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return null;
  }

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
