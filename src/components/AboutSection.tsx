import { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Building2,
  School,
  ZoomIn,
  X,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  ArrowRight,
  Award,
  BookMarked,
} from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface AboutSectionProps {
  onScrollToAdmission?: () => void;
}

export function AboutSection({ onScrollToAdmission }: AboutSectionProps) {
  const [showMore, setShowMore] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activePhotoTab, setActivePhotoTab] = useState<'admission' | 'campus' | 'classroom'>('admission');

  const photos = {
    admission: {
      url: schoolData.admissionPosterPhoto || '/ys_stars_admission_poster.jpg',
      alt: 'Y.S. Stars Academy Official Admission Open 2026-2027 Poster',
      tag: 'Admission Open 2026–2027',
      caption: 'Official Admission Open Notice • Limited Seats & Selective Process • Goplapur, Campierganj',
      badge: 'Admission 2026–2027',
    },
    campus: {
      url: schoolData.campusPhoto || '/ys_stars_school_building.jpg',
      alt: 'YS Stars Academy Campus Building and Yellow School Buses',
      tag: 'Campus & Buses',
      caption: 'YS Stars Academy multi-storey campus building and transport buses in Goplapur, Campierganj.',
      badge: 'Campus Facility',
    },
    classroom: {
      url: schoolData.classroomPhoto || '/ys_stars_about_photo.jpg',
      alt: 'YS Stars Academy Classroom Learning and Student Activities',
      tag: 'Classroom Life',
      caption: 'Empowering Our Children To Step Into The Future With Confidence - Active student participation.',
      badge: 'Academic Life',
    },
  };

  const currentPhoto = photos[activePhotoTab];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official School Photo with interactive tabs and zoom */}
          <div className="lg:col-span-5 relative">
            
            {/* Photo Category Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-3 border border-slate-200 w-fit flex-wrap">
              <button
                type="button"
                onClick={() => setActivePhotoTab('admission')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activePhotoTab === 'admission'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                <span>Admission Notice</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePhotoTab('campus')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activePhotoTab === 'campus'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <School className="w-3.5 h-3.5" />
                <span>School Campus</span>
              </button>

              <button
                type="button"
                onClick={() => setActivePhotoTab('classroom')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activePhotoTab === 'classroom'
                    ? 'bg-blue-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>Classroom</span>
              </button>
            </div>

            {/* Main Photo Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <div className="aspect-4/5 relative flex items-center justify-center bg-slate-950">
                <img
                  key={currentPhoto.url}
                  src={currentPhoto.url}
                  alt={currentPhoto.alt}
                  className="w-full h-full object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Badge top left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-400 text-blue-950 uppercase tracking-wider shadow-md">
                    {currentPhoto.badge}
                  </span>
                </div>

                {/* Click to Enlarge button overlay */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(true)}
                  className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 shadow-md transition-all cursor-pointer hover:scale-105"
                  title="Click to view full photo in high definition"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </button>

                {/* Caption overlay at bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                  <div className="flex items-center gap-1 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-0.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Y.S. Stars Academy</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                    {currentPhoto.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Accent badge floating */}
            <div className="hidden sm:flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-md absolute -bottom-5 -right-3 max-w-xs z-10">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Session 2026–2027</p>
                <p className="text-slate-500">Limited Seats • Enroll Now</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Highlights from Official Poster */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional Overview</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight mb-3">
              About YS Stars Academy
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-normal">
              YS Stars Academy is a premier educational institution located in Goplapur, Campierganj, Gorakhpur, Uttar Pradesh. The school provides a modern, nurturing, and disciplined learning environment where children step into the future with confidence.
            </p>

            {/* Key Benefits Card from the Official Admission Poster */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-amber-50/50 border border-blue-100 mb-6 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-800" />
                  Key Institutional Pillars
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-200/80 text-amber-900 uppercase">
                  Session 2026–2027
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Professional Educators</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Expert Curriculum</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-lg border border-slate-200/70 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Modern Facilities</span>
                </div>
              </div>

              {onScrollToAdmission && (
                <div className="mt-3.5 pt-3 border-t border-blue-100 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-slate-600">
                    <span className="font-bold text-slate-800">Limited Seats:</span> Selective admission process currently open.
                  </p>
                  <button
                    type="button"
                    onClick={onScrollToAdmission}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Core Educational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Spacious Campus & Transport</h3>
                  <p className="text-xs text-slate-500">Multi-storey building with yellow school buses for local village routes.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Student Confidence & Speaking</h3>
                  <p className="text-xs text-slate-500">Encouraging every child to step up, present, and build public speaking skills.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Active Classroom Learning</h3>
                  <p className="text-xs text-slate-500">Blackboard problem-solving, regular assessments, and foundational clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Values, Ethics & Discipline</h3>
                  <p className="text-xs text-slate-500">Cultivating respectful character, punctuality, and moral integrity.</p>
                </div>
              </div>
            </div>

            {/* Learn More Toggle & Expandable Info */}
            <div>
              <button
                id="about-learn-more-btn"
                onClick={() => setShowMore(!showMore)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-blue-800 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 rounded-lg transition-colors cursor-pointer"
                aria-expanded={showMore}
              >
                <BookOpen className="w-4 h-4" />
                <span>{showMore ? 'Show Less Details' : 'Learn More About Our Philosophy & Location'}</span>
                {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showMore && (
                <div
                  id="about-extended-content"
                  className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-3 animate-in fade-in duration-200"
                >
                  <p className="font-semibold text-blue-950">
                    Our Educational Philosophy:
                  </p>
                  <p className="leading-relaxed">
                    At YS Stars Academy, every child is supported with individual attention and encouraged to explore their natural potential. We emphasize steady progress, regular study habits, healthy classroom interaction, and positive character building.
                  </p>
                  <div className="pt-2 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span>{schoolData.location} (Pin: {schoolData.pincode})</span>
                    </div>
                    {schoolData.email && (
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                        <span>{schoolData.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Full-screen Lightbox Modal for Photo */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800 text-white">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {currentPhoto.tag} - Y.S. Stars Academy
                </h3>
                <p className="text-xs text-slate-400">
                  Goplapur, Campierganj, Gorakhpur (Pin: 273158)
                </p>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Container */}
            <div className="p-2 sm:p-4 flex items-center justify-center overflow-auto bg-slate-950 max-h-[75vh]">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer with Details */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span className="font-semibold text-amber-400">
                {currentPhoto.caption}
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${schoolData.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{schoolData.phone}</span>
                </a>
                {schoolData.secondaryPhone && (
                  <span className="text-slate-400">
                    / {schoolData.secondaryPhone}
                  </span>
                )}
                {schoolData.email && (
                  <span className="text-slate-400">
                    {schoolData.email}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
