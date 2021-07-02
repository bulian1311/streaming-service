const NodeMediaServer = require('node-media-server');
const config = require('./config');
const UserModel = require('./models/user.model');

nms = new NodeMediaServer(config.rtmp_server);

nms.on('prePublish', async (id, StreamPath, args) => {
  try {
    let streamKey = getStreamKeyFromStreamPath(StreamPath);
    const user = await UserModel.findOne({streamKey});

    if(!user) {
      let session = nms.getSession(id);
      session.reject();
    }
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
  return parts[parts.length - 1];
};

module.exports = nms;
