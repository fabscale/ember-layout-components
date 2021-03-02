import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/stack', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Layout::Stack as |Item|>
        <Item>A</Item>
        <Item>B</Item>
      </Layout::Stack>
    `);

    assert.dom('.layout-stack').exists();
    assert.dom('.layout-stack-item').exists({ count: 2 });
    assert.dom('.layout-stack-item:nth-child(1)').hasText('A');
    assert.dom('.layout-stack-item:nth-child(2)').hasText('B');
  });

  test('it allows to add HTML attributes', async function (assert) {
    await render(hbs`
      <Layout::Stack class="my-class" as |Item|>
      <Item class="item-class"></Item>
      </Layout::Stack>
    `);

    assert.dom('.layout-stack').hasClass('my-class');
    assert.dom('.layout-stack-item').hasClass('item-class');
  });

  module('@gap', function () {
    [
      { gap: 'xsmall', className: 'layout-stack--xsmall' },
      { gap: 'small', className: 'layout-stack--small' },
      { gap: 'large', className: 'layout-stack--large' },
      { gap: 'xlarge', className: 'layout-stack--xlarge' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.gap}`, async function (assert) {
        this.gap = scenario.gap;

        await render(hbs`
          <Layout::Stack @gap={{this.gap}}>
          </Layout::Stack>
        `);

        assert.dom('.layout-stack').hasClass(scenario.className);
      });
    });
  });

  module('@withSeparator', function () {
    [
      {
        withSeparator: true,
        className: 'layout-stack--with-separator',
      },
    ].forEach((scenario) => {
      test(`it works with ${scenario.withSeparator}`, async function (assert) {
        this.withSeparator = scenario.withSeparator;

        await render(hbs`
          <Layout::Stack @withSeparator={{this.withSeparator}}>
          </Layout::Stack>
        `);

        assert.dom('.layout-stack').hasClass(scenario.className);
      });
    });
  });
});
