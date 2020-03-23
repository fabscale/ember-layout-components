import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | layout', function (hooks) {
  setupApplicationTest(hooks);

  test('dummy app renderes', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
