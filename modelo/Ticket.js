class Ticket {

    fechaEntrada;
    fechaSalida;
    matricula;
    plaza;
    coste;
    pin;
    constructor(fechaEntrada, matricula, plaza) {
        this.fechaEntrada=fechaEntrada;
        this.nommatriculabre=matricula;
        this.plaza=plaza;
        this.coste = 0;
    }
    get getFechaEntrada(){
        return this.fechaEntrada;
    }
     setFechaEntrada(fechaEntrada){
        this.fechaEntrada=fechaEntrada;
    }
    get getFechaSalida(){
        return this.fechaSalida;
    }
     setFechaSalida(fechaSalida){
        this.fechaSalida=fechaSalida;
    }
    get getMatricula(){
        return this.matricula;
    }
     setMatricula(matricula){
        this.matricula=matricula;
    }
    get getPlaza(){
        return this.plaza;
    }
     setPlaza(plaza){
        this.plaza=plaza;
    }
    get getCoste(){
        return this.coste;
    }
     setCoste(coste){
        this.coste=coste;
    }
    get getPin(){
        return this.pin;
    }
     setPin(pin){
        this.pin=pin;
    }
}

export {Ticket};