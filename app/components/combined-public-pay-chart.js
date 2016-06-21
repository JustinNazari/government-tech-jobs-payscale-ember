import Ember from 'ember';

export default Ember.Component.extend({

  combinedPublicChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    var states = [];
    model.content.map(function(job) {
      let data = job._data;
      chart_data.pushObjects([
        { "label": 'Min', "group": data.min_base_pay + " at grade " + data.grade, "value": data.min_base_pay },
        { "label": 'Min', "group": data.min_base_pay + " at grade " + data.grade, "value": data.min_supplement_coefficient},
        { "label": 'Max', "group": data.max_base_pay + " at grade " + data.grade, "value": data.max_supplement_coefficient},
        { "label": 'Max', "group": data.max_base_pay + " at grade " + data.grade, "value": data.max_base_pay }
      ]);
    })
    return chart_data
  })
});
