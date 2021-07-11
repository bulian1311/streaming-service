import { configure } from "mobx";

import userStore from "./user.store";

configure({ enforceActions: "always" });

class RootStore {
  userStore;

  constructor() {
    this.userStore = new userStore(this);
  }
}

export default RootStore;
