import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | giphs/item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:giphs/item');
    assert.ok(route);
  });
});
