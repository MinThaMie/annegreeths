import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hobby/all', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hobby/all');
    assert.ok(route);
  });
});
