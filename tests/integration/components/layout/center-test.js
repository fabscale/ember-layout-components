import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/center', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Layout::Center>
        template block text
      </Layout::Center>
    `);

    assert.dom('.layout-center').exists();
  });

  test('it allows to add HTML attributes', async function(assert) {
    await render(hbs`
      <Layout::Center class="my-class">
        template block text
      </Layout::Center>
    `);

    assert.dom(this.element).hasText('template block text');
    assert.dom('.layout-center').hasClass('my-class');
  });
});
