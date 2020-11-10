import { Plaza } from '../modelo/Plaza.js';
import {cargarListadoTotalPlazasR, buscaPlazaR, listarPorTipoR} from '../repositorio/PlazaRepository.js';

function contadorPlazasLibres(lista){
    let num = 0;
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false){
            contador +=1;
        }
    });

    return num;
}

function contadorPlazasLibresTipo(tipo){
    
    let lista = cargarListadoTotalPlazas();
    let num;
    
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false && element.getTipo===tipo){
            contador +=1;
        }
    });

    return num;
}

function darPlazasLibresTipo(tipo){
    
    let lista = cargarListadoTotalPlazas();
    let num;
    let encontrado = false;
    let plaza;
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false && element.getTipo===tipo && encontrado ==false){
            encontrado = true;
            plaza = element;
        }
    });

    return plaza;
}

function buscarPlazaPorMatricula(matricula){
    
    let lista = cargarListadoTotalPlazas();
    let num;
    
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false && element.getTipo===tipo){
            contador +=1;
        }
    });

    return num;
}

function ocuparPlaza(plaza){
    plaza.setOcupado(true);
}

function liberaPlaza(plaza){
    plaza.setOcupado(false);
}


function cargarListadoTotalPlazas(){
    return cargarListadoTotalPlazasR();
}

function buscaPlaza(nombre){
    return buscaPlazaR(nombre);
}

function listarPorTipo(tipo){    
    return listarPorTipoR(tipo);
}



export {cargarListadoTotalPlazas, buscaPlaza, listarPorTipo, contadorPlazasLibres,contadorPlazasLibresTipo,
     darPlazasLibresTipo, ocuparPlaza, liberaPlaza};
