import Ember from 'ember';

export default Ember.Component.extend({
  publicLocalityPayChartData: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      if (data.publicSectorCoefficient){
        chart_data.pushObjects([
          { "label": data.city + ", " + data.state, "type": 'money', "value": data.publicSectorCoefficient },
        ]);
      }
    });

    return chart_data;
  })
});
