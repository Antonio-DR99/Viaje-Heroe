// 🔹 VARIABLES GLOBALES 🔹
// Estas variables guardan información que se usará en todo el código.

var posX = 0;  // Posición actual en el eje X del personaje
var posY = 0;  // Posición actual en el eje Y del personaje
var distancia = 5;  // Distancia en píxeles que se mueve el personaje en cada paso
var personajeSeleccionado = "personaje-01";  // ID del personaje que el jugador controla
var anchoPantalla = window.innerWidth;  // Obtiene el ancho total de la pantalla
var altoPantalla = window.innerHeight;  // Obtiene el alto total de la pantalla
var tecladoActivo = false;  // Evita que el evento del teclado se active varias veces


// 🔹 FUNCIÓN PARA INICIAR EL JUEGO 🔹
function iniciarJuego() {
    // Obtiene los elementos de la pantalla de inicio y el área de juego
    var pantallaInicio = document.getElementById('pantallaInicio');
    var pantallaJuego = document.getElementById('pantallaJuego');
    var personaje = document.getElementById(personajeSeleccionado);  // Obtiene el personaje actual

    // Oculta la pantalla de inicio y muestra el área de juego
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';

    // Calcula una posición aleatoria dentro del área de juego para el personaje
    posX = Math.random() * (pantallaJuego.clientWidth - personaje.offsetWidth);
    posY = Math.random() * (pantallaJuego.clientHeight - personaje.offsetHeight);

    // Aplica la posición al personaje
    personaje.style.left = posX + 'px';
    personaje.style.top = posY + 'px';

    // Activa la detección del teclado para mover el personaje
    escucharTeclado();
}


// 🔹 FUNCIÓN PARA SELECCIONAR UN PERSONAJE 🔹
function seleccionarPersonaje(id) {
    personajeSeleccionado = id;  // Guarda el nuevo personaje seleccionado
    var personaje = document.getElementById(personajeSeleccionado);  // Obtiene el nuevo personaje
    posX = personaje.offsetLeft;  // Guarda su posición actual en X
    posY = personaje.offsetTop;  // Guarda su posición actual en Y
}


// 🔹 FUNCIONES DE MOVIMIENTO 🔹
// Cada función mueve el personaje en una dirección diferente y verifica colisiones.

// Mover a la derecha ➡️
function derecha() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX + distancia;  // Calcula la nueva posición en X

    // Verifica que no se salga de la pantalla y que no choque con otro personaje
    if (nuevaX + personaje.offsetWidth <= anchoPantalla && !solapamiento(nuevaX, posY)) {
        posX = nuevaX;  // Actualiza la posición X
        personaje.style.left = posX + "px";  // Aplica el movimiento
    }
}

// Mover a la izquierda ⬅️
function izquierda() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaX = posX - distancia;  // Calcula la nueva posición en X

    if (nuevaX >= 0 && !solapamiento(nuevaX, posY)) {
        posX = nuevaX;
        personaje.style.left = posX + "px";
    }
}

// Mover arriba ⬆️
function arriba() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaY = posY - distancia;  // Calcula la nueva posición en Y

    if (nuevaY >= 0 && !solapamiento(posX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}

// Mover abajo ⬇️
function abajo() {
    var personaje = document.getElementById(personajeSeleccionado);
    var nuevaY = posY + distancia;  // Calcula la nueva posición en Y

    if (nuevaY + personaje.offsetHeight <= altoPantalla && !solapamiento(posX, nuevaY)) {
        posY = nuevaY;
        personaje.style.top = posY + "px";
    }
}


// 🔹 FUNCIÓN PARA ESCUCHAR EL TECLADO 🔹
function escucharTeclado() { 
    if (!tecladoActivo) {  // Evita que el evento de teclado se active varias veces
        document.addEventListener("keydown", function(evento) {
            // Dependiendo de la tecla presionada, mueve el personaje en la dirección correcta
            if (evento.key === "ArrowRight") derecha();  // Flecha derecha ➡️
            if (evento.key === "ArrowLeft") izquierda();  // Flecha izquierda ⬅️
            if (evento.key === "ArrowUp") arriba();  // Flecha arriba ⬆️
            if (evento.key === "ArrowDown") abajo();  // Flecha abajo ⬇️
        });
        tecladoActivo = true;  // Marca que el teclado ya está activo
    }
}


// 🔹 FUNCIÓN PARA DETECTAR SOLAPAMIENTO (COLISIÓN ENTRE PERSONAJES) 🔹
function solapamiento(x, y) {
    var personajes = document.getElementsByClassName("personajes");  // Obtiene todos los personajes en pantalla
    var personajeActual = document.getElementById(personajeSeleccionado);  // Obtiene el personaje que se está moviendo
    var anchoPersonaje = personajeActual.offsetWidth;  // Ancho del personaje actual
    var altoPersonaje = personajeActual.offsetHeight;  // Alto del personaje actual

    // Recorre todos los personajes para verificar si hay colisión
    for (var i = 0; i < personajes.length; i++) {
        var otroPersonaje = personajes[i];

        if (otroPersonaje.id !== personajeSeleccionado) {  // Evita compararse con sí mismo
            var posXPersonaje = otroPersonaje.offsetLeft;  // Posición X del otro personaje
            var posYPersonaje = otroPersonaje.offsetTop;  // Posición Y del otro personaje
            var anchoOtro = otroPersonaje.offsetWidth;  // Ancho del otro personaje
            var altoOtro = otroPersonaje.offsetHeight;  // Alto del otro personaje

            // Verifica si hay solapamiento (colisión) con el otro personaje
            if (x < posXPersonaje + anchoOtro && 
                x + anchoPersonaje > posXPersonaje &&
                y < posYPersonaje + altoOtro &&
                y + altoPersonaje > posYPersonaje) {
                return true;  // Devuelve `true` si hay colisión
            }
        }
    } 
    return false;  // Si no hay colisión, devuelve `false`
}
