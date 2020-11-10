import { Factura } from '../modelo/Factura.js';
import {anyadirListaFacturaR, buscarFactR} from '../repositorio/FacturaRepository.js';

function anyadirListaFactura(lista, factura){
    return anyadirListaFacturaR(lista, factura);
}

function buscarFact(lista, dni){    
    return buscarFactR(lista, dni);
}





export {anyadirListaFactura, buscarFact};

