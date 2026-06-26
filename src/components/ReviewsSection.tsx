import React from 'react';
import { REVIEWS, DOCTOR_INFO } from '../data/content';
import { ReviewItem } from '../types';
import { Star, MessageSquareQuote, ExternalLink, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="p-8 md:p-14 lg:p-20 border-b border-[#E5E1D8] bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#8E8B82]">
              <MessageSquareQuote className="w-4 h-4 text-[#9CAF88]" />
              <span>Репутация и отзывы клиентов</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C28]">
              Реальные истории преодоления кризисов
            </h2>
          </div>

          {/* Yandex Maps Rating Badge */}
          <div className="bg-[#F9F7F2] border border-[#E5E1D8] p-5 rounded-sm flex items-center gap-5 shadow-2xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#F2C94C] text-xl">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#3E3D39] mt-1">
                Рейтинг {DOCTOR_INFO.yandexRating} из 5.0
              </span>
            </div>
            <div className="h-10 w-px bg-[#E5E1D8]"></div>
            <div>
              <span className="text-xs font-semibold text-[#5A5A54] block">
                Яндекс Карты
              </span>
              <span className="text-[11px] text-[#8E8B82] flex items-center gap-1">
                <span>{DOCTOR_INFO.yandexReviewsCount} проверенных отзыва</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev: ReviewItem) => (
            <div 
              key={rev.id}
              className="bg-white border border-[#E5E1D8] p-8 md:p-10 rounded-sm shadow-2xs flex flex-col justify-between relative hover:border-[#9CAF88] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#F2C94C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-[#E8E4D9] text-[#5A5A54] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    <ShieldCheck className="w-3 h-3 text-[#9CAF88]" />
                    {rev.sessionsCount}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg md:text-xl text-[#2C2C28] mb-3">
                  {rev.caseTitle}
                </h4>

                <p className="text-sm md:text-[15px] text-[#5A5A54] leading-relaxed italic mb-8">
                  “{rev.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F9F7F2] flex items-center justify-between text-xs">
                <span className="font-bold text-[#9CAF88] uppercase tracking-wider">
                  — {rev.name}
                </span>
                <span className="text-[#8E8B82] font-medium">
                  {rev.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reputation Notice */}
        <div className="mt-12 text-center text-xs text-[#8E8B82] max-w-2xl mx-auto">
          Все отзывы представлены на основе реальной обратной связи клиентов после завершения терапии. Из соображений врачебной тайны имена некоторых клиентов изменены по их просьбе.
        </div>
      </div>
    </section>
  );
};
