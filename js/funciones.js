document.getElementById ("ancla_contacto").onclick = function() {
    document.getElementById ("contacto").style.display = "grid";
}

document.getElementById("enviar").onclick = function() {
    let nombre = "null"; let correo = "null" ; let telefono = "null"
    nombre = document.getElementsByName("nombre_empresa").valor;
    correo = document.getElementsByName("correo").valor;
    telefono = document.getElementsByName("telefono").valor;
    if(nombre != "null" && correo != "null" || telefono != "null") {
        document.getElementById("mensaje").textContent = "Sus datos de Contacto fueron eviados correctamente. Me comunicaré por uno de los medios indicados. Gracias."+nombre+correo+telefono;
        document.getElementById("mensaje").style.display = "block"
    }else {
        document.getElementById("mensaje").textContent ="Es necesario completar Nombre o Razón Social y un correo o Teléfono para contactarme. Inténtelo Nuevamente, por favor."+nombre+correo+telefono;
        document.getElementById("mensaje").style.display = "block"
    }
    
}

