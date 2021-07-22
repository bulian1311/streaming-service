import { makeObservable, observable, action } from "mobx";

class ChatStore {
  messages = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    
    makeObservable(this, {
      messages: observable,
      setMessage: action
    });
  }

  setMessage(message) {
    this.messages.push(message);
  }
}

export default ChatStore;