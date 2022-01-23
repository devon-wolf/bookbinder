import { singleChapterString } from '../constants/testing/testConstants';
import Ao3Document from './Ao3Document';
import Preface from './Preface';

describe('Ao3 document model', () => {
  it('returns a new instance of the model', () => {
    const actual = new Ao3Document(singleChapterString);
    expect(actual).toBeInstanceOf(Ao3Document);
  });
  it('returns the preface', () => {
    const testDoc = new Ao3Document(singleChapterString);
    const actual = testDoc.getPreface();
    expect(actual).toBeInstanceOf(Preface);
  });
});
