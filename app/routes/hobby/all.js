import Route from '@ember/routing/route';

export default class HobbyAllRoute extends Route {
  model() {
    return this.modelFor('application')["hobby"];
  }
}
