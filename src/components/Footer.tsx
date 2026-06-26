import React from 'react';
import { DOCTOR_INFO } from '../data/content';
import { HeartPulse } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-8 md:px-12 py-8 bg-white border-t border-[#E5E1D8] text-[#8E8B82] text-xs font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Payment info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 uppercase tracking-wider font-medium text-center">
          <span className="text-[#3E3D39] font-bold">{DOCTOR_INFO.fullName}</span>
          <span className="hidden sm:inline text-[#E5E1D8]">|</span>
          <span>Наличный и безналичный расчет</span>
          <span className="hidden sm:inline text-[#E5E1D8]">|</span>
          <span>Офис 309, Этаж 3</span>
        </div>

        {/* Schedule & Facility Note */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-medium">
          <span>{DOCTOR_INFO.workingHours.split(' с ')[0]}: с 09:00</span>
          <span className="text-[#E5E1D8]">|</span>
          <span className="text-[#5A5A54] opacity-80">Вход с животными запрещен</span>
        </div>
      </div>

      {/* Medical Disclaimer Banner */}
      <div className="mt-8 pt-6 border-t border-[#F9F7F2] text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A94442]/8 text-[#A94442] font-bold rounded text-xs uppercase tracking-widest border border-[#A94442]/20">
          <HeartPulse className="w-4 h-4" />
          <span>Имеются противопоказания. Необходима консультация специалиста.</span>
        </div>
        <p className="text-[10px] text-[#8E8B82] mt-3">
          © {new Date().getFullYear()} {DOCTOR_INFO.centerName}. г. Краснодар, ул. Московская, 83. Лицензированный клинический стандарт.
        </p>
      </div>
    </footer>
  );
};
