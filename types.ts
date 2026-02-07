import { LucideIcon } from "lucide-react";

export interface Webinar {
  id: number;
  title: string;
  date: string;
  description: string;
  topics: string[];
  caseStudy: string;
  icon: LucideIcon;
}

export interface Tool {
  name: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface MentorDimension {
  title: string;
  description: string;
  icon: LucideIcon;
}