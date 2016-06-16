import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: "http://localhost:3000",
  namespace: "api/v1",
  pathForType: function(type) {
    let path = Ember.String.underscore(type)
    return Ember.String.pluralize(path);
  }
});
