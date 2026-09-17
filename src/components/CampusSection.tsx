import { MapPin, Navigation, Compass, Building, ExternalLink } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export function CampusSection() {
  return (
    <section id="campus" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Campus & Location</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Our Campus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A welcoming and supportive learning campus situated in Bhagawanpur, Goplapur, Campierganj.
          </p>
        </div>

        {/* 2 Column Layout: Campus Visual & Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 flex-1 min-h-[300px] sm:min-h-[380px] bg-slate-100">
              <img
                src={schoolData.campusPhoto || '/ys_stars_school_building.jpg'}
                alt="YS Stars Academy School Campus Building & Buses"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-400 text-blue-950 uppercase tracking-wider">
                  School Building
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  YS Stars Academy Campus
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                  Bhagawanpur, Goplapur, Campierganj, Gorakhpur, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Location & Directions Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-blue-950 mb-3">
                Campus Location Details
              </h3>

              <div className="space-y-4 text-sm text-slate-700 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Physical Address
                    </span>
                    <span className="font-semibold text-slate-900 block mt-0.5">
                      Bhagawanpur, Goplapur, Campierganj, Gorakhpur, Uttar Pradesh
                    </span>
                    <span className="text-xs text-slate-500 block">
                      Pincode: {schoolData.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                      Google Maps Plus Code
                    </span>
                    <span className="font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded text-xs inline-block mt-0.5">
                      {schoolData.plusCode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Embed preview */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-16/9 relative mb-6">
                <iframe
                  title="YS Stars Academy Location Map"
                  src={schoolData.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Get Directions CTA Button */}
            <div>
              <a
                id="campus-get-directions-btn"
                href={schoolData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-center text-[11px] text-slate-500 mt-2">
                Uses official Plus Code: {schoolData.plusCode}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
