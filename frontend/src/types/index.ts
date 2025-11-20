export interface InternshipRole {
  id: number;
  title: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface Feature {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}