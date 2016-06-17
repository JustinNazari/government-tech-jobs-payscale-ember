import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  privateSectorJobs: hasMany('private-sector-job'),
  chartData: Ember.computed(function() {
    var chart_data = []
    this.get('privateSectorJobs').forEach(function(item){
      let min_hash = {"group": item.get('title'), "value": item.get('min'), "label": "Dark: Minimum Salary"}
      chart_data.push(min_hash);
      let max_hash = {"group": item.get('title'), "value": item.get('max'), "label": "Light: Maximum Salary"}
      chart_data.push(max_hash);
    })
    return chart_data
  }).property('privateSectorJobs.@each.title', 'privateSectorJobs.@each.min', 'privateSectorJobs.@each.max')
});
