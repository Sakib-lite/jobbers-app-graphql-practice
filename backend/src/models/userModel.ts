import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, select: false },
});

const User = mongoose.model('User', userSchema);

export default User;
