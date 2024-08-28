modalValidacao = document.getElementById("modal-validacao");
modalValidacao.style.display = "none";

input1 = document.getElementById("nome");
input2 = document.getElementById("senha");

const modal = document.createElement("div");
modal.className = "box-modal";
modal.style.width = "18rem";

const boxTitle = document.createElement("h5");
boxTitle.className = "box-title";

const boxButton = document.createElement("a");
boxButton.className = "box-a";
boxButton.href = "index.html";
boxButton.textContent = "Fechar";

modal.appendChild(boxTitle);
modal.appendChild(boxButton);

modalValidacao.appendChild(modal);

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();

  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };

    localStorage.setItem("usuario", JSON.stringify(user));

    window.location.href = "../Loja/loja.html";

  } else {
    //logica para se o nome e senha forem incorretos
    modalValidacao.style.display = "block";
    modalValidacao.style.background = "rgb(233, 77, 77)"
    boxTitle.textContent = "Credenciais incorretas!";
    input1.style.border = "2px solid red";
    input2.style.border = "2px solid red";
  }
}

function mostrarSenha() {
  if() {
    
  }
  else {

  }
}


