import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.user || mongoose.model('user', userSchema);
