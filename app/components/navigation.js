import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class NavigationComponent extends Component {
  @tracked isOpen = false;
  @action
  toggleMenu() {
   this.isOpen = !this.isOpen;
  }
}
