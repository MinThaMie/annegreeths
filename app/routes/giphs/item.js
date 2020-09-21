import Route from '@ember/routing/route';

export default class GiphsItemRoute extends Route {
  model({ card_id }) {
    return this.modelFor('application')['giphs'].find(c => c.id === parseInt(card_id));
  }
}
