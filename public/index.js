function showMenu() {
  const menu = document.getElementById("nav-list");
  
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  const links = document. getElementsByClassName('nav-links');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      menu.style.display = "none";
    });
  };
  
};

window.addEventListener("DOMContentLoaded", function(){

const botao = document.getElementById('botao');
botao.addEventListener('click', async function(){
  
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const data = {
    email: email, 
    telefone: telefone,
    mensagem: mensagem,
  }

  fetch('/nodemailer', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    alert("Email enviado com sucesso!");
  })
  .catch(error => {
    console.error("Erro ao enviar email:", error);
    alert("Erro ao enviar mensagem!");
  })

});

})