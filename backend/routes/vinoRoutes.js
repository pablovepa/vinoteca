import express from 'express';
import { getVinos, createVino } from '../controllers/vinoController.js';


const router = express.Router();

// Obtener vinos
router.get('/', getVinos);

// Crear vino (solo admin)
router.post('/', createVino);

// Editar vino (solo admin)
//router.put('/:id', auth, admin, updateVino);

export default router;
