import { Abono } from '../modelo/Abono.js';

function anyadirlistadoAbonos(listadoAbonos, abono){
    return listadoAbonos.push(abono);
}

function eliminarlistadoAbonos(listadoAbonos, abono){
    const index = listadoAbonos.indexOf(abono);
    if (index > -1) {
        array.splice(index, 1);
    }
    return listadoAbonos.push(abono);
}

function buscarlistadoAbonos(listadoAbonos, dni){
    
    elm = listadoAbonos.find(element => element.getCliente().getDni() == dni);
    if (elm != undefined) {
        return abono;
    }
}


export {anyadirlistadoAbonos, eliminarlistadoAbonos, buscarlistadoAbonos};

