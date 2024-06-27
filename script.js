document.addEventListener('DOMContentLoaded', () => {
    const inputNome = document.getElementById('input_nome');
    const inputPreco = document.getElementById('input_preco');
    const inputImagem = document.getElementById('input_url');
    const form = document.querySelector('.add_produto');
    const containerProdutos = document.querySelector('.container_produtos');

    const produtos = [
        { nome: "Produto 1", preco: 10.99, imagem: "img/stormtrooper.png" },
        { nome: "Produto 2", preco: 19.99, imagem: "img/GameBoy.png" },
    ];

    function renderizarProdutos() {
        containerProdutos.innerHTML = '';
        produtos.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    
                </div>
            `;
            containerProdutos.innerHTML += produtoHTML;
        });
    }

    renderizarProdutos();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const novoProduto = {
            nome: inputNome.value.trim(),
            descricao: "Descrição do novo produto",
            preco: parseFloat(inputPreco.value),
            imagem: inputImagem.value.trim()
        };

        console.log('Novo Produto:', novoProduto);

        
        if (novoProduto.nome && !isNaN(novoProduto.preco) && novoProduto.imagem) {
            produtos.push(novoProduto);
            console.log('Produto adicionado ao array:', produtos);
            renderizarProdutos();

            
            inputNome.value = '';
            inputPreco.value = '';
            inputImagem.value = '';
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
});
