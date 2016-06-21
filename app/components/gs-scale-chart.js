import Ember from 'ember';

export default Ember.Component.extend({
  gsChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      chart_data.pushObjects([
        { "label": 'Dark - Mininum', "group": "GS " + data.grade, "value": data.min },
        { "label": 'Light - Maximum', "group": "GS " + data.grade, "value": data.max }
      ]);
    });
    return chart_data;
  })
});
