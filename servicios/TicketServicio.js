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


function pagarTicket(nombrePlaza,parking,ticket){

    let correcto = false;
    let plaza;
    let min;
    let precio;
    plaza = buscaPlaza(nombrePlaza,parking);
    if(buscaPlaza(nombrePlaza,parking) != undefined){
      let actual=moment();
        min=((actual-ticket.getFechaEntrada)/(60*1000)).toFixed(0);
        
        precio = min*plaza.getCosteMin;
        while(!correcto){
            console.log("El precio a pagar son: " + precio + "€");
            let dinero = readline.question("Inserte el dinero, en euros. ");
            if(dinero >= precio){
                correcto = true;
                ticket.setCoste(precio);
                console.log("El cambio es: " + (dinero - precio).toFixed(2) + "€");
            }else{
                console.log("La cantidad es menor a la esperada. ");
            }
        }  
    }
    
}
function facturacion(listaTickets,fecha1,fecha2){
    let aux=[];
    let total=0;
    listaTickets.forEach(element =>{
        if(moment(element.getFechaEntrada).isAfter(fecha1) && moment(element.getFechaEntrada).isBefore(fecha2)){
            aux.push(element);
        }
    });
    aux.forEach(element=>{
        total=element.getCoste+total;
    });
    return (total).toFixed(2);
}

function pintarTick(tick){
    console.log("*********************************");
    console.log("Matrícula del vehículo: " + tick.getMatricula);
    console.log("Plaza del parking: " + tick.getPlaza);
    console.log("Fecha y hora de estacionamiento: " + tick.getFechaEntrada.format("DD/MM/YYYY HH:mm:ss"));
    console.log("PIN: " + tick.getPin);
    if(tick.getCoste != 0){
        console.log("Coste: " + tick.getCoste + "€");
    }
    if(tick.getFechaSalida != undefined){
        console.log("Fecha y hora de salida: " + tick.getFechaSalida.format("DD/MM/YYYY HH:mm:ss"));
    }
    console.log("**********************************");
}
export {anyadirListaTicket, buscarTicket, pintarTick,facturacion,pagarTicket};


