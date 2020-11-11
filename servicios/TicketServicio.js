import { Ticket } from '../modelo/Ticket.js';
import {anyadirListaTicketR, buscarTicketR,cogerTodosLosTickets} from '../repositorios/TicketRepository.js';
import {buscaPlaza} from './PlazaServicio.js';
import * as readline from 'readline-sync';
import moment from 'moment';
function anyadirListaTicket(lista, ticket){
    return anyadirListaTicketR(lista, ticket);
}

function buscarTicket(listaTick, matricula){
    return buscarTicketR(listaTick, matricula);
}

function pintarTick(tick){

}

function pagarTicket(nombrePlaza, parking, ticket){

    let correcto = false;
    let plaza;
    let actual=moment();
    let precio;
    plaza = buscaPlaza(nombrePlaza, parking);
    let min;
    min= ((actual-ticket.getFechaEntrada)/60*1000).toFixed(0);
    precio = min*plaza.getCosteMin;
    while(!correcto){
        console.log("El precio a pagar son: " + precio + "€");
        let dinero = readline.question("Inserte el dinero.");
        if(dinero >= precio){
            correcto = true;
            ticket.setCoste(precio);
            console.log("El cambio es: " + (dinero - precio) + "€");
        }else{
            console.log("La cantidad es menor a la esperada.");
        }
    }
}
function facturacion(listaTickets,fecha1,fecha2){
    let aux=[];
    let total=0;
    listaTickets.forEach(element =>{
        console.log(element.getFechaEntrada);
        if(element.getFechaEntrada>=fecha1 && element.getFechaEntrada<fecha2){
            aux.push(element);
        }
    });
    aux.forEach(element=>{
        total=element.getCoste+total;
    });
    return total;
}

export {anyadirListaTicket, buscarTicket, pintarTick,facturacion,pagarTicket};


