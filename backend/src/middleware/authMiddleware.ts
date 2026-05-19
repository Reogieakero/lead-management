import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend the Express Request type to include the decoded user information
export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // Read the token directly from the HTTP-Only cookie we set during login
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(401).json({ 
      message: 'Access Denied: No authentication token provided.' 
    });
  }

  try {
    const decoded = jwt.verify(
      token, 
      process.env.JWT_SECRET || 'fallback_secret'
    ) as { id: string; role: string };

    // Attach user payload to the request object for downstream controllers/RBAC
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ 
      message: 'Access Denied: Invalid or expired authentication token.' 
    });
  }
};

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required.' });
    }

    // Check if the user's role (e.g., 'Admin') matches the authorized roles for the endpoint
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Forbidden: Your role (${req.user.role}) does not have access to this resource.` 
      });
    }

    next();
  };
};