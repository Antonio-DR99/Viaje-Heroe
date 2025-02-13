let contadorPersonajes=0; 

let posicionesOcupadas=[]; 


function positionRandom(){
    let personajes=document.querySelectorAll('.personajes'); 

    if (contadorPersonajes>=personajes.length) {
        return;
    }
    
    let personajeSeleccionado=personajes[contadorPersonajes];
    personajeSeleccionado.style.display="block"; 


    let pantallaJuego=document.getElementById('pantallaJuego'); 
    let pantallaWidth=pantallaJuego.clientWidth; 
    let pantallaHeight=pantallaJuego.clientHeight; 

    let personajeWidth = personajeSeleccionado.offsetWidth;  
    let personajeHeight = personajeSeleccionado.offsetHeight; 
    
    let randomX, randomY;

    for(let i=0; i<100; i++){
        randomX = Math.round(Math.random() * (pantallaWidth - personajeWidth));               
        randomY = Math.round(Math.random() * (pantallaHeight - personajeHeight));

        for (let j = 0; j < posicionesOcupadas.length; j++) {
            let posicion = posicionesOcupadas[j];  
        
            
        }

    }


    personajeSeleccionado.style.position="absolute";
    personajeSeleccionado.style.left=randomX+'px'; 
    personajeSeleccionado.style.top=randomY+'px';

    contadorPersonajes++;

    console.log(`Personaje ${contadorPersonajes}: X=${randomX}, Y=${randomY}`);

}























let dialogos= [
    "¡Hola forastero! ¿Necesitas algo?",
    "Nuestra aldea es pequeña, pero acogedora.",
    "Dicen que en el bosque cercano hay algo misterioso...",
    "Trabajo en la granja con mi familia, es duro pero gratificante.",
    "Si buscas aventuras, quizás deberías hablar con el jefe del pueblo.",
    "No sé mucho sobre combates, pero te deseo suerte si sales de aquí.",
    "Más vale que desenfundes rápido, forastero...",
    "Este pueblo tiene sus reglas... y yo me encargo de hacerlas cumplir.",
    "El oro y el plomo son las únicas monedas que importan en este lugar.",
    "Dicen que el desierto no perdona... pero yo tampoco.",
    "Ya te dije suficiente, forastero. Que el polvo del camino te lleve lejos...",
    "¡Por el honor! Aunque... ¿y si hay dragones cerca?",
    "¿Qué fue ese ruido? ¡Seguramente fue solo el viento... o quizás un ogro!",
    "No temo a las criaturas oscuras... ¡bueno, un poquito sí!",
    "Por supuesto que soy valiente... pero mejor si tenemos una buena estrategia, ¿eh?",
    "Lo haremos... solo, por favor, no dejéis que me toque ese monstruo. ¡Prometido?",
    "Las sombras me obedecen... nadie puede escapar de mi poder.",
    "Tus almas serán mías, como todas las demás que se han atrevido a cruzarme.",
    "Con un solo gesto, puedo hacer temblar la tierra... y la oscuridad no tiene límites.",
    "El destino ya está escrito, y no hay escapatoria para aquellos que se interponen en mi camino.",
    "Solo los valientes desafían mi magia... pero incluso ellos caerán ante mi oscuridad.",
    "El fuego es mi aliado... y con él, nada puede detenerme.",
    "Mi armadura arde con la furia de mil dragones, ¡ningún enemigo resistirá el calor de mi justicia!",
    "No hay oscuridad que pueda extinguir la llama de mi voluntad. ¡Arde, mundo!",
    "Soy el herrero de mi destino, y forjo mi camino con las llamas que arden en mi pecho.",
    "El calor de mi fuego consume todo a su paso... y tú serás el siguiente si te atreves a desafiarme.",
    "Hmm... ya te conté todo lo que sé. ¡Nos vemos!"
];


let limiteConversacion = 5; // Límite de frases antes de que deje de hablar
let contadorConversacion = 0;
let ultimoPersonaje;

function hablar(personajeId) {
    let personaje = document.getElementById(personajeId);
    if (!personaje) {
        return;
    }

    let bocadillo = personaje.querySelector(".bocadillo");
    let fraseAleatoria;


    if (ultimoPersonaje!==personajeId) {
        contadorConversacion=0; 
        ultimoPersonaje=personajeId;
        
    }


    // Si ya se alcanzó el límite, el personaje deja de hablar
    if (contadorConversacion >= limiteConversacion) {
        fraseAleatoria = "Ya no puedo decir más... ¡Corred, insensatos!";
    }else {
        // Selecciona una frase aleatoria si aún no se ha alcanzado el límite
        let dialogoAleatorio = Math.floor(Math.random() * dialogos.length);
        fraseAleatoria = dialogos[dialogoAleatorio];
        contadorConversacion++;
    }


    // Mostrar la frase en pantalla
    bocadillo.innerHTML = fraseAleatoria;
    bocadillo.style.display = 'block';
    bocadillo.classList.add("visible");

    setTimeout(function() {
        bocadillo.style.display = 'none';
        bocadillo.classList.remove("visible");
    }, 4000);
}

let musicaReproducida = false;  // Corregido el nombre de la variable

function iniciarMusica() {
    let audio = document.getElementById('audioFondo'); 

    // Si la música ya se está reproduciendo, la pausamos
    if (musicaReproducida) {
        audio.pause();  // Detiene la música
    } else {
        audio.play();   // Reproduce la música
    }
    // Cambiamos el estado de la variable
    musicaReproducida = !musicaReproducida; 
}
