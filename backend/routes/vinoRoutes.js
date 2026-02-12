import express from 'express';
import { getVinos, createVino, updateVino } from '../controllers/vinoController.js';
import auth from '../middleware/auth.js';
import admin from '../middleware/admin.js';

const router = express.Router();

// Obtener vinos
router.get('/', getVinos);

// Crear vino (solo admin)
router.post('/', auth, admin, createVino);

// Editar vino (solo admin)
router.put('/:id', auth, admin, updateVino);

export default router;
