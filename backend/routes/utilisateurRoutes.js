// routes/utilisateurRoutes.js
const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Route de test pour vérifier la connexion à la base de données
router.get('/test-db', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de connexion à la base de données.' });
        }
        res.json({ success: true, message: 'Connexion à la base de données réussie !', data: results });
    });
});

module.exports = router;
