import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  aboutMe: { type: String, required: true },
  // userImage: { type: , required: true}
});

const UserA = mongoose.model('UserA', userSchema);
