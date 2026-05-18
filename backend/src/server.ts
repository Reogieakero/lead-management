import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { login, register } from './controllers/authController.js';
import { getLeads, createLead, updateLead, deleteLead, exportLeadsCSV } from './controllers/leadController.js';
import { authenticateToken, authorizeRoles, type AuthenticatedRequest } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://database:27017/smart_leads';

app.use(cors());
app.use(express.json());

// Database Hook
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Engine Operational Cluster Connected.'))
  .catch((err) => console.error('Database connection error:', err));

// Auth Endpoint Bindings
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

// Full CRUD Lead Endpoint Bindings with Route Protection & RBAC
app.get('/api/leads', authenticateToken, getLeads);
app.post('/api/leads', authenticateToken, createLead);
app.put('/api/leads/:id', authenticateToken, updateLead);
app.delete('/api/leads/:id', authenticateToken, authorizeRoles('Admin'), deleteLead); // Only Admin can delete
app.get('/api/leads/export', authenticateToken, exportLeadsCSV);

// Base System Health Route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', message: 'Smart Leads API Core Platform Active.' });
});

app.listen(PORT, () => {
  console.log(`Server executing securely on port ${PORT}`);
});