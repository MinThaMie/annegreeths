import Route from '@ember/routing/route';

export default class WorkItemRoute extends Route {
  model({ card_id }) {
    return this.modelFor('application')["work"].find(c => c.id === parseInt(card_id));
  }
}
