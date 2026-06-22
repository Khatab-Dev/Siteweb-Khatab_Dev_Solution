const express = require('express');
const authController = require('../controllers/authController'); // Importer le contrôleur

const router = express.Router();

// Route pour la connexion
router.post('/login', authController.login);

module.exports = router;