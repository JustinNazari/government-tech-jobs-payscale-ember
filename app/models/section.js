import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  privateSectorJobs: hasMany('private-sector-job'),
  chartData: Ember.computed(function() {
    // let jobs = this.get('privateSectorJobs')
    // var chart_data = [];
    // for (var i = 0; i < jobs.length; i++) {
    //   debugger;
    //   let min_hash = {"group": jobs[i].title, "value": jobs[i].min, "label": "Minimum Salary"}
    //   let max_hash = {"group": jobs[i].title, "value": jobs[i].max, "label": "Maximum Salary"}
    //   chart_data.push(min_hash)
    //   chart_data.push(max_hash)
    // }
    // return chart_data
    var chart_data = []
    this.get('privateSectorJobs').forEach(function(item){
      let min_hash = {"group": item.get('title'), "value": item.get('min'), "label": "Minimum Salary"}
      let max_hash = {"group": item.get('title'), "value": item.get('max'), "label": "Maximum Salary"}
      chart_data.push(min_hash)
      chart_data.push(max_hash)
    })
    return chart_data
  }).property('privateSectorJobs.@each.title', 'privateSectorJobs.@each.min', 'privateSectorJobs.@each.max')
});
