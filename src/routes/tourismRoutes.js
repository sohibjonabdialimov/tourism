const express = require('express');
const router = express.Router();
const tourismController = require('../controllers/tourismController');

// GET /api/tourism – barcha joylar ro‘yxati (short info)
router.get('/', tourismController.getAllTourismPlaces);

// GET /api/tourism/:slug – joyni slug orqali olish (full info)
router.get('/:slug', tourismController.getTourismBySlug);

// POST /api/tourism – yangi joy qo‘shish
router.post('/', tourismController.createTourismPlace);

// PUT /api/tourism/:slug – joyni yangilash
router.put('/:slug', tourismController.updateTourismPlace);

// DELETE /api/tourism/:slug – joyni o‘chirish
router.delete('/:slug', tourismController.deleteTourismPlace);

module.exports = router;
