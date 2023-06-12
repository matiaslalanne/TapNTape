// Aca estamos configurado la barra que se pliega al scrolear

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');
    var liNavbar = document.getElementById('liNavbar')
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.height = '10%';
      logo.style.width ='1.5rem'
      nav.style.fontSize = '1rem'
      
    } else {
      navbar.style.height = '20%';
      logo.style.width ='4rem'
      nav.style.fontSize = '1.2rem'

    }
  });


// Aca configurando los botones del carrusel

const carrusel1 = document.getElementById('carrusel1');
const carrusel2 = document.getElementById('carrusel2');
const carrusel3 = document.getElementById('carrusel3');
const botonIzquierdo = document.getElementById('boton-izquierdo1');
const botonDerecho = document.getElementById('boton-derecho1');
const botonIzquierdo1 = document.getElementById('boton-izquierdo2');
const botonDerecho1 = document.getElementById('boton-derecho2');
const botonIzquierdo2 = document.getElementById('boton-izquierdo3');
const botonDerecho2 = document.getElementById('boton-derecho3');

botonIzquierdo.addEventListener('click', scrollIzquierda);
botonDerecho.addEventListener('click', scrollDerecha);
botonIzquierdo1.addEventListener('click', scrollIzquierda);
botonDerecho1.addEventListener('click', scrollDerecha);
botonIzquierdo2.addEventListener('click', scrollIzquierda);
botonDerecho2.addEventListener('click', scrollDerecha);

function scrollIzquierda() {
  carrusel1.scrollLeft -= 500; // Ajusta la cantidad de scroll según tus necesidades
  carrusel2.scrollLeft -= 500; // Ajusta la cantidad de scroll según tus necesidades
  carrusel3.scrollLeft -= 500; // Ajusta la cantidad de scroll según tus necesidades
}

function scrollDerecha() {
  carrusel1.scrollLeft += 500; // Ajusta la cantidad de scroll según tus necesidades
  carrusel2.scrollLeft += 500; // Ajusta la cantidad de scroll según tus necesidades
  carrusel3.scrollLeft += 500; // Ajusta la cantidad de scroll según tus necesidades
}
