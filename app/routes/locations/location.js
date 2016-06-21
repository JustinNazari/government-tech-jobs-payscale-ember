import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('location', { filter: { city: "Hartford" } })
  }
});
