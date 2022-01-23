import { FrontmatterInput } from '../../types';

class Preface {
  text: string;
  constructor(input: string) {
    const excessPadding = /(?<=>)\s+|\s+(?=<)/g;
    const internalLineBreak = /\s{2,}/g;
    this.text = input
      .replace(excessPadding, '')
      .replace(internalLineBreak, ' ');
  }

  getFrontmatter(): FrontmatterInput {
    return {
      title: this.getTitle(),
      author: this.getAuthor(),
      url: this.getUrl(),
      published: this.getPublishedDate(),
      wordCount: this.getWordCount(),
      chapters: this.getChapterLength(),
      rating: this.getRating(),
      warnings: this.getWarnings(),
      categories: this.getCategories(),
      fandoms: this.getFandoms(),
      relationships: this.getRelationships(),
      characters: this.getCharacters(),
      tags: this.getTags(),
      updated: this.getUpdateDate(),
      completed: this.getCompleteDate(),
      summary: this.getSummary(),
    };
  }

  private getTitle(): string {
    const startFlag = '<h1>';
    const endFlag = '</h1>';
    const titleStart = this.text.indexOf(startFlag) + startFlag.length;
    const titleEnd = this.text.indexOf(endFlag);
    const title = this.text.substring(titleStart, titleEnd);
    return title;
  }

  private getAuthor(): string {
    const startFlag = '<a rel="author"';
    const endFlag = '</a>';
    const authorStart =
      this.text.indexOf('>', this.text.indexOf(startFlag)) + 1;
    const authorEnd = this.text.indexOf(endFlag, authorStart);
    const author = this.text.substring(authorStart, authorEnd);
    return author;
  }

  private getUrl(): string {
    const startFlag =
      'Posted originally on the<a href="http://archiveofourown.org/">Archive of Our Own</a>at<a href="';
    const endFlag = '">';
    const urlStart = this.text.indexOf(startFlag) + startFlag.length;
    const urlEnd = this.text.indexOf(endFlag, urlStart);
    const url = this.text.substring(urlStart, urlEnd);
    return url;
  }

  private getPublishedDate(): string {
    const startFlag = 'Published: ';
    const dateTemplate = 'YYYY-MM-DD';
    const pubDateStart = this.text.indexOf(startFlag) + startFlag.length;
    const pubDateEnd = pubDateStart + dateTemplate.length;
    const pubDate = this.text.substring(pubDateStart, pubDateEnd);
    return pubDate;
  }

  private getStatsSection(): string {
    const startFlag = '<dt>Stats:</dt><dd>';
    const endFlag = '</dd>';
    const sectionStart = this.text.indexOf(startFlag) + startFlag.length;
    const sectionEnd = this.text.indexOf(endFlag, sectionStart);
    const statsSection = this.text.substring(sectionStart, sectionEnd);
    return statsSection;
  }

  private getWordCount(): string {
    const statsSection = this.getStatsSection();
    const wordCountMatch = /(?<=(Words:\s))[0-9,]+/g;
    const matchArray = statsSection.match(wordCountMatch);
    if (matchArray) {
      return matchArray[0];
    }
    return 'unknown';
  }

  private getChapterLength(): string | null {
    const chapterLength = '';
    return chapterLength ?? null;
  }

  private getRating(): string | null {
    const rating = '';
    return rating ?? null;
  }

  private getWarnings(): string[] | null {
    const warnings = [''];
    return warnings ?? null;
  }

  private getCategories(): string[] | null {
    const categories = [''];
    return categories ?? null;
  }

  private getFandoms(): string[] | null {
    const fandoms = [''];
    return fandoms ?? null;
  }

  private getRelationships(): string[] | null {
    const relationships = [''];
    return relationships ?? null;
  }

  private getCharacters(): string[] | null {
    const characters = [''];
    return characters ?? null;
  }

  private getTags(): string[] | null {
    const tags = [''];
    return tags ?? null;
  }

  private getUpdateDate(): string | null {
    const updateDate = '';
    return updateDate ?? null;
  }

  private getCompleteDate(): string | null {
    const completeDate = '';
    return completeDate ?? null;
  }

  private getSummary(): string | null {
    const summary = '';
    return summary ?? null;
  }
}

export default Preface;
