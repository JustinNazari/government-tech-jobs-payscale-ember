import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: "http://sectorsalaries.herokuapp.com",
  namespace: "api/v1",
  pathForType: function(type) {
    let path = Ember.String.underscore(type)
    return Ember.String.pluralize(path);
  }
});
