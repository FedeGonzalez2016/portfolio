document.querySelector('.menu-btn').addEventListener('click', () => {

    document.querySelector('.nav-menu').classList.toggle('show')

});

ScrollReveal().reveal('h1' ,{delay: 500});
ScrollReveal().reveal('.imagen-principal' ,{delay: 700});
ScrollReveal().reveal('.proyectos' ,{delay: 700});
ScrollReveal().reveal('footer' ,{delay: 1000});
