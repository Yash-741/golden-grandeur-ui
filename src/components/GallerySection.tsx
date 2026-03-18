import { useState } from "react";
import { X } from "lucide-react";
import venue1 from "@/assets/venue-1.jpeg";
import venue2 from "@/assets/venue-2.jpeg";
import venue3 from "@/assets/venue-3.jpeg";
import venue4 from "@/assets/venue-4.jpeg";
import venue5 from "@/assets/venue-5.jpeg";
import venue6 from "@/assets/venue-6.jpeg";
import venue7 from "@/assets/venue-7.jpeg";
import venue8 from "@/assets/venue-8.jpeg";
import venue9 from "@/assets/venue-9.jpeg";
import venue10 from "@/assets/venue-10.jpeg";
import venue11 from "@/assets/venue-11.jpeg";
import venue13 from "@/assets/venue-13.jpeg";

const images = [
  { src: venue7, alt: "Grand stage with floral arches and chandeliers" },
  { src: venue4, alt: "Elegant wedding stage with rose decorations" },
  { src: venue5, alt: "Close-up of ornate wedding seating" },
  { src: venue6, alt: "Stage with cherry blossom framing" },
  { src: venue9, alt: "Full venue view with seating and stage" },
  { src: venue10, alt: "Grand ballroom with chandelier and full setup" },
  { src: venue1, alt: "Hexagonal floral arch with LED lighting" },
  { src: venue3, alt: "Floral hexagon frame with colorful roses" },
  { src: venue2, alt: "Illuminated entrance with cherry blossom trees" },
  { src: venue8, alt: "Spacious venue hall with seating arrangement" },
  { src: venue11, alt: "Wedding stage with floral arch and aisle seating" },
  { src: venue13, alt: "Wide hall view with floral stage decor" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-elegant text-lg tracking-[0.3em] uppercase text-primary/70 mb-3">
            Our Venue
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Gallery
          </h2>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto" />
        </div>

        {/* Masonry-like grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-lg border border-gold/10 hover:border-primary/30 transition-all duration-300"
              onClick={() => setLightbox(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-body text-sm tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
