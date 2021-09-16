import { configure } from 'mobx';

import UserStore from './user.store';
//import ChatStore from './chat.store';
import StreamStore from './stream.store';

configure({ enforceActions: 'always' });

class RootStore {
  userStore;
  chatStore;
  streamStore;

  constructor() {
    this.userStore = new UserStore(this);
    //this.chatStore = new ChatStore(this);
    this.streamStore = new StreamStore(this);
  }
}

export default RootStore;
