const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.get('/', plantController.showPlant);

module.exports = router;