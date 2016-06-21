import Ember from 'ember';

export default Ember.Component.extend({
  juniorPayChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      if (data.grade < 9) {
        chart_data.pushObjects([
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.min), "yValue": data.grade},
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.max), "yValue": data.grade}
        ]);
      }
    });
    return chart_data;
  }),

  midPayChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      if (data.grade < 13 && data.grade > 8) {
        chart_data.pushObjects([
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.min), "yValue": data.grade},
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.max) , "yValue": data.grade}
        ]);
      }
    });
    return chart_data;
  }),

  seniorPayChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      if (data.grade > 12) {
        chart_data.pushObjects([
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.min), "yValue": data.grade},
          { "group": data.city + ", " + data.state, "xValue": Math.round(data.max) , "yValue": data.grade}        ]);
      }
    });
    return chart_data;
  }),

});
