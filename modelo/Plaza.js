class Plaza {
    nombre;
    tipo;
    ocupado;
    reservado;
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ocupado = false;
        this.reservado = false;
    }
    get getNombre() {
        return this.nombre;
    }
    get getTipo() {
        return this.tipo;
    }
    get getOcupado() {
        return this.ocupado;
    }
    get getReservado() {
        return this.reservado;
    }
    set setTipo(tipo) {
        this.tipo = tipo;
    }
    set setOcupado(ocupado) {
        this.ocupado = ocupado;
    }
    set setReservado(reservado) {
        this.reservado = reservado;
    }
}

export {Plaza};