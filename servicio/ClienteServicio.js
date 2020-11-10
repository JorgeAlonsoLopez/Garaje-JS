import { Cliente } from '../modelo/Cliente.js';
import { Vehiculo } from '../modelo/Vehiculo.js';
import { Ticket } from '../modelo/Ticket.js';
import {anyadirlistadoClientesR, buscarlistadoClientesR} from '../repositorio/ClienteRepository.js';
import {anyadirListaTicket, pintarTick, buscarTicket, pagarTicket} from '../servicio/TicketServicio.js';
import {buscarAbonoDni} from '../servicio/AbonoServicio.js';
import { contadorPlazasLibres, contadorPlazasLibresTipo, buscaPlaza, darPlazasLibresTipo, ocuparPlaza, liberaPlaza} from '../servicio/PlazaServicio.js';


function depositarVehiculo(matricula, tipo, listaTick){
    let resultado = false;
    let plaza;
    let vehic;
    let tick;
    let max = 999999;
    let min = 100000;
    
    if(contadorPlazasLibresTipo(tipo) > 0){
        resultado = true;
        plaza = darPlazasLibresTipo(tipo);
        vehic = new Vehiculo(matricula);
        plaza.setVehiculo(vehic);
        tick = new Ticket(new Date(), matricula, plaza.getNombre);
        tick.setPin(Math.floor(Math.random() * (max - min + 1)) + min);
        anyadirListaTicket(listaTick, tick);
        pintarTick(tick);
        ocuparPlaza(plaza);
    }

    if(resultado){
        return "Se ha finalizado el aparcado el vehículo sin problemas";
    }else{
        return "No se puede aparcar, no hay sitio.";
    }
    

}


function retirarVehiculo(matricula, nombrePlaza, pin){

    let plaza = buscaPlaza();
    let tick = buscarTicket(listaTick, matricula);
    let pagado = false;
    console.log("Por favor, inserte el pin.");
    let pinN // = x; meter el pin
    while (pinN != pin) {
        console.log("El pin no es correcto, inténtelo de nuevo.");
        pinN // = x; meter el pin
    }

    pagarTicket(nombrePlaza);
    tick.setFechaSalida(new Date());
    tick.setCoste(min*plaza.getCosteMin);
    liberaPlaza(plaza);
    console.log("El vehículo se ha retirado con éxito.");
    console.log("Gracias por usar nuestros servicios.");
}


function depositarVehiculoReserv(matricula, dni, listadoClientes, listadoAbonos, pin){
    
    if(matricula == buscarlistadoClientes(listadoClientes, dni).getVehiculo.getMatricula){
        if(pin === buscarAbonoDni(listadoAbonos, dni).getPin){
           ocuparPlaza(buscarAbonoDni(listadoAbonos, dni).getPlaza);
           console.log("El vehículo se ha aparcado con éxito.");
           console.log("Gracias por usar nuestros servicios."); 
        } 
    }
}


function retirarVehiculoReserv(matricula, dni, listadoClientes, listadoAbonos, pin){
    if(matricula == buscarlistadoClientes(listadoClientes, dni).getVehiculo.getMatricula){
        if(pin === buscarAbonoDni(listadoAbonos, dni).getPin){
            liberaPlaza(buscarAbonoDni(listadoAbonos, dni).getPlaza);
            console.log("El vehículo se ha retirado con éxito.");
            console.log("Gracias por usar nuestros servicios."); 
        } 
    }
}





function anyadirlistadoClientes(listadoClientes, cliente){
    return anyadirlistadoClientesR(listadoClientes, cliente);
}

function buscarlistadoClientes(listadoClientes, dni){
    return buscarlistadoClientesR(listadoClientes, dni);
}


export {anyadirlistadoClientes, buscarlistadoClientes, depositarVehiculo, retirarVehiculo, depositarVehiculoReserv, retirarVehiculoReserv};