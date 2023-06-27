window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let input = document.querySelector("#titulo");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "red";
  });
  let estadoSecreto = 0;
  input.addEventListener("keypress", (e) => {
    if (estadoSecreto == 0 && e.key == "s") {
      estadoSecreto = 1;
    } else if (estadoSecreto == 1 && e.key == "e") {
      estadoSecreto = 2;
    } else if (estadoSecreto == 2 && e.key == "c") {
      estadoSecreto = 3;
    } else if (estadoSecreto == 3 && e.key == "r") {
      estadoSecreto = 4;
    } else if (estadoSecreto == 4 && e.key == "e") {
      estadoSecreto = 5;
    } else if (estadoSecreto == 5 && e.key == "t") {
      estadoSecreto = 6;
    } else if (estadoSecreto == 6 && e.key == "o") {
      estadoSecreto = 0;
      alert("secreto magico");
    } else {
      estadoSecreto = 0;
    }
  });
};
