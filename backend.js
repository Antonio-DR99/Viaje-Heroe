
var posX = 0;  
var posY = 0;  
var distancia = 5; 
var personajeSeleccionado = "personaje-01";  
var anchoPantalla = window.innerWidth;  
var altoPantalla = window.innerHeight;  
var tecladoActivo = false;  

function iniciarJuego() {
    var pantallaInicio = document.getElementById('pantallaInicio');
    var pantallaJuego = document.getElementById('pantallaJuego');
    var personaje = document.getElementById(personajeSeleccionado);  
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';
    posX = Math.random() * (pantallaJuego.clientWidth - personaje.offsetWidth);
    posY = Math.random() * (pantallaJuego.clientHeight - personaje.offsetHeight);
    personaje.style.left = posX + 'px';
    personaje.style.top = posY + 'px';
    escucharTeclado();
}


function seleccionarPersonaje(id) {
    personajeSeleccionado = id;  
    var personaje = document.getElementById(personajeSeleccionado); 
    posX = personaje.offsetLeft;  
    posY = personaje.offsetTop;  
}



function derecha() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX + distancia;  
    if (nuevaX + personaje.offsetWidth <= anchoPantalla && !solapamiento(nuevaX, posY)) {
        posX = nuevaX; 
        personaje.style.left = posX + "px"; 
    }
}


function izquierda() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX - distancia;  
    if (nuevaX >= 0 && !solapamiento(nuevaX, posY)) {
        posX = nuevaX;
        personaje.style.left = posX + "px";
    }
}


function arriba() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaY = posY - distancia;  
    if (nuevaY >= 0 && !solapamiento(posX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}


function abajo() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaY = posY + distancia;  
    if (nuevaY + personaje.offsetHeight <= altoPantalla && !solapamiento(posX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}


function escucharTeclado() { 
    if (!tecladoActivo) {  
        document.addEventListener("keydown", function(evento) {
            if (evento.key === "ArrowRight") 
                derecha();  
            if (evento.key === "ArrowLeft")
                izquierda(); 
            if (evento.key === "ArrowUp") 
                arriba(); 
            if (evento.key === "ArrowDown") 
                abajo();  
        });
        tecladoActivo = true;  
    }
}



function solapamiento(x, y) {
    var personajes = document.getElementsByClassName("personajes"); 
    var personajeActual = document.getElementById(personajeSeleccionado);  
    var anchoPersonaje = personajeActual.offsetWidth;  
    var altoPersonaje = personajeActual.offsetHeight; 

    for (var i = 0; i < personajes.length; i++) {
        var otroPersonaje = personajes[i];

        if (otroPersonaje.id !== personajeSeleccionado) {  
            var posXPersonaje = otroPersonaje.offsetLeft;  
            var posYPersonaje = otroPersonaje.offsetTop;  
            var anchoOtro = otroPersonaje.offsetWidth;  
            var altoOtro = otroPersonaje.offsetHeight; 

            if (x < posXPersonaje + anchoOtro + 20 && x + anchoPersonaje > posXPersonaje + 20 &&  y < posYPersonaje + altoOtro + 20 && y + altoPersonaje > posYPersonaje + 20) {
                return true;  
            }
        }
    } 
    return false;  
}
