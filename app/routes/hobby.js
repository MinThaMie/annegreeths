import Route from '@ember/routing/route';

export default class HobbyRoute extends Route {
  model() {
    return this.modelFor('application')['hobby'];
  }
}
