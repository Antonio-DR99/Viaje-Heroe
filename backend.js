var posX = 0;
var posY = 0;
var distancia = 5;
var personajeSeleccionado = "personaje-01"; 
var anchoPantalla = window.innerWidth;
var altoPantalla = window.innerHeight;

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


// Elegir un personaje al clicarco

function seleccionarPersonaje(id) {
    personajeSeleccionado = id;
}

function derecha() {
    var personaje = document.getElementById(personajeSeleccionado);
    if (posX + distancia <= anchoPantalla - personaje.offsetWidth) {
        posX += distancia;
        personaje.style.left = posX + "px";
    }
}

function izquierda() {
    var personaje = document.getElementById(personajeSeleccionado);
    if (posX - distancia >= 0) {
        posX -= distancia;
        personaje.style.left = posX + "px";
    }
}

function arriba() {
    var personaje = document.getElementById(personajeSeleccionado);
    if (posY - distancia >= 0) {
        posY -= distancia;
        personaje.style.top = posY + "px";
    }
}

function abajo() {
    var personaje = document.getElementById(personajeSeleccionado);
    if (posY + distancia <= altoPantalla - personaje.offsetHeight) {
        posY += distancia;
        personaje.style.top = posY + "px";
    }
}


// funcion Teclado 


function escucharTeclado() {
    document.addEventListener("keydown", function (teclaPresionada) {
        if (teclaPresionada.key === "ArrowRight") {
            derecha();
        } else if (teclaPresionada.key === "ArrowLeft") {
            izquierda();
        } else if (teclaPresionada.key === "ArrowUp") {
            arriba();
        } else if (teclaPresionada.key === "ArrowDown") {
            abajo();
        }
    });
}


// Dialogos


function hablarMartina() {
    var dialogoMartina = document.getElementById('dialogoMartina');
    if (!dialogoMartina) return;

    var dialogoAleatorio = Math.floor(Math.random() * 5) + 1;

    switch (dialogoAleatorio) {
        case 1:
            dialogoMartina.innerHTML = '¡Deséadme suerte en mi aventura!';
            break;
        case 2:
            dialogoMartina.innerHTML = '¡Volveré pronto, será un gran viaje!';
            break;
        case 3:
            dialogoMartina.innerHTML = '¡Voy protegida con mi perrita Gala!';
            break;
        case 4:
            dialogoMartina.innerHTML = '¡Os quiero mucho familia!';
            break;
        case 5:
            dialogoMartina.innerHTML = '¡Soy una gran aventurera!';
            break;
    }

    dialogoMartina.style.display = 'block';
}
