import React from 'react';
import { DOCTOR_INFO } from '../data/content';
import { ShieldCheck, Award, Target, BookOpen, Clock, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-8 md:p-14 lg:p-20 border-b border-[#E5E1D8] bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Bio & Core Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8E4D9] text-[#5A5A54] text-[11px] font-bold uppercase tracking-widest rounded-2xs">
            <Award className="w-4 h-4 text-[#9CAF88]" />
            <span>Подход к психологической помощи</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C28] leading-tight">
            Оскар Сергеевич Рай — клиницист, который работает прямо с корнем проблемы.
          </h2>

          <p className="text-[#5A5A54] text-base md:text-lg leading-relaxed font-normal">
            В сфере современной психологии распространена практика искусственного затягивания терапии на десятки сессий. Подход Оскара Сергеевича кардинально иной: он строится на клинической науке, строгой этике и глубоком уважении к времени и ресурсам клиента.
          </p>

          <div className="bg-white p-6 md:p-8 border border-[#E5E1D8] rounded-sm shadow-2xs space-y-4 my-6">
            <h4 className="font-serif font-bold text-lg text-[#2C2C28] flex items-center gap-2.5">
              <Target className="w-5 h-5 text-[#9CAF88]" />
              <span>Главный принцип: Без «воды» и прикрас</span>
            </h4>
            <p className="text-sm md:text-[15px] text-[#5A5A54] leading-relaxed">
              «Моя задача — не стать вашим вечным слушателем за ваши деньги, а помочь деконструировать кризисную ситуацию, показать внутренние опоры и дать конкретные инструменты саморегуляции уже на первой встрече. Честность и прагматика терапевта исцеляют быстрее, чем годы сочувствующих кивков».
            </p>
          </div>

          {/* 3 Pillars of Approach */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2">
              <div className="w-9 h-9 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#9CAF88]">
                <Clock className="w-5 h-5" />
              </div>
              <h5 className="font-serif font-bold text-sm text-[#2C2C28]">Фокус на скорости</h5>
              <p className="text-xs text-[#5A5A54] leading-snug">
                Ощутимые изменения в мышлении и состоянии достигаются за 1–2 сессии (по 90 минут).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#9CAF88]">
                <BookOpen className="w-5 h-5" />
              </div>
              <h5 className="font-serif font-bold text-sm text-[#2C2C28]">Научный метод</h5>
              <p className="text-xs text-[#5A5A54] leading-snug">
                Только доказательные методы когнитивной и системной психотерапии. Никакой эзотерики.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 bg-[#E8E4D9] rounded-full flex items-center justify-center text-[#9CAF88]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h5 className="font-serif font-bold text-sm text-[#2C2C28]">Нейтралитет</h5>
              <p className="text-xs text-[#5A5A54] leading-snug">
                Абсолютное отсутствие оценочных суждений и критики. Безопасная среда диалога.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Specialist Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="bg-[#FDFBF7] p-8 md:p-10 border border-[#E5E1D8] w-full max-w-lg rounded-sm shadow-sm relative">
            <div className="absolute top-0 right-0 bg-[#9CAF88] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl">
              Стаж 20 лет
            </div>

            {/* Specialist Avatar / Monogram Card */}
            <div className="flex flex-col items-center text-center pb-8 border-b border-[#E5E1D8]">
              <div className="w-28 h-28 bg-[#E8E4D9] border-2 border-[#9CAF88] rounded-full flex items-center justify-center text-[#3E3D39] font-serif italic text-4xl shadow-inner mb-5">
                OR
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2C2C28]">
                {DOCTOR_INFO.fullName}
              </h3>
              <p className="text-xs uppercase font-semibold text-[#8E8B82] tracking-[0.2em] mt-1">
                {DOCTOR_INFO.titleDesc}
              </p>
            </div>

            {/* Credentials Bio List */}
            <ul className="space-y-4 pt-8 text-sm text-[#5A5A54]">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#3E3D39]">20+ лет клинической практики</strong> в сфере индивидуальной и семейной терапии.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#3E3D39]">Более 4000 проведенных консультаций</strong> с подтвержденными положительными отзывами.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#3E3D39]">Официальный прием в Краснодаре:</strong> собственный центр на ул. Московская, 83.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#3E3D39]">Профессиональный этический стандарт:</strong> гарантия тайны исповеди психологу.
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-[#E5E1D8] text-center">
              <span className="text-[11px] text-[#8E8B82] uppercase tracking-wider block">
                Рейтинг доверия пациентов
              </span>
              <div className="text-lg font-bold text-[#9CAF88] mt-1 font-serif">
                ★★★★½ (4.5 из 5.0 на Яндексе)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
