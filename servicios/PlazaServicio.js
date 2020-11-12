import { Plaza } from '../modelo/Plaza.js';
import {cargarListadoTotalPlazasR, buscaPlazaR, listarPorTipoR} from '../repositorios/PlazaRepository.js';
function contadorPlazasLibres(lista){
    let num = 0;
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false){
            num +=1;
        }
    });

    return num;
}

function contadorPlazasLibresTipo(tipo,parking){
    let lista = cargarListadoTotalPlazas(parking);
    let num=0;
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false && element.getTipo===tipo){
            num +=1;
        }
    });

    return num;
}

function darPlazasLibresTipo(tipo,parking){
    
    let lista = cargarListadoTotalPlazas(parking);
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
/*
function buscarPlazaPorMatricula(matricula,parking){
    
    let lista = cargarListadoTotalPlazas(parking);
    let num;
    
    lista.forEach(element => {
        if(element.getOcupado == false && element.getReservado == false && element.getTipo===tipo){
            contador +=1;
        }
    });

    return num;
}*/

function ocuparPlaza(plaza){
    plaza.setOcupado(true);
}

function liberaPlaza(plaza){
    plaza.setOcupado(false);
}


function cargarListadoTotalPlazas(parking){
    return cargarListadoTotalPlazasR(parking);
}

function buscaPlaza(nombre,parking){
    return buscaPlazaR(nombre,parking);
}

function listarPorTipo(tipo){    
    return listarPorTipoR(tipo);
}



export {cargarListadoTotalPlazas, buscaPlaza, listarPorTipo, contadorPlazasLibres,contadorPlazasLibresTipo,
     darPlazasLibresTipo, ocuparPlaza, liberaPlaza};
