import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StackController extends Controller {
  @tracked stackGap;
  @tracked stackWithSeparator;
  @tracked stackFullHeight;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  stackCode = `<Layout::Stack as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Stack>`;

  stackCodeBottom = `<Layout::Stack @fullHeight={{true}} as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
  <Item @float="bottom">Fourth item</Item>
</Layout::Stack>`;

  stackCodeCenter = `<Layout::Stack @fullHeight={{true}} as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
  <Item @float="center">Fourth item</Item>
</Layout::Stack>`;

  stackCodeGrow = `<Layout::Stack @fullHeight={{true}} as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
  <Item @grow={{true}}>Fourth item</Item>
</Layout::Stack>`;
}
