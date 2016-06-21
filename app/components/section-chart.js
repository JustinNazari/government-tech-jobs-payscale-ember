import Ember from 'ember';

export default Ember.Component.extend({
privateSectorJobsChartData: Ember.computed("model", function() {
  let model = this.get('model')
  let chart_data = []
  model.get('privateSectorJobs').forEach(function(item){
    let min_hash = {"group": item.get('title'), "value": item.get('min'), "label": "Dark: Minimum Salary"}
    let max_hash = {"group": item.get('title'), "value": item.get('max'), "label": "Light: Maximum Salary"}
    chart_data.push(min_hash)
    chart_data.push(max_hash)
  })
  return chart_data
})
});
