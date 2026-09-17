import { Phone, MapPin, Instagram, Heart, ArrowUp, Mail } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { schoolData } from '../data/schoolData';

interface FooterProps {
  onScrollToAdmission: () => void;
}

export function Footer({ onScrollToAdmission }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Academics', href: '#academics' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Activities', href: '#activities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    if (href === '#admissions') {
      onScrollToAdmission();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo size="md" />
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">
                  YS Stars Academy
                </h3>
                <p className="text-xs text-slate-400">
                  Goplapur, Campierganj
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium italic border-l-2 border-amber-400 pl-3 py-1">
              "{schoolData.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An educational institution committed to quality general education, strong moral character, and joyful classroom learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact School
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {schoolData.location}
                  <br />
                  <span className="text-slate-500">Plus Code: {schoolData.plusCode}</span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${schoolData.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {schoolData.phone}
                </a>
              </div>

              {schoolData.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href={`mailto:${schoolData.email}`}
                    className="hover:text-white transition-colors font-medium"
                  >
                    {schoolData.email}
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-white block mb-2 uppercase tracking-wide">
                Social Media
              </span>
              <a
                id="footer-instagram-link"
                href={schoolData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors text-xs font-medium"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram: {schoolData.instagramHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 YS Stars Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Serving Students & Parents with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
