import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  min: attr('number'),
  max: attr('number'),
  section: belongsTo('section')
});
