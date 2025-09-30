const tabela = document.getElementById("tabelaProdutos");

function carregarProdutos() {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  tabela.innerHTML = "";

  if (produtos.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td>
          Nenhum produto cadastrado.
        </td>
      </tr>`;
    return;
  }

  produtos.forEach((p, index) => {
    tabela.innerHTML += `
      <tr>
        <td class="px-4 py-2">${p.nome || ""}</td>
        <td class="px-4 py-2">R$ ${p.preco || ""}</td>
        <td class="px-4 py-2">${p.categoria || ""}</td>
        <td class="px-4 py-2">${p.origem || ""}</td>
        <td class="px-4 py-2">${p.lote || ""}</td>
        <td class="px-4 py-2">${p.validade || ""}</td>
        <td class="px-4 py-2 text-center">
          <button onclick="editarProduto(${index})"
            class="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 mr-2">
            Editar
          </button>
          <button onclick="excluirProduto(${index})"
            class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
            Excluir
          </button>
        </td>
      </tr>`;
  });
}

function excluirProduto(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.splice(index, 1);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  carregarProdutos();
}

function editarProduto(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const novoNome = prompt("Novo nome:", produtos[index].nome);
  const novoPreco = prompt("Novo preço:", produtos[index].preco);
  const novaCategoria = prompt("Nova categoria:", produtos[index].categoria);
  const novaOrigem = prompt("Nova origem:", produtos[index].origem);
  const novoLote = prompt("Novo lote:", produtos[index].lote);
  const novaValidade = prompt("Nova validade:", produtos[index].validade);

  if (novoNome && novoPreco && novaCategoria && novaOrigem && novoLote && novaValidade) {
    produtos[index] = {
      nome: novoNome,
      preco: novoPreco,
      categoria: novaCategoria,
      origem: novaOrigem,
      lote: novoLote,
      validade: novaValidade
    };
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarProdutos();
  }
}

carregarProdutos();






