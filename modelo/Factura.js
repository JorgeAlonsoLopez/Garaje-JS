class Factura {

    fecha;
    cliente;
    coste;
    constructor(fecha, cliente, coste) {
        this.fecha=fecha;
        this.cliente=cliente;
        this.coste=coste;
    }
    get getFecha(){
        return this.fecha;
    }
    set setFecha(fecha){
        this.fecha=fecha;
    }
    get getCliente(){
        return this.cliente;
    }
    set setCliente(cliente){
        this.cliente=cliente;
    }
    get getCoste(){
        return this.coste;
    }
    set setCoste(coste){
        this.coste=coste;
    }
}

export {Factura};