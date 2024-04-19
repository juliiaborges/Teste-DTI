const express = require('express');
const router = express.Router();
const petshopController = require('../controllers/petshopController');

router.post('/calculate', petshopController.calculateBestOption);

module.exports = router;
