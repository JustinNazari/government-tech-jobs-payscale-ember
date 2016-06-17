import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  privateSectorJobs: hasMany('private-sector-job'),
  skills: hasMany('skill'),

  privateSectorJobsChartData: Ember.computed(function() {
    let chart_data = []
    this.get('privateSectorJobs').forEach(function(item){
      let min_hash = {"group": item.get('title'), "value": item.get('min'), "label": "Minimum Salary"}
      let max_hash = {"group": item.get('title'), "value": item.get('max'), "label": "Maximum Salary"}
      chart_data.push(min_hash)
      chart_data.push(max_hash)
    })
    return chart_data
  }).property('privateSectorJobs.@each.title', 'privateSectorJobs.@each.min', 'privateSectorJobs.@each.max'),

  skillsChartData: Ember.computed(function() {
    let chart_data = []
    this.get('skills').forEach(function(item){
      let skill_hash = {"group": item.get('name'), "value": item.get('skill_coefficient'), "label": "Skill Premium"}
      chart_data.push(skill_hash)
    })
    return chart_data
  }).property('skills.@each.name', 'skills.@each.skill_coefficient')

});
