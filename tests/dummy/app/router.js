import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cluster');
  this.route('stack');
  this.route('grid');
  this.route('wrapper');
  this.route('center');
});
