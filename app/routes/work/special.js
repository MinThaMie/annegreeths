import Route from '@ember/routing/route';

export default class WorkSpecialRoute extends Route {
  model() {
    return this.modelFor('application')["work"].filter(c => c.type === "special");
  }
}
