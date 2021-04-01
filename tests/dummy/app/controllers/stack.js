import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StackController extends Controller {
  @tracked stackGap;
  @tracked stackWithSeparator;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  stackCode = `<Layout::Stack as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Stack>`;
}
