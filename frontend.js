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
