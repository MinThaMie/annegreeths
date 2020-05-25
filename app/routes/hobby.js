import Route from '@ember/routing/route';

export default class HobbyRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('hobby.all'); // Implicitly aborts the on-going transition.
  }
}
