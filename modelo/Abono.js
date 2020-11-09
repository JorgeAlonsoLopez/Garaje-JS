class Abono {
    cliente;
    fechaInicial;
    fechaFinal;
    meses;
    precio;
    constructor(cliente, fechaInicial, fechaFinal, meses, precio) {
        this.cliente=cliente;
        this.fechaInicial=fechaInicial;
        this.fechaFinal=fechaFinal;
        this.meses=meses;
        this.precio=precio;
    }
    get getCliente(){
        return this.cliente;
    }
    set setCliente(cliente){
        this.cliente=cliente;
    }
    get getFechaInicial(){
        return this.fechaInicial;
    }
    set setFechaInicial(fechaInicial){
        this.fechaInicial=fechaInicial;
    }
    get getFechaFinal(){
        return this.fechaFinal;
    }
    set setFechaFinal(fechaFinal){
        this.fechaFinal=fechaFinal;
    }
    get getMeses(){
        return this.meses;
    }
    set setMeses(meses){
        this.meses=meses;
    }
    get getPrecio(){
        return this.precio;
    }
    set setPrecio(precio){
        this.precio=precio;
    }
}

export {Abono};