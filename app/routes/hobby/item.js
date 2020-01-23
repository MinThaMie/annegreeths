import Route from '@ember/routing/route';

export default class HobbyItemRoute extends Route {
  model({ card_id }) {
    return this.modelFor('application')['hobby'].find(c => c.id === parseInt(card_id));
  }
}
