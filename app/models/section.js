import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  privateSectorJobs: hasMany('private-sector-job'),
  skills: hasMany('skill'),
});
