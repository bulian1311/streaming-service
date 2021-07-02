import NodeMediaServer from 'node-media-server';
import config from './config/index.js';
import UserModel from './models/user.model.js';

const nms = new NodeMediaServer(config.rtmp_server);

nms.on('prePublish', async (id, StreamPath, args) => {
  try {
    let streamKey = getStreamKeyFromStreamPath(StreamPath);
    const user = await UserModel.findOne({ streamKey });

    console.log('qqqqqqqqqqqqqqqqqqqq----- ', streamKey);

    // if (!user) {
    //   let session = nms.getSession(id);
    //   session.reject();
    // }
  } catch (err) {
    console.log(err.message);
  }

  console.log(
    '[NodeEvent on prePublish]',
    `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`,
  );
});

const getStreamKeyFromStreamPath = (path) => {
  let parts = path.split('/');
  return parts[parts.length];
};

export default nms;
