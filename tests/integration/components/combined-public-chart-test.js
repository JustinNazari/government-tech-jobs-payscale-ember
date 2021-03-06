import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('combined-public-chart', 'Integration | Component | combined public chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{combined-public-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#combined-public-chart}}
      template block text
    {{/combined-public-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
