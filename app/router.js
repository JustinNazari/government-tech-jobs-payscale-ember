import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('public-sector-jobs');
  this.route('sections', function() {
    this.route('section', {path: ":section_id"}, function() {
      this.route('private-sector-jobs'),
      this.route('skills');
    });
  });
  this.route('locations', function() {
    this.route('location', {path: ":location_id"});
  });
  this.route('public-sector-special-pay-jobs')
  this.route('combined-public-salaries');
});

export default Router;


// , function(){
//   this.route('private-sector-jobs');
// });
