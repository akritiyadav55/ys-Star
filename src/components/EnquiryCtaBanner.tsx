import { Phone, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';
import { schoolData } from '../data/schoolData';

interface EnquiryCtaBannerProps {
  onScrollToAdmission: () => void;
}

export function EnquiryCtaBanner({ onScrollToAdmission }: EnquiryCtaBannerProps) {
  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Admission Helpdesk</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              Have Questions About Admission?
            </h2>
            
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
              Speak with YS Stars Academy for admission-related enquiries. We are here to guide you regarding registration, grade entry, and school visits.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              id="cta-call-now-btn"
              href={`tel:${schoolData.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-white text-blue-950 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call Now</span>
            </a>

            <a
              id="cta-whatsapp-btn"
              href={`https://wa.me/${schoolData.whatsappNumber}?text=Hello%20YS%20Stars%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              id="cta-send-enquiry-btn"
              onClick={onScrollToAdmission}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-amber-400 hover:bg-amber-300 text-blue-950 transition-colors shadow-sm cursor-pointer"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
