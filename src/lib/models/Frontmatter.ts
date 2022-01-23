import { FrontmatterInput } from '../../types';

class Frontmatter {
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

  constructor(frontmatter: FrontmatterInput) {
    this.title = frontmatter.title;
    this.author = frontmatter.author;
    this.url = frontmatter.url;
    this.published = frontmatter.published;
    this.wordCount = frontmatter.wordCount;
    this.chapters = frontmatter.chapters;
    this.rating = frontmatter.rating;
    this.warnings = frontmatter.warnings;
    this.categories = frontmatter.categories;
    this.fandoms = frontmatter.fandoms;
    this.relationships = frontmatter.relationships;
    this.characters = frontmatter.characters;
    this.tags = frontmatter.tags;
    this.updated = frontmatter.updated;
    this.completed = frontmatter.completed;
    this.summary = frontmatter.summary;
  }
}

export default Frontmatter;
