import { Parking } from '../modelo/Parking.js';
import { Plaza } from '../modelo/Plaza.js';

function cargarListadoParkingR(){
    let parking = new Parking();

    let cadena = ["Turismo", "Moto", "Carabana"];
    let plazasTurismos = new Array();
    let plazasMotos = new Array();
    let plazasCaravana = new Array();
    for (let i = 0; i < cadena.length; i++) {
        for (let j = 1; j < 16; j++) {
            if (i == 0) {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[0]);
                plazai.setCosteMin(0.12);
                plazasTurismos.push(plazai);
            } else if (i == 1) {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[1]);
                plazai.setCosteMin(0.08);
                plazasMotos.push(plazai);
            } else {
                let plazai = new Plaza(cadena[0].charAt() + j, cadena[2]);
                plazai.setCosteMin(0.45);
                plazasCaravana.push(plazai);
            }
        }
    }

    parking.setPlazasCaravana(plazasCaravana);
    parking.setPlazasMotos(plazasMotos);
    parking.setPlazasTurismo(plazasTurismos);
    
    return parking;
}

export {cargarListadoParkingR};