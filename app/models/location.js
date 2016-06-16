import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  privateSectorCoefficient: attr('number'),
  publicSectorCoefficient: attr('number'),
  city: attr(),
  state: attr(),
  publicSectorSpecialPayJobs: hasMany('public-sector-special-pay-job')
});
