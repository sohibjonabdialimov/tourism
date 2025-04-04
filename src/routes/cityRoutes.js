const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const upload = require('../middlewares/uploadMiddleware');


router.get('/', cityController.getAllCities);


router.get('/:id', cityController.getCityById);


router.post(
  '/',
  upload.fields([{
      name: 'mainImage',
      maxCount: 1
    },
    {
      name: 'images',
      maxCount: 5
    }
  ]),
  cityController.createCity
);



router.put('/:id', cityController.updateCity);

router.delete('/:id', cityController.deleteCity);

module.exports = router;