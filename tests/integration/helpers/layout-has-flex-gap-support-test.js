import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | layout-has-flex-gap-support', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(hbs`
    {{#let (layout-has-flex-gap-support) as |hasSupport|}}
      {{hasSupport}}
    {{/let}}`);

    assert.dom(this.element).hasText('true');
  });
});
