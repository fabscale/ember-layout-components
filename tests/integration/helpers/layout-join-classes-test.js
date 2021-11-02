import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | layout-join-classes', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    await render(hbs`{{layout-join-classes 'aa' '' 'bb' false 'cc'}}`);

    assert.strictEqual(this.element.textContent.trim(), 'aa bb cc');
  });
});
