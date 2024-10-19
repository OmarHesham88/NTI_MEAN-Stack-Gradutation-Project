const landingImagesController = require('../Controllers/LandingImagesController');

const express = require('express'); 
const router = express.Router();
router.post('/', landingImagesController.addNewLandingImages);
router.get('/', landingImagesController.getLandingImages);
router.delete('/', landingImagesController.deleteLandingImages);

module.exports = router; 
