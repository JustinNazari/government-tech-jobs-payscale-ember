import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  grade: attr('number'),
  min_base_pay: attr('number'),
  max_base_pay: attr('number'),
  min_supplement_coefficient: attr('number'),
  max_supplement_coefficient: attr('number'),
  location: belongsTo('location')
});
