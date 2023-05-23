// Aca estamos configurado la barra que se pliega al scrolear

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');
    var menuHorizontal = document.getElementById('menu-horizontal');


    
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.height = '10%';
      logo.style.width ='1.5rem'
      menuHorizontal.style.height = '40px'

      
    } else {
      navbar.style.height = '20%';
      logo.style.width ='4rem'
      menuHorizontal.style.height = '100%'

      
    }
  });



