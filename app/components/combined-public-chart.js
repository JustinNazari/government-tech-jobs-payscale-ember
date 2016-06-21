import Ember from 'ember';

export default Ember.Component.extend({
  combinedPayChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      chart_data.pushObjects([
        { "label": data.grade, "group": "Grade " + data.grade + ' mininum salary', "value": data.min_base_pay },
        { "label": data.grade, "group": "Grade " + data.grade + ' maximum salary', "value": data.max_base_pay }
      ]);
    });
    return chart_data;
  })
});
