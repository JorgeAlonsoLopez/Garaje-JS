class Abono {
    cliente;
    fechaInicial;
    fechaFinal;
    meses;
    precio;
    pin;
    plaza;
    constructor(cliente, fechaInicial, fechaFinal, meses, precio) {
        this.cliente=cliente;
        this.fechaInicial=fechaInicial;
        this.fechaFinal=fechaFinal;
        this.meses=meses;
        this.precio=precio;
        this.pin = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    }
    get getCliente(){
        return this.cliente;
    }
    set setCliente(cliente){
        this.cliente=cliente;
    }
    get getPin(){
        return this.pin;
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
    get getPlaza(){
        return this.plaza;
    }
    set setPlaza(plaza){
        this.plaza=plaza;
    }
}

export {Abono};