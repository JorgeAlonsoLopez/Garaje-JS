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
     setFecha(fecha){
        this.fecha=fecha;
    }
    get getCliente(){
        return this.cliente;
    }
     setCliente(cliente){
        this.cliente=cliente;
    }
    get getCoste(){
        return this.coste;
    }
     setCoste(coste){
        this.coste=coste;
    }
}

export {Factura};