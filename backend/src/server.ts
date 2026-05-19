import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { login, register, logout } from './controllers/authController.js';
import { getLeads, createLead, updateLead, deleteLead, exportLeadsCSV } from './controllers/leadController.js';
import { authenticateToken, authorizeRoles } from './middleware/authMiddleware.js';
import { bootstrapAdmin } from './config/bootstrap.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

if (!MONGO_URI) {
  console.error('CRITICAL ERROR: MONGO_URI is missing in your .env file.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  dbName: 'smart_leads'
})
  .then(async () => {
    console.log('MongoDB Engine Operational Cluster Connected.');
    await bootstrapAdmin();
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);

app.get('/api/leads', authenticateToken, getLeads);
app.post('/api/leads', authenticateToken, createLead);
app.put('/api/leads/:id', authenticateToken, updateLead);
app.delete('/api/leads/:id', authenticateToken, authorizeRoles('Admin'), deleteLead);
app.get('/api/leads/export', authenticateToken, exportLeadsCSV);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', message: 'Smart Leads API Core Platform Active.' });
});

app.listen(PORT, () => {
  console.log(`Server executing securely on port ${PORT}`);
});