import { Abono } from '../modelo/Abono.js';
import {anyadirAbonos, eliminarAbonos, buscarAbonoPorDni} from '../repositorios/AbonoRepository.js';
import moment from 'moment';

function anyadirAbono(listadoAbonos, abono){
    return anyadirAbonos(listadoAbonos, abono);
}

function eliminarAbono(listadoAbonos, abono){
    return eliminarAbonos(listadoAbonos, abono);
}

function buscarAbonoDni(listadoAbonos, dni){
    return buscarAbonoPorDni(listadoAbonos, dni);
}

function consultarAnual(listadoAbonos){
    let lista= new Array();
    let cantidad;
    listadoAbonos.forEach(element => {
        if(element.getFechaFinal){
            lista.push(element);
        }
    });

}

function caducidadAbono(mes,anio,listadoAbonos){
    let caducadaMes=[];
    listadoAbonos.forEach(element=>{
        let fechaFinal=element.getFechaFinal.format("DD/MM/YYYY HH:mm:ss").split(" ");
        let fechaSeparada=fechaFinal[0].split("/");
        if(anio==fechaSeparada[2]){
            if(mes==fechaSeparada[1]){
                caducadaMes.push(element);
            }
        }
    });
    return caducadaMes;
}

function caducidadBonosProximosDias(listadoAbonos){
    let hoy=moment();
    let fechaFinalCaducidad=moment().add(10,'days');
    let caducadaMes=[];
    listadoAbonos.forEach(element=>{
        let fechaFinal=element.getFechaFinal;
        if(moment(fechaFinal).isBefore(fechaFinalCaducidad) && moment(fechaFinal).isAfter(hoy)){
            caducadaMes.push(element);
        }
    });
    return caducadaMes;
}
export {anyadirAbono, eliminarAbono, buscarAbonoDni, consultarAnual,caducidadAbono,caducidadBonosProximosDias};
