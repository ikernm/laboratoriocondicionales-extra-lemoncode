import "./style.css";

const generarNumeroAleatorio = (): number => Math.floor(Math.random()* 6) + 1;

type Estado =
 | "NO_ES_EL_NUMERO_6"
 | "ES_EL_NUMERO_6"
 | "CONSIGUES_PUNTOS"
 | "MAXIMO_PUNTOS"
 | "ME_PLANTO";


const MAXIMO_PUNTOS: number = 50;
let numeroPuntos: number = 0;

const NUMERO_GANADOR: number = 6;



