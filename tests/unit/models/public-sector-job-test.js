import { moduleForModel, test } from 'ember-qunit';

moduleForModel('public-sector-job', 'Unit | Model | public sector job', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
