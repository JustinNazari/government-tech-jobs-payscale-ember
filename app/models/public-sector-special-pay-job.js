import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  grade: attr('number'),
  min: attr('number'),
  max: attr('number'),
  supplementCoefficient: attr('number'),
  location: belongsTo('location')
});
