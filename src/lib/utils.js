import mongoose from 'mongoose';

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    const db = await mongoose.connect(
      process.env.MONGO ||
        'mongodb+srv://rioaldierwanto:7615006rio@cluster0.4qxzuee.mongodb.net/db_talentexpert'
    );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
