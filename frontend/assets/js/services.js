// frontend/assets/js/services.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/services')
        .then(response => response.json())
        .then(data => {
            const servicesContainer = document.getElementById('services-container');
            data.forEach(service => {
                const serviceBox = `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img src="${service.image}" class="card-img-top" alt="${service.title}">
                            <div class="card-body">
                                <h5 class="card-title">${service.title}</h5>
                                <p class="card-text">${service.description}</p>
                                <p class="card-text"><strong>Prix : ${service.price} €</strong></p>
                            </div>
                        </div>
                    </div>
                `;
                servicesContainer.innerHTML += serviceBox;
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des services :', error);
        });
});