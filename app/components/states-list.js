import Ember from 'ember';

export default Ember.Component.extend({
  states: Ember.computed("model", function() {
    let model = this.get('model');
    let states = [];
    model.forEach(function(item) {
      if (states.indexOf(item.get('state')) === -1) {
        states.push(item.get('state'))
      }
    })
    return states;
  })
});
