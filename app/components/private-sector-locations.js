import Ember from 'ember';

export default Ember.Component.extend({
  states: Ember.computed("model", function() {
    let model = this.get('model');
    var chart_data = [];
    model.content.map(function(job) {
      let data = job._data;
      if (data.privateSectorCoefficient){
        chart_data.pushObjects([
          { "label": data.city + ", " + data.state, "type": 'money', "value": data.privateSectorCoefficient },
        ]);
      }
    });

    return chart_data;
  })
});
