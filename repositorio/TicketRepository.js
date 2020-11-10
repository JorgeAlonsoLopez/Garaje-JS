import { Ticket } from '../modelo/Ticket.js';

function anyadirListaTicketR(lista, ticket){
    return lista.push(ticket);
}

function listarPendientes(listaTick){
    let lista = new Array();
    listaTick.forEach(element => {
        if(element.getCoste === 0){
            lista.push(element);
        }
    });
    return lista;
}

function buscarTicketR(listaTick, matricula){
    
    listarPendientes(listaTick).forEach(element => {
        if(element.getMatricula === matricula){
            return element;
        }
    });
}

export {anyadirListaTicketR, buscarTicketR};