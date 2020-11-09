import { Parking } from '../modelo/Parking.js';

function cargarListadoParking(){
    let parking = new Parking();

    let cadena = ["Turismo", "Motos", "Carabana"];
    let plazasTurismos = new Array();
    let plazasMotos = new Array();
    let plazasCarabana = new Array();
    for (let i = 0; i < cadena.length; i++) {
        for (let j = 1; j < 16; j++) {
            if (i == 0) {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[0]);
                plazasTurismos.push(plazai);
            } else if (i == 1) {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[1]);
                plazasMotos.push(plazai);
            } else {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[2]);
                plazasCarabana.push(plazai);
            }
        }
    }

    parking.setPlazasCarabana(plazasCarabana);
    parking.setPlazasMotos(plazasMotos);
    parking.setPlazasTurismo(plazasTurismos);
    
    return parking;
}

export {cargarListadoParking};