import Ember from 'ember';

export default Ember.Component.extend({
  averageChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      chart_data.pushObjects([
        { "label": "Public Sector", "type": 'money', "value": data.public },
        { "label": "Private Sector", "type": 'money', "value": data.private },
      ]);
    });
    return chart_data;
  })
});
