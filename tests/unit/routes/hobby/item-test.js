import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hobby/item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hobby/item');
    assert.ok(route);
  });
});
