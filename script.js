document.addEventListener("DOMContentLoaded", function(){
    const flechaNavbar = document.getElementById('narvar-right-a')
    flechaNavbar.addEventListener('click', AbrirDesktop);
    function AbrirDesktop(){
        const desktopMenu = document.getElementById("desktop-menu");
        desktopMenu.classList.toggle("inactive");
    }
});


