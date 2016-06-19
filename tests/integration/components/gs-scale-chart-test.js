import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gs-scale-chart', 'Integration | Component | gs scale chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gs-scale-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gs-scale-chart}}
      template block text
    {{/gs-scale-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
