export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChapterStat {
  title: string;
  count: number;
}

export interface Phase {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}