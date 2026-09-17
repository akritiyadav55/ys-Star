import { MapPin, ArrowRight, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface HeroSectionProps {
  onScrollToAdmission: () => void;
  onScrollToAbout: () => void;
}

export function HeroSection({ onScrollToAdmission, onScrollToAbout }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-900 overflow-hidden">
      {/* Background Campus Visual with Dark Blue Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ys_stars_school_building.jpg"
          alt="YS Stars Academy Campus visual"
          className="w-full h-full object-cover object-center scale-105 transform duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Professional deep blue gradient overlay for clear contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/90 to-blue-900/80" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/80 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-medium mb-5 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Goplapur, Campierganj, Gorakhpur, Uttar Pradesh</span>
          </div>

          {/* Subheading */}
          <p className="text-amber-400 text-sm sm:text-base font-bold tracking-wide uppercase mb-2">
            YS Stars Academy, Goplapur, Campierganj
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Building Bright Futures <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-amber-200">
              Through Learning
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 font-normal leading-relaxed mb-8 max-w-2xl">
            {schoolData.tagline} A general education institution committed to nurturing young minds with knowledge, discipline, and positive values.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              id="hero-admission-cta"
              onClick={onScrollToAdmission}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer"
            >
              <span>Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-explore-cta"
              onClick={onScrollToAbout}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-300" />
              <span>Explore Our School</span>
            </button>
          </div>

          {/* Key Trust Badges */}
          <div className="mt-10 pt-6 border-t border-blue-800/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-blue-200 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Session 2026–2027 Open</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>General Education School</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>Safe & Supportive Campus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
