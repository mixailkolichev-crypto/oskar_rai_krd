/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MarkdownSpecificationModal } from './components/MarkdownSpecificationModal';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [isMarkdownModalOpen, setIsMarkdownModalOpen] = useState<boolean>(false);

  const scrollToBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForBooking(serviceTitle);
    }
    const elem = document.getElementById('booking');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#3E3D39] font-sans selection:bg-[#9CAF88]/20 selection:text-[#2C2C28]">
      {/* Top corporate header */}
      <Header 
        onOpenBooking={() => scrollToBooking()} 
        onOpenMarkdown={() => setIsMarkdownModalOpen(true)} 
      />

      {/* Main structured grid layout */}
      <main className="flex-1 border-x border-[#E5E1D8] max-w-[1440px] w-full mx-auto bg-[#FDFBF7]">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => scrollToBooking()} />

        {/* 2. Services & Pricing */}
        <ServicesSection onSelectService={(srvTitle) => scrollToBooking(srvTitle)} />

        {/* 3. About Specialist & Pragmatic Approach */}
        <AboutSection />

        {/* 4. Social Proof / Verified Testimonials */}
        <ReviewsSection />

        {/* 5. Contacts & Booking Form */}
        <BookingSection preselectedService={selectedServiceForBooking} />

        {/* 6. FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer bar */}
      <Footer onOpenMarkdown={() => setIsMarkdownModalOpen(true)} />

      {/* Specification Markdown Viewer Modal */}
      <MarkdownSpecificationModal 
        isOpen={isMarkdownModalOpen} 
        onClose={() => setIsMarkdownModalOpen(false)} 
      />
    </div>
  );
}

