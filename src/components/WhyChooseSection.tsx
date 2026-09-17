import {
  BookOpen,
  Sparkles,
  TrendingUp,
  Palette,
  Users,
  Compass,
  Check,
} from 'lucide-react';
import { whyChooseFeatures } from '../data/schoolData';

export function WhyChooseSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-700" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-700" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Educational Approach</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Why Choose YS Stars Academy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our school principles emphasize dedicated attention, positive learning habits, and supportive care for each student.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((item, index) => (
            <div
              key={item.id}
              id={`feature-card-${index + 1}`}
              className="group bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-100/80 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                <Check className="w-3.5 h-3.5 text-blue-600" />
                <span>Core Pillar of Learning</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
