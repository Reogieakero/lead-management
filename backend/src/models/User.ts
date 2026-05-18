import mongoose, { Schema, type Document } from 'mongoose';
import bcryptjs from 'bcryptjs';
import type { IUser } from '../types/index.js';

export interface IUserDocument extends Omit<IUser, '_id'>, Document {
  passwordHash: string;
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema<IUserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Sales User'], default: 'Sales User' }
}, {
  timestamps: true
});

UserSchema.methods.comparePassword = async function(password: string): Promise<boolean> {
  return bcryptjs.compare(password, this.passwordHash);
};

export default mongoose.model<IUserDocument>('User', UserSchema);