

// **** 1 - AGREGAR PRODUCTOS ****

let btnAgregarProducto = document.querySelector("#btn-agregarProducto")
btnAgregarProducto.addEventListener("click", eventoAgregarProducto)

function eventoAgregarProducto (e) {
    // Previene la recarga de la pagina.
    e.preventDefault()
    
    let textNombre = document.querySelector("#textNombre").value
    let textDescripcion = document.querySelector("#textDescripcion").value
    let textPrecio = document.querySelector("#textPrecio").value
    let textStock = document.querySelector("#textStock").value

    if (textNombre == "" || textDescripcion == "" || textPrecio == 0 || textStock == 0) {
        alert('Algun dato fue mal ingresado. Intente nuevamente')
    }else{
        cargarProductos(textNombre, textDescripcion, textPrecio, textStock)
        
        //Limpia los inputs
        textNombre = document.querySelector("#textNombre").value = ""
        textDescripcion = document.querySelector("#textDescripcion").value = ""
        textPrecio = document.querySelector("#textPrecio").value = ""
        textStock = document.querySelector("#textStock").value = ""
    
    }

    // Actualiza la lista
    listarProductos(productos, "productos")

    controlBotones()

}

// **** 2 - LISTAR PRODUCTOS ****

let btnListarProductos = document.querySelector("#btn-listarProductos")
btnListarProductos.addEventListener("click", eventoListarProductos)

function eventoListarProductos(e) {
    e.preventDefault()

    listarProductos(productos, "productos")
   
    controlBotones()

    //Guarda en el LocalStorage
    local_Storage("guardar")
    
}

// **** 3 - ELIMINAR PRODUCTOS ****

let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
btnEliminarProductos.addEventListener("click", eventoEliminarProductos)

function eventoEliminarProductos(evento) {
    evento.preventDefault()

    let elementoSeleccionado = document.querySelector("#selectorItem").selectedIndex
    console.log('Elemento seleccionado: ' + elementoSeleccionado)
    

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