// **** AGREGAR ****

let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
btnAgregarProducto.addEventListener("click", eventoAgregarProducto)

function eventoAgregarProducto (evento) {
    // Previene la recarga de la pagina.
    evento.preventDefault()

    visualCajaIngresoDatos('mostrar')
}


// **** 1 - AGREGAR PRODUCTOS ****

let btnAgregar = document.querySelector("#btn-agregar")
btnAgregar.addEventListener("click", eventoAgregar)

function eventoAgregar (evento) {
    // Previene la recarga de la pagina.
    evento.preventDefault()
    
    let textNombre = document.querySelector("#textNombre").value
    let textDescripcion = document.querySelector("#textDescripcion").value
    let textPrecio = document.querySelector("#textPrecio").value
    let textStock = document.querySelector("#textStock").value

    if (textNombre == "" || textDescripcion == "" || textPrecio == 0 || textStock == 0) {
        sweetAlert('error', 'Opss' ,'Algun dato fue mal ingresado. Intente nuevamente')
    }else{
        cargarProductos(textNombre, textDescripcion, textPrecio, textStock)
        
        //Limpia los inputs
        textNombre = document.querySelector("#textNombre").value = ""
        textDescripcion = document.querySelector("#textDescripcion").value = ""
        textPrecio = document.querySelector("#textPrecio").value = ""
        textStock = document.querySelector("#textStock").value = ""
        
        //Oculta la caja de agregar productos
        visualCajaIngresoDatos('ocultar')
    }

    // Actualiza la lista
    listarProductos(productos, "productos")

    controlBotones()

}

// **** 2 - LISTAR PRODUCTOS ****

let btnListarProductos = document.querySelector("#btn-listarProductos")
btnListarProductos.addEventListener("click", eventoListarProductos)

function eventoListarProductos(evento) {
    evento.preventDefault()

    listarProductos(productos, "productos")
   
    controlBotones()
    
}

// **** 3 - ELIMINAR PRODUCTOS ****

let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
btnEliminarProductos.addEventListener("click", eventoEliminarProductos)

function eventoEliminarProductos(evento) {
    evento.preventDefault()

    let elementoSeleccionado = document.querySelector("#selectorItem").selectedIndex
    
    eliminarProductos(productos, "productos", elementoSeleccionado)

    //Vuelve a listar los productos para que se actualice la lista
    listarProductos(productos, "productos")

    controlBotones()
}


// **** 4 - AGREGAR AL CARRITO ****

let btnAgregarCarrito = document.querySelector("#btn-agregarCarrito")
btnAgregarCarrito.addEventListener("click", eventoAgregarCarrito)

function eventoAgregarCarrito(evento) {
    evento.preventDefault()

    let elementoSeleccionado = document.querySelector("#selectorItem").selectedIndex
    
    agregarAlCarrito(elementoSeleccionado)

    listarProductos(productos, "productos")

    controlBotones()

}

// **** 5 - LISTAR CARRITO ****

let btnlistarCarrito = document.querySelector("#btn-listarCarrito")
btnlistarCarrito.addEventListener("click", eventoListarCarrito)

function eventoListarCarrito(evento) {
    evento.preventDefault()

    listarCarrito()

    controlBotones()

}


// **** 6 - ELIMINAR ITEM CARRITO ****

document.querySelector("#btn-eliminarItemCarrito").addEventListener("click", eventoEliminarItemCarrito)

function eventoEliminarItemCarrito(evento) {
    evento.preventDefault()

    let elementoSeleccionado = document.querySelector("#selectorItem").selectedIndex

    eliminarItemCarrito(elementoSeleccionado)

    controlBotones()

}


// **** 7 - VACIAR CARRITO ****

let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")
btnVaciarCarrito.addEventListener("click", eventoVaciarCarrito)

function eventoVaciarCarrito(evento) {
    evento.preventDefault()
    
    vaciarCarrito()

    //Vuelve a listar los productos para que se actualice la lista
    listarProductos(carrito, "carrito")

    controlBotones()

}