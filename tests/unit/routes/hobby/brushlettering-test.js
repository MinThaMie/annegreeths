import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hobby/brushlettering', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hobby/brushlettering');
    assert.ok(route);
  });
});
