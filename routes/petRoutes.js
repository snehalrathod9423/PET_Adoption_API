import express from 'express';
import auth from '../middleware/authMiddleware.js';
import { getPets, addPet, updatePet, deletePet } from '../controllers/petController.js';

const router = express.Router();

router.get('/', auth, getPets);
router.post('/', auth, addPet);
router.put('/:id', auth, updatePet);
router.delete('/:id', auth, deletePet);

export default router;
