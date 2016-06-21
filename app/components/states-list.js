import Ember from 'ember';

export default Ember.Component.extend({
  states: Ember.computed("model", function() {
    let model = this.get('model');
    let statenames = [];
    let states = []
    model.forEach(function(item) {
      if (statenames.indexOf(item.get('state')) === -1) {
        statenames.push(item.get('state'))
        states.pushObject(item)
      }
    })
    return states;
  })
});
