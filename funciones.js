//Corregir: Genera error cuando tengo dos unidades de stock del producto y trato de eliminar la ultima unidad (en el carrito)

// **** Opcion 1: Agregar Productos ****

function cargarProductos(nombre, descripcion, precio, stock) {

    // Carga el producto
    productos.push(new producto(nombre, descripcion, precio, stock))

}


// **** Opcion 2: listar Productos ****

function listarProductos(lista,tipo) {

    let elementos = document.querySelector("#selectorItem")

    // Vacia el listado a los elementos con clase "opcion"
    let vaciarLista = document.querySelectorAll(".opcion")
    for(const vaciar of vaciarLista) {vaciar.remove()}

    if (lista.length == 0) {
        if (tipo == "productos") {document.querySelector("#leyendaListado").innerText = "LISTADO DE PRODUCTOS"}
        else {document.querySelector("#leyendaListado").innerText = "LISTADO DEL CARRITO"}
                
        return alert('No hay productos cargados')
    }


    
        for (const elemento of lista) {
            let opcion = document.createElement("option")
            
            if (tipo == "productos") {
                opcion.innerText = `${elemento.nombre} | Precio: ${elemento.precio} | Stock: ${elemento.stock} | Descripcion: ${elemento.descripcion}`
                document.querySelector("#leyendaListado").innerText = "LISTADO DE PRODUCTOS"
            }
            else {
                opcion.innerText = `${elemento.nombre} | Precio: ${elemento.precio} | Descripcion: ${elemento.descripcion}` 
                document.querySelector("#leyendaListado").innerText = "LISTADO DEL CARRITO"
            }
            
                opcion.className = "opcion" //Designo la clase para que funcione cuando vacio el listado
            console.log(opcion)
            elementos.appendChild(opcion)
        }

} 


// **** Opcion 3: eliminar Productos. ****

function eliminarProductos(lista,tipo,elementoSeleccionado) {
    
    // Antes de eliminar un producto, primero hay que asegurarse que no haya productos en el carrito
    if (tipo == "productos" && carrito.length != 0) {
        alert('Antes de eliminar un producto de la tienda, tiene que VACIAR el carrito.')
        return
    }
    
    
    if (elementoSeleccionado < 0 || elementoSeleccionado > (lista.length - 1)) {
        alert('Tiene que seleccionar un item')
    }else {
        //Si lo que se elimina es un elemento del carrito, entonces sube el stock de la tienda 
        if (tipo =="carrito") {
            for (let i = 0; i < productos.length; i++) {
                if(productos[i].nombre === lista[elementoSeleccionado].nombre) {
                    productos[i].stock++
                }
            }
        }

        lista.splice(elementoSeleccionado,1)

        alert('Producto ELIMINADO existosamente')
    }
}

// **** Opcion 4: agregar Al Carrito ****

    function agregarAlCarrito (elementoSeleccionado) {
        
        if (elementoSeleccionado < 0) {
            return alert('Tiene que seleccionar un item')
        }
                
        console.log(elementoSeleccionado)
                
        if (isNaN(elementoSeleccionado)) {
            return alert("No selecciono ninguna opción")
        }

        if (productos[elementoSeleccionado].stock > 0) {
            carrito.push(productos[elementoSeleccionado]) // Agrega el producto al carrito
            productos[elementoSeleccionado].stock-- //Disminuye en 1 unidad el stock de los productos
        }else {
            alert("No hay stock del producto")
        }
        
    }

// **** Opcion 5: listar Carrito ****

    function listarCarrito() {
        listarProductos(carrito, "carrito")         
    }

// **** Opcion 6: eliminar Item Carrito ****

function eliminarItemCarrito(elementoSeleccionado) {
    
        if (elementoSeleccionado != -1) {
        eliminarProductos(carrito, "carrito", elementoSeleccionado)

        //Vuelve a listar los productos para que se actualice la lista
        listarProductos(carrito, "carrito")
        }         
}

// **** Opcion 7: vaciar Carrito ****

function vaciarCarrito() {
    
    //Cambia la leyenda a carrito
    document.querySelector("#leyendaListado").innerText = "LISTADO DEL CARRITO"

    carrito.splice(0,carrito.length)
}


// CONTROLADOR DE BOTONES

function controlBotones() {

    
    let btnEliminarProductos = document.querySelector("#btn-eliminarProductos")
    let btnAgregarCarrito = document.querySelector("#btn-agregarCarrito")
    let btnListarCarrito = document.querySelector("#btn-listarCarrito")
    let btnEliminarItemCarrito = document.querySelector("#btn-eliminarItemCarrito")
    let btnVaciarCarrito = document.querySelector("#btn-vaciarCarrito")

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

    console.log(elementoSeleccionado)
    
    if (elementoSeleccionado.length == 0) {
        btnEliminarProductos.disabled = true
        btnAgregarCarrito.disabled = true
    }else {
        btnEliminarProductos.disabled = false
        btnAgregarCarrito.disabled = false
    }
}

function local_Storage(accion) {
    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)}

    switch (accion) {
        case "guardar":
            guardarLocal("productos", JSON.stringify(productos))
            guardarLocal("carrito", JSON.stringify(carrito))
            break
        case "leer":
            let productosAlmacenados = JSON.parse(localStorage.getItem("productos"))
            let carritoAlmacenado = JSON.parse(localStorage.getItem("carrito"))

            productos.length = 0
            carrito.length = 0
            
            for (const item of productosAlmacenados)
                productos.push(new producto(item.nombre, item. descripcion, item.precio, item.stock))
            for (const item of carritoAlmacenado)
                carrito.push(new producto(item.nombre, item. descripcion, item.precio, item.stock))
            break
    }
}
