document.addEventListener("DOMContentLoaded", function(){
    const flechaNavbar = document.getElementById('narvar-right-a');
    const btnAbrirCerrar = document.getElementById('menu-navbar-mobile');
    const desktopMenu = document.getElementById("menu-desktop-desplegable");
    const mobileMenu = document.getElementById("menu-mobile-desplegable");
    const imgCarrito = document.getElementById("carrito-compras")
    const contenedorCarrito = document.getElementById("carrito-compras-desplegable");
    const flechaCarrito = document.getElementById("flechita");


    flechaNavbar.addEventListener('click', AbrirDesktop);
    function AbrirDesktop(){
        desktopMenu.classList.toggle("inactive");
        contenedorCarrito.classList.add("inactive");   
    }
    
    btnAbrirCerrar.addEventListener('click', AbrirMobile);
    function AbrirMobile(){
        mobileMenu.classList.toggle("inactive");
        contenedorCarrito.classList.add("inactive");   
    }
    
    imgCarrito.addEventListener('click', AbrirDetalleCompra);
    function AbrirDetalleCompra(){
        contenedorCarrito.classList.toggle("inactive");
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }

    flechaCarrito.addEventListener('click', AbrirDetalleCompra);

    desktopMenu.addEventListener("click", function(event) {
        if (event.target === desktopMenu) { 
            desktopMenu.classList.add("inactive");
        }
    });

    contenedorCarrito.addEventListener("click", function(event) {
        if (event.target === contenedorCarrito) { 
            contenedorCarrito.classList.add("inactive");
        }
    });

    mobileMenu.addEventListener("click", function(event) {
        if (event.target === mobileMenu) { 
            mobileMenu.classList.add("inactive");
        }
    });

});


