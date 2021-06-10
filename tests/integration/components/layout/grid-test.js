import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import settled from '@ember/test-helpers/settled';

module('Integration | Component | layout/grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Layout::Grid as |Item|>
        <Item>A</Item>
        <Item>B</Item>
      </Layout::Grid>
    `);

    assert.dom('.layout-grid').exists();
    assert.dom('.layout-grid').doesNotHaveAttribute('style');
    assert.dom('.layout-grid-item').exists({ count: 2 });
    assert.dom('.layout-grid-item:nth-child(1)').hasText('A');
    assert.dom('.layout-grid-item:nth-child(2)').hasText('B');
  });

  test('it allows to add HTML attributes', async function (assert) {
    await render(hbs`
      <Layout::Grid class="my-class" as |Item|>
      <Item class="item-class"></Item>
      </Layout::Grid>
    `);

    assert.dom('.layout-grid').hasClass('my-class');
    assert.dom('.layout-grid-item').hasClass('item-class');
  });

  test('it allows to specify custom sizes', async function (assert) {
    await render(hbs`
      <Layout::Grid @gapSize='123px' @gridSize='45px'>
      </Layout::Grid>
    `);

    assert
      .dom('.layout-grid')
      .hasAttribute('style', '--grid-gap-size: 123px; --grid-size: 45px');
  });

  test('it allows to specify @noGrow', async function (assert) {
    await render(hbs`
      <Layout::Grid @noGrow={{this.noGrow}}>
      </Layout::Grid>
    `);

    assert.dom('.layout-grid').doesNotHaveClass('layout-grid--no-grow');

    this.set('noGrow', true);
    await settled();

    assert.dom('.layout-grid').hasClass('layout-grid--no-grow');
  });

  test('it allows to set @fullWidth on items', async function (assert) {
    await render(hbs`
      <Layout::Grid as |Item|>
        <Item>first</Item>
        <Item @fullWidth={{true}}>second</Item>
      </Layout::Grid>
    `);

    assert.dom('.layout-grid-item').exists({ count: 2 });
    assert
      .dom('.layout-grid-item:nth-child(1)')
      .doesNotHaveClass('layout-grid-item--full-width');
    assert
      .dom('.layout-grid-item:nth-child(2)')
      .hasClass('layout-grid-item--full-width');
  });
});
