import Preface from './Preface';

class Ao3Document {
  text: string;
  constructor(input: string) {
    this.text = input;
  }

  getPreface(): Preface {
    const prefaceStart = this.text.indexOf('<div id="preface">');
    const prefaceEnd = this.text.indexOf('<div id="chapters"');
    const preface = this.text.substring(prefaceStart, prefaceEnd);
    return new Preface(preface);
  }

  getMainText(): string {
    // grab the <div id="chapters"... portion
    return 'main text'
  }

  getAfterword(): string {
    // grab the <div id="afterword"... portion
    return 'afterword';
  }
}

export default Ao3Document;
