import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('public_sector_special_pay_job')
  }
});
