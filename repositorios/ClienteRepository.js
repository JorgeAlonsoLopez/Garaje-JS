import { Cliente } from '../modelo/Cliente.js';

function anyadirlistadoClientesR(listadoClientes, cliente){
    return listadoClientes.push(cliente);
}

function buscarlistadoClientesR(listadoClientes, dni){
    
    let elm = listadoClientes.find(element => element.getDni === dni);
    if (elm != undefined) {
        return elm;
    }
}


export {anyadirlistadoClientesR, buscarlistadoClientesR};







