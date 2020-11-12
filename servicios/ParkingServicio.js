import { Parking } from '../modelo/Parking.js';
import { contadorPlazasLibres } from './PlazaServicio.js';

function mostrarPlazasDisponibles(parking){

    let listaCoch = parking.getPlazasTurismo;
    let listaMot = parking.getPlazasMotos;
    let listaCara = parking.getPlazasCaravana;
    let contador = 0;
    contador = contadorPlazasLibres(listaCoch);
    console.log("El número de plazas libres para coches son: " + contador);
    contador = contadorPlazasLibres(listaMot);
    console.log("El número de plazas libres para motos son: " + contador);

    contador = contadorPlazasLibres(listaCara);
    console.log("El número de plazas libres para caravanas son: " + contador);
}


function estadoParking(Parking,opcion){
    let parking=new Map();
    if(opcion==1){
        Parking.getPlazasTurismo.forEach(element => {
            if(!element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Libre");
            }else if(element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Ocupada");
            }else if(!element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono libre");
            }else if(element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono reservado");
            }
        });
    }else if(opcion==2){
        Parking.getPlazasMotos.forEach(element => {
            if(!element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Libre");
            }else if(element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Ocupada");
            }else if(!element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono libre");
            }else if(element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono reservado");
            }
        });
    }else{
        Parking.getPlazasCaravana.forEach(element => {
            if(!element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Libre");
            }else if(element.getOcupado && !element.getReservado){
                parking.set(element.getNombre,"Ocupada");
            }else if(!element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono libre");
            }else if(element.getOcupado && element.getReservado){
                parking.set(element.getNombre,"Abono reservado");
            }
        });
    }
    return parking;
}


function imprimirMapa(map){
    for (let [key, value] of map) {
        console.log(key + ' -> ' + value);
    }
}
export {mostrarPlazasDisponibles,estadoParking,imprimirMapa}

