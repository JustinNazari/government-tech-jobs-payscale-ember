import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('public-sector-jobs');
  this.route('private-sector-jobs');
  this.route('sections');
  this.route('locations');
  this.route('public-sector-special-pay-jobs')
});

export default Router;
