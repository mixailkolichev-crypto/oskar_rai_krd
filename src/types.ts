export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: number;
  focusPoints: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  caseTitle: string;
  quote: string;
  rating: number;
  sessionsCount: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
