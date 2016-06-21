import { moduleForModel, test } from 'ember-qunit';

moduleForModel('combined-public-salary', 'Unit | Model | combined public salary', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
