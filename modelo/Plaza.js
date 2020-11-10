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
     setTipo(tipo) {
        this.tipo = tipo;
    }
     setOcupado(ocupado) {
        this.ocupado = ocupado;
    }
     setReservado(reservado) {
        this.reservado = reservado;
    }
    get getCosteMin() {
        return this.costeMin;
    }
     setCosteMin(costeMin) {
        this.costeMin = costeMin;
    }
    get getVehiculo() {
        return this.vehiculo;
    }
     setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
}

export {Plaza};