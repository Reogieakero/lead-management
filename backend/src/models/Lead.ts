import mongoose, { Schema, type Document } from 'mongoose';
import type { ILead } from '../types/index.js';

export interface ILeadDocument extends Omit<ILead, '_id'>, Document {}

const LeadSchema = new Schema<ILeadDocument>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  status: { type: String, enum: ['New', 'Contacted', 'Qualified', 'Lost'], default: 'New' },
  source: { type: String, enum: ['Website', 'Instagram', 'Referral'], required: true }
}, {
  timestamps: true
});

LeadSchema.index({ name: 'text', email: 'text' });
LeadSchema.index({ status: 1, source: 1 });

export default mongoose.model<ILeadDocument>('Lead', LeadSchema);