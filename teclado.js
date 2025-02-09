let posicionX= 0;
let posicionY= 0;
let distancia= 5;
let personaje;
let anchoPantalla = window.innerWidth;
let altoPantalla = window.innerHeight;

function derecha() {
    if(posicionX+distancia <= anchoPantalla){
        posicionX+=distancia;
        personaje.style.left=posicionX+"px";
    }
}
function izquierda() {
    if(posicionX-distancia >= 0){
        posicionX-=distancia;
        personaje.style.left=posicionX+"px";
    }
}
function arriba() {
    if(posicionY-distancia >= 0){
        posicionY-=distancia;
        personaje.style.top=posicionY+"px";
    }
}
function abajo() {
    if(posicionY+distancia <= altoPantalla){
        posicionY+=distancia;
        personaje.style.top=posicionY+"px";
    }
}