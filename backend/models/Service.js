// backend/models/Service.js
const db = require('../config/db');

class Service {
    static getAll(callback) {
        const query = 'SELECT * FROM services';
        db.query(query, callback);
    }

    static create(title, description, image, price, category, callback) {
        const query = 'INSERT INTO services (title, description, image, price, category) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [title, description, image, price, category], callback);
    }
}

module.exports = Service;