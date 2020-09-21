import Route from '@ember/routing/route';

export default class GiphsRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('giphs.all'); // Implicitly aborts the on-going transition.
  }
}
