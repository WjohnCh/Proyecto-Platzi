document.addEventListener("DOMContentLoaded", function(){

    class Product{
        constructor({nombre, precio}){
            this.nombre = nombre;
            this.precio = precio;            
        }
    }
    
    let productoConjunto = [];
    const divContenedor = document.querySelector('.cards-container');
    const divGeneral = document.querySelector('.product-card');
    
    function MostrarProductos(){
        for (productoUnico of productoConjunto){
            CrearEstructuraObjeto(productoUnico);
        }
    }
    
    function CrearEstructuraObjeto(producto){
        const nuevoProducto = divGeneral.cloneNode(true);
        const precioProducto = nuevoProducto.querySelector('.Precio');
        const descripcionProducto = nuevoProducto.querySelector('.Descripcion');
        nuevoProducto.removeAttribute('style');
        precioProducto.innerText = producto.precio;
        descripcionProducto.innerText = producto.nombre;
        divContenedor.append(nuevoProducto);
        console.log(nuevoProducto);
    }
    function CrearObjeto(nombre, precio){
        const producto = new Product({nombre: nombre, precio: ("$" + precio)});
        productoConjunto.push(producto);
        CrearEstructuraObjeto(producto);
    }
    
    console.log(CrearObjeto("Bike", "35.00"));


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


