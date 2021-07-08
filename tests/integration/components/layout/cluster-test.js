import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | layout/cluster', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Layout::Cluster as |Item|>
        <Item>A</Item>
        <Item>B</Item>
      </Layout::Cluster>
    `);

    assert.dom('.layout-cluster').exists();
    assert.dom('.layout-cluster-item').exists({ count: 2 });
    assert.dom('.layout-cluster-item:nth-child(1)').hasText('A');
    assert.dom('.layout-cluster-item:nth-child(2)').hasText('B');
  });

  test('it allows to add HTML attributes', async function (assert) {
    await render(hbs`
      <Layout::Cluster class="my-class" @wrapperClasses='wrapper-class' as |Item|>
      <Item class="item-class"></Item>
      </Layout::Cluster>
    `);

    assert.dom('.layout-cluster-wrapper').hasClass('wrapper-class');
    assert.dom('.layout-cluster').hasClass('my-class');
    assert.dom('.layout-cluster-item').hasClass('item-class');
  });

  test('@float works', async function (assert) {
    await render(hbs`
      <Layout::Cluster as |Item|>
        <Item @float="left">A</Item>
        <Item @float="right">B</Item>
      </Layout::Cluster>
    `);

    assert
      .dom('.layout-cluster-item:nth-child(1)')
      .hasClass('layout-cluster-item--left');
    assert
      .dom('.layout-cluster-item:nth-child(2)')
      .hasClass('layout-cluster-item--right');
  });

  test('@grow works', async function (assert) {
    await render(hbs`
      <Layout::Cluster as |Item|>
        <Item @grow={{true}}>A</Item>
        <Item>B</Item>
      </Layout::Cluster>
    `);

    assert
      .dom('.layout-cluster-item:nth-child(1)')
      .hasClass('layout-cluster-item--grow');
    assert
      .dom('.layout-cluster-item:nth-child(2)')
      .doesNotHaveClass('layout-cluster-item--grow');
  });

  module('@gap', function () {
    [
      { gap: 'none', className: 'layout-cluster--no-gap' },
      { gap: 'xsmall', className: 'layout-cluster--xsmall' },
      { gap: 'small', className: 'layout-cluster--small' },
      { gap: 'large', className: 'layout-cluster--large' },
      { gap: 'xlarge', className: 'layout-cluster--xlarge' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.gap}`, async function (assert) {
        this.gap = scenario.gap;

        await render(hbs`
          <Layout::Cluster @gap={{this.gap}}>
          </Layout::Cluster>
        `);

        assert.dom('.layout-cluster').hasClass(scenario.className);
      });
    });
  });

  module('@gapVertical', function () {
    [
      { gapVertical: 'none', className: 'layout-cluster--vertical-no-gap' },
      { gapVertical: 'xsmall', className: 'layout-cluster--vertical-xsmall' },
      { gapVertical: 'small', className: 'layout-cluster--vertical-small' },
      { gapVertical: 'medium', className: 'layout-cluster--vertical-medium' },
      { gapVertical: 'large', className: 'layout-cluster--vertical-large' },
      { gapVertical: 'xlarge', className: 'layout-cluster--vertical-xlarge' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.gapVertical}`, async function (assert) {
        this.gapVertical = scenario.gapVertical;

        await render(hbs`
          <Layout::Cluster @gapVertical={{this.gapVertical}}>
          </Layout::Cluster>
        `);

        assert.dom('.layout-cluster').hasClass(scenario.className);
      });
    });
  });

  module('@position', function () {
    [
      { position: 'right', className: 'layout-cluster--right' },
      { position: 'spaced', className: 'layout-cluster--spaced' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.position}`, async function (assert) {
        this.position = scenario.position;

        await render(hbs`
          <Layout::Cluster @position={{this.position}}>
          </Layout::Cluster>
        `);

        assert.dom('.layout-cluster').hasClass(scenario.className);
      });
    });
  });

  module('@verticalAlign', function () {
    [
      { verticalAlign: 'top', className: 'layout-cluster--top' },
      { verticalAlign: 'bottom', className: 'layout-cluster--bottom' },
      { verticalAlign: 'stretch', className: 'layout-cluster--stretch' },
    ].forEach((scenario) => {
      test(`it works with ${scenario.verticalAlign}`, async function (assert) {
        this.verticalAlign = scenario.verticalAlign;

        await render(hbs`
          <Layout::Cluster @verticalAlign={{this.verticalAlign}}>
          </Layout::Cluster>
        `);

        assert.dom('.layout-cluster').hasClass(scenario.className);
      });
    });
  });

  module('@fullWidthOnMobile', function () {
    test(`it works with undefined`, async function (assert) {
      this.fullWidthOnMobile = undefined;

      await render(hbs`
        <Layout::Cluster @fullWidthOnMobile={{this.fullWidthOnMobile}}>
        </Layout::Cluster>
      `);

      assert
        .dom('.layout-cluster')
        .doesNotHaveClass('layout-cluster--full-width-on-mobile');
    });

    test(`it works with false`, async function (assert) {
      this.fullWidthOnMobile = false;

      await render(hbs`
        <Layout::Cluster @fullWidthOnMobile={{this.fullWidthOnMobile}}>
        </Layout::Cluster>
      `);

      assert
        .dom('.layout-cluster')
        .doesNotHaveClass('layout-cluster--full-width-on-mobile');
    });

    test(`it works with true`, async function (assert) {
      this.fullWidthOnMobile = true;

      await render(hbs`
        <Layout::Cluster @fullWidthOnMobile={{this.fullWidthOnMobile}}>
        </Layout::Cluster>
      `);

      assert
        .dom('.layout-cluster')
        .hasClass('layout-cluster--full-width-on-mobile');
    });
  });

  module('@noWrap', function () {
    test(`it works with undefined`, async function (assert) {
      this.noWrap = undefined;

      await render(hbs`
        <Layout::Cluster @noWrap={{this.noWrap}}>
        </Layout::Cluster>
      `);

      assert.dom('.layout-cluster').doesNotHaveClass('layout-cluster--no-wrap');
    });

    test(`it works with false`, async function (assert) {
      this.noWrap = false;

      await render(hbs`
        <Layout::Cluster @noWrap={{this.noWrap}}>
        </Layout::Cluster>
      `);

      assert.dom('.layout-cluster').doesNotHaveClass('layout-cluster--no-wrap');
    });

    test(`it works with true`, async function (assert) {
      this.noWrap = true;

      await render(hbs`
        <Layout::Cluster @noWrap={{this.noWrap}}>
        </Layout::Cluster>
      `);

      assert.dom('.layout-cluster').hasClass('layout-cluster--no-wrap');
    });
  });
});
