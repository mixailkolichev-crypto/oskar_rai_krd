import React from 'react';
import { DOCTOR_INFO } from '../data/content';
import { Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 flex flex-wrap justify-between items-center px-6 md:px-10 py-5 border-b border-[#E5E1D8] bg-[#FDFBF7]/90 backdrop-blur-md transition-all">
      {/* Brand & Monogram */}
      <div className="flex items-center gap-3.5 my-1">
        <div className="w-11 h-11 bg-[#9CAF88] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-sm shrink-0">
          OR
        </div>
        <div>
          <h1 className="text-base md:text-lg font-bold tracking-tight uppercase text-[#2C2C28]">
            {DOCTOR_INFO.fullName}
          </h1>
          <p className="text-[10px] md:text-[11px] text-[#8E8B82] uppercase tracking-[0.2em] font-medium">
            Частный психологический центр
          </p>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-7 text-[12px] font-semibold uppercase tracking-wider text-[#5A5A54]">
        <a href="#services" className="hover:text-[#9CAF88] transition-colors">Услуги и цены</a>
        <a href="#about" className="hover:text-[#9CAF88] transition-colors">Подход</a>
        <a href="#reviews" className="hover:text-[#9CAF88] transition-colors">Отзывы</a>
        <a href="#booking" className="hover:text-[#9CAF88] transition-colors">Прием</a>
        <a href="#faq" className="hover:text-[#9CAF88] transition-colors">Вопросы</a>
      </nav>

      {/* Contacts & Action Buttons */}
      <div className="flex items-center gap-4 md:gap-7 my-1">
        <div className="hidden sm:flex flex-col text-right">
          <a 
            href={`tel:${DOCTOR_INFO.phoneRaw}`} 
            className="font-semibold text-[13px] md:text-[14px] text-[#5A5A54] hover:text-[#9CAF88] transition-colors flex items-center justify-end gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#9CAF88]" />
            {DOCTOR_INFO.phone}
          </a>
          <span className="text-[#8E8B82] text-[11px] flex items-center justify-end gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-[#8E8B82]" />
            {DOCTOR_INFO.addressShort}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button 
            onClick={onOpenBooking}
            className="bg-[#9CAF88] text-white px-5 md:px-6 py-2.5 rounded-sm font-medium hover:bg-[#8A9C76] active:scale-[0.99] transition-all shadow-xs uppercase text-[11px] tracking-wider cursor-pointer"
          >
            Записаться на консультацию
          </button>
        </div>
      </div>
    </header>
  );
};
