import React from 'react';
import { DOCTOR_INFO } from '../data/content';
import { CalendarCheck, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-[#E5E1D8] bg-[#F9F7F2]">
      {/* Main Hero Content (Col 1 to 7) */}
      <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-center lg:border-r border-[#E5E1D8]">
        <div className="mb-5 inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-[#E8E4D9] text-[#5A5A54] text-[11px] font-bold uppercase tracking-[0.18em] rounded-2xs">
          <ShieldCheck className="w-4 h-4 text-[#9CAF88]" />
          <span>Эксперт с 20-летним стажем</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-[1.12] mb-6 text-[#2C2C28]">
          Решение глубоких психологических проблем за 1–2 сессии.
        </h2>

        <p className="text-[#5A5A54] leading-relaxed mb-9 text-base md:text-[17px] font-normal max-w-2xl">
          Прагматичный подход, основанный на клинической науке и 20-летнем опыте в Краснодаре. Мы не растягиваем терапию на годы искусственных курсов — мы находим первопричину кризиса и помогаем устранить её сразу.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-8 mb-10 pt-2">
          <div className="border-l-3 border-[#9CAF88] pl-5">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#9CAF88]">
              {DOCTOR_INFO.clientsCount}
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8E8B82] mt-1">
              Довольных клиентов
            </div>
          </div>

          <div className="border-l-3 border-[#9CAF88] pl-5">
            <div className="text-3xl md:text-4xl font-serif font-bold text-[#9CAF88]">
              {DOCTOR_INFO.experienceYears} лет
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8E8B82] mt-1">
              Активной клинической практики
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 bg-[#3E3D39] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#2C2C28] transition-all uppercase text-[12px] tracking-[0.15em] shadow-sm cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4 text-[#9CAF88]" />
            <span>Записаться на прием онлайн</span>
          </button>
          
          <span className="text-[12px] text-[#8E8B82] italic">
            Длительность консультации: 1.5 часа
          </span>
        </div>
      </div>

      {/* Featured Quote & Specialist Visual Anchor (Col 8 to 12) */}
      <div className="lg:col-span-5 p-8 md:p-14 bg-[#FDFBF7] flex flex-col justify-between border-t lg:border-t-0 border-[#E5E1D8]">
        <div>
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E5E1D8]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8E8B82] block">
                Репутация в Краснодаре
              </span>
              <div className="flex items-center gap-1 mt-1">
                <div className="flex text-[#F2C94C] text-base">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[13px] font-bold text-[#3E3D39] ml-1.5">4.5 / 5.0</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[11px] font-semibold text-[#5A5A54] block">Яндекс Карты</span>
              <span className="text-[10px] text-[#8E8B82]">23 официальных отзыва</span>
            </div>
          </div>

          {/* Featured Testimonial Card */}
          <div className="bg-white border border-[#E5E1D8] p-6 md:p-8 rounded-sm shadow-2xs relative mb-8">
            <div className="text-4xl text-[#E8E4D9] font-serif absolute top-3 left-4 leading-none select-none">
              “
            </div>
            <p className="italic text-[#5A5A54] text-sm md:text-[15px] leading-relaxed relative z-10 pt-2">
              Оскар Сергеевич помог мне выйти из тяжелых созависимых отношений длиной в 7 лет всего за одну встречу. Его прямолинейность, честность и профессионализм творят чудеса. Никакой «воды» и растягивания на месяцы.
            </p>
            <div className="mt-5 pt-4 border-t border-[#F9F7F2] flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#9CAF88] uppercase tracking-wider">
                — Алина, г. Краснодар
              </span>
              <span className="text-[10px] bg-[#F9F7F2] px-2 py-0.5 rounded text-[#8E8B82]">
                Кейс: 1 сессия
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#F9F7F2] p-5 border border-[#E5E1D8] rounded-2xs text-[12px] text-[#5A5A54]">
          <span className="font-bold text-[#2C2C28] uppercase text-[11px] tracking-wider block mb-1">
            Официальный прием в офисе
          </span>
          г. Краснодар, ул. Московская, д. 83, 3 этаж, офис 309. Конфиденциальность гарантируется этическим кодексом.
        </div>
      </div>
    </section>
  );
};
