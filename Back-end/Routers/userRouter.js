const userController = require('../Controllers/UserController');

const express = require('express'); 
const router = express.Router(); 

router.post('/', userController.addNewUser);

router.get('/', userController.getUsers);

module.exports = router;
