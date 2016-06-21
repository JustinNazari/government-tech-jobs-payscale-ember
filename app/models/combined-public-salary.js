import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  grade: attr('number'),
  min: attr('number'),
  max: attr('number'),
  city: attr(),
  state: attr(),
  location: belongsTo('location')
});
