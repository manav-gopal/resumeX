import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface User extends Document {
  email: string;
  password: string;
  name: string;
  // Add other fields as needed
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  // Define other fields and their types
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as User; // Accessing user document context

  return await bcrypt.compare(candidatePassword, user.password);
};

// Ensure the 'User' model doesn't already exist before creating it
export default (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', UserSchema);
