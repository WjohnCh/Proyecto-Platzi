document.addEventListener("DOMContentLoaded", function(){
    const flechaNavbar = document.getElementById('narvar-right-a');
    const btnAbrirCerrar = document.getElementById('menu-navbar-mobile');
    const desktopMenu = document.getElementById("desktop-menu");
    const mobileMenu = document.querySelector(".menu-principal-mobile");
    
    flechaNavbar.addEventListener('click', AbrirDesktop);
    function AbrirDesktop(){
        desktopMenu.classList.toggle("inactive");
    }
    
    btnAbrirCerrar.addEventListener('click', AbrirMobile);
    function AbrirMobile(){
        mobileMenu.classList.toggle("inactive");
    }

});


