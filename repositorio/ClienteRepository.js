import { Cliente } from '../modelo/Cliente.js';

function anyadirlistadoClientes(listadoClientes, cliente){
    return listadoClientes.push(cliente);
}

function buscarlistadoClientes(listadoClientes, dni){
    
    elm = listadoClientes.find(element => element.getDni() == dni);
    if (elm != undefined) {
        return cliente;
    }
}


export {anyadirlistadoClientes, buscarlistadoClientes};







