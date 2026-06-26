import React, { useState, useEffect } from 'react';
import { SERVICES, DOCTOR_INFO } from '../data/content';
import { BookingFormData } from '../types';
import { Calendar, Clock, MapPin, AlertTriangle, CheckCircle2, PhoneCall, ShieldAlert } from 'lucide-react';

interface BookingProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    serviceId: SERVICES[0].title,
    preferredDate: '',
    preferredTime: '11:00',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceId: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Пожалуйста, укажите ваше имя и контактный телефон для связи.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="p-8 md:p-14 lg:p-20 border-b border-[#E5E1D8] bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Logistics & Facility Rules (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#8E8B82]">
                Запись на прием
              </h3>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2C28] leading-tight">
                Забронируйте удобное время консультации
              </h2>
            </div>

            <p className="text-[#5A5A54] text-sm md:text-base leading-relaxed">
              Прием осуществляется очно в нашем кабинете в Краснодаре либо в формате защищенной видеосвязи. Длительность встречи фиксирована: 1.5 часа.
            </p>

            {/* Address & Working Hours Box */}
            <div className="bg-[#FDFBF7] p-6 md:p-8 border border-[#E5E1D8] rounded-sm space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#3E3D39] block">
                    Адрес кабинета в Краснодаре
                  </span>
                  <span className="text-sm text-[#5A5A54] mt-0.5 block">
                    {DOCTOR_INFO.addressFull}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#3E3D39] block">
                    Часы работы центра
                  </span>
                  <span className="text-sm text-[#5A5A54] mt-0.5 block">
                    {DOCTOR_INFO.workingHours} (прием с 09:00 утра)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <PhoneCall className="w-5 h-5 text-[#9CAF88] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#3E3D39] block">
                    Прямая телефонная связь
                  </span>
                  <a href={`tel:${DOCTOR_INFO.phoneRaw}`} className="text-sm font-bold text-[#9CAF88] hover:underline mt-0.5 block">
                    {DOCTOR_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Mandatory Facility Accessibility Notice */}
            <div className="bg-[#E8E4D9]/60 p-6 border-l-3 border-[#A94442] rounded-r-xs space-y-2 text-xs text-[#5A5A54]">
              <div className="flex items-center gap-2 text-[#A94442] font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>Важнейшая информация перед визитом:</span>
              </div>
              <p>
                <strong>Предварительная запись обязательна.</strong> В здании бизнес-центра в данный момент <strong>отсутствует пандус для инвалидных колясок</strong> (кабинет на 3 этаже, лифт ограничен).
              </p>
              <p>
                В целях поддержания санитарного и эмоционального покоя <strong>вход с домашними животными строго запрещен</strong>.
              </p>
            </div>
          </div>

          {/* Interactive Booking Form (Col 6 to 12) */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-8 md:p-12 border border-[#E5E1D8] rounded-sm shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#9CAF88] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2C2C28]">
                  Заявка на прием успешно принята!
                </h3>
                <p className="text-[#5A5A54] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                  Благодарим вас, <strong>{formData.name}</strong>. Администратор центра свяжется с вами по номеру <strong>{formData.phone}</strong> в течение 15 минут для подтверждения точного времени визита или ссылки на онлайн-конференцию.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        serviceId: SERVICES[0].title,
                        preferredDate: '',
                        preferredTime: '11:00',
                        notes: ''
                      });
                    }}
                    className="px-6 py-3 bg-[#E8E4D9] text-[#3E3D39] font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#9CAF88] hover:text-white transition-all cursor-pointer"
                  >
                    Записать еще одного пациента
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E5E1D8] pb-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#8E8B82]">
                    Форма онлайн-бронирования
                  </h3>
                  <p className="text-xs text-[#5A5A54] mt-1">
                    Заполните данные ниже. Оплата производится после консультации (Наличные или СБП).
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 bg-[#A94442]/10 border border-[#A94442] text-[#A94442] rounded text-xs flex items-center gap-2 font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider">
                      Ваше Имя и Фамилия <span className="text-[#A94442]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Например: Иван Иванов"
                      className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39]"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider">
                      Контактный телефон <span className="text-[#A94442]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39]"
                    />
                  </div>
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider">
                    Выберите тип консультации (7,000 ₽ / 1.5 часа)
                  </label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39]"
                  >
                    {SERVICES.map(srv => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title} — {srv.price.toLocaleString()} ₽ ({srv.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#9CAF88]" />
                      <span>Желаемая дата визита</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#9CAF88]" />
                      <span>Примерное время начала</span>
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39]"
                    >
                      <option value="09:00">09:00 — Утренний прием</option>
                      <option value="11:00">11:00 — Утренний прием</option>
                      <option value="13:00">13:00 — Дневной прием</option>
                      <option value="15:00">15:00 — Дневной прием</option>
                      <option value="17:00">17:00 — Вечерний прием</option>
                      <option value="19:00">19:00 — Вечерний прием</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase font-bold text-[#3E3D39] block tracking-wider">
                    Кратко опишите ситуацию или пожелания (необязательно)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Например: Пожелание очной встречи на Московской улице либо онлайн в Zoom..."
                    className="w-full bg-white border border-[#E5E1D8] p-3 text-sm rounded-xs outline-none focus:border-[#9CAF88] transition-colors text-[#3E3D39] resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#3E3D39] text-white py-4 font-bold uppercase text-xs tracking-[0.2em] rounded-sm hover:bg-[#2C2C28] active:scale-[0.99] transition-all shadow-md cursor-pointer"
                  >
                    Подтвердить запись на консультацию
                  </button>
                  <p className="text-[10px] text-center text-[#8E8B82] mt-3 tracking-wide">
                    Нажимая кнопку, вы соглашаетесь с условиями конфиденциальности психологического центра.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
