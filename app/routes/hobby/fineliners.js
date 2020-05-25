import Route from '@ember/routing/route';

export default class HobbyFinelinersRoute extends Route {
  model() {
    return this.modelFor('application')["hobby"].filter(c => c.type === "fineliners");
  }
}
