import Route from '@ember/routing/route';

export default class WorkBirthdayRoute extends Route {
  model() {
    return this.modelFor('application')["work"].filter(c => c.type === "birthday");
  }
}
