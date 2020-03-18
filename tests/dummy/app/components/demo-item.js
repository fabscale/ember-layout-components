import Component from '@glimmer/component';

const TEXTS = [
  'one text',
  'another text',
  'try this',
  'something nice and a bit longer'
];

export default class DemoItem extends Component {
  constructor() {
    super(...arguments);

    let size = this.args.size || 'medium';
    this._generateContent(size);
  }

  _generateContent(size) {
    this.content = TEXTS[Math.floor(Math.random() * TEXTS.length)];
  }
}
