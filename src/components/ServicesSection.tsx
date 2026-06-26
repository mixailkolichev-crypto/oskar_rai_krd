import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { Clock, CheckCircle2, ArrowRight, CreditCard } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section id="services" className="p-8 md:p-14 lg:p-20 border-b border-[#E5E1D8] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#8E8B82]">
              Специализация и услуги
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#2C2C28]">
              Главные направления психологической помощи
            </h2>
          </div>
          <p className="text-[#5A5A54] text-sm md:text-base max-w-md mt-4 md:mt-0">
            Каждая консультация рассчитана на 1.5 часа интенсивной работы. Наша цель — найти практическое решение кризиса в кратчайшие сроки.
          </p>
        </div>

        {/* 3 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((srv: ServiceItem) => {
            const isExpanded = activeTab === srv.id;

            return (
              <div 
                key={srv.id} 
                className="bg-white p-6 md:p-8 border border-[#E5E1D8] flex flex-col justify-between h-full rounded-sm hover:border-[#9CAF88] transition-all shadow-2xs group relative"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#8E8B82] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                      {srv.duration}
                    </span>
                    <span className="text-[#9CAF88] bg-[#F9F7F2] px-2.5 py-0.5 rounded">
                      Очно / Онлайн
                    </span>
                  </div>

                  <h4 className="font-serif text-xl md:text-2xl font-bold mb-3 text-[#2C2C28] group-hover:text-[#9CAF88] transition-colors">
                    {srv.title}
                  </h4>

                  <p className="text-[13px] md:text-sm text-[#5A5A54] leading-relaxed mb-6">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8E8B82] block mb-2">
                      Ключевые фокусы сессии:
                    </span>
                    {srv.focusPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-[#3E3D39]">
                        <CheckCircle2 className="w-4 h-4 text-[#9CAF88] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#F5F2ED] mt-4">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#8E8B82] font-semibold">Фиксированная цена</span>
                      <span className="text-2xl font-serif font-bold text-[#9CAF88]">
                        {srv.price.toLocaleString()} ₽
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8E8B82]">за 90 минут встречи</span>
                  </div>

                  <button
                    onClick={() => onSelectService(srv.title)}
                    className="w-full bg-[#F9F7F2] hover:bg-[#9CAF88] hover:text-white text-[#3E3D39] py-3 px-4 rounded-xs font-bold uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#E5E1D8] hover:border-transparent"
                  >
                    <span>Записаться на этот прием</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Info Footer Box */}
        <div className="mt-12 p-6 bg-[#F9F7F2] border border-[#E5E1D8] rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 text-[13px]">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-[#9CAF88] shrink-0" />
            <div>
              <span className="font-bold text-[#2C2C28] uppercase tracking-wider block text-xs">
                Способы оплаты в центре
              </span>
              <span className="text-[#5A5A54]">
                Наличный расчет, банковские карты, перевод через СБП, выставление счета для юридических лиц. Оплата производится после консультации.
              </span>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[#A94442] font-bold text-xs uppercase tracking-wider block">
              Медицинское предупреждение
            </span>
            <span className="text-[#8E8B82] text-[11px]">
              Имеются противопоказания. Проконсультируйтесь с врачом.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
