import { Vehiculo } from './modelo/Vehiculo.js';
import { Abono } from './modelo/Abono.js';
import { Cliente } from './modelo/Cliente.js';
import { Parking } from './modelo/Parking.js';
import { Plaza } from './modelo/Plaza.js';
import { Ticket } from './modelo/Ticket.js';
import { anyadirListaTicket, buscarTicket, pintarTick, facturacion } from './servicios/TicketServicio.js';
import {
    cargarListadoTotalPlazas, buscaPlaza, listarPorTipo, contadorPlazasLibres, contadorPlazasLibresTipo,
    darPlazasLibresTipo, ocuparPlaza, liberaPlaza
} from './servicios/PlazaServicio.js';
import { mostrarPlazasDisponibles, estadoParking, imprimirMapa } from './servicios/ParkingServicio.js';
import { anyadirListaFactura, buscarFact, buscarFactAnyo } from './servicios/FacturaServicio.js';
import { anyadirlistadoClientes, buscarlistadoClientes, depositarVehiculo, retirarVehiculo, depositarVehiculoReserv, retirarVehiculoReserv, modificarCliente } from './servicios/ClienteServicio.js';
import { anyadirAbono, eliminarAbono, buscarAbonoDni, consultarAnual, caducidadAbono, caducidadBonosProximosDias, modificarAbono, borrarAbono, listarCaducidadAbono } from './servicios/AbonoServicio.js';
import * as readline from 'readline-sync';
import moment from 'moment';
import { Factura } from './modelo/Factura.js';
let contras = "sales";
let salir = false;
let listaFacturas = [];
let salirAdmin = false;
let salirAbonos = false;
let salirBusqueda = false;
let tickets = new Array();
let clientes = new Array();
let parking = new Parking();
let listaAbonos = [];
let clientePrueba = new Cliente("abc".toUpperCase(), "Pepe", "Ramirez", "123456", "email@email.com", new Vehiculo("123"));
let abonoPrueba = new Abono(clientePrueba, moment(), moment().add(6, "months"), 6, 130);
console.log("**pin del cliente de prueba: " + abonoPrueba.getPin);
let facturaPrueba = new Factura(moment(), clientePrueba, abonoPrueba.getPrecio);
let plazaPrueba = (darPlazasLibresTipo("Turismo", parking));
abonoPrueba.setPlaza(plazaPrueba);
plazaPrueba.setReservado(true);
anyadirlistadoClientes(clientes, clientePrueba);
anyadirAbono(listaAbonos, abonoPrueba);
anyadirListaFactura(listaFacturas, facturaPrueba);
do {
    console.log("\n");
    mostrarPlazasDisponibles(parking);
    console.log("\n------------------------------------");
    var readlineSync = readline,
        opciones = ["Guardar vehículo", "Retirar Vehículo", 'Guardar Vehículo Cliente', 'Retirar Vehículo Cliente', 'Zona Administrador'],
        index = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
    switch (index + 1) {
        case 1:
            let matriculaA = readline.question('¿Cuál es la matrícula de su vehículo? ');
            var readlineSync = readline,
                opciones = ["Turismo", "Moto", "Caravana"],
                eleccion = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
            depositarVehiculo(matriculaA, eleccion + 1, tickets, parking);
            break;
        case 2:
            let matriculaR = readline.question('¿Cuál es la matrícula de su vehículo? ');
            let nombrePlaza = readline.question('¿Cuál es el nombre de la plaza? ');
            retirarVehiculo(matriculaR, nombrePlaza, parking, tickets);
            break;
        case 3:
            let matriculaAC = readline.question('¿Cuál es la matrícula de su vehículo? ');
            let dniA = readline.question('Introduzca su dni: ');
            let pinA = readline.question('Introduzca el pin de acceso: ');
            depositarVehiculoReserv(matriculaAC, dniA, clientes, listaAbonos, pinA);
            break;
        case 4:
            let matriculaRC = readline.question('¿Cuál es la matrícula de su vehículo? ');
            let dniR = readline.question('Introduzca su dni: ');
            let pinR = readline.question('Introduzca el pin de acceso: ');
            retirarVehiculoReserv(matriculaRC, dniR, clientes, listaAbonos, pinR);
            break;
        case 5:
            let passw = readline.question('Introduzca la contraseña: ');
            if (passw = contras) {
                do {
                    console.log("\nMenú del administrador");
                    var readlineSync = readline,
                        opciones = ["Estado del Parking", "Facturación de tickets", "Facturación de abonados", "Abonos", "Caducidad Abonados"],
                        index = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
                    switch (index + 1) {
                        case 1:
                            var readlineSync = readline,
                                opciones = ["Plazas turismo", "Plazas motos", "Plazas caravanas"],
                                index = readlineSync.keyInSelect(opciones, '¿Que desea consultar? ');
                            if (index != -1) {
                                imprimirMapa(estadoParking(parking, index + 1));
                            } else {
                                console.log("Cancelando operación");
                            }
                            break;
                        case 2:
                            console.log("Vamos a consultar la facturación entre 2 fechas");
                            let anioFecha1 = readline.question('Introduce el año de la primera fecha: ');
                            let mesFecha1 = readline.question('Introduce el mes a consultar en la primera fecha: ');
                            let diaFecha1 = readline.question('Introduce el día del mes: ');
                            let fecha1 = moment([(anioFecha1), parseInt(mesFecha1) - 1, (diaFecha1)]);
                            while (!fecha1.isValid()) {
                                console.log("La fecha introducida no es valida, revise los datos por favor");
                                let anioFecha1 = readline.question('Introduce el año de la primera fecha: ');
                                let mesFecha1 = readline.question('Introduce el mes a consultar en la primera fecha: ');
                                let diaFecha1 = readline.question('Introduce el día del mes de la primera fecha: ');
                                fecha1 = moment([(anioFecha1), parseInt(mesFecha1) - 1, (diaFecha1)]);
                            }
                            let anioFecha2 = readline.question('Introduce el año de la segunda fecha: ');
                            let mesFecha2 = readline.question('Introduce el mes a consultar en la segunda fecha: ');
                            let diaFecha2 = readline.question('Introduce el día del mes de la segunda fecha: ');
                            let fecha2 = moment([(anioFecha2), parseInt(mesFecha2) - 1, (diaFecha2)]);
                            while (!fecha2.isValid()) {
                                console.log("La fecha introducida no es valida, revise los datos por favor");
                                let anioFecha2 = readline.question('Introduce el año de la segunda fecha: ');
                                let mesFecha2 = readline.question('Introduce el mes a consultar en la segunda fecha: ');
                                let diaFecha2 = readline.question('Introduce el día del mes de la segunda fecha: ');
                                fecha2 = moment([(anioFecha2), parseInt(mesFecha2) - 1, (diaFecha2)]);
                            }
                            console.log("La facturación es: " + facturacion(tickets, fecha1, fecha2) + "€");
                            break;
                        case 3:
                            let anyoFactAbonado = readline.question('Inserte el año en el que desea buscar los abonados: ');
                            ((buscarFactAnyo(listaFacturas, anyoFactAbonado)));
                            break;
                        case 4:
                            do {
                                console.log("\nMenú de gestión de abonos.");
                                var readlineSync = readline,
                                    opciones = ["Alta abonado", "Modificación abonado", "Baja abonado"],
                                    opcionAbonos = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
                                switch (opcionAbonos + 1) {
                                    case 1:
                                        console.log("Procedemos a crear un nuevo abonado");
                                        console.log("Procedemos a dar de alta al cliente");
                                        let dniCliente = readline.question("Introduzca el dni del usuario: ");
                                        let nombreCliente = readline.question("Introduzca el nombre del usuario: ");
                                        let apellidos = readline.question("Introduzca los apellido del usuario: ");
                                        let tarjetaDeCredito = readline.question("Introduzca la tarjeta de crédito del usuario: ");
                                        let email = readline.question("Introduzca el email del usuario: ");
                                        let matricula = readline.question("Introduzca la matrícula del vehículo: ");
                                        let readlineSync = readline,
                                            opciones = ["Turismo", "Moto", "Caravana"],
                                            opcionVehi = readlineSync.keyInSelect(opciones, '¿De que vehículo dispone? ');
                                        let reserva = false;
                                        let plazaReservar;
                                        switch (opcionVehi + 1) {
                                            case 1:
                                                if (darPlazasLibresTipo("Turismo", parking) != undefined) {
                                                    console.log("Plazas disponibles");
                                                    plazaReservar = (darPlazasLibresTipo("Turismo", parking));
                                                    reserva = true;
                                                } else {
                                                    console.log("Todas las Plazas ocupadas");
                                                }
                                                break;
                                            case 2:
                                                if (darPlazasLibresTipo("Moto", parking) != undefined) {
                                                    console.log("Plazas disponibles");
                                                    plazaReservar = (darPlazasLibresTipo("Moto", parking));
                                                    reserva = true;
                                                } else {
                                                    console.log("Todas las Plazas ocupadas");
                                                }
                                                break;
                                            case 3:
                                                if (darPlazasLibresTipo("Caravana", parking) != undefined) {
                                                    console.log("Plazas disponibles");
                                                    plazaReservar = (darPlazasLibresTipo("Caravana", parking));
                                                    reserva = true;
                                                } else {
                                                    console.log("Todas las Plazas ocupadas");
                                                }
                                                break;
                                            default:
                                                break;
                                        }
                                        if (reserva) {
                                            let vehiculoCliente = new Vehiculo(matricula);
                                            let nuevoCliente = new Cliente(dniCliente.toUpperCase(), nombreCliente, apellidos, tarjetaDeCredito, email, vehiculoCliente);
                                            let nuevoAbono;
                                            let readlineSync = readline,
                                                opciones = ["Mensual->25€", "Trimestral->70€", "Semestral->130€", "Anual->200€"],
                                                opcionBono = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
                                            switch (opcionBono + 1) {
                                                case 1:
                                                    nuevoAbono = new Abono(nuevoCliente, moment(), moment().add(1, "months"), 1, 25);
                                                    break;
                                                case 2:
                                                    nuevoAbono = new Abono(nuevoCliente, moment(), moment().add(3, "months"), 3, 70);
                                                    break;
                                                case 3:
                                                    nuevoAbono = new Abono(nuevoCliente, moment(), moment().add(6, "months"), 6, 130);
                                                    break;
                                                case 4:
                                                    nuevoAbono = new Abono(nuevoCliente, moment(), moment().add(12, "months"), 12, 200);
                                                    break;
                                                default:
                                                    break;
                                            }
                                            if (opcionBono != -1) {
                                                let nuevaFactura = new Factura(moment(), nuevoCliente, nuevoAbono.getPrecio);
                                                nuevoAbono.setPlaza(plazaReservar);
                                                plazaReservar.setReservado(true);
                                                anyadirlistadoClientes(clientes, nuevoCliente);
                                                anyadirAbono(listaAbonos, nuevoAbono);
                                                anyadirListaFactura(listaFacturas, nuevaFactura);
                                                console.log("\nSu pin es el siguiente, no lo pierda: "+nuevoAbono.getPin);
                                            } else {
                                                console.log("Cancelando operación");
                                            }
                                        } else {
                                            console.log("Cancelando operación");
                                        }
                                        break;
                                    case 2:
                                        let editar = readline,
                                            opcionesEditar = ["Cambiar Datos Abonado", "Ampliar Abono"],
                                            opt = editar.keyInSelect(opcionesEditar, '¿Que desea realizar? ');
                                        if (opt != -1) {
                                            let dniClienteModificar = readline.question("Introduzca el DNI del cliente: ");
                                            if (buscarAbonoDni(listaAbonos, dniClienteModificar.toUpperCase()) != undefined) {
                                                if (buscarlistadoClientes(clientes, dniClienteModificar.toUpperCase()) != undefined) {
                                                    modificarAbono(buscarAbonoDni(listaAbonos, dniClienteModificar.toUpperCase()), opt + 1, buscarlistadoClientes(clientes, dniClienteModificar.toUpperCase()), listaFacturas);
                                                    console.log("Volverá al menú principal");
                                                } else {
                                                    console.log("Operación cancelada");
                                                }
                                            } else {
                                                console.log("Operación cancelada");
                                            }
                                        } else {
                                            console.log("Operación cancelada");
                                        }
                                        break;
                                    case 3:
                                        let dniClienteModificar = readline.question("Introduzca el DNI del cliente: ");
                                        borrarAbono(listaAbonos, dniClienteModificar, clientes);
                                        break;
                                    default:
                                        salirAbonos = true;
                                        break;
                                }
                            } while (!salirAbonos);
                            break;
                        case 5:
                            do {
                                var readlineSync = readline,
                                    opciones = ["Caducidad de un mes", "Caducidad en los proximos diez días"],
                                    opcionCadu = readlineSync.keyInSelect(opciones, '¿Que desea realizar? ');
                                switch (opcionCadu + 1) {
                                    case 1:
                                        let mesComprobar = readline.question('Introduce el mes a comprobar, con 2 dígitos, por ejemplo 04, 24, etc: ');
                                        let anioComprobar = readline.question('Introduce el año a comprobar: ')

                                        if (!caducidadAbono(mesComprobar, anioComprobar, listaAbonos)) {
                                            console.log("No hay ningún abono que termine en ese mes/año.");
                                        } else {
                                            listarCaducidadAbono(mesComprobar, anioComprobar, listaAbonos);
                                        }
                                        break;
                                    case 2:
                                        if (caducidadBonosProximosDias(listaAbonos).length == 0) {
                                            console.log("No hay ningún abono que termine en los próximos 10 días.");
                                        } else {
                                            console.log(caducidadBonosProximosDias(listaAbonos));
                                        }
                                        break;
                                    default:
                                        salirBusqueda = true;
                                        break;
                                }
                            } while (!salirBusqueda);
                            break;
                        default:
                            salirAdmin = true;
                            break;
                    }
                } while (!salirAdmin);
            }

            break;
        default:
            salir = true;
            break;
    }
} while (!salir);

console.log("Gracias por utilizar mi aplicación");