document.addEventListener("scroll", function() {
    var logo = document.querySelector(".logo_web");
    if (window.scrollY > 50) { // Cambia 50 por el número de píxeles después del cual quieres que el logo se achique
      logo.classList.add("small");
    } else {
      logo.classList.remove("small");
    }
  });

  
  