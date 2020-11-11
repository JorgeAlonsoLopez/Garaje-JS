export class Abono {
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
     setCliente(cliente){
        this.cliente=cliente;
    }
    get getPin(){
        return this.pin;
    }
    get getFechaInicial(){
        return this.fechaInicial;
    }
     setFechaInicial(fechaInicial){
        this.fechaInicial=fechaInicial;
    }
    get getFechaFinal(){
        return this.fechaFinal;
    }
     setFechaFinal(fechaFinal){
        this.fechaFinal=fechaFinal;
    }
    get getMeses(){
        return this.meses;
    }
     setMeses(meses){
        this.meses=meses;
    }
    get getPrecio(){
        return this.precio;
    }
     setPrecio(precio){
        this.precio=precio;
    }
    get getPlaza(){
        return this.plaza;
    }
     setPlaza(plaza){
        this.plaza=plaza;
    }
}
