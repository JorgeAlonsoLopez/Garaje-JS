class Parking {
    plazasTurismo;
    plazasMotos;
    plazasCarabanas;
    constructor() {
        let plazasTurismos = [];
        let plazasMotos = [];
        let plazasCarabana = [];
        this.plazasTurismo=plazasTurismos;
        this.plazasMotos=plazasMotos;
        this.plazasCarabanas=plazasCarabana;
    }
    get getplazasTurismo(){
        return this.plazasTurismo;
    }
    get getplazasMotos(){
        return this.plazasMotos;
    }
    get getplazasCarabana(){
        return this.plazasCarabana;
    }
    set setPlazasCarabana(plazasCarabana) {
        this.plazasCarabana = plazasCarabana;
    }
    set setPlazasMotos(plazasMotos) {
        this.plazasMotos = plazasMotos;
    }
    set setPlazasTurismo(plazasTurismo) {
        this.plazasTurismo = plazasTurismo;
    }
}


export {Parking};
