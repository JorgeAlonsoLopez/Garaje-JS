import { Factura } from '../modelo/Factura.js';

function anyadirListaFacturaR(lista, factura){
    return lista.push(factura);
}

function buscarFactR(lista, dni){
    let listaFact = new Array();
    lista.forEach(element => {
        if(element.getCliente.getDni === dni){
            listaFact.push(element);
        }
    });
    return listaFact;
}

function buscarFactAnyoR(lista, anyo){
    let listaFact = new Array();
    lista.forEach(element => {
        if(moment(anyo.toString()+'-01-01').isBefore(element.getFecha) && moment((anyo+1).toString()+'-01-01').isAfter(element.getFecha)){
            listaFact.push(element);
        }
    });
    return listaFact;
}

export {anyadirListaFacturaR, buscarFactR, buscarFactAnyoR};