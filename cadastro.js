const form = document.getElementById("formCadastro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const preco = document.getElementById("preco").value.trim();
  const categoria = document.getElementById("categoria").value.trim();
  const origem = document.getElementById("origem").value.trim();
  const lote = document.getElementById("lote").value.trim();
  const validade = document.getElementById("validade").value;

  if (nome === "" || preco === "" || categoria === "" || origem === "" || lote === "" || validade === "") {
    alert("Preencha todos os campos corretamente!");
    return;
  }

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.push({ nome, preco, categoria, origem, lote, validade });

  localStorage.setItem("produtos", JSON.stringify(produtos));

  alert("Produto cadastrado!");
  form.reset();

  
  
});

