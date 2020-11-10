import { Ticket } from '../modelo/Ticket.js';
import {anyadirListaTicketR, buscarTicketR} from '../repositorio/TicketRepository.js';
import {buscaPlaza} from '../servicio/PlazaServicio.js';

function anyadirListaTicket(lista, ticket){
    return anyadirListaTicketR(lista, ticket);
}

function buscarTicket(listaTick, matricula){
    return buscarTicketR(listaTick, matricula);
}

function pagarTicket(nombrePlaza){

    let correcto = false;
    let plaza;
    let min;
    let precio;
    plaza = buscaPlaza(nombrePlaza);
    precio = min*plaza.getCosteMin;
    while(!correcto){
        console.log("El precio a pagar son: " + precio + "€\nInserte el dinero.");
        let dinero //= X;    insertar el dineo
        if(dinero >= precio){
            correcto = true;
            console.log("El cambio es: " + (dinero - precio) + "€");
        }
    }
}

function pintarTick(tick){

}

export {anyadirListaTicket, buscarTicket, pintarTick, pagarTicket};


