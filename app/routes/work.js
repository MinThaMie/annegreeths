import Route from '@ember/routing/route';

export default class WorkRoute extends Route {
  model() {
    return this.modelFor('application')['work'];
  }
}
