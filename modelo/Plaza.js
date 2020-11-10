class Plaza {
    nombre;
    tipo;
    ocupado;
    reservado;
    costeMin;
    vehiculo;
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
    get getCosteMin() {
        return this.costeMin;
    }
    set setCosteMin(costeMin) {
        this.costeMin = costeMin;
    }
    get getVehiculo() {
        return this.vehiculo;
    }
    set setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
}

export {Plaza};