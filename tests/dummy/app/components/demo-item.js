import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

const TEXTS = [
  'one text',
  'another text',
  'try this',
  'what about this?',
  '"Lorem ipsum" is boring',
  'something nice and a bit longer',
  htmlSafe('something with<br>a line break'),
  htmlSafe('something longer with<br>a line break in between'),
  'something nice and a bit longer',
  'this is considerably longer. But the UI should also work with more unexpected content, so here we are!',
];

export default class DemoItem extends Component {
  constructor() {
    super(...arguments);

    let size = this.args.size || 'medium';
    this._generateContent(size);
  }

  _generateContent() {
    this.content = TEXTS[Math.floor(Math.random() * TEXTS.length)];
  }
}
