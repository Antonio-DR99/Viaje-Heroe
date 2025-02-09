            
var posX;
var posY;

function iniciarJuego() {
    var pantallaInicio = document.getElementById('pantallaInicio');
    var pantallaJuego = document.getElementById('pantallaJuego');
    pantallaInicio.style.display = 'none';
    pantallaJuego.style.display = 'block';

    var martina = document.getElementById('martinaDiv');
    var anchoMaximo = pantallaJuego.clientWidth - martina.offsetWidth;
    var altoMaximo = pantallaJuego.clientHeight - martina.offsetHeight;


    posX = Math.random() * anchoMaximo;
    posY = Math.random() * altoMaximo;

    martina.style.left = posX + 'px';
    martina.style.top = posY + 'px';
}


function arriba() {
    posY -= 10; 
    actualizarPosicion();
}

function abajo() {
    posY += 10; 
    actualizarPosicion();
}

function izquierda() {
    posX -= 10; 
    actualizarPosicion();
    document.getElementById('martina').src = 'resources/martina1.png'
}

function derecha() {
    posX += 10; 
    actualizarPosicion();
    document.getElementById('martina').src = 'resources/martina.png'
}

function actualizarPosicion() {
    var martina = document.getElementById('martinaDiv');
    martina.style.left = posX + "px";
    martina.style.top = posY + "px";

    dialogoMartina.style.display = 'none';
}

function hablarMartina() {
    var dialogoMartina = document.getElementById('dialogoMartina');
    var dialogoAleatorio = Math.floor(Math.random()*5)+1;

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
        default:
            break;
    }
    dialogoMartina.style.display = 'block';

}