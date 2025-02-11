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



let dialogo01 = [
    "¡Hola forastero! ¿Necesitas algo?",
    "Nuestra aldea es pequeña, pero acogedora.",
    "Dicen que en el bosque cercano hay algo misterioso...",
    "Trabajo en la granja con mi familia, es duro pero gratificante.",
    "Si buscas aventuras, quizás deberías hablar con el jefe del pueblo.",
    "No sé mucho sobre combates, pero te deseo suerte si sales de aquí.",
    "Hmm... ya te conté todo lo que sé. ¡Nos vemos!"
];

let dialogo02 = [
    "Más vale que desenfundes rápido, forastero...",
    "Este pueblo tiene sus reglas... y yo me encargo de hacerlas cumplir.",
    "El oro y el plomo son las únicas monedas que importan en este lugar.",
    "Dicen que el desierto no perdona... pero yo tampoco.",
    "Ya te dije suficiente, forastero. Que el polvo del camino te lleve lejos..."
];

let dialogo03 = [
    "¡Por el honor! Aunque... ¿y si hay dragones cerca?",
    "¿Qué fue ese ruido? ¡Seguramente fue solo el viento... o quizás un ogro!",
    "No temo a las criaturas oscuras... ¡bueno, un poquito sí!",
    "Por supuesto que soy valiente... pero mejor si tenemos una buena estrategia, ¿eh?",
    "Lo haremos... solo, por favor, no dejéis que me toque ese monstruo. ¡Prometido?"
];

let dialogo04 = [
    "Las sombras me obedecen... nadie puede escapar de mi poder.",
    "Tus almas serán mías, como todas las demás que se han atrevido a cruzarme.",
    "Con un solo gesto, puedo hacer temblar la tierra... y la oscuridad no tiene límites.",
    "El destino ya está escrito, y no hay escapatoria para aquellos que se interponen en mi camino.",
    "Solo los valientes desafían mi magia... pero incluso ellos caerán ante mi oscuridad."
];

let dialogo05 = [
    "El fuego es mi aliado... y con él, nada puede detenerme.",
    "Mi armadura arde con la furia de mil dragones, ¡ningún enemigo resistirá el calor de mi justicia!",
    "No hay oscuridad que pueda extinguir la llama de mi voluntad. ¡Arde, mundo!",
    "Soy el herrero de mi destino, y forjo mi camino con las llamas que arden en mi pecho.",
    "El calor de mi fuego consume todo a su paso... y tú serás el siguiente si te atreves a desafiarme."
];

function hablar(personajeId){
    let personaje=document.getElementById(personajeId); 

    if (!personaje) {
        return;
    }

    let bocadillo=personaje.querySelector(".bocadillo");

    let fraseAleatoria="No tengo nada que decir";
    let dialogoAleatorio; 

    switch (personajeId) {
        case "personaje-01":
            dialogoAleatorio=Math.floor(Math.random()*dialogo01.length);
            fraseAleatoria=dialogo01[dialogoAleatorio];
            break;
    
        case "personaje-02":
            dialogoAleatorio=Math.floor(Math.random()*dialogo02.length);
            fraseAleatoria=dialogo02[dialogoAleatorio];
            break;
    
        case "personaje-03":
            dialogoAleatorio=Math.floor(Math.random()*dialogo03.length);
            fraseAleatoria=dialogo03[dialogoAleatorio];
            break;
    
        case "personaje-04":
            dialogoAleatorio=Math.floor(Math.random()*dialogo04.length);
            fraseAleatoria=dialogo04[dialogoAleatorio];
            break;
    
        case "personaje-05":
            dialogoAleatorio=Math.floor(Math.random()*dialogo05.length);
            fraseAleatoria=dialogo05[dialogoAleatorio];
            break;
    
        default:
            break;
    }


    bocadillo.innerHTML=fraseAleatoria; 
    bocadillo.style.display = 'block';
    bocadillo.classList.add("visible");

}