import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GridController extends Controller {
  @tracked gridNoGrow;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  gridCode = `<Layout::Grid as |Item|>
  <Item>First item</Item>
  <Item>Second item</Item>
  <Item>Third item</Item>
</Layout::Grid>`;
}
