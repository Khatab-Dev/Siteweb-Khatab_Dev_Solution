// config/db.js
const mysql = require('mysql2');
require('dotenv').config(); // Charger les variables d'environnement

// Créer une connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // Adresse du serveur MySQL
    port: process.env.DB_PORT || 3306,       // Port MySQL (par défaut : 3306)
    user: process.env.DB_USER || 'root',     // Nom d'utilisateur MySQL
    password: process.env.DB_PASSWORD || '', // Mot de passe MySQL
    database: process.env.DB_NAME || 'h2o_tech' // Nom de la base de données
});

// Connecter à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});

module.exports = db;