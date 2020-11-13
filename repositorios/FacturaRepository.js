import { Factura } from '../modelo/Factura.js';
import moment from 'moment';

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
        anyo = parseInt(anyo);
        let inicio = moment([anyo,1,1]);
        anyo = anyo+1;
        let final = moment([anyo,1,1]);
        if(element.getFecha.isAfter(inicio) && element.getFecha.isBefore(final)){
            listaFact.push(element);
        }
    });
    return listaFact;
}

export {anyadirListaFacturaR, buscarFactR, buscarFactAnyoR};