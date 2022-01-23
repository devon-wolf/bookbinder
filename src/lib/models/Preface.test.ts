import {
  singleChapterProcessedPreface,
  singleChapterRawPreface,
} from '../constants/testing/testConstants';
import Preface from './Preface';

describe('preface model', () => {
  const testPreface = new Preface(singleChapterRawPreface);
  it('returns an instance of the class', () => {
    const actual = testPreface;
    expect(actual).toBeInstanceOf(Preface);
  });

  it('returns the preface with extra spaces and line breaks stripped out', () => {
    const expected = singleChapterProcessedPreface;
    const { text: actual } = testPreface;
    expect(actual).toEqual(expected);
  });

  it('returns frontmatter data', () => {
    const expected = {
      title: 'Sample Title',
      author: 'Sample Author',
      url: '#sample-link',
      published: '2022-01-21',
      wordCount: '1000',
      chapters: null,
      rating: 'Sample Rating',
      warnings: ['Sample Warning'],
      categories: ['Sample Category'],
      fandoms: ['Sample Fandom 1', 'Sample Fandom 2'],
      relationships: ['Sample Relationship'],
      characters: ['Sample Character 1', 'Sample Character 2'],
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      updated: null,
      completed: null,
      summary:
        'Sample text and sample italic text and sample text to the end of a paragraph. Sample text in a new paragraph.',
    };
    const actual = testPreface.getFrontmatter();
    expect(actual).toEqual(expected);
  });
});
