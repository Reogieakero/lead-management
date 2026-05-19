import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
import User from '../models/User.js'; 

export const bootstrapAdmin = async (): Promise<void> => {
  try {
    const userCount = await User.estimatedDocumentCount();

    if (userCount > 0) {
      console.log('Database already initialized. Skipping admin bootstrap.');
      return;
    }

    const adminEmail = process.env.INITIAL_ADMIN_EMAIL;
    const adminPassword = process.env.INITIAL_ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.warn('⚠️ Warning: INITIAL_ADMIN_EMAIL or INITIAL_ADMIN_PASSWORD is missing in backend .env file!');
      return;
    }

    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(adminPassword, salt);

    const defaultAdmin = new User({
      name: 'System Administrator', // Added to satisfy required: true
      email: adminEmail,
      passwordHash: hashedPassword, // Matches your schema field name
      role: 'Admin', 
    });

    await defaultAdmin.save();
    
    console.log(`🚀 System Bootstrapped successfully! Created initial admin: ${adminEmail}`);

  } catch (error) {
    console.error('❌ Failed to bootstrap initial admin user account:', error);
  }
};