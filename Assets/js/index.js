function ocultar(){
    document.getElementById('div-invisible').style.display = 'block'
}

function cerrar() {
    // 1. Seleccionamos el div padre que queremos ocultar
    const contenedor = document.getElementById('div-invisible');
    
    // 2. Cambiamos su estilo para que desaparezca
    contenedor.style.display = 'none';
}

// 3. Asignamos la función al botón que tiene la clase 'close'
document.querySelector('.close').onclick = cerrarModal;