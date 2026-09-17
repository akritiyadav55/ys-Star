import { BookOpenCheck, UsersRound, Lightbulb, Trophy, CheckCircle } from 'lucide-react';
import { academicBlocks } from '../data/schoolData';

export function AcademicEnvironmentSection() {
  const getBlockIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpenCheck className="w-5 h-5 text-blue-700" />;
      case 1:
        return <UsersRound className="w-5 h-5 text-indigo-700" />;
      case 2:
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Trophy className="w-5 h-5 text-emerald-700" />;
      default:
        return <BookOpenCheck className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="academics" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Academic Curriculum & Approach</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Learning That Inspires Growth
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            At YS Stars Academy, our educational approach provides students with a well-rounded foundation in academic concepts, active classroom dialogue, and personal skill development.
          </p>
        </div>

        {/* 4 Editable Content Blocks in 2x2 Grid with Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {academicBlocks.map((block, idx) => (
            <div
              key={block.id}
              id={`academic-block-${idx + 1}`}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-200/60">
                    {getBlockIcon(idx)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {block.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {block.description}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Key Focus Areas:
                </p>
                <div className="space-y-2">
                  {block.focusAreas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm text-blue-900">
          <div className="flex items-center gap-2">
            <span className="font-bold">General Education Approach:</span>
            <span>Focuses on clarity, individual care, and consistent student participation across every grade level.</span>
          </div>
          <span className="text-xs text-blue-700 font-medium">Session 2026–2027</span>
        </div>

      </div>
    </section>
  );
}
