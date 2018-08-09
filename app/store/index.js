import { observable, action, runInAction } from 'mobx';
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

class Counter {
  @observable
  count = 0;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @action.bound
  incrementIfOdd() {
    if (this.count % 2 === 0) {
      this.count++;
    }
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => {
      runInAction('async add count', () => {
        this.count++;
      });
    }, 1000);
  }
}

const store = new Store();

export default store;

const hydrate = create({
  storage: localStorage,
  jsonify: true
});

const initialState = {
  accountRecord: [{ serviceNumber: undefined, duration: undefined }]
};

hydrate('accountRecord', store.trackerStore);
