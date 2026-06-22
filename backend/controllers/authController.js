// Exemple de contrôleur pour gérer la connexion
exports.login = (req, res) => {
    const { email, password } = req.body;

    // Exemple de vérification des identifiants
    if (email === 'test@example.com' && password === 'password123') {
        res.json({ success: true, message: 'Connexion réussie !' });
    } else {
        res.status(401).json({ success: false, message: 'Email ou mot de passe incorrect.' });
    }
};