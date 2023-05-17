function visualCajaIngresoDatos(accion){
    cajaIngresoDatos = document.querySelector("#ID-cajaIngresoDatos")
    switch (accion) {
        case 'mostrar':
            cajaIngresoDatos.style.display = "initial"
            controlBotones()
            break  
        case 'ocultar': 
            cajaIngresoDatos.style.display = "none"
            controlBotones()  
            break;
        // case 'ocultar':
        //     break
    }

}