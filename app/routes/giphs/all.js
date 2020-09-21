import Route from '@ember/routing/route';

export default class GiphsAllRoute extends Route {
  model() {
    return this.modelFor('application')["giphs"];
  }
}
