import "./style.css";

const generarNumeroAleatorio = (): number => Math.floor(Math.random()* 6) + 1;

let puntos = 0;

 const botonTirarDado = document.getElementById("tirar-dado");
 const botonPlantarse = document.getElementById("me-planto");
 const elementoImagen = document.getElementById("dado");
 const elementoDivPuntuacion = document.getElementById("puntuacion-dado");
 const elementoDivMensaje = document.getElementById("mensaje-dado");

 const obtenerUrlDado = (numeroDado:number) => {

    switch(numeroDado) {
        case 1:
            return "src/images/cara1.png";
        case 2:
            return "src/images/cara2.png";
        case 3:
            return "src/images/cara3.png";
        case 4:
            return "src/images/cara4.png";
        case 5:
            return "src/images/cara5.png";
        case 6:
            return "src/images/cara6.png";
        default:
            return "";
    }
}

const mostrarUrlDado = (urlDado:string) => {
    if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
        elementoImagen.src = urlDado;
    }
}

const mostrarPuntuacion = (puntosTotales:number) => {
    if (elementoDivPuntuacion && elementoDivPuntuacion instanceof HTMLDivElement) {
        elementoDivPuntuacion.textContent = puntosTotales.toString()
    }
}

const sumarPuntos = (numeroDado: number): number => {
    if (numeroDado === 6) {
        return puntos=0;
    } else {
        puntos += 10;
        return puntos;
    }
}

const actualizarPuntos = (puntosSumados:number) => {
    puntos = puntosSumados;
}

const GanarJuego = (puntosSumados: number, numeroDado: number) => {
    if (elementoDivMensaje && elementoDivMensaje instanceof HTMLDivElement 
        && elementoDivPuntuacion && elementoDivPuntuacion instanceof HTMLDivElement) {

    if (puntosSumados >= 50) {
        if (numeroDado === 6) {
            puntosSumados = 0;
            elementoDivMensaje.textContent = `Has perdido el juego después de superar los 50 puntos`;
            elementoDivPuntuacion.style.display = "none";
        } else {
            elementoDivMensaje.textContent = `Has ganado el juego con ${puntosSumados} puntos`;
            elementoDivPuntuacion.style.display = "none";
        }
    } else { 
            elementoDivMensaje.textContent = `Sigue tirando para obtener más de 50 puntos`;
            elementoDivPuntuacion.style.display = "block";
    }      
   } 
 }

const botonesInactivos = () => {
    if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement && botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = true;
        botonTirarDado.disabled = true;
    }
}

const tirarDado = () => {
    const numeroDado = generarNumeroAleatorio();
    const urlDado = obtenerUrlDado(numeroDado);
    mostrarUrlDado(urlDado);  
    const puntosSumados = sumarPuntos(numeroDado);
    actualizarPuntos(puntosSumados);
    mostrarPuntuacion(puntos);
    GanarJuego(puntosSumados, numeroDado);    
}

const plantarse = () => {
    botonesInactivos();
}

if (botonTirarDado && botonTirarDado instanceof HTMLButtonElement) {
    botonTirarDado.addEventListener("click", tirarDado)
}

if(botonPlantarse && botonPlantarse instanceof HTMLButtonElement && botonTirarDado && botonTirarDado instanceof HTMLButtonElement) {
    botonPlantarse.addEventListener("click", (plantarse))
}