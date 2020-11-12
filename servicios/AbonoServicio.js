import { Abono } from '../modelo/Abono.js';
import { Factura } from '../modelo/Factura.js';
import { anyadirAbonos, eliminarAbonos, buscarAbonoPorDni } from '../repositorios/AbonoRepository.js';
import moment from 'moment';
import {anyadirlistadoClientes, buscarlistadoClientes,depositarVehiculo, retirarVehiculo, depositarVehiculoReserv, retirarVehiculoReserv, modificarCliente
} from './ClienteServicio.js';
import * as readline from 'readline-sync';

function anyadirAbono(listadoAbonos, abono) {
    return anyadirAbonos(listadoAbonos, abono);
}

function eliminarAbono(listadoAbonos, abono) {
    return eliminarAbonos(listadoAbonos, abono);
}

function buscarAbonoDni(listadoAbonos, dni) {
    return buscarAbonoPorDni(listadoAbonos, dni);
}

function consultarAnual(listadoAbonos, anio) {
    let lista = new Array();
    let mapaDatos = new Map();
    let cantidad = 0;
    listadoAbonos.forEach(element => {
        if (element.getFechaFinal != undefined) {
            let fecha = element.getFechaFinal;
            fecha = fecha.format("YYYY");
            if (fecha == anio) {
                lista.push(element);
            }
        }
    });
    lista.forEach(element => {
        mapaDatos.set(element, element.getPrecio);
    });
    lista.forEach(element => {
        cantidad = cantidad + element.getPrecio;
    });
    mapaDatos.set("Precio final", cantidad);

    return mapaDatos;
}

function caducidadAbono(mes, anio, listadoAbonos) {
    let caducadaMes = [];
    listadoAbonos.forEach(element => {
        if (element.getFechaFinal != undefined) {
            let fechaFinal = element.getFechaFinal.format("DD/MM/YYYY HH:mm:ss").split(" ");
            let fechaSeparada = fechaFinal[0].split("/");
            if (anio == fechaSeparada[2]) {
                if (mes == fechaSeparada[1]) {
                    caducadaMes.push(element);
                }
            }
        }
    });
    return caducadaMes;
}

function caducidadBonosProximosDias(listadoAbonos) {
    let hoy = moment();
    let fechaFinalCaducidad = moment().add(10, 'days');
    let caducadaMes = [];
    listadoAbonos.forEach(element => {
        let fechaFinal = element.getFechaFinal;
        if (fechaFinal != undefined) {
            if (moment(fechaFinal).isBefore(fechaFinalCaducidad) && moment(fechaFinal).isAfter(hoy)) {
                caducadaMes.push(element);
            }
        }
    });
    return caducadaMes;
}
function modificarAbono(abono, opt, cliente, listaFacturas) {
    if (opt == 1) {
        let clientMod;
        clientMod = modificarCliente(cliente);
        abono.setCliente(clientMod);
    } else if (opt == 2) {
        let readlineSync = readline,
            opciones = ["Mensual->25€", "Trimestral->70€", "Semestral->130€", "Anual->200€"],
            opcionAbonos = readlineSync.keyInSelect(opciones, '¿Que desea realizar?');
        let factura;
        switch (opcionAbonos + 1) {
            case 1:
                abono.setFechaFinal(moment().add(1, "months"));
                abono.setMeses(1);
                abono.setPrecio(25);
                factura = new Factura(moment(), cliente, 25);
                break;

            case 2:
                abono.setFechaFinal(moment().add(3, "months"));
                abono.setMeses(3);
                abono.setPrecio(70);
                factura = new Factura(moment(), cliente, 70);
                break;

            case 3:
                abono.setFechaFinal(moment().add(6, "months"));
                abono.setMeses(6);
                abono.setPrecio(130);
                factura = new Factura(moment(), cliente, 130);
                break;

            case 4:
                abono.setFechaFinal(moment().add(12, "months"));
                abono.setMeses(12);
                abono.setPrecio(200);
                factura = new Factura(moment(), cliente, 200);
                break;
        }
        listaFacturas.push(factura);
    }

}
function borrarAbono(listaAbonos, clienteDni, listaClientes) {
    let abono = buscarAbonoDni(listaAbonos, clienteDni.toUpperCase());
    let cliente = abono.getCliente;

    listaAbonos.splice(listaAbonos.indexOf(abono), 1);
    listaClientes.splice(listaAbonos.indexOf(cliente), 1);
}
export { anyadirAbono, eliminarAbono, buscarAbonoDni, consultarAnual, caducidadAbono, caducidadBonosProximosDias, modificarAbono, borrarAbono };
