import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/wrapper', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <Layout::Wrapper>
        template block text
      </Layout::Wrapper>
    `);

    assert.dom(this.element).hasText('template block text');
    assert.dom('.layout-wrapper').exists();
  });

  test('it allows to add HTML attributes', async function(assert) {
    await render(hbs`
      <Layout::Wrapper class="my-class">
        template block text
      </Layout::Wrapper>
    `);

    assert.dom('.layout-wrapper').hasClass('my-class');
  });
});
