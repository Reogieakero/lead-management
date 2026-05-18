import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { UserRole } from '../types/index.js';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
  };
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Authentication token missing.' });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET || 'super_secret_key_change_me';
    const decoded = jwt.verify(token, secret) as { id: string; role: UserRole };
    
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch {
    res.status(403).json({ message: 'Invalid or expired token.' });
    return;
  }
};

export const authorizeRoles = (...allowedRoles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: 'Access Denied: Insufficient Permissions.' });
      return;
    }
    next();
  };
};