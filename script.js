const dadosAgro = [
    {
        titulo: "Sistemas Agroflorestais",
        descricao: "Integração de árvores com cultivos agrícolas, recuperando o solo e diversificando a renda.",
        imagem: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=500&q=80",
        categoria: "Sustentabilidade"
    },
    {
        titulo: "Cooperativismo Familiar",
        descricao: "A união de pequenos produtores para fortalecer a comercialização e logística no mercado.",
        imagem: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=500&q=80",
        categoria: "Economia"
    },
    {
        titulo: "Agricultura Orgânica",
        descricao: "Produção sem agrotóxicos, priorizando a saúde do consumidor e a biodiversidade local.",
        imagem: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=500&q=80",
        categoria: "Produção"
    }
];

function renderCards(lista) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    lista.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <img src="${item.imagem}" alt="${item.titulo}">
                <div class="card-content">
                    <h3>${item.titulo}</h3>
                    <p>${item.descricao}</p>
                    <br>
                    <small>Categoria: <strong>${item.categoria}</strong></small>
                </div>
            </div>
        `;
    });
}

function searchInfo() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const filtrados = dadosAgro.filter(item => 
        item.titulo.toLowerCase().includes(termo) || 
        item.descricao.toLowerCase().includes(termo)
    );
    renderCards(filtrados);
}

// Carregamento inicial
window.onload = () => renderCards(dadosAgro);
