import mongoose from 'mongoose';

export const connectMongo = async () => {
  await mongoose.connect(
    process.env.MONGO_URL,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log('Mongo connection success.'),
  );
};
