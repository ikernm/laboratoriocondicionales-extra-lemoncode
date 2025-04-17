import "./style.css";

const generarNumeroAleatorio = (): number => Math.floor(Math.random()* 6) + 1;

const botonTirarDado = document.getElementById("tirar-dado");
const botonPlantar = document.getElementById("me-planto");

const imagenDado = document.getElementById("dado");
const mensajeDado = document.getElementById("mensaje-dado");
const puntuacionDado = document.getElementById("puntuacion-dado");

    // Le asignamos el valor máximo de puntos y el valor inicial de puntos
    const MAXIMO_PUNTOS = 50;
    let puntos = 0;

// Definimos los estados posibles del juego
type Estado =
 | "NO_ES_EL_NUMERO_6"
 | "ES_EL_NUMERO_6"
 | "MAXIMO_PUNTOS"
 | "ME_PLANTO";

const elementoMensaje = (texto: string, estado: Estado) => {

    if(mensajeDado && mensajeDado instanceof HTMLDivElement &&
        puntuacionDado && puntuacionDado instanceof HTMLDivElement &&
        imagenDado && imagenDado instanceof HTMLImageElement) {
     
        let mensaje: string = texto;
        
        // Generamos un número aleatorio entre 1 y 6
        const numeroAleatorio = generarNumeroAleatorio();

        // Cambiamos la imagen del dado según el número aleatorio y le añadimos el alt
        imagenDado.src = `./src/images/cara${numeroAleatorio}.png`;
        imagenDado.alt = `Cara ${numeroAleatorio}`;

        // Cambiamos el texto de la puntuación
        puntuacionDado.innerHTML = `Puntuación: ${puntos}`;
        mensajeDado.innerHTML = mensaje;

        switch (estado) {

            case "NO_ES_EL_NUMERO_6":
                if(numeroAleatorio !== 6) {
                mensaje =`Has sacado un ${numeroAleatorio}, has obtenido 10 puntos. Sigue tirando para obtener más de 50 puntos`;
                puntos += 10;
                }
                break;

            case "ES_EL_NUMERO_6":
                if(numeroAleatorio == 6) {
                mensaje = `Has sacado un ${numeroAleatorio}, has perdido todos los puntos`;
                puntos = 0;
                }
                break;

            case "MAXIMO_PUNTOS":
                if(puntos >= MAXIMO_PUNTOS) {
                mensaje = `Tus puntos actuales son ${puntos}, que son mayores a 50, por tanto, has ganado`;
                }
                break;

            case "ME_PLANTO":
                mensaje = `Te has plantado con ${puntos} puntos`;
                break;

            default:
                mensaje = `Error: ${estado}`;
                break;
        }
    }
}

// Llamamos a la función de hacerle click al botón de ¡Tira el dado!

if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement) {
    botonTirarDado.addEventListener("click", () => {
        generarNumeroAleatorio();
        elementoMensaje(texto,estado);
    });
}

// Llamamos a la función de hacerle click al botón de ¡Me planto!

if(botonPlantar && botonPlantar instanceof HTMLButtonElement &&
    botonTirarDado && botonTirarDado instanceof HTMLButtonElement) {

    botonPlantar.addEventListener("click", () => {
        elementoMensaje(mensaje,"ME_PLANTO");
        botonPlantar.disabled = true;
        botonTirarDado.disabled = true;
    });
}


