// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Dados/showroom.json")
    .then((response) => response.json())
    .then((data) => {
      produtos = data;
      const produtosContainer =
        document.getElementById("produtos-container");

      produtos.map((produto, index) => {
        const card = document.createElement("div");
        card.className = "card-produto";
        card.style.width = "18rem";
        card.style.marginRight = "10px";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.className = "card-img";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = produto.descricao;

        const cardPreco = document.createElement("p");
        cardPreco.className = "card-preco";
        cardPreco.textContent = "Preço: $" + produto.preco.toFixed(2);

        const cardQtd = document.createElement("p");
        cardQtd.className = "card-qtd";
        cardQtd.textContent = "Quantidade: " + produto.quantidade;

        const cardStatus = document.createElement("div");
        cardStatus.className = "card-status";
        cardStatus.style.width = "1rem";
        cardStatus.style.height = "1rem";
        cardStatus.style.borderRadius = "100%";
        if(produto.status === true) {
            cardStatus.style.background = "green";
        }
        else {
            cardStatus.style.background = "red";
        };

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPreco);
        cardBody.appendChild(cardQtd);
        cardBody.appendChild(cardStatus);

        card.appendChild(imagem);
        card.appendChild(cardBody);

        produtosContainer.appendChild(card);
      });
    })

    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
});
