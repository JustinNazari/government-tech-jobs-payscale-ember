import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('private-locality-pay-chart', 'Integration | Component | private locality pay chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{private-locality-pay-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#private-locality-pay-chart}}
      template block text
    {{/private-locality-pay-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
