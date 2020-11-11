import * as Plaza from "./Plaza.js";
export class Parking {
    plazasTurismo;
    plazasMotos;
    plazasCaravanas;
    constructor() {
        let cadena = ["Turismo", "Moto", "Caravana"];
        let precio = [0.12, 0.08, 0.45];
        let plazasTurismos = [];
        let plazasMotos = [];
        let plazasCaravana = [];
        for (let i = 0; i < cadena.length; i++) {
            for (let j = 1; j < 16; j++) {
                if (i == 0) {
                    let plazai = new Plaza.Plaza(cadena[i].charAt() + j, cadena[i], precio[i]);
                    plazasTurismos.push(plazai);
                } else if (i == 1) {
                    let plazai = new Plaza.Plaza(cadena[i].charAt() + j, cadena[i], precio[i]);
                    plazasMotos.push(plazai);
                } else {
                    let plazai = new Plaza.Plaza(cadena[i].charAt() + j, cadena[i], precio[i]);
                    plazasCaravana.push(plazai);
                }
            }
        }
        this.plazasTurismo=plazasTurismos;
        this.plazasMotos=plazasMotos;
        this.plazasCaravanas=plazasCaravana;
    }
    get getPlazasTurismo(){
        return this.plazasTurismo;
    }
    get getPlazasMotos(){
        return this.plazasMotos;
    }
    get getPlazasCaravana(){
        return this.plazasCaravanas;
    }
    setPlazasCaravana(plazasCaravana){
        this.plazasCaravanas=plazasCaravana;
    }
    setPlazasTurismo(plazasTurismo){
        this.plazasTurismo=plazasTurismo;
    }
    setPlazasMotos(plazasMotos){
        this.plazasMotos=plazasMotos;
    }
}
