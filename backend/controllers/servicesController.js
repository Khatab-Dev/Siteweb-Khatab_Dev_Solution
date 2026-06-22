// backend/controllers/servicesController.js
const Service = require('../models/Service');

exports.getAllServices = (req, res) => {
    Service.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la récupération des services.' });
        }
        res.json(results);
    });
};

exports.createService = (req, res) => {
    const { title, description, image, price, category } = req.body;
    Service.create(title, description, image, price, category, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la création du service.' });
        }
        res.json({ success: true, message: 'Service créé avec succès !' });
    });
};