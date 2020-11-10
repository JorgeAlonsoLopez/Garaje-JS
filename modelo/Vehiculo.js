class Vehiculo {
    duenyo;
    matricula;
    constructor(matricula) {
        this.matricula=matricula;
    }
    get getMatricula(){
        return this.matricula;
    }
    set setMatricula(matricula){
        this.matricula=matricula;
    }
    get getDuenyo(){
        return this.duenyo;
    }
    set setDuenyo(duenyo){
        this.duenyo=duenyo;
    }
}


export {Vehiculo};