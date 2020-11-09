import { Ticket } from '../modelo/Ticket.js';

function anyadirListaTicket(lista, ticket){
    return lista.concat(ticket);
}

function listarPendientes(listaTick){
    let lista = new Array();
    listaTick.forEach(element => {
        if(element.getCoste() == undefined){
            lista.concat(element);
        }
    });
    return lista;
}

function buscarTicket(listaTick, matricula){
    
    listarPendientes(listaTick).forEach(element => {
        if(element.getMatricula() === matricula){
            return element;
        }
    });
}

export {anyadirListaTicket, buscarTicket};