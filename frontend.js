function positionRandom(){
    let personajes=document.querySelectorAll('.personajes'); 

    
    let randomIndex=Math.floor(Math.random()*personajes.length); 
    let personajeSeleccionado=personajes[randomIndex]; 

    personajeSeleccionado.style.display="block"; 


    let pantallaJuego=document.getElementById('pantallaJuego'); 
    let pantallaWidth=pantallaJuego.clientWidth; 
    let pantallaHeight=pantallaJuego.clientHeight; 

    let personajeWidth= personajeSeleccionado.clientWidth;  
    let personajeHeight= personajeSeleccionado.clientHeight;
    
    let randomX=Math.random()*(pantallaWidth-personajeWidth);
    let randomY=Math.random()*(pantallaHeight-personajeHeight);


    personajeSeleccionado.style.position="absolute";
    personajeSeleccionado.style.left=randomX+'px'; 
    personajeSeleccionado.style.top=randomY+'px';

}
