import { Abono } from '../modelo/Abono.js';
import {anyadirAbonos, eliminarAbonos, buscarAbonoPorDni} from '../repositorio/AbonoRepository.js';


function anyadirAbono(listadoAbonos, abono){
    return anyadirAbonos(listadoAbonos, abono);
}

function eliminarAbono(listadoAbonos, abono){
    return eliminarAbonos(listadoAbonos, abono);
}

function buscarAbonoDni(listadoAbonos, dni){
    return buscarAbonoPorDni(listadoAbonos, dni);
}


export {anyadirAbono, eliminarAbono, buscarAbonoDni};
