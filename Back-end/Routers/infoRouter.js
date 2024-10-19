const express = require('express');
const infoController = require('../Controllers/infoController');
const router = express.Router();

router.post('/contact', infoController.saveContactDetails);
router.post('/worktime', infoController.saveWorktimeDetails);
router.get('/contact', infoController.getContactDetails);
router.get('/worktime', infoController.getWorktimeDetails);

  

module.exports = router;
