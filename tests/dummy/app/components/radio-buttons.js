import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';

export default class UiRadioButtons extends Component {
  /*
   * Attributes:
   *  - value
   *  - items
   *  - labelClass
   *  - containerClass
   *  - onChange
   */

  // Properties
  groupId = null;

  constructor() {
    super(...arguments);

    this.groupId = guidFor(this);
  }
}
