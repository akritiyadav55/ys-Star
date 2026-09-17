import { useCallback } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AcademicEnvironmentSection } from './components/AcademicEnvironmentSection';
import { AdmissionSection } from './components/AdmissionSection';
import { SchoolLifeSection } from './components/SchoolLifeSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { CampusSection } from './components/CampusSection';
import { EnquiryCtaBanner } from './components/EnquiryCtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const scrollToAdmission = useCallback(() => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // If mobile menu was open or focus is needed, highlight input
      setTimeout(() => {
        const input = document.getElementById('studentName');
        if (input) {
          input.focus();
        }
      }, 500);
    }
  }, []);

  const scrollToAbout = useCallback(() => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <TopAnnouncementBar onScrollToAdmission={scrollToAdmission} />

      {/* 2. NAVIGATION HEADER */}
      <Navbar onScrollToAdmission={scrollToAdmission} />

      <main className="flex-1">
        {/* 3. HERO SECTION */}
        <HeroSection
          onScrollToAdmission={scrollToAdmission}
          onScrollToAbout={scrollToAbout}
        />

        {/* 4. ABOUT THE SCHOOL */}
        <AboutSection onScrollToAdmission={scrollToAdmission} />

        {/* 5. WHY CHOOSE YS STARS ACADEMY */}
        <WhyChooseSection />

        {/* 6. ACADEMIC ENVIRONMENT */}
        <AcademicEnvironmentSection />

        {/* 7. ADMISSION 2026–2027 */}
        <AdmissionSection />

        {/* 8. SCHOOL LIFE / ACTIVITIES */}
        <SchoolLifeSection />

        {/* 9. PHOTO GALLERY */}
        <PhotoGallerySection />

        {/* 10. CAMPUS SECTION */}
        <CampusSection />

        {/* 11. PARENT/STUDENT ENQUIRY CTA */}
        <EnquiryCtaBanner onScrollToAdmission={scrollToAdmission} />

        {/* 12. CONTACT & LOCATION */}
        <ContactSection />
      </main>

      {/* 13. FOOTER */}
      <Footer onScrollToAdmission={scrollToAdmission} />

      {/* 14. MOBILE STICKY ACTION BAR */}
      <MobileStickyBar onScrollToAdmission={scrollToAdmission} />
    </div>
  );
}
