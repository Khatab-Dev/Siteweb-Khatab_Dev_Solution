//Premiere option du code de connexion
/*
// backend/config/db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Remplace par ton utilisateur MySQL
    password: '', // Remplace par ton mot de passe MySQL
    database: 'h2o_tech' // Nom de la base de données
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

module.exports = db;
*/

//Deuxième option du code de connexion

// config/db.js
const mysql = require('mysql2');
require('dotenv').config(); // Charger les variables d'environnement

// Créer une connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST, // Exemple : 'localhost'
    user: process.env.DB_USER, // Exemple : 'root'
    password: process.env.DB_PASSWORD, // Exemple : 'password'
    database: process.env.DB_NAME // Exemple : 'h2o_tech'
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