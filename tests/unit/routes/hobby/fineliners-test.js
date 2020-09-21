import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hobby/fineliners', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hobby/fineliners');
    assert.ok(route);
  });
});
