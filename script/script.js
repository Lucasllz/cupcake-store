// Dados simulados dos cupcakes
const cupcakes = [
    { name: "Chocolate", price: 5.00, description: "Delicioso cupcake de chocolate.", image: "images/chocolate.jpg" },
    { name: "Morango", price: 6.00, description: "Cupcake com cobertura de morango.", image: "images/morango.jpg" },
    { name: "Baunilha", price: 4.50, description: "Cupcake clássico de baunilha.", image: "images/baunilha.jpg" }
];

// Função para exibir cupcakes na página
function displayCupcakes() {
    const container = document.getElementById('cupcake-container');
    container.innerHTML = cupcakes.map(c => `
        <div class="card">
            <img src="${c.image}" alt="${c.name}">
            <h2>${c.name}</h2>
            <p>Preço: R$${c.price.toFixed(2)}</p>
            <p>${c.description}</p>
        </div>
    `).join('');
}

// Carregar cupcakes ao carregar a página
document.addEventListener('DOMContentLoaded', displayCupcakes);
