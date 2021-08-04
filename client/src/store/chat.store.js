import io from 'socket.io-client';
import { makeObservable, observable, action } from 'mobx';

class ChatStore {
  socket = null;

  messages = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.socket = io('localhost:8080', { withCredentials: true });
    console.log('ws__qqqqqqqq');

    makeObservable(this, {
      messages: observable,
      setMessage: action,
    });
  }

  setMessage(username, message) {
    this.messages.push({ username, message });
  }

  sendMessage(username, message) {
    this.socket.emit('message', { username, message });
  }

  listenMessage() {
    this.socket.on('message', ({ username, message }) => {
      this.setMessage(username, message);
    });
  }

  joinRoom(username, room) {
    this.socket.emit('join', { username, room }, () => {});
  }

  disconnectChat() {
    this.socket.emit('disconect');
    this.socket.off();
  }
}

export default ChatStore;
