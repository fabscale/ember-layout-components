import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | layout-class-if', function(hooks) {
  setupRenderingTest(hooks);

  [
    { value: '123', compareValue: '123', result: true },
    { value: '123', compareValue: '123', result: true },
    { value: '123', compareValue: '123', result: true },
    { value: '123', compareValue: '123', result: true }
  ].forEach((scenario) => {
    test(`it works with value ${scenario.value} and compare value ${scenario.compareValue}`, async function(assert) {
      this.value = scenario.value;
      this.compareValue = scenario.compareValue;

      await render(hbs`{{layout-class-if inputValue '1234' 'true'}}`);

      assert.dom(this.element).hasText(scenario.result ? 'true' : '');
    });
  });
});
