import mongoose from 'mongoose';

export const connectMongo = async () => {
  await mongoose.connect(
    process.env.MONGO_URL || 'mongodb://admin:admin@localhost:27017/admin',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log('Mongo connection success.'),
  );
};

export const sendMessages = (socket) => {
  client.lrange("messages", "0", "-1", (err, data) => {
    data.map(x => {
      const usernameMessage = x.split(":");
      const redisUsername = usernameMessage[0];
      const redisMessage = usernameMessage[1];

      socket.emit("message", {
        username: redisUsername,
        message: redisMessage
      });
    });
  });
}