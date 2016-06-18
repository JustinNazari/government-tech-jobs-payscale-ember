import Ember from 'ember';

export default Ember.Controller.extend({
  allJobs: Ember.computed(function() {
    return this.store.findAll('public-sector-job')
  })
});
