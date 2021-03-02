import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/vertical-stack', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Layout::VerticalStack as |Item|>
        <Item>A</Item>
        <Item>B</Item>
      </Layout::VerticalStack>
    `);

    assert.dom('.layout-vertical-stack').exists();
    assert.dom('.layout-vertical-stack-item').exists({ count: 2 });
    assert.dom('.layout-vertical-stack-item:nth-child(1)').hasText('A');
    assert.dom('.layout-vertical-stack-item:nth-child(2)').hasText('B');
  });

  test('it allows to add HTML attributes', async function (assert) {
    await render(hbs`
      <Layout::VerticalStack class="my-class" as |Item|>
      <Item class="item-class"></Item>
      </Layout::VerticalStack>
    `);

    assert.dom('.layout-vertical-stack').hasClass('my-class');
    assert.dom('.layout-vertical-stack-item').hasClass('item-class');
  });

  module('@gap', function () {
    [
      { gap: 'xsmall', className: 'layout-vertical-stack--xsmall' },
      { gap: 'small', className: 'layout-vertical-stack--small' },
      { gap: 'large', className: 'layout-vertical-stack--large' },
      { gap: 'xlarge', className: 'layout-vertical-stack--xlarge' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.gap}`, async function (assert) {
        this.gap = scenario.gap;

        await render(hbs`
          <Layout::VerticalStack @gap={{this.gap}}>
          </Layout::VerticalStack>
        `);

        assert.dom('.layout-vertical-stack').hasClass(scenario.className);
      });
    });
  });

  module('@withSeparator', function () {
    [
      {
        withSeparator: true,
        className: 'layout-vertical-stack--with-separator',
      },
    ].forEach((scenario) => {
      test(`it works with ${scenario.withSeparator}`, async function (assert) {
        this.withSeparator = scenario.withSeparator;

        await render(hbs`
          <Layout::VerticalStack @withSeparator={{this.withSeparator}}>
          </Layout::VerticalStack>
        `);

        assert.dom('.layout-vertical-stack').hasClass(scenario.className);
      });
    });
  });
});
