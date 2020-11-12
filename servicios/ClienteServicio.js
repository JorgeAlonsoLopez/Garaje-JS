import { Cliente } from '../modelo/Cliente.js';
import { Vehiculo } from '../modelo/Vehiculo.js';
import { Ticket } from '../modelo/Ticket.js';
import { anyadirlistadoClientesR, buscarlistadoClientesR } from '../repositorios/ClienteRepository.js';
import { anyadirListaTicket, pintarTick, buscarTicket, pagarTicket } from './TicketServicio.js';
import { buscarAbonoDni } from './AbonoServicio.js';
import { contadorPlazasLibres, contadorPlazasLibresTipo, buscaPlaza, darPlazasLibresTipo, ocuparPlaza, liberaPlaza } from './PlazaServicio.js';
import moment from 'moment';
import * as readline from 'readline-sync';
function depositarVehiculo(matricula, opcion, listaTick, parking) {
    let tipo = "";
    if (opcion == 1) {
      tipo = "Turismo";
    } else if (opcion == 2) {
      tipo = "Moto";
    } else {
      tipo = "Caravana";
    }
  
    let resultado = false;
    let plaza;
    let vehic;
    let tick;
    let max = 999999;
    let min = 100000;
    if (contadorPlazasLibresTipo(tipo, parking) > 0) {
      resultado = true;
      plaza = darPlazasLibresTipo(tipo, parking);
      vehic = new Vehiculo(matricula);
      plaza.setVehiculo(vehic);
      tick = new Ticket(moment(), matricula, plaza.getNombre);
      tick.setPin(Math.floor(Math.random() * (max - min + 1)) + min);
      anyadirListaTicket(listaTick, tick);
      pintarTick(tick);
      ocuparPlaza(plaza);
    }
  
    if (resultado) {
      return "Se ha finalizado el aparcado el vehículo sin problemas";
    } else {
      return "No se puede aparcar, no hay sitio.";
    }
  }
  
  function retirarVehiculo(matricula, nombrePlaza, parking, listaTick) {
    nombrePlaza = nombrePlaza.toUpperCase();
    let plaza = buscaPlaza(nombrePlaza, parking);
    let tick = buscarTicket(listaTick, matricula);
    let pagado = false;
    
    if (tick != undefined) {
      let pinN = readline.question("Por favor, inserte el pin.");
      while (pinN != tick.getPin) {
        pinN = readline.question("El pin no es correcto, inténtelo de nuevo.");
      }
  
      pagarTicket(nombrePlaza,parking,tick);
      tick.setFechaSalida(moment());
      liberaPlaza(plaza);
      pintarTick(tick);
      console.log("El vehículo se ha retirado con éxito.");
      console.log("Gracias por usar nuestros servicios.");
    } else {
      console.log(
        "No ha sido posible la retirada no nos consta su vehiculo en el sistema."
      );
    }
  }
  
  function depositarVehiculoReserv(
    matricula,
    dni,
    listadoClientes,
    listadoAbonos,
    pin
  ) {
    if (matricula ==buscarlistadoClientes(listadoClientes, dni).getVehiculo.getMatricula) {
      console.log(buscarAbonoDni(listadoAbonos, dni));
      if (pin == buscarAbonoDni(listadoAbonos, dni).getPin) {
        ocuparPlaza(buscarAbonoDni(listadoAbonos, dni).getPlaza);
        console.log("El vehículo se ha aparcado con éxito.");
        console.log("Gracias por usar nuestros servicios.");
      }
    }
  }
  
  function retirarVehiculoReserv(
    matricula,
    dni,
    listadoClientes,
    listadoAbonos,
    pin
  ) {
    if (
      matricula ==
      buscarlistadoClientes(listadoClientes, dni).getVehiculo.getMatricula
    ) {
      if (pin == buscarAbonoDni(listadoAbonos, dni).getPin) {
        liberaPlaza(buscarAbonoDni(listadoAbonos, dni).getPlaza);
        console.log("El vehículo se ha retirado con éxito.");
        console.log("Gracias por usar nuestros servicios.");
      }
    }
  }
  
  function anyadirlistadoClientes(listadoClientes, cliente) {
    return anyadirlistadoClientesR(listadoClientes, cliente);
  }
  
  function buscarlistadoClientes(listadoClientes, dni) {
    return buscarlistadoClientesR(listadoClientes, dni);
  }
  function modificarCliente(cliente) {
    let nombre = readline.question("Por favor, inserte su nombre.");
    let apellidos = readline.question("Por favor, inserte sus apellidos.");
    let numTarjeta = readline.question("Por favor, inserte su número de tarjeta.");
    let email = readline.question("Por favor, inserte su email.");
    cliente.setNombre(nombre);
    cliente.setApellidos(apellidos);
    cliente.setNumTarjeta(numTarjeta);
    cliente.setEmail(email);
    return cliente;
  }
export {
    anyadirlistadoClientes, buscarlistadoClientes, depositarVehiculo,
    retirarVehiculo, depositarVehiculoReserv, retirarVehiculoReserv, modificarCliente
};