import Frontmatter from './Frontmatter';

describe('frontmatter model', () => {
  it('returns a new instance of the class', () => {
    const testFrontmatter = {
      title: 'A Very Real Work',
      author: 'TestAuthor',
      url: 'url.com',
      published: '2022-01-22',
      wordCount: '1000',
      chapters: '1/1',
      rating: 'General',
      warnings: ['Creator Chose Not to Use Archive Warnings'],
      categories: ['Gen'],
      fandoms: ['Original Work'],
      relationships: null,
      characters: null,
      tags: null,
      updated: null,
      completed: null,
      summary: 'This is a summary for this very real work',
    };
    const actual = new Frontmatter(testFrontmatter);
    expect(actual).toBeInstanceOf(Frontmatter);
    expect(actual).toEqual(testFrontmatter);
  });
});
