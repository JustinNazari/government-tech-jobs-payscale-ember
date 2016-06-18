import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  grade: attr('number'),
  min: attr('number'),
  max: attr('number')
});
