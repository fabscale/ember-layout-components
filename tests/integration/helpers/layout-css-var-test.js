import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | layout-css-var', function (hooks) {
  setupRenderingTest(hooks);

  test('it works with empty hash', async function (assert) {
    await render(hbs`{{!-- template-lint-disable  --}} {{layout-css-var}}`);

    assert.dom(this.element).hasText('');
  });

  test('it works with values', async function (assert) {
    await render(
      hbs`{{!-- template-lint-disable  --}} {{layout-css-var my-var='1rem' other-var='100px'}}`
    );

    assert.dom(this.element).hasText('--my-var: 1rem; --other-var: 100px');
  });

  test('it ignores empty values', async function (assert) {
    await render(
      hbs`{{!-- template-lint-disable  --}} {{layout-css-var my-var=null other-var='100px'}}`
    );

    assert.dom(this.element).hasText('--other-var: 100px');
  });
});
