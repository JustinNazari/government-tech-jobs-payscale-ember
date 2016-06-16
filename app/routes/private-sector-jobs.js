import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('private_sector_job')
  }
});
