import Ember from 'ember';

export default Ember.Controller.extend({
  gsChartData: Ember.computed(function() {
    return this.store.findAll('public-sector-job')
   })
});
