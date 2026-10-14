export interface StatItem {
  number: string;
  label: string;
}

export interface EventItem {
  title: string;
  description: string;
  image: string;
  group: string;
  registration: string;
  date: string;
  time: string;
  venue: string;
}

export interface Volunteer {
  name: string;
  phone: string;
}

export interface VolunteerYearGroup {
  [yearKey: string]: Volunteer[];
}

export interface CompetitionOption {
  value: string;
  label: string;
}

export interface FooterQuickLink {
  label: string;
  href: string;
}

export interface FooterCredit {
  text: string;
  href: string;
}

export interface FooterSocialLinks {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface FooterData {
  institution: string;
  location: string;
  email: string;
  quickLinks: FooterQuickLink[];
  socialLinks: FooterSocialLinks;
  credits: FooterCredit[];
}

export interface EventData {
  name: string;
  year: number | string;
  eventDate: string;
  scheduleDateRange: string;
  registrationUrl: string;
  stats: StatItem[];
  events: EventItem[];
  volunteers: VolunteerYearGroup;
  registration: {
    competitions: CompetitionOption[];
  };
  footer: FooterData;
}
