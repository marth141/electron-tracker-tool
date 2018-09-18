import { observable, action } from 'mobx';
import { create } from 'mobx-persist';
import { TimerStore } from './timer-store';
import TrackerStore from './tracker-store';

class Store {
  constructor() {
    this.uiStore = new UIStore(this);
    this.trackerStore = new TrackerStore();
    this.timerStore = new TimerStore(this);
  }
}

class UIStore {
  @observable
  bgColor = 'yellow';

  constructor(root) {
    this.root = root;
  }

  @action.bound
  changeBgColor() {
    this.bgColor = 'red';
  }
}

const store = new Store();

export default store;

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

hydrate('TrackerStoreMemory', store.trackerStore);
