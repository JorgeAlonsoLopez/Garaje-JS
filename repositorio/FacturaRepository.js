import { Factura } from '../modelo/Factura.js';

function anyadirListaFactura(lista, factura){
    return lista.concat(factura);
}

function buscarFact(lista, dni){    
    listarPendientes(lista).forEach(element => {
        if(element.getCliente().getDni() === dni){
            return element;
        }
    });
}

export {anyadirListaFactura, buscarFact};
