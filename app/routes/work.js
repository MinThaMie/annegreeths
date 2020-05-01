import Route from '@ember/routing/route';

export default class WorkRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('work.all'); // Implicitly aborts the on-going transition.
  }
}
