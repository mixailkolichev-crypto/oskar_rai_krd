import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="p-8 md:p-14 lg:p-20 border-b border-[#E5E1D8] bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#8E8B82]">
            <HelpCircle className="w-4 h-4 text-[#9CAF88]" />
            <span>Часто задаваемые вопросы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C28]">
            Что важно знать о терапии
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-white border border-[#E5E1D8] rounded-sm overflow-hidden transition-colors hover:border-[#9CAF88]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left font-serif font-bold text-base md:text-lg text-[#2C2C28] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#9CAF88] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm md:text-[15px] text-[#5A5A54] leading-relaxed border-t border-[#F9F7F2]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
