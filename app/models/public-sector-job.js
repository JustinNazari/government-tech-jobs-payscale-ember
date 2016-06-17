import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  grade: attr('number'),
  min: attr('number'),
  max: attr('number'),
  allGSChartData: [],

  gsChartData: Ember.computed('grade', 'min', 'max', function() {
    let all_data = this.get('allGSChartData');
    let grade = this.get('grade');
    let min = this.get('min');
    let max = this.get('max')
    let min_hash = {"label": "1: Min", "group": grade, "value": min}
    let max_hash = {"label": "2: Max", "group": grade, "value": max}
    all_data.push(min_hash);
    all_data.push(max_hash);
    return all_data
  })
});
