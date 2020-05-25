import Route from '@ember/routing/route';

export default class HobbyBrushletteringRoute extends Route {
  model() {
    return this.modelFor('application')["hobby"].filter(c => c.type === "brushlettering");
  }
}
