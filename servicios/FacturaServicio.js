import { Factura } from '../modelo/Factura.js';
import {anyadirListaFacturaR, buscarFactR, buscarFactAnyoR} from '../repositorios/FacturaRepository.js';

function anyadirListaFactura(lista, factura){
    return anyadirListaFacturaR(lista, factura);
}

function buscarFact(lista, dni){
    return buscarFactR(lista, dni);
}

function buscarFactAno(lista, anyo){
    return buscarFactAnyoR(lista, anyo);
}

function buscarFactAnyo(lista, anyo){
    let listaFact = buscarFactAno(lista, anyo);
    let contd = 0;
    let recaudac = 0;
    if(listaFact.length > 0){
        listaFact.forEach(element => {
            contd += 1;
            recaudac += element.getCoste;
        });
        console.log("Ha habido en el año seleccionado (" + anyo + "), un total de " + contd +
        " cobros de abonos por un valor de " + (recaudac).toFixed(2) + "€.");
    }else{
        console.log("No se ha encontrado ningún pago de abono perteneciente al año insertado");
    }
    
}




export {anyadirListaFactura, buscarFact, buscarFactAnyo};

