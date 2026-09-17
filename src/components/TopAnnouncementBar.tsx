import { ArrowRight, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface TopAnnouncementBarProps {
  onScrollToAdmission: () => void;
}

export function TopAnnouncementBar({ onScrollToAdmission }: TopAnnouncementBarProps) {
  return (
    <div
      id="top-announcement-bar"
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs sm:text-sm py-2 px-4 shadow-sm relative z-40 border-b border-blue-700/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400 text-blue-950 uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-blue-950" />
            Notice
          </span>
          <span className="font-medium text-slate-100">
            Admissions Open for {schoolData.currentAdmissionSession}
          </span>
        </div>

        <div className="flex items-center gap-3 mx-auto sm:mx-0 shrink-0">
          <button
            id="announcement-apply-btn"
            onClick={onScrollToAdmission}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded bg-white text-blue-900 hover:bg-amber-300 hover:text-blue-950 transition-colors duration-150 shadow-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-300"
          >
            <span>Apply / Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
