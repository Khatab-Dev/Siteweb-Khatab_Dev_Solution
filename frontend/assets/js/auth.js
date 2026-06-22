// Gestion du formulaire de connexion
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envoyer les données au backend
    fetch('/api/login', {
        method: 'POST', // Méthode HTTP
        headers: {
            'Content-Type': 'application/json' // Type de contenu
        },
        body: JSON.stringify({ email, password }) // Données à envoyer
    })
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(data => {
        if (data.success) {
            // Rediriger l'utilisateur après la connexion
            window.location.href = 'dashboard.html';
        } else {
            // Afficher un message d'erreur
            alert('Erreur : ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite lors de la connexion.');
    });
});