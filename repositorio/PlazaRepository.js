import { Plaza } from '../modelo/Plaza.js';
import {cargarListadoParking} from '../repositorio/ParkingRepository.js';

function cargarListadoPlazas(){
    let lista = new Array();
    lista.concat(cargarListadoParking.getplazasTurismo());
    lista.concat(cargarListadoParking.getplazasMotos());
    lista.concat(cargarListadoParking.getplazasCarabana());
    return lista;
}

function buscaPlaza(nombre){
    let lista = new Array();
    lista = cargarListadoPlazas();
    lista.find(element => element.getNombre() === nombre);
    if (index != undefined) {
        return cliente;
    }
}

function listarPorTipo(tipo){
    let lista = new Array();
    cargarListadoPlazas().forEach(element => {
        if (element.getTipo() === tipo){
           lista.concat(element);
        }
    });
    
    return lista;
}


export {cargarListadoPlazas, buscaPlaza, listarPorTipo};