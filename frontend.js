let contadorPersonajes=0; 

function positionRandom(){
    let personajes=document.querySelectorAll('.personajes'); 

    if (contadorPersonajes>=personajes.length) {
        return;
    }
    
    //let randomIndex=Math.floor(Math.random()*personajes.length); 
    let personajeSeleccionado=personajes[contadorPersonajes];
    //personajeSeleccionado=personajes[contadorPersonajes]; 

    personajeSeleccionado.style.display="block"; 


    let pantallaJuego=document.getElementById('pantallaJuego'); 
    let pantallaWidth=pantallaJuego.clientWidth; 
    let pantallaHeight=pantallaJuego.clientHeight; 

    let personajeWidth = personajeSeleccionado.offsetWidth;  
    let personajeHeight = personajeSeleccionado.offsetHeight; 
    
    let randomX=Math.random()*(pantallaWidth-personajeWidth);
    let randomY=Math.random()*(pantallaHeight-personajeHeight);


    personajeSeleccionado.style.position="absolute";
    personajeSeleccionado.style.left=randomX+'px'; 
    personajeSeleccionado.style.top=randomY+'px';

    contadorPersonajes++;

    console.log(`Personaje ${contadorPersonajes}: X=${randomX}, Y=${randomY}`);

}


function hablar(personajeId){
    let personaje=document.getElementById(personajeId); 

    if (!personaje) {
        return;
    }

    let bocadillo=personaje.querySelector(".bocadillo");

    let fraseAleatoria; 
    let dialogoAleatorio=Math.floor(Math.random()*20)+1;


    switch (personajeId) {
        case "personaje-01":
            switch (dialogoAleatorio) {
                case 1:
                    fraseAleatoria="¡Honor y gloria, mi espada está lista para la batalla!";
                    break;
            
                case 2:
                    fraseAleatoria="No temáis, ¡estoy aquí para protegeros!";
                    break;
            
                case 3:
                    fraseAleatoria="Mi juramento es defender el reino hasta el último aliento."
                    break;
            
                case 4:
                    fraseAleatoria="Solo los valientes se atreven a desafiarme en combate.";
                    break;
            
                case 5:
                    fraseAleatoria="¡Que la luz de la justicia guíe mi espada!";
                    break;
            
                default:
                    fraseAleatoria="No tengo más que decir... Que la espada me guíe. ¡Adiós!";
                    break;
            }
            break; //salir del primer switch
            
        case "personaje-02":
            switch (dialogoAleatorio) {
                case 1:
                    fraseAleatoria="Soy rápido con el revólver, pero mi mirada lo dice todo.";
                    break;
            
                case 2:
                    fraseAleatoria="Soy rápido con el revólver, pero mi mirada lo dice todo.";
                    break;
            
                case 3:
                    fraseAleatoria="La última bala que disparo siempre es la que decide el duelo.";
                    break;
            
                case 4:
                    fraseAleatoria="No busco problemas, pero no dudaré en resolverlos a balazos.";
                    break;
            
                case 5:
                    fraseAleatoria="Soy hombre de pocas palabras, pero mis disparos hablan por mí.";
                    break;
            
                default:
                    fraseAleatoria="No tengo más que decir... que el viento me lleve. ¡Adiós!";
                    break;
            }
            break;
        case "personaje-3": 
            switch (dialogoAleatorio) {
                case 1:
                    fraseAleatoria
                    break;
                case 2:
                    fraseAleatoria
                    break;
                case 3:
                    fraseAleatoria
                    break;
                case 4:
                    fraseAleatoria
                    break;
                case 5:
                    fraseAleatoria
                    break;
            
                default:
                    fraseAleatoria
                    break;
            }
            break; 
        case "personaje-04": 
            switch (dialogoAleatorio) {
                case 1:
                    fraseAleatoria
                    break;
            
                case 2:
                    fraseAleatoria
                    break;
            
                case 3:
                    fraseAleatoria
                    break;
            
                case 4:
                    fraseAleatoria
                    break;
            
                case 5:
                    fraseAleatoria
                    break;
            
                default:
                    fraseAleatoria
                    break;
            }
            break; 
        case "personaje-05": 
            switch (dialogoAleatorio) {
                case 1:
                    fraseAleatoria
                    break;
                case 2:
                    fraseAleatoria
                    break;
                case 3:
                    fraseAleatoria
                    break;
                case 4:
                    fraseAleatoria
                    break;
                case 5:
                    fraseAleatoria
                    break;
            
                default:
                    fraseAleatoria
                    break;
            }
        default:
            break;
    }

    bocadillo.innerHTML=fraseAleatoria; 
    bocadillo.style.display = 'block';


}