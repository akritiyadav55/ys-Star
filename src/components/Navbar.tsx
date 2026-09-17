import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { schoolData } from '../data/schoolData';

interface NavbarProps {
  onScrollToAdmission: () => void;
}

export function Navbar({ onScrollToAdmission }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'academics', 'admissions', 'activities', 'gallery', 'campus', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
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
    <header
      id="main-navigation"
      className={`sticky top-0 z-30 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
          : 'bg-white py-3.5 border-b border-slate-100 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-hidden"
            id="nav-brand"
          >
            <SchoolLogo size="md" />
            <div className="flex flex-col">
              <span className="font-extrabold text-blue-950 text-base sm:text-lg tracking-tight group-hover:text-blue-700 transition-colors">
                YS Stars Academy
              </span>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                Goplapur, Campierganj, Gorakhpur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-blue-700 font-semibold bg-blue-50'
                      : 'text-slate-600 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-btn"
              href={`tel:${schoolData.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span className="hidden xl:inline">{schoolData.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <button
              id="nav-admission-btn"
              onClick={onScrollToAdmission}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-xs hover:shadow transition-all duration-150 cursor-pointer"
            >
              <span>Admission Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-enquire-quick"
              onClick={onScrollToAdmission}
              className="px-2.5 py-1.5 text-xs font-bold bg-blue-700 text-white rounded-md sm:hidden"
            >
              Enquire
            </button>
            <button
              id="mobile-hamburger-btn"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide/Dropdown Navigation */}
      {isOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-${link.label.toLowerCase()}`}
                onClick={() => handleLinkClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-800 hover:bg-blue-50 active:bg-blue-100 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              id="mobile-nav-cta"
              onClick={() => {
                setIsOpen(false);
                onScrollToAdmission();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs"
            >
              Admission Enquiry (2026–2027)
            </button>
            <a
              id="mobile-nav-call"
              href={`tel:${schoolData.phoneRaw}`}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span>Call: {schoolData.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
