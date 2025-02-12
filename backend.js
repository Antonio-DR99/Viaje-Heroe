var posX = 0;
var posY = 0;
var distancia = 5;
var personajeSeleccionado = "personaje-01"; 
var anchoPantalla = window.innerWidth;
var altoPantalla = window.innerHeight;
var movimientoPersonaje = false;
var tecladoActivo = false;

function iniciarJuego() {
    var pantallaInicio = document.getElementById('pantallaInicio');
    var pantallaJuego = document.getElementById('pantallaJuego');
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';

    personaje = document.getElementById(personajeSeleccionado);
    var anchoMaximo = pantallaJuego.clientWidth - personaje.offsetWidth;
    var altoMaximo = pantallaJuego.clientHeight - personaje.offsetHeight;

    posX = Math.random() * anchoMaximo;
    posY = Math.random() * altoMaximo;

    personaje.style.left = posX + 'px';
    personaje.style.top = posY + 'px';

    escucharTeclado();
}

function seleccionarPersonaje(id) {
    movimientoPersonaje = false; 
    personajeSeleccionado = id;
    var personaje = document.getElementById(personajeSeleccionado);
    posX = personaje.offsetLeft;
    posY = personaje.offsetTop;
    movimientoPersonaje = true; 
}


function derecha() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX + distancia;
    var nuevaY = posY;
    var limiteDerecha = nuevaX + personaje.offsetWidth;

    if (limiteDerecha <= anchoPantalla && !solapamiento(nuevaX, nuevaY)) {
        posX = nuevaX;
        personaje.style.left = posX + "px";
    }
}

function izquierda() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX - distancia;
    var nuevaY = posY;
    var limiteIzquierda = nuevaX;

    if (limiteIzquierda >= 0 && !solapamiento(nuevaX, nuevaY)) {
        posX = nuevaX;
        personaje.style.left = posX + "px";
    }
}

function arriba() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX;
    var nuevaY = posY - distancia;
    var limiteArriba = nuevaY;

    if (limiteArriba >= 0 && !solapamiento(nuevaX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}

function abajo() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX;
    var nuevaY = posY + distancia;
    var limiteAbajo = nuevaY + personaje.offsetHeight;

    if (limiteAbajo <= altoPantalla && !solapamiento(nuevaX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}


function escucharTeclado() { 
    if (!tecladoActivo) {
        document.addEventListener("keydown", moverPersonaje);
        tecladoActivo = true;
}
}

function moverPersonaje(teclaPresionada) {
    if (movimientoPersonaje) {
        if (teclaPresionada.key === "ArrowRight") {
            derecha();
        } else if (teclaPresionada.key === "ArrowLeft") {
            izquierda();
        } else if (teclaPresionada.key === "ArrowUp") {
            arriba();
        } else if (teclaPresionada.key === "ArrowDown") {
            abajo();
        }
    } 
}

function solapamiento(x, y) {
    var personajesMostrados = document.getElementsByClassName("personajes");
    var personajeActual = document.getElementById(personajeSeleccionado);
    var imagenActual = personajeActual.querySelector("img");

    var anchoPersonajeActual = imagenActual.offsetWidth;
    var altoPersonajeActual = imagenActual.offsetHeight;

    for (let i = 0; i < personajesMostrados.length; i++) {
        var personaje = personajesMostrados[i];

        if (personaje.id !== personajeSeleccionado) {  
            var imagen = personaje.querySelector("img");  // 🔥 Usamos la imagen, no el div

            var posXPersonaje = personaje.offsetLeft;
            var posYPersonaje = personaje.offsetTop;
            var anchoPersonaje = imagen.offsetWidth;
            var altoPersonaje = imagen.offsetHeight;

            var limiteIzquierda = posXPersonaje;
            var limiteDerecha = posXPersonaje + anchoPersonaje;
            var limiteArriba = posYPersonaje;
            var limiteAbajo = posYPersonaje + altoPersonaje;

            if ( x < limiteDerecha && x + anchoPersonajeActual > limiteIzquierda && y < limiteAbajo && y + altoPersonajeActual > limiteArriba) {
                return true; 
            }
        }
    } 
    return false;
}
