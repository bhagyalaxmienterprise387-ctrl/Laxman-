export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'coupler' | 'threading' | 'cap' | 'reducer' | 'solution';
  features: string[];
}

export interface PriceItem {
  size: string;
  price: number;
}

export interface QuoteItem {
  type: 'coupler' | 'reducer' | 'cap' | 'threading';
  size: string;
  quantity: number;
  rate: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}
