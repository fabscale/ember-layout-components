import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class VerticalStackController extends Controller {
  @tracked verticalStackSize;
  @tracked verticalStackWithSeparator;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  verticalStackCode = `<Layout::VerticalStack as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::VerticalStack>`;
}
