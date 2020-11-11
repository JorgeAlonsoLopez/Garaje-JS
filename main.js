import { Vehiculo } from './modelo/Vehiculo.js';
import { Abono } from './modelo/Abono.js';
import { Cliente } from './modelo/Cliente.js';
import { Parking } from './modelo/Parking.js';
import { Plaza } from './modelo/Plaza.js';
import { Ticket } from './modelo/Ticket.js';
import {anyadirListaTicket, buscarTicket, pintarTick,facturacion,pagarTicket} from './servicios/TicketServicio.js';
import {cargarListadoTotalPlazas, buscaPlaza, listarPorTipo, contadorPlazasLibres,contadorPlazasLibresTipo,
    darPlazasLibresTipo, ocuparPlaza, liberaPlaza} from './servicios/PlazaServicio.js';
import {mostrarPlazasDisponibles,estadoParking,imprimirMapa} from './servicios/ParkingServicio.js';
import {anyadirListaFactura, buscarFact} from './servicios/FacturaServicio.js';
import {anyadirlistadoClientes, buscarlistadoClientes, depositarVehiculo, retirarVehiculo, depositarVehiculoReserv, retirarVehiculoReserv} from './servicios/ClienteServicio.js';
import {anyadirAbono, eliminarAbono, buscarAbonoDni, consultarAnual,caducidadAbono,caducidadBonosProximosDias} from './servicios/AbonoServicio.js';
import * as readline from 'readline-sync';
import moment from 'moment';
let salir=false;
let tickets=new Array();
let parking=new Parking();
let listaAbonos=[];
do {
    mostrarPlazasDisponibles(parking);
    console.log("------------------------------------");
    var readlineSync = readline,
         opciones = ["Guardar vehículo", "Retirar Vehículo", 'Guardar Vehículo Cliente', 'Retirar Vehículo Cliente', 'Estado Parking'],
        index = readlineSync.keyInSelect(opciones, '¿Que desea realizar?');
    switch(index+1){
        case 1:
            let matriculaA=readline.question('¿Cuál es la matrícula de su vehículo?');
            var readlineSync = readline,
                 opciones = ["Turismo","Moto","Caravana"],
                 eleccion = readlineSync.keyInSelect(opciones, '¿Que desea realizar?');
            depositarVehiculo(matriculaA,eleccion+1,tickets,parking);
            break;
        case 2:
            let matriculaR=readline.question('¿Cuál es la matrícula de su vehículo?');
            let nombrePlaza=readline.question('¿Cuál es el nombre de la plaza?');
            retirarVehiculo(matriculaR,nombrePlaza,parking,tickets);
            break;
        default:
            salir=true;
            break;
    }
} while (!salir);

console.log("bye");




