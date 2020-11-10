import { Factura } from '../modelo/Factura.js';

function anyadirListaFacturaR(lista, factura){
    return lista.push(factura);
}

function buscarFactR(lista, dni){    
    listarPendientes(lista).forEach(element => {
        if(element.getCliente().getDni === dni){
            return element;
        }
    });
}

export {anyadirListaFacturaR, buscarFactR};
