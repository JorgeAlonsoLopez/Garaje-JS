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

let vehi=new Vehiculo("pepe");
let clie=new Cliente("manolo","cpp","pp","christianpayo32@gmail.com","932939",vehi);
let max = 999999;
let min = 100000;
let abo=new Abono(clie,moment(),1,25);
abo.setPlaza(parking.getPlazasTurismo[0]);
parking.getPlazasTurismo[0].setReservado(true);
listaAbonos.push(abo);
clientes.push(clie);
console.log(abo);
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
        case 3:
            let matriculaAC=readline.question('¿Cuál es la matrícula de su vehículo?');
            let dniA=readline.question('Introduzca su dni: ');
            let pinA=readline.question('Introduzca el pin de acceso: ');
            depositarVehiculoReserv(matriculaAC,dniA,clientes,listaAbonos,pinA);
            break;
        case 4:
            let matriculaRC=readline.question('¿Cuál es la matrícula de su vehículo?');
            let dniR=readline.question('Introduzca su dni: ');
            let pinR=readline.question('Introduzca el pin de acceso: ');
            retirarVehiculoReserv(matriculaRC,dniR,clientes,listaAbonos,pinR);
            break;
        case 5:
            console.log(parking);
            break;
        default:
            salir=true;
            break;
    }
} while (!salir);

console.log("bye");