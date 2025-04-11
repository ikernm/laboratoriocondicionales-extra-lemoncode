import "./style.css";

const generarNumeroAleatorio = (): number => Math.floor(Math.random()* 6) + 1;

// Definimos los estados posibles del juego
type Estado =
 | "NO_ES_EL_NUMERO_6"
 | "ES_EL_NUMERO_6"
 | "MAXIMO_PUNTOS"
 | "ME_PLANTO";

 // Le asignamos el valor máximo de puntos y el valor inicial de puntos
 const MAXIMO_PUNTOS = 50;
 let puntos = 0;

// Al pulsar el botón ¡Tira el dado!, nos devuelve la imagen y los textos de la puntuación y el mensaje
const botonTirarDado = document.getElementById("tirar-dado");
const imagenDado = document.getElementById("dado");
const puntosDado = document.getElementById("puntuacion-dado");


if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement &&
    imagenDado && imagenDado instanceof HTMLImageElement &&
    puntosDado && puntosDado instanceof HTMLDivElement
    ) {

        botonTirarDado.addEventListener("click", () => {

        // Generamos un número aleatorio entre 1 y 6
        const numeroAleatorio = generarNumeroAleatorio();

        // Cambiamos la imagen del dado según el número aleatorio y le añadimos el alt
        imagenDado.src = `./src/images/cara${numeroAleatorio}.png`;
        imagenDado.alt = `Cara ${numeroAleatorio}`;

        // Cambiamos el texto de la puntuación
        puntosDado.innerHTML = `Puntuación: ${puntos}`;

        // Cambiamos el mensaje del dado según el número aleatorio
        const mensajePuntos = (texto: string, estado: Estado) => {
            if(mensajePuntos && mensajePuntos instanceof HTMLDivElement) {
                   // NO SE CÓMO CONTINUAR CON EL CÓDIGO SIN QUE ME DE ERROR  
                let mensaje: string = texto;

            switch (estado) {
                case "NO_ES_EL_NUMERO_6":
                    mensaje =`Has sacado un ${numeroAleatorio}, has obtenido 10 puntos. Sigue tirando para obtener más de 50 puntos`;
                    puntos + 10;
                    break;
                case "ES_EL_NUMERO_6":
                    mensaje = `Has sacado un ${numeroAleatorio}, has perdido`;
                    break;
                case "MAXIMO_PUNTOS":
                    if(puntos >= MAXIMO_PUNTOS) {
                        mensaje = `Tus puntos actuales son ${puntos}, que son mayores a 50, por tanto, has ganado`;}
                    break;
                case "ME_PLANTO":
                    mensaje = `Te has plantado con ${puntos} puntos`;
                    break;
                default:
                    mensaje = `Error: ${estado}`;
                    break;
                }

                const elementoMensajePuntos = document.getElementById("mensaje-puntos");
                if (elementoMensajePuntos && elementoMensajePuntos instanceof HTMLDivElement) {
                    elementoMensajePuntos.innerHTML = mensaje;
                } else {
                    console.error("Elemento mensaje puntos no encontrado o no es un HTMLDivElement");
                }
            }
        }
        
        // Al pulsar el botón ¡Me planto!, nos devuelve la imagen y los textos de la puntuación y el mensaje
        const botonMePlanto = document.getElementById("me-planto");
        if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {

            botonMePlanto.addEventListener("click", () => {
             mensajePuntos("Te has plantado", "ME_PLANTO");    
            botonMePlanto.disabled = true;
            })
        }
     })
}

// Actualizar el DOM con el número de puntos y el mensaje??
