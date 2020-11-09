class Ticket {

    fechaEntrada;
    matricula;
    plaza;
    coste;
    constructor(fechaEntrada, matricula, plaza) {
        this.fechaEntrada=fechaEntrada;
        this.nommatriculabre=matricula;
        this.plaza=plaza;
    }
    get getFechaEntrada(){
        return this.fechaEntrada;
    }
    set setFechaEntrada(fechaEntrada){
        this.fechaEntrada=fechaEntrada;
    }
    get getMatricula(){
        return this.matricula;
    }
    set setMatricula(matricula){
        this.matricula=matricula;
    }
    get getPlaza(){
        return this.plaza;
    }
    set setPlaza(plaza){
        this.plaza=plaza;
    }
    get getCoste(){
        return this.coste;
    }
    set setCoste(coste){
        this.coste=coste;
    }
}

export {Ticket};