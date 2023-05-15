// CARRITO DE COMPRAS


// --------------------- 


//Declaracion de variables Globales


const productos = [
    {nombre: 'TOMATE', descripcion: 'Perita', precio: 25, stock: 5},
    {nombre: 'LECHUGA', descripcion: 'Repollada', precio: 36, stock: 9},
    {nombre: 'MELON', descripcion: 'Verde', precio: 55, stock: 7}
] //array

const carrito = [] //array

local_Storage("leer")
listarProductos(productos, "productos")

controlBotones()


