import { Abono } from '../modelo/Abono.js';

function anyadirAbonos(listadoAbonos, abono){
    return listadoAbonos.push(abono);
}

function eliminarAbonos(listadoAbonos, abono){
    const index = listadoAbonos.indexOf(abono);
        if (index > -1) {
            listadoAbonos.splice(index, 1);
        }
    return listadoAbonos;
}

function buscarAbonoPorDni(listadoAbonos, dni){
    
    elm = listadoAbonos.find(element => element.getCliente.getDni === dni);
    if (elm != undefined) {
        return abono;
    }
}


export {anyadirAbonos, eliminarAbonos, buscarAbonoPorDni};

