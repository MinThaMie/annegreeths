import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('work', function() {
    this.route('item', {
      path: '/:card_id'
    });
    this.route('birthday');
    this.route('all');
    this.route('special');
    this.route('housewarming');
  });
  this.route('hobby', function() {
    this.route('item', {
      path: '/:card_id'
    });
    this.route('all');
    this.route('brushlettering');
    this.route('fineliners');
  });
  this.route('giphs', function() {
    this.route('item', {
      path: '/:card_id'
    });
    this.route('all');
  });
});
