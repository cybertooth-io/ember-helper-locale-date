import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('performance', function () {
    this.route('helper');
    this.route('momentjs');
    this.route('helper-with-options');
    this.route('sugar-date');
    this.route('ember-intl');
  });

  this.route('performace', function () {
  });
});

export default Router;
