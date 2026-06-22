// frontend/assets/js/shop.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "Agrafeuse",
            category: "librairie",
            price: 15.99,
            image: "../assets/images/Agrafeuse.jpeg",
            description: "Utile et de qualité pour la reorganisation de vos documents."
        },
        {
            id: 2,
            name: "Canon",
            category: "librairie",
            price: 9.99,
            image: "../assets/images/Canon.jpeg",
            description: "Imprssion haute resolution."
        },
        {
            id: 3,
            name: "Agraf",
            category: "librairie",
            price: 4.99,
            image: "../assets/images/Agraf.jpeg",
            description: "Pour la durabilité de vos docuements et une couverture de qualité."
        },
        {
            id: 4,
            name: "PC",
            category: "accessoire",
            price: 1.99,
            image: "../assets/images/PC.jpg",
            description: "Pour une performance et ne capacité averré."
        },
        {
            id: 5,
            name: "Office",
            category: "logiciel",
            price: 0.99,
            image: "../assets/images/Office.png",
            description: "Outil du bouquet Office pour le traitement et analyse des text."
        },
        {
            id: 6,
            name: "Apareil photo",
            category: "Inphographie",
            price: 2.99,
            image: "../assets/images/Apareil_photo.png",
            description: "L'xcellence au premier regard"
        }
    ];

    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // Afficher tous les produits au chargement de la page
    displayProducts(products);

    // Filtrer les produits en fonction de la recherche et de la catégorie
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Vider la grille des produits
        products.forEach(product => {
            const productBox = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Prix : ${product.price} €</strong></p>
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.innerHTML += productBox;
        });
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
            return matchesSearch && matchesCategory;
        });

        displayProducts(filteredProducts);
    }

    // Fonction pour ajouter un produit au panier (à implémenter)
    window.addToCart = function (productId) {
        alert(`Produit ${productId} ajouté au panier !`);
    };
});