import { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Images,
  ExternalLink,
} from 'lucide-react';
import { galleryItems, schoolData } from '../data/schoolData';
import { GalleryItem } from '../types';

export function PhotoGallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filters = ['All', 'Campus', 'Classroom', 'Activities', 'Celebrations'];

  const filteredItems =
    selectedFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setIsFullscreen(false);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const currentItem: GalleryItem | undefined =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : undefined;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Images className="w-3.5 h-3.5" />
              <span>Visual Journey</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              School Photo Gallery
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Moments from our campus, classrooms, student engagements, and celebrations at YS Stars Academy.
            </p>
          </div>

          <a
            id="gallery-instagram-btn"
            href={schoolData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 transition-opacity shadow-sm shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>View More on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              id={`gallery-filter-${filter.toLowerCase()}`}
              onClick={() => setSelectedFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-md cursor-pointer aspect-4/3 sm:aspect-square"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-200/90 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentItem && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-150 backdrop-blur-xs"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600/80">
                  {currentItem.category}
                </span>
                <span className="text-sm text-slate-300">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="lightbox-toggle-fullscreen"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Toggle Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  id="lightbox-close-btn"
                  onClick={handleCloseLightbox}
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Central Image View with Navigation Arrows */}
            <div className="relative flex-1 flex items-center justify-center my-2 select-none">
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer backdrop-blur-xs"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="max-w-4xl max-h-[75vh] flex items-center justify-center">
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className={`object-contain rounded-lg shadow-2xl transition-all duration-200 ${
                    isFullscreen ? 'max-h-[90vh] max-w-[95vw]' : 'max-h-[70vh] max-w-full'
                  }`}
                />
              </div>

              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer backdrop-blur-xs"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center text-white z-10 max-w-2xl mx-auto">
              <h3 className="text-base sm:text-lg font-bold">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {currentItem.caption}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
