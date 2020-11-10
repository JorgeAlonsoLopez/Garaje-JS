import { Parking } from '../modelo/Parking.js';
import { cargarListadoParkingR } from '../repositorio/ParkingRepository.js';
import { contadorPlazasLibres } from '../servicio/PlazaServicio.js';

function mostrarPlazasDisponibles(){

    let listaCoch = cargarListadoParking().getPlazasTurismo;
    let listaMot = cargarListadoParking().getPlazasMotos;
    let listaCara = cargarListadoParking().getPlazasCarabana;
    let contador = 0;

    contador = contadorPlazasLibres(listaCoch);
    console.log("El número de plazas libres para coches son: " + contador);

    contador = contadorPlazasLibres(listaMot);
    console.log("El número de plazas libres para motos son: " + contador);

    contador = contadorPlazasLibres(listaCara);
    console.log("El número de plazas libres para caravanas son: " + contador);
}

function cargarListadoParking(){   
    return cargarListadoParkingR();
}

export {mostrarPlazasDisponibles, cargarListadoParking};

