const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const upload = require('../middlewares/uploadMiddleware');

// GET /api/cities – barcha shaharlar ro‘yxati (short info)
router.get('/', cityController.getAllCities);

// GET /api/cities/:id – shaharni id orqali olish (full info)
router.get('/:id', cityController.getCityById);

// POST /api/cities – yangi shahar qo‘shish
router.post(
  '/',
  upload.fields([{
      name: 'mainImage',
      maxCount: 1
    },
    {
      name: 'galleryImages',
      maxCount: 5
    }
  ]),
  cityController.createCity
);

router.post(
  '/',
  upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'galleryImages', maxCount: 5 }
  ]),
  cityController.createCity // ← bu yerda controllerFn emas!
);

// PUT /api/cities/:id – shaharni yangilash
router.put('/:id', cityController.updateCity);

// DELETE /api/cities/:id – shaharni o‘chirish
router.delete('/:id', cityController.deleteCity);

module.exports = router;