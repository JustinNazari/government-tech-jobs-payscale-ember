import Ember from 'ember';

export default Ember.Component.extend({
JobSkillsChartData: Ember.computed("model", function() {
  let model = this.get('model')
  let skill_coefficient = (model.get('skill_coefficient') - 1)
  let section = model.get('section')
  let chart_data = []
  section.get('privateSectorJobs').forEach(function(item){
    let min_hash = {"group": (item.get('title') + " minimum"), "value": item.get('min'), "label": "Minimum Salary"}
    let min_sup = {"group": (item.get('title') + " minimum"), "value": (item.get('min') * skill_coefficient), "label": "Mininum with Skill Supplement"}
    let max_hash = {"group": (item.get('title') + " maximum"), "value": item.get('max'), "label": "Maximum Salary"}
    let max_sup = {"group": (item.get('title') + " maximum"), "value": (item.get('max') * skill_coefficient), "label": "Maximum with Skill Supplement"}
    chart_data.push(min_hash)
    chart_data.push(min_sup)
    chart_data.push(max_hash)
    chart_data.push(max_sup)
  })
  return chart_data
})
});
