import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | giphs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:giphs');
    assert.ok(route);
  });
});
