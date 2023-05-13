
function showMenu() {
  var x = document.getElementById("nav-list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function animarElementos() {
  var elementosAnimados = document.querySelectorAll('.animar');
  elementosAnimados.forEach(function(elemento) {
    if (estaVisivel(elemento)) {
      elemento.style.opacity = 1;
    }
  });
}