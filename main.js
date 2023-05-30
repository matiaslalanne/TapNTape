// Aca estamos configurado la barra que se pliega al scrolear

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');
    var menuHorizontal = document.getElementById('menu-horizontal');
    var tituloNavbar = document.getElementById('title-navbar-a');



    
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.height = '10%';
      logo.style.width ='1.5rem'
      menuHorizontal.style.height = '40px'
      tituloNavbar.style.padding= 'auto'


      
    } else {
      navbar.style.height = '20%';
      logo.style.width ='4rem'
      menuHorizontal.style.height = '100%'
      tituloNavbar.style.padding = 'auto'



      
    }
  });


// Aca configurando los botones del carrusel

const carrusel = document.getElementById('carrusel');
const botonIzquierdo = document.getElementById('boton-izquierdo');
const botonDerecho = document.getElementById('boton-derecho');

botonIzquierdo.addEventListener('click', scrollIzquierda);
botonDerecho.addEventListener('click', scrollDerecha);

function scrollIzquierda() {
  carrusel.scrollLeft -= 500; // Ajusta la cantidad de scroll según tus necesidades
}

function scrollDerecha() {
  carrusel.scrollLeft += 500; // Ajusta la cantidad de scroll según tus necesidades
}
