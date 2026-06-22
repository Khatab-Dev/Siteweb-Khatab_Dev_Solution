// backend/routes/servicesRoutes.js
const express = require('express');
const servicesController = require('../controllers/servicesController');

const router = express.Router();

// Récupérer tous les services
router.get('/services', servicesController.getAllServices);

// Créer un nouveau service
router.post('/services', servicesController.createService);

module.exports = router;