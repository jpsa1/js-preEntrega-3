// CONTROLADOR DE BOTONES

function controlBotones() {
    let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
    let btnListarProductos = document.querySelector("#btn-listarProductos")
    let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
    let btnAgregarCarrito = document.querySelector("#btn-agregarCarrito")
    let btnListarCarrito = document.querySelector("#btn-listarCarrito")
    let btnEliminarItemCarrito = document.querySelector("#btn-eliminarItemCarrito")
    let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")
    let cajaIngresoDatos = document.querySelector("#ID-cajaIngresoDatos")
    
    //
    let elementoSeleccionado = document.querySelectorAll(".opcion")
    
    if (productos.length == 0) {
        btnEliminarProductos.disabled = true
        btnAgregarCarrito.disabled = true
    }else {
        btnEliminarProductos.disabled = false
        btnAgregarCarrito.disabled = false
    }

    if (carrito.length == 0) {
        btnListarCarrito.disabled = true
        btnEliminarItemCarrito.disabled = true
        btnVaciarCarrito.disabled = true
    }else {
        btnListarCarrito.disabled = false
        btnEliminarItemCarrito.disabled = false
        btnVaciarCarrito.disabled = false
    }
    
    if (elementoSeleccionado.length == 0) {
        btnEliminarProductos.disabled = true
        btnAgregarCarrito.disabled = true
    }else {
        btnEliminarProductos.disabled = false
        btnAgregarCarrito.disabled = false
    }

    if (cajaIngresoDatos.style.display === "initial") {
        
        btnAgregarProducto.disabled = true
        btnListarProductos.disabled = true
        btnEliminarProductos.disabled = true
        btnAgregarCarrito.disabled = true
        btnListarCarrito.disabled = true
        btnEliminarItemCarrito.disabled = true
        btnVaciarCarrito.disabled = true
        cajaIngresoDatos.disabled = true
    } else {
        btnAgregarProducto.disabled = false
        btnListarProductos.disabled = false
    }
}