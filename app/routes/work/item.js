import Route from '@ember/routing/route';

export default class WorkItemRoute extends Route {
  model({ card_id }) {
    return this.modelFor('application').find(c => c.id === card_id);
  }
}
