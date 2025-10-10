import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  name: string;
  href: string;
};

export type TeamMember = {
  name: string;
  position: string;
  university: string;
  linkedin: string;
  photoPath: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type DetailedService = {
  title: string;
  icon: LucideIcon;
  details: string[];
}

export type Partner = {
  name: string;
  logoImageId: string;
};

export type Insight = {
  id: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: {
    id:string;
    alt: string;
  };
  content: string; 
};

export type Highlight = {
  title: string;
  desc: string;
};
