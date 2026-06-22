// frontend/assets/js/contact.js
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envoyer les données au backend
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message envoyé avec succès !');
            document.getElementById('contactForm').reset();
        } else {
            alert('Erreur : ' + data.message);
        }
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite lors de l\'envoi du message.');
    });
});