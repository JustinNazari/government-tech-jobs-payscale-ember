export default Ember.Component.extend({
  gsChartData: Ember.computed(function() {
    let jobs = this.store.findAll('public-sector-job');
    let data = [];
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
