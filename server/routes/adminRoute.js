// routes/adminRoutes.js
import express from 'express';
import { authorizeRoles } from '../middleware/authorize.js';


const router = express.Router();

// Protect this route to be accessed only by admin users
router.get('/Adashboard', authorizeRoles('admin'));

export default router;
