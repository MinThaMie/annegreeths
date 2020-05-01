import Route from '@ember/routing/route';

export default class WorkAllRoute extends Route {
  model() {
    return this.modelFor('application')["work"];
  }
}
