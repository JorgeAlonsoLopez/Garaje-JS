class Vehiculo {
    duenyo;
    matricula;
    constructor(matricula) {
        this.matricula=matricula;
    }
    get getMatricula(){
        return this.matricula;
    }
     setMatricula(matricula){
        this.matricula=matricula;
    }
    get getDuenyo(){
        return this.duenyo;
    }
     setDuenyo(duenyo){
        this.duenyo=duenyo;
    }
}


export {Vehiculo};