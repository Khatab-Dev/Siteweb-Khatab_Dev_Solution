// frontend/assets/js/admin.js
document.getElementById('addServiceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;

    fetch('/api/services', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, image, price, category })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Service ajouté avec succès !');
            document.getElementById('addServiceForm').reset();
        } else {
            alert('Erreur : ' + data.error);
        }
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite lors de l\'ajout du service.');
    });
});