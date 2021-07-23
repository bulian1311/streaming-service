import { configure } from 'mobx';

import UserStore from './user.store';
import ChatStore from './chat.store';

configure({ enforceActions: 'always' });

class RootStore {
  userStore;
  chatStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.chatStore = new ChatStore(this);
  }
}

export default RootStore;
