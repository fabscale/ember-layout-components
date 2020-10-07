import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CenterController extends Controller {
  @tracked centerHorizontal;
  @tracked centerVertical;

  @action
  updateProperty(property, value) {
    this[property] = value;
  }

  centerCode = `<Layout::Center>
  <div>center stuff inside</div>
</Layout::Center>`;
}
