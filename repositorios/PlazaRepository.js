import { Plaza } from '../modelo/Plaza.js';

function cargarListadoTotalPlazasR(parking){
    let lista = new Array();
    let turismos=parking.getPlazasTurismo;
    let motos=parking.getPlazasMotos;
    let cara=parking.getPlazasCaravana;
    turismos.forEach(element=>{
        lista.push(element);
    });
    motos.forEach(element=>{
        lista.push(element);
    });
    cara.forEach(element => {
        lista.push(element);
    });
    return lista;
}

function buscaPlazaR(nombre,parking){
    let lista = new Array();
    lista = cargarListadoTotalPlazasR(parking);
    index = lista.find(element => element.getNombre === nombre);
    if (index != undefined) {
        return cliente;
    }
}

function listarPorTipoR(tipo,parking){
    let lista = new Array();
    parking.forEach(element => {
        if (element.getTipo === tipo){
           lista.concat(element);
        }
    });
    
    return lista;
}




export {cargarListadoTotalPlazasR, buscaPlazaR, listarPorTipoR};