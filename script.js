// Base de dados baseada em informações do Globo Rural e Embrapa
const database = [
    {
        titulo: "Segurança Alimentar",
        categoria: "Impacto Social",
        descricao: "A agricultura familiar produz cerca de 70% dos alimentos consumidos no Brasil, sendo a base da nossa nutrição diária.",
        img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Sistemas Agroflorestais",
        categoria: "Produção Sustentável",
        descricao: "A combinação de cultivos com árvores nativas regenera o solo e protege nascentes, conforme as diretrizes de preservação.",
        img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Bioinsumos e Manejo",
        categoria: "Tecnologia Verde",
        descricao: "Uso de defensivos biológicos e adubação orgânica para reduzir a dependência química e manter o equilíbrio ecológico.",
        img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Cooperativismo Familiar",
        categoria: "Economia",
        descricao: "A união em cooperativas permite que pequenos produtores acessem mercados maiores e garantam preços justos.",
        img: "https://images.unsplash.com/photo-1595841696677-5f889ff39188?auto=format&fit=crop&w=600&q=80"
    }
];

function displayCards(items) {
    const grid = document.getElementById('results');
    grid.innerHTML = items.map(item => `
        <article class="card">
            <img src="${item.img}" alt="${item.titulo}">
            <div class="card-body">
                <span class="badge">${item.categoria}</span>
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
            </div>
        </article>
    `).join('');
}

function searchContent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = database.filter(item => 
        item.titulo.toLowerCase().includes(query) || 
        item.descricao.toLowerCase().includes(query) ||
        item.categoria.toLowerCase().includes(query)
    );
    displayCards(filtered);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    displayCards(database);
});
