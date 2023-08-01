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