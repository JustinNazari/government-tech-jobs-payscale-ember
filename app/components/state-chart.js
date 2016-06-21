import Ember from 'ember';
export default Ember.Component.extend({
combinedChartData: Ember.computed("model", function() {
  let model = this.get('model');
  var chart_data = [];
  model.content.map(function(job) {
    let data = job._data;
    if (1 > 0) {
      chart_data.pushObject(
        {"group": data.city + ", " + data.state, "xValue": data.privateSectorCoefficient, "yValue": data.publicSectorCoefficient}
    )}
  });
  return chart_data;
})

});
