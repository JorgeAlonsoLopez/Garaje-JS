import { Plaza } from '../modelo/Plaza.js';
import {cargarListadoParkingR} from '../repositorio/ParkingRepository.js';

function cargarListadoTotalPlazasR(){
    let lista = new Array();
    lista.concat(cargarListadoParkingR.getplazasTurismo);
    lista.concat(cargarListadoParkingR.getplazasMotos);
    lista.concat(cargarListadoParkingR.getplazasCaravana);
    return lista;
}

function buscaPlazaR(nombre){
    let lista = new Array();
    lista = cargarListadoTotalPlazasR();
    lista.find(element => element.getNombre === nombre);
    if (index != undefined) {
        return cliente;
    }
}

function listarPorTipoR(tipo){
    let lista = new Array();
    cargarListadoTotalPlazasR().forEach(element => {
        if (element.getTipo === tipo){
           lista.concat(element);
        }
    });
    
    return lista;
}


export {cargarListadoTotalPlazasR, buscaPlazaR, listarPorTipoR};