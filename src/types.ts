export interface FrontmatterInput {
  title: string;
  author: string;
  url: string;
  published: string;
  wordCount: string;
  chapters: string | null;
  rating: string | null;
  warnings: string[] | null;
  categories: string[] | null;
  fandoms: string[] | null;
  relationships: string[] | null;
  characters: string[] | null;
  tags: string[] | null;
  updated: string | null;
  completed: string | null;
  summary: string | null;
}
