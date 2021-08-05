import { makeObservable, observable, action } from 'mobx';
import { StreamService } from '../services';

class StreamStore {
  rootStore;

  liveStreams = [];

  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      liveStreams: observable,
      setLiveStreams: action,
    });
  }

  setLiveStreams(streams) {
    this.liveStreams = streams;
  }

  async getLiveStreams() {
    const streams = await StreamService.getLiveStreams();

    if (typeof (streams['live'] !== 'undefined')) {
      this.getStreamsInfo(streams['live']);
    }
  }

  async getStreamsInfo(live_streams) {
    const streams = await StreamService.getStreamsInfo(live_streams);

    this.setLiveStreams(streams);
  }

  async getVideoStream(streamKey) {
   
  }
}

export default StreamStore;
