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
const imagenDado = document.getElementById("imagen-dado");
const puntosDado = document.getElementById("puntuacion-dado");
;

if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement &&
    imagenDado && imagenDado instanceof HTMLImageElement &&
    puntosDado && puntosDado instanceof HTMLDivElement
    ) {

        botonTirarDado.addEventListener("click", () => {

        // Generamos un número aleatorio entre 1 y 6
        const numeroAleatorio = generarNumeroAleatorio();

        // Cambiamos la imagen del dado según el número aleatorio
        imagenDado.src = `./src/images/cara${numeroAleatorio}.png`;
        imagenDado.alt = `Cara ${numeroAleatorio}`;

        // Cambiamos el texto de la puntuación
        puntosDado.innerHTML = `Puntuación: ${puntos}`;

        // Cambiamos el mensaje del dado según el número aleatorio
        const mensajePuntos = (texto: string, estado: Estado) => {
            if(mensajePuntos && mensajePuntos instanceof HTMLDivElement) {
            document.getElementById("mensaje-puntos");
            mensajePuntos.innerHTML = texto;
            
            let mensaje = "";
            switch (estado) {
                case "NO_ES_EL_NUMERO_6":
                    mensaje =`Has sacado un ${numeroAleatorio}, has obtenido 10 puntos. Sigue tirando para obtener más de 50 puntos`;
                    puntos + 10;
                    break;
                case "ES_EL_NUMERO_6":
                    mensaje = `Has sacado un ${numeroAleatorio}, has perdido`;
                    break;
                /*case "MAXIMO_PUNTOS":
                    mensaje = `Has sacado un ${numeroAleatorio}, has ganado`;
                    break;*/
            }
        };
     }
    }   
 );
}
