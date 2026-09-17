import { useState } from 'react';
import { Sparkles, ArrowRight, Instagram } from 'lucide-react';
import { schoolActivities, schoolData } from '../data/schoolData';
import { ActivityItem } from '../types';

export function SchoolLifeSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Classroom Activities',
    'Cultural Activities',
    'Celebrations',
    'Student Participation',
    'School Events',
  ];

  const filteredActivities =
    selectedCategory === 'All'
      ? schoolActivities
      : schoolActivities.filter((act) => act.category === selectedCategory);

  return (
    <section id="activities" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-800" />
              <span>Student Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
              School Life & Activities
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              A balanced school environment where students discover their talents through classroom engagement, cultural participation, and community celebrations.
            </p>
          </div>

          <a
            id="activities-instagram-link"
            href={schoolData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200/80 rounded-lg transition-colors shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {schoolData.instagramHandle}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`activity-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Image-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((item: ActivityItem) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 text-blue-900 shadow-xs backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>YS Stars Academy</span>
                  <span className="font-medium text-blue-700">Student Life</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
