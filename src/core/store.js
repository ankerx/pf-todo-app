class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
  }
}
class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

export const rootStore = new RootStore();
