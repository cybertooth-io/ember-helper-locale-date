import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('performance', function () {
    this.route('helper');
    this.route('momentjs');
    this.route('helper-with-options');
    this.route('sugar-date');
  });
});

export default Router;
