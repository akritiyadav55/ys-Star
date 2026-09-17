import { Phone, MessageSquare, Send } from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface MobileStickyBarProps {
  onScrollToAdmission: () => void;
}

export function MobileStickyBar({ onScrollToAdmission }: MobileStickyBarProps) {
  return (
    <div
      id="mobile-sticky-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          id="mobile-bar-call"
          href={`tel:${schoolData.phoneRaw}`}
          className="min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-slate-100 text-slate-800 active:bg-slate-200 font-bold text-xs"
        >
          <Phone className="w-4 h-4 text-blue-700 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp"
          href={`https://wa.me/${schoolData.whatsappNumber}?text=Hello%20YS%20Stars%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Button */}
        <button
          id="mobile-bar-enquire"
          onClick={onScrollToAdmission}
          className="min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-blue-700 active:bg-blue-800 text-white font-bold text-xs cursor-pointer shadow-xs"
        >
          <Send className="w-4 h-4 shrink-0" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
